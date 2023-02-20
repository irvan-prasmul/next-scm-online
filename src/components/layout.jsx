import * as React from "react";
import { responsiveFontSizes, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Home,
  QuestionMark,
  ShoppingCart,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material/";
import Grid from "@mui/material/Unstable_Grid2";
// import roles from "./roles";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Layout({ children }) {
  //   const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const [roleMenus, setRolesMenu] = React.useState([
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
    {
      href: "/fpb",
      name: "FPB",
      icon: "Cart",
    },
    {
      name: "Master",
      icon: "mdi-dropbox",
      isOpen: false,
      child: [
        {
          icon: "mdi-package-variant-closed",
          name: "Material",
          isOpen: false,
          child: [
            {
              href: "/material/head",
              name: "Material Head",
              icon: "mdi-circle-outline",
            },
            {
              href: "/material/det",
              name: "Material Det",
              icon: "mdi-circle-outline",
            },
            {
              href: "/material/type",
              name: "Material Type",
              icon: "mdi-circle-outline",
            },
            {
              href: "/material/group",
              name: "Material Group",
              icon: "mdi-circle-outline",
            },
          ],
        },
        {
          href: "/department",
          name: "Department",
          icon: "mdi-share",
        },
      ],
    },
  ]);

  const handleClickMenu = (menu) => {
    console.log(menu);
  };

  const handleOpenSubmenu = (menu) => {
    menu.isOpen = !menu.isOpen;
    const tempMenu = [...roleMenus];
    setRolesMenu(tempMenu);
  };

  const generateIcon = (icon) => {
    switch (icon) {
      case "Home":
        return <Home sx={{ color: "#c2c7d0" }} />;
      case "Cart":
        return <ShoppingCart sx={{ color: "#c2c7d0" }} />;
      default:
        return <QuestionMark sx={{ color: "#c2c7d0" }} />;
    }
  };

  const generateMenus = (menu) => {
    if (menu.child) {
      return (
        <ListItem key={menu.name} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            id="sidebar-child-selected"
            selected={menu.isOpen}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => handleOpenSubmenu(menu)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {generateIcon(menu.icon)}
            </ListItemIcon>
            <ListItemText primary={menu.name} sx={{ opacity: open ? 1 : 0 }} />
            {open ? menu.isOpen ? <ExpandLess /> : <ExpandMore /> : <></>}
          </ListItemButton>
          <Collapse in={menu.isOpen} timeout="auto" unmountOnExit>
            <List component="div" sx={{ pl: 1 }}>
              {menu.child.map((menu, index) => {
                console.log(index, menu);
                return generateMenus(menu);
              })}
            </List>
          </Collapse>
        </ListItem>
      );
    } else {
      console.log(menu);
      return (
        <ListItem key={menu.name} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => handleClickMenu(menu)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {generateIcon(menu.icon)}
            </ListItemIcon>
            <ListItemText primary={menu.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid xs="auto">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid xs></Grid>
            <Grid xs="auto">
              <Typography variant="h6" noWrap component="div">
                Avatar here
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            color: "#c2c7d0",
            backgroundColor: "#343a40",
          },
        }}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            component="div"
            sx={{
              fontWeight: "300",
              fontSize: "24px",
              color: "#808081",
              fontFamily: "Impact",
            }}
          >
            SCM ONLINE
          </Typography>
        </DrawerHeader>
        <Divider sx={{ backgroundColor: "#c2c7d0" }} />
        <List>
          {roleMenus.map(
            (menu, index) => {
              console.log(index, menu);
              return generateMenus(menu);
            }
            // <ListItem key={text} disablePadding sx={{ display: "block" }}>
            //   <ListItemButton
            //     sx={{
            //       minHeight: 48,
            //       justifyContent: open ? "initial" : "center",
            //       px: 2.5,
            //     }}
            //     onClick={() => handleClickMenu(text)}
            //   >
            //     <ListItemIcon
            //       sx={{
            //         minWidth: 0,
            //         mr: open ? 3 : "auto",
            //         justifyContent: "center",
            //       }}
            //     >
            //       {text == "Home" ? (
            //         <Home sx={{ color: "#c2c7d0" }} />
            //       ) : text == "FPB" ? (
            //         <ShoppingCart sx={{ color: "#c2c7d0" }} />
            //       ) : (
            //         <QuestionMark sx={{ color: "#c2c7d0" }} />
            //       )}
            //     </ListItemIcon>
            //     <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            //   </ListItemButton>
            // </ListItem>
          )}
          {/* <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Home sx={{ color: "#c2c7d0" }} />
              </ListItemIcon>
              <ListItemText primary={"Home"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem> */}
        </List>
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <main>{children}</main>
      </Box>
    </Box>
  );
}
