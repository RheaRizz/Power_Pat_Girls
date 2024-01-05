import React from "react";

export function Logout() {
	const handleLogout = async () => {
		try {
			const response = await fetch("http://localhost:5000/logout", {
				method: "POST",
				credentials: "include", //include cookies in the request
			});

			if (response.ok) {
				window.location.href = "http://localhost:5000/login";   
			} else {
				throw new Error("Failed to logout");
			}
		} catch (error) {
			console.error(error);
		}
	};
    <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
