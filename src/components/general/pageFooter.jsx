import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PageFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        p: 2,
      }}
    >
      <Typography variant="h7">Copyright © 2023</Typography>
      &nbsp;
      <Typography variant="h7" color="primaryButton.main">
        SCM Online Prasetiya Mulya V-4.0.
      </Typography>
      &nbsp;
      <Typography variant="bodyCst1">All rights reserved.</Typography>
    </Box>
  );
}
