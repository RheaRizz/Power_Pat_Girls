const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const pool = require("./database");
const multer = require("multer");

const app = express();
const port = 5000;

// TO BE IMPLEMENTED FOR IMAGE SAVING
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });

app.use(
	session({
		secret: "secret key",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true, httpOnly: true },
	})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../IMAGES")));
app.use(express.static(path.join(__dirname, "../views")));
app.use(
	express.static(path.join(__dirname, "../Homepage/home/src/components/pages"))
);

//ROUTES//
app.post("/create-account", async (req, res) => {
	const {
		newUserFirstName,
		newUserLastName,
		newUserEmail,
		newPassword,
		userType,
	} = req.body;
	const hashedPassword = await bcrypt.hash(newPassword, 10);
	const newUser = {
		newUserFirstName,
		newUserLastName,
		newUserEmail,
		userPassword: hashedPassword,
		userType,
	};

	const insert =
		"INSERT INTO users (firstname, lastname, email, password, type) VALUES ($1, $2, $3, $4, $5) RETURNING id";

	const values = [
		newUser.newUserFirstName,
		newUser.newUserLastName,
		newUser.newUserEmail,
		newUser.userPassword,
		newUser.userType,
	];

	try {
		const result = await pool.query(insert, values);

		let redirectURL;
		if (newUser.userType == "patient") {
			req.session.userId = result.rows[0].id;
			req.session.newUserFirstName = newUserFirstName;
			req.session.newUserLastName = newUserLastName;
			redirectURL = "/patient-personal_info";
		} else if (newUser.userType == "doctor") {
			req.session.userId = result.rows[0].id;
			req.session.newUserFirstName = newUserFirstName;
			req.session.newUserLastName = newUserLastName;
			redirectURL = "/doctor-personal_info";
		}
		res.redirect(redirectURL);
	} catch (err) {
		res.status(500).json({
			message: "An error occured in creating account: " + err.message,
		});
	}
});

app.post("/patient-personal_info", async (req, res) => {
	const {
		gender,
		birthday,
		phone,
		province,
		city_municipality,
		barangay,
		postal,
	} = req.body;
	const userId = req.session.userId;
	const firstName = req.session.newUserFirstName;
	const lastName = req.session.newUserLastName;
	const newPatient = [
		firstName,
		lastName,
		gender,
		birthday,
		phone,
		province,
		city_municipality,
		barangay,
		postal,
		userId,
	];

	const patientQuery =
		"INSERT INTO patients (firstname, lastname, gender, birthday, phone, province, city_municipality, barangay, postal, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

	try {
		await pool.query(patientQuery, newPatient);

		res.sendFile(path.join(__dirname, "../views", "success.html"));
	} catch (err) {
		res.status(401).json({ message: "patient-info error: " + err.message });
	}
});

app.post("/doctor-personal_info", async (req, res) => {
	const { degree_title_designation, year_started, specialties } = req.body;
	const userId = req.session.userId;
	const firstName = req.session.newUserFirstName;
	const lastName = req.session.newUserLastName;
	const newDoctor = [
		firstName,
		lastName,
		degree_title_designation,
		year_started,
		specialties,
		userId,
	];

	const doctorQuery =
		"INSERT INTO doctors (firstname, lastname, degree_title_designation, year_started, specialties, user_id) VALUES ($1, $2, $3, $4, $5, $6)";
	try {
		await pool.query(doctorQuery, newDoctor);
		res.redirect("/doctor-validation");
	} catch (err) {
		res.status(401).json({ message: "doctor-info error: " + err.message });
	}
});

app.post("/doctor-validation", upload.single("pic"), async (req, res) => {
	const { prc, birthday, type, expDate, pic } = req.body;
	const userId = req.session.userId;
	const doctorValidation = [
		prc,
		birthday,
		type,
		expDate,
		req.file.path,
		userId,
	];

	const validationQuery =
		"UPDATE doctors SET prc = $1, birthday = $2, licensetype = $3, expDate = $4, pic = $5 WHERE user_id = $6";

	try {
		await pool.query(validationQuery, doctorValidation);
		res.redirect("/doctor-med_institution");
	} catch (err) {
		res.status(401).json({ message: "validation error: " + err.message });
	}
});

app.post("/doctor-med_institution", async (req, res) => {
	const institution = req.body.institution;
	const userId = req.session.userId;
	const isntitutionQuery =
		"UPDATE doctors SET institution = $1 WHERE user_id = $2";
	const values = [institution, userId];

	try {
		await pool.query(isntitutionQuery, values);
		req.session.institution = institution;

		let redirectURL;
		if (institution == "hospital") {
			redirectURL = "/doctor-hospital";
		} else if (institution == "clinic") {
			redirectURL = "/doctor-clinic";
		}

		res.redirect(redirectURL);
	} catch (err) {
		res.status(401).json({ message: "med-institution error: " + err.message });
	}
});

app.post("/doctor-hospital", async (req, res) => {
	const { name, accreditation, location, address, postal } = req.body;
	const userId = req.session.userId;
	const type = req.session.institution;
	const hospitalQuery =
		"INSERT INTO med_institutions (user_id, name, type, accreditation, location, address, postal) VALUES ($1, $2, $3, $4, $5, $6, $7)";
	const newHospital = [
		userId,
		name,
		type,
		accreditation,
		location,
		address,
		postal,
	];

	try {
		await pool.query(hospitalQuery, newHospital);

		res.redirect("/doctor-schedule");
	} catch (err) {
		res.status(401).json({ message: "hospital error: " + err.message });
	}
});

app.post("/doctor-clinic", async (req, res) => {
	const { name, accreditation, location, address, postal } = req.body;
	const userId = req.session.userId;
	const type = req.session.institution;

	const clinicQuery =
		"INSERT INTO med_institutions (name, user_id, type, accreditation, location, address, postal) VALUES ($1, $2, $3, $4, $5, $6, $7)";

	const newClinic = [
		name,
		userId,
		type,
		accreditation,
		location,
		address,
		postal,
	];

	try {
		await pool.query(clinicQuery, newClinic);

		res.redirect("/doctor-schedule");
	} catch (err) {
		res.status(401).json({ message: err.message });
	}
});

app.post("/doctor-schedule", async (req, res) => {
	const { consultationFee, days, timeSlots } = req.body;
	const userId = req.session.userId;

	const scheduleQuery =
		"INSERT INTO schedules (user_id, consultationfee, days, timeslots) VALUES ($1, $2, $3, $4)";
	const scheduleValues = [userId, consultationFee, days, timeSlots];

	try {
		await pool.query(scheduleQuery, scheduleValues);

		res.sendFile(path.join(__dirname, "../views", "success.html"));
	} catch (err) {
		res.status(401).json({ message: err.message });
	}
});

app.post("/success", (res) => {
	res.sendFile(path.join(__dirname, "../views", "login.html"));
});

app.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const { rows: users } = await pool.query(
		"SELECT * FROM users WHERE email = $1",
		[email]
	);
	const user = users[0];

	if (user !== undefined) {
		if (password && user.password) {
			const passwordMatch = await bcrypt.compare(password, user.password);
			if (passwordMatch) {
				req.session.userId = user.id;
				req.session.userType = user.type;

				if (req.session.userType === "doctor") {
					res.redirect("/doctor-dashboard");
				} else if (req.session.userType === "patient") {
					res.redirect("/Home-page");
				}
			} else {
				res.status(401).json({ message: "Invalid password" });
			}
		} else {
			res.status(401).json({ message: "Password is required" });
		}
	} else {
		res.status(401).json({ message: "User not found" });
	}
});

app.post("/booking-request", async (req, res) => {
	const [] = req.body;
	const bookingQuery = "";

	const bookingValues = [];

	try {
		await pool.query(bookingQuery, bookingValues);
	} catch (err) {
		res.status(403).json({ message: "Error booking request" + err.message });
	}
});

app.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "../views", "log_in.html"));
});

app.get("/create-account", (req, res) => {
	res.sendFile(path.join(__dirname, "../views", "create-acc.html"));
});

app.get("/patient-personal_info", (req, res) => {
	res.sendFile(path.join(__dirname, "../views", "patient-personal_info.html"));
});

app.get("/doctor-personal_info", (req, res) => {
	res.sendFile(path.join(__dirname, "../views", "doctor-personal_info.html"));
});

app.get("/doctor-validation", (req, res) => {
	res.sendFile(path.join(__dirname, "../views", "doctor-validation.html"));
});

app.get("/doctor-med_institution", (req, res) => {
	res.sendFile(path.join(__dirname, "../views", "doctor-med_institution.html"));
});

app.get("/doctor-hospital", (req, res) => {
	res.sendFile(path.join(__dirname, "../views", "doctor-hospital.html"));
});

app.get("/doctor-clinic", (req, res) => {
	res.sendFile(path.join(__dirname, "../views", "doctor-clinic.html"));
});

app.get("/doctor-schedule", (req, res) => {
	res.sendFile(path.join(__dirname, "../views", "doctor-schedule.html"));
});

function checkDoctor(req, res, next) {
	if (req.session.userType === "doctor") {
		next();
	} else {
		res.status(403).json({ message: "Access denied" });
	}
}

function checkPatient(req, res, next) {
	if (req.session.userType === "patient") {
		next();
	} else {
		res.status(403).json({ message: "Access denied" });
	}
}

app.get("/profile", checkDoctor, async (req, res) => {
	const userId = req.session.userId;
	const doctorQuery =
		"SELECT doctors.*, med_institutions.* FROM doctors JOIN med_institutions ON doctors.user_id = med_institutions.user_id WHERE doctors.user_id = $1";

	try {
		const result = await pool.query(doctorQuery, [userId]);
		res.json(result.rows[0]);
	} catch (err) {
		res.status(401).json({ message: "Error " + err.message });
	}
});

app.get("/Profile-page", checkPatient, async (req, res) => {
	const profileQuery = "SELECT * FROM patients WHERE user_id = $1";
	const userId = req.session.userId;

	try {
		const result = await pool.query(profileQuery, [userId]);
		res.json(result.rows[0]);
	} catch (err) {
		res.status(401).json({ message: "Error" + err.message });
	}
});

app.post("/logout", (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			res.status(500).json({ message: "Error logging out" });
		} else {
      res.redirect('/login');
    }
	});
});

app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
