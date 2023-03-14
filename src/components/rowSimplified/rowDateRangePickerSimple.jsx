import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import moment from "moment/moment";
import React from "react";
import Collapse from "@mui/material/Collapse";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";

export default function RowDateRangePickerSimple({
  md = 2,
  calendarMd = 2,
  text = "Text",
  dateValue = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
  dateOnChange = (ranges) => {
    console.log("ranges");
  },
  textFieldLength = 300,
  textFieldFullWidth = false,
  isValidate = false,
  errorMessage = "Please select a date.",
}) {
  const [open, setOpen] = React.useState(false);
  const [dateDisplay, setDateDisplay] = React.useState("");
  React.useEffect(() => {
    setDateDisplay(
      moment(dateValue[0].startDate).format("DD/MMM/YYYY") +
        " - " +
        moment(dateValue[0].endDate).format("DD/MMM/YYYY")
    );
  }, [dateValue]);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={md} style={{ marginTop: 16 }}>
          <Typography variant="h7">{text}</Typography>
        </Grid>
        <Grid item xs={12} md={12 - md}>
          <FormControl
            variant="outlined"
            size="small"
            sx={{
              width: textFieldFullWidth
                ? "-webkit-fill-available"
                : textFieldLength,
              my: 1,
            }}
            onClick={(e) => setOpen(!open)}
          >
            <OutlinedInput
              readOnly
              sx={{ pr: 1 }}
              value={dateDisplay}
              endAdornment={
                <InputAdornment position="end" style={{ marginLeft: 3 }}>
                  {open ? <ArrowDropUp /> : <ArrowDropDown />}
                </InputAdornment>
              }
            />
            <FormHelperText>
              <Typography variant="formHelperText" color="error">
                {isValidate && textFieldValue == "" ? errorMessage : ""}
              </Typography>
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Collapse in={open} timeout={300}>
        <Grid container>
          <Grid item xs={12} md={calendarMd} />
          <Grid item xs={12} md={12 - calendarMd}>
            <DateRange
              ranges={dateValue}
              onChange={dateOnChange}
              months={2}
              direction="horizontal"
            />
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
}
