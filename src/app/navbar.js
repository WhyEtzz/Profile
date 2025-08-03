"use client"
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function Nav() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="https://instagram.com/_x.essz" color="#fafafa" underline="none">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText primary={"Instagram"} />
            </ListItemButton>
            </ListItem>
            </Link>
            <Link href="https://www.facebook.com/whyichi" color="#fafafa" underline="none">
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary={"Facebook"} />
            </ListItemButton>
            </ListItem>
            </Link>
            <Link href="https://github.com/WhyEtzz" color="#fafafa" underline="none">
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary={"All my project here"} />
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
    </Box>
  );
  
  return (
    <>

    
    <header className="bg-transparent text-white sticky top-0 z-40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-2">
          <a href="#" className="-m-1.5 p-1.5">
            <div className="flex flex-row gap-x-3 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 hover:skew-y-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              <span className="font-semibold">Mochammad Ekhi Setiawan</span>
            </div>
          </a>
        </div>

        <div className="flex lex-1 justify-end">
          <a
            
            className="text-sm/6 font-semibold cursor-pointer"
            onClick={toggleDrawer("right", true)}
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
          </ThemeProvider>
    </>
 )
}