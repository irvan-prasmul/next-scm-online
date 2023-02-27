import * as React from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
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
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Home,
  QuestionMark,
  ShoppingCart,
  ExpandLess,
  ExpandMore,
  Shortcut,
} from "@mui/icons-material/";
import DropboxIcon from "mdi-react/DropboxIcon";
import TableIcon from "mdi-react/TableIcon";
import NewspaperVariantMultipleOutlineIcon from "mdi-react/NewspaperVariantMultipleOutlineIcon";
import PackageVariantClosedIcon from "mdi-react/PackageVariantClosedIcon";
import CircleOutlineIcon from "mdi-react/CircleOutlineIcon";
import ChartAreasplineVariantIcon from "mdi-react/ChartAreasplineVariantIcon";
import ArrowTopRightBoldBoxIcon from "mdi-react/ArrowTopRightBoldBoxIcon";
import { roles } from "./roles";
import { useSelector, useDispatch } from "react-redux";

const drawerWidth = 256;
const closedWidth = 65;

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

const generateIcon = (icon) => {
  switch (icon) {
    case "Home":
      return <Home className="sidebar-icon" />;
    case "ShoppingCart":
      return <ShoppingCart className="sidebar-icon" />;
    case "Shortcut":
      return <Shortcut className="sidebar-icon" />;
    case "DropboxIcon":
      return <DropboxIcon className="sidebar-icon" />;
    case "TableIcon":
      return <TableIcon className="sidebar-icon" />;
    case "NewspaperVariantMultipleOutlineIcon":
      return <NewspaperVariantMultipleOutlineIcon className="sidebar-icon" />;
    case "PackageVariantClosedIcon":
      return <PackageVariantClosedIcon className="sidebar-icon" />;
    case "CircleOutlineIcon":
      return <CircleOutlineIcon className="sidebar-icon" />;
    case "ChartAreasplineVariantIcon":
      return <ChartAreasplineVariantIcon className="sidebar-icon" />;
    case "ArrowTopRightBoldBoxIcon":
      return <ArrowTopRightBoldBoxIcon className="sidebar-icon" />;
    default:
      return <QuestionMark className="sidebar-icon" />;
  }
};

export default function Layout({ children }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const router = useRouter();
  const [roleMenus, setRolesMenu] = React.useState([...roles.Requester]);
  const handleClickMenu = (menu) => {
    router.replace(menu.href);
  };
  const handleOpenSubmenu = (menu) => {
    menu.isOpen = !menu.isOpen;
    const tempMenu = [...roleMenus];
    setRolesMenu(tempMenu);
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
                return generateMenus(menu);
              })}
            </List>
          </Collapse>
        </ListItem>
      );
    } else {
      return (
        <ListItem key={menu.name} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            selected={menu.href == router.pathname}
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

  React.useEffect(() => {
    if (!auth.isAuth) router.replace("/auth/login");
    if (auth.userToken == "") {
      // CALL GET USER DATA API
      dispatch({
        type: "setAuth",
        payload: {
          userToken: "dummy token",
          userName: "Login name",
        },
      });
    }
  }, [router, auth, dispatch]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="lightBg" position="fixed" open={open}>
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
        <List id="main-drawer">
          {roleMenus.map((menu, index) => {
            return generateMenus(menu);
          })}
        </List>
      </Drawer>
      <Box
        sx={{
          flex: 1,
          maxWidth: {
            sm: `calc(100% - ${open ? drawerWidth : closedWidth}px)`,
          },
          ...(!open && {
            // transform: "scaleX(calc(100% - ${closedWidth}px)",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }),
        }}
      >
        <Paper variant="outlined" elevation={0} square className="main-box">
          {children}
        </Paper>
      </Box>
    </Box>
  );
}
