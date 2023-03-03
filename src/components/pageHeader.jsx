import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function PageHeader({ icon, title }) {
  return (
    <>
      <Box
        sx={{
          pt: 1,
          pl: 2,
          pb: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
        <Typography variant="h6" sx={{ marginLeft: "3px" }}>
          {title}
        </Typography>
      </Box>
      <Divider />
    </>
  );
}
