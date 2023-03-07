import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CloudUpload from "@mui/icons-material/CloudUpload";
import CloudDownload from "@mui/icons-material/CloudDownload";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function RowSelectFileSimple({
  text = "File",
  accept = ".jpg, .jpeg, .png, .pdf",
  handleFileInput = (e) => console.log("undefined"),
  md = 2,
}) {
  return (
    <Grid container sx={{ my: 1 }}>
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
        <FormControl
          disabled={disabled}
          variant="outlined"
          size="small"
          sx={{ width: textFieldLength, my: 1 }}
        >
          <OutlinedInput
            type={type}
            startAdornment={startAdornment}
            endAdornment={endAdornment}
            value={textFieldValue}
            onChange={textFieldOnChange}
          />
          <FormHelperText>
            <Typography variant="formHelperText" color="error">
              {isValidate && textFieldValue == "" ? errorMessage : ""}
            </Typography>
          </FormHelperText>
        </FormControl>
        <input accept={accept} type="file" onChange={handleFileInput} />
      </Grid>
    </Grid>
  );
}
