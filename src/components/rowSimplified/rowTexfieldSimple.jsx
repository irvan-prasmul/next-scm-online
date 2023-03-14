import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function RowTextFieldSimple({
  md = 2,
  text = "text",
  textFieldValue = "",
  textFieldOnChange = (e) => console.log("undefined"),
  textFieldLength = 300, // "-webkit-fill-available" for fullWidth
  disabled = false,
  isValidate = false,
  type = "text",
  errorMessage = "Please fill out this field.",
  startAdornment = <></>,
  endAdornment = <></>,
  accept = ".jpg, .jpeg, .png, .pdf",
  multiline = false,
  rows = 3,
  placeholder = "",
  fullWidth = false,
  offset = 0,
  whiteBackground = false,
  controlled = false,
  // errorCondition =
}) {
  return (
    <Grid container>
      <Grid item xs={0} md={offset} />
      <Grid item xs={12} md={md} style={{ marginTop: 16 }}>
        <Typography variant="h7">{text}</Typography>
      </Grid>
      <Grid item xs={12} md={12 - md - offset}>
        <FormControl
          disabled={disabled}
          variant="outlined"
          className={whiteBackground ? "form-white-backgound" : null}
          size="small"
          error={isValidate && textFieldValue == ""}
          sx={{
            width: fullWidth ? "-webkit-fill-available" : textFieldLength,
            my: 1,
          }}
        >
          <OutlinedInput
            multiline={multiline}
            rows={rows}
            startAdornment={startAdornment}
            endAdornment={endAdornment}
            value={controlled ? textFieldValue : undefined}
            defaultValue={controlled ? undefined : textFieldValue}
            placeholder={placeholder}
            onChange={textFieldOnChange}
            inputProps={{ type: type, accept: accept }}
          />
          <FormHelperText>
            <Typography variant="formHelperText" color="error">
              {isValidate && textFieldValue == "" ? errorMessage : ""}
            </Typography>
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}
