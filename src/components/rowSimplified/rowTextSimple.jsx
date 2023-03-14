import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function RowTextSimple({
  text = "Text",
  otherText = "Other text",
  md = 2,
}) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={md}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h7">{text}</Typography>
      </Grid>
      <Grid item xs={12} md={12 - md}>
        <Typography variant="h7">{otherText}</Typography>
      </Grid>
    </Grid>
  );
}
