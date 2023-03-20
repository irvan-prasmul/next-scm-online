import Head from "next/head";
import Image from "next/image";
import profilePic from "/public/logo-prasetiyamulya.png";
import React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Unstable_Grid2";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSelector, useDispatch } from "react-redux";
import { testApi } from "../api/global";
import { login } from "../api/auth";
import { setAuth } from "@/globals/slices";

function Login() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [emailSelect, setEmailSelect] = React.useState("@prasetiyamulya.ac.id");
  const handleEmailSelect = (event) => {
    setEmailSelect(event.target.value);
  };
  const [email, setEmail] = React.useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = React.useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const router = useRouter();
  const userLogin = () => {
    console.log("NEXT_PUBLIC_BASE_URL env:", process.env.NEXT_PUBLIC_BASE_URL);
    // login({ email: "no-reply@pmbs.ac.id", password: "Pr@smul1234" })
    //   .then((res) => {
    //     console.log("login res:", res);
    //     dispatch(
    //       setAuth({
    //         userToken: res.data.access_token,
    //         userName: res.data.name,
    //       })
    //     );
    //     router.replace("/home/dashboard");
    //   })
    //   .catch((e) => {
    //     console.log("error login:", e);
    //   });
    dispatch(
      setAuth({
        userToken: "res.data.access_token",
        userName: "test name",
      })
    );
    router.replace("/home/dashboard");
  };

  return (
    <>
      <Head>
        <title>Login - SCM</title>
      </Head>
      {/* <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div> */}
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
                    onClick={userLogin}
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
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/microsoft-azure.svg`}
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

Login.layout = "none";

export default Login;
