import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function RowButtonSimple({
  text = "New",
  buttonText = "Add New",
  buttonIcon = <Add sx={{ mr: 1 }} />,
  buttonOnClick = (e) => console.log("undefined"),
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
        <Button
          variant="contained"
          color="primaryButton"
          sx={{
            display: "flex",
            alignItems: "center",
            my: 1,
          }}
          onClick={buttonOnClick}
        >
          {buttonIcon} {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
}
