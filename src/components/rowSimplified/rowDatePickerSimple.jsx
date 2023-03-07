import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export default function RowDatePickerSimple({
  md = 2,
  text = "Text",
  dateValue = "",
  dateOnChange = (e) => console.log("undefined"),
  datePickerLength = 300, // "-webkit-fill-available" for fullWidth
  isValidate = false,
  errorMessage = "Please select a date.",
}) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={md}
        sx={{
          mt: 1,
        }}
      >
        <Typography variant="h7">{text}</Typography>
      </Grid>
      <Grid item xs={12} md={12 - md}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            value={dateValue}
            disablePast
            views={["year", "month", "day"]}
            onChange={dateOnChange}
            renderInput={(params) => (
              <TextField
                size="small"
                sx={{ width: datePickerLength, my: 1 }}
                error={isValidate && dateValue == ""}
                helperText={isValidate && dateValue == "" ? errorMessage : ""}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}
