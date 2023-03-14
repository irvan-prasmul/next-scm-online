import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import SearchRounded from "@mui/icons-material/SearchRounded";

export default function RowSearchList({
  md = 2,
  text = "text",
  textFieldValue = "",
  textFieldOnChange = (e) => console.log("undefined"),
  textFieldLength = 300,
  disabled = false,
  isValidate = false,
  type = "text",
  errorMessage = "Please fill out this field.",
  startAdornment = <></>,
  endAdornmentAction = (e) => console.log("undefined"),
  accept = ".jpg, .jpeg, .png, .pdf",
  multiline = false,
  rows = 3,
  placeholder = "",
  fullWidth = false,
  searchNote = "",
}) {
  return (
    <Grid container>
      <Grid item xs={12} md={md} style={{ marginTop: 16 }}>
        <Typography variant="h7">{text}</Typography>
      </Grid>
      <Grid item xs={12} md={12 - md}>
        <FormControl
          disabled={disabled}
          variant="outlined"
          size="small"
          sx={{
            width: fullWidth ? "-webkit-fill-available" : textFieldLength,
            my: 1,
          }}
        >
          <OutlinedInput
            multiline={multiline}
            rows={rows}
            defaultValue={textFieldValue}
            placeholder={placeholder}
            onChange={textFieldOnChange}
            inputProps={{ type: type, accept: accept }}
            startAdornment={startAdornment}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={endAdornmentAction}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <SearchRounded />
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>
            <Typography variant="bodyTable1" color="error">
              {searchNote}
            </Typography>
            <br />
            <Typography variant="formHelperText" color="error">
              {isValidate && textFieldValue == "" ? errorMessage : ""}
            </Typography>
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}
