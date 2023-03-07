import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

export default function RowDdlSimple({
  md = 2,
  text = "DDL",
  ddlValue = "choose",
  ddlValues = [{ value: "choose", text: "Choose" }],
  ddlOnChange = (e) => console.log("undefined"),
  ddlLength = 300, // '-webkit-fill-available' for fullWidth
  addChoose = false,
  isValidate = false,
  errorValue = "choose",
  errorMessage = "Please choose an option.",
  fullWidth = false,
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
        <FormControl
          variant="outlined"
          size="small"
          margin="normal"
          sx={{
            width: fullWidth ? "-webkit-fill-available" : ddlLength,
            my: 1,
          }}
        >
          <Select value={ddlValue} onChange={ddlOnChange}>
            {addChoose ? (
              <MenuItem value="choose">
                <em>Choose</em>
              </MenuItem>
            ) : null}
            {ddlValues.map((val, index) => (
              <MenuItem key={index} value={val.value}>
                {val.text}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            <Typography variant="formHelperText" color="error">
              {isValidate && ddlValue == errorValue ? errorMessage : ""}
            </Typography>
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}
