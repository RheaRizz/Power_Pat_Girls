import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import DvrIcon from '@mui/icons-material/Dvr';

export const SidebarData = [
	{
		title: "Home",
    icon: <HomeIcon />,
    link: "/Home-page"    
	},
	{
		title: "Profile",
    icon: <PersonIcon />,
    link: "/Profile-page"    
	},
	{
		title: "Appointment",
    icon: <BookOnlineIcon />,
    link: "/Appointment-records"
  },
	{
		title: "Medical Records",
    icon: <DvrIcon />,
    link: "/medical-records"
	} 
]