import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
	{
		title: "Home",
    icon: <HomeIcon />,
    link: "/home"    
	},
	{
		title: "Profile",
    icon: <PersonIcon />,
    link: "/user-profile-page"    
	},
	{
		title: "Appointment",
    icon: <BookOnlineIcon />,
    link: "/appointments"
  },
	{
		title: "Log Out",
    icon: <LogoutIcon />,
    link: "/"
	} 
]