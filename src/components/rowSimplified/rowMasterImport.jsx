import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CloudUpload from "@mui/icons-material/CloudUpload";
import CloudDownload from "@mui/icons-material/CloudDownload";
import TextField from "@mui/material/TextField";

export default function RowMasterImport({
  text = "Import",
  accept = ".xslx, .csv",
  buttonText1 = "Import",
  handleButton1 = (e) => console.log("import"),
  buttonIcon1 = <CloudUpload sx={{ mr: 1 }} />,
  buttonText2 = "Download Template",
  handleButton2 = (e) => console.log("Download Template"),
  buttonIcon2 = <CloudDownload sx={{ mr: 1 }} />,
  handleFileInput = (e) => console.log("undefined"),
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
      <Grid
        item
        xs={12}
        md="auto"
        sx={{ pr: 2, display: "flex", alignItems: "center" }}
      >
        <TextField
          size="small"
          variant="outlined"
          inputProps={{
            type: "file",
            accept: accept,
            onChange: handleFileInput,
          }}
        />
      </Grid>
      <Grid item xs={12} md="auto">
        <Button
          variant="contained"
          color="primaryButton"
          size="small"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleButton1}
        >
          {buttonIcon1} {buttonText1}
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md="auto"
        sx={{
          display: "flex",
          alignItems: "center",
          px: 1,
        }}
      >
        <Typography variant="h7"> OR </Typography>
      </Grid>
      <Grid item xs={12} md>
        <Button
          variant="contained"
          color="secondaryButton"
          size="small"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleButton2}
        >
          {buttonIcon2} {buttonText2}
        </Button>
      </Grid>
    </Grid>
  );
}
