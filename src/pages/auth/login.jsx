import Head from "next/head";
import Image from "next/image";
import profilePic from "/public/logo-prasetiyamulya.png";
import React from "react";
import { useRouter } from "next/router";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  MenuItem,
  Button,
  IconButton,
  FormControl,
  Select,
  Box,
  InputAdornment,
  InputLabel,
  Input,
} from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";
import {
  EmailOutlined,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material/";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [emailSelect, setEmailSelect] = React.useState("@prasetiyamulya.ac.id");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSelect = (event) => {
    setEmailSelect(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const router = useRouter();
  const login = () => {
    dispatch({
      type: "setAuth",
      payload: {
        userToken: "dummy token",
        userName: "Login name",
      },
    });
    router.replace("/home/dashboard");
  };

  return (
    <>
      <Head>
        <title>Login - SCM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ width: 600 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={profilePic}
                    alt="logo"
                    className="login-logo"
                    priority
                  />
                </Grid>
                <Grid
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#1d256a" }}
                  >
                    SCM ONLINE
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ pt: 2 }}>
                <Grid xs={5} xsOffset={1}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <EmailOutlined
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      required
                      value={email}
                      label="Email"
                      variant="standard"
                      onChange={handleEmail}
                    />
                  </Box>
                </Grid>
                <Grid xs={5} display="flex">
                  <FormControl
                    variant="standard"
                    sx={{ width: "100%" }}
                    display="flex"
                    margin="normal"
                  >
                    <Select value={emailSelect} onChange={handleEmailSelect}>
                      <MenuItem value={"@prasetiyamulya.ac.id"}>
                        @prasetiyamulya.ac.id
                      </MenuItem>
                      <MenuItem value={"@pmbs.ac.id"}>@pmbs.ac.id</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ pt: 2 }}>
                <Grid xs={10} xsOffset={1}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <LockOutlined
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <FormControl variant="standard" fullWidth>
                      <InputLabel>Password</InputLabel>
                      <Input
                        value={password}
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        onChange={handlePassword}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              <Grid container sx={{ pt: 5, mx: 1, mb: 0, pb: 0 }}>
                <Grid xs={12} sx={{ mb: 0, pb: 0 }}>
                  <Button
                    onClick={login}
                    variant="contained"
                    fullWidth
                    color="primary"
                    sx={{ borderRadius: "100px" }}
                  >
                    SIGN IN
                  </Button>
                </Grid>
                <Grid xs={12} sx={{ pt: 0, mt: 0 }}>
                  <Button
                    variant="text"
                    size="small"
                    color="error"
                    sx={{
                      p: 0,
                      m: 0,
                      pl: 1,
                      textTransform: "unset !important",
                    }}
                  >
                    <i>Forgot password?</i>
                  </Button>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid xs={3} sx={{ py: 1 }}>
                  <hr />
                </Grid>
                <Grid xs="auto" sx={{ py: 0 }}>
                  <Typography variant="body2">OR</Typography>
                </Grid>
                <Grid xs={3} sx={{ py: 1 }}>
                  <hr />
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid xs="auto">
                  <Button
                    variant="contained"
                    fullWidth
                    color="info"
                    startIcon={
                      <Image
                        src="/next-scm/microsoft-azure.svg"
                        alt="azure"
                        width={24}
                        height={24}
                      />
                    }
                    sx={{ textTransform: "unset !important" }}
                  >
                    Microsoft sign in
                  </Button>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" sx={{ pt: 5 }}>
                <Grid xs="auto">
                  <Typography
                    variant="span"
                    color="#1ba0ea"
                    fontFamily="sans-serif"
                  >
                    Copyright © Prasetiya Mulya
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}
