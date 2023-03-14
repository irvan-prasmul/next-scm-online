import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
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
  whiteBackground = false,
  offset = 0,
  disablePast = true,
}) {
  return (
    <Grid container>
      <Grid item xs={0} md={offset} />
      <Grid item xs={12} md={md} style={{ marginTop: 16 }}>
        <Typography variant="h7">{text}</Typography>
      </Grid>
      <Grid item xs={12} md={12 - md - offset}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            value={dateValue}
            disablePast={disablePast}
            className={whiteBackground ? "form-white-backgound" : null}
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
