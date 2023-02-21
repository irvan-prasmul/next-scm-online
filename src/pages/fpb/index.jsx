import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { useRouter } from "next/router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Add, ShoppingCart } from "@mui/icons-material";

export default function Fpb() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const [statusSelect, setStatusSelect] = React.useState("All");

  const handleStatusSelect = (event) => {
    setStatusSelect(event.target.value);
  };
  //   useEffect(() => {
  //     console.log(`Component mounted`);
  //     router.replace("/auth/login");
  //   }, [router]);
  return (
    <>
      <Head>
        <title>FPB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <Box
        sx={{
          pt: 1,
          pl: 2,
          pb: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <ShoppingCart />
        <Typography variant="h6">FPB Dashboard (Non-Stock)</Typography>
      </Box>
      <Divider />
      <Grid container sx={{ p: 2 }}>
        <Grid
          xs="1"
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h6">FPB</Typography>
        </Grid>
        <Grid xs="11">
          <Button
            variant="contained"
            color="primaryAlt"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Add sx={{ pr: 1 }} /> Create New
          </Button>
        </Grid>
        <Grid
          xs="1"
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h6">Status</Typography>
        </Grid>
        <Grid xs="11">
          <FormControl
            variant="outlined"
            size="small"
            margin="normal"
            sx={{ width: "300px" }}
          >
            <Select value={statusSelect} onChange={handleStatusSelect}>
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Waiting for Approval"}>
                Waiting for Approval
              </MenuItem>
              <MenuItem value={"Approved"}>Approved</MenuItem>
              <MenuItem value={"Rejected"}>Rejected</MenuItem>
              <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
