import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

export default function RowDoubleDdl({
  textMd = 2,
  gap = 0,
  text1 = "DDL",
  ddlValue1 = "choose",
  ddlValues1 = [{ value: "choose", text: "Choose" }],
  ddlOnChange1 = (e) => console.log("undefined"),
  addChoose1 = false,
  errorValue1 = "choose",
  errorMessage1 = "Please choose an option.",
  disabled1 = false,
  text2 = "DDL",
  ddlValue2 = "choose",
  ddlValues2 = [{ value: "choose", text: "Choose" }],
  ddlOnChange2 = (e) => console.log("undefined"),
  addChoose2 = false,
  errorValue2 = "choose",
  errorMessage2 = "Please choose an option.",
  disabled2 = false,
  fullWidth = true,
  ddlLength = 300,
  isValidate = false,
  offset = 0,
  whiteBackground = false,
}) {
  return (
    <Grid container>
      <Grid item xs={0} md={offset} />
      <Grid
        item
        xs={12}
        md={textMd}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h7">{text1}</Typography>
      </Grid>
      <Grid item xs={12} md={6 - textMd - gap / 2 - offset}>
        <FormControl
          variant="outlined"
          size="small"
          margin="normal"
          disabled={disabled1}
          error={isValidate && ddlValue1 == errorValue1}
          className={whiteBackground ? "form-white-backgound" : null}
          sx={{
            width: fullWidth ? "-webkit-fill-available" : ddlLength,
            my: 1,
          }}
        >
          <Select value={ddlValue1} onChange={ddlOnChange1}>
            {addChoose1 ? (
              <MenuItem value="choose">
                <em>Choose</em>
              </MenuItem>
            ) : null}
            {ddlValues1.map((val, index) => (
              <MenuItem key={index} value={val.value}>
                {val.text}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            <Typography variant="formHelperText" color="error">
              {isValidate && ddlValue1 == errorValue1 ? errorMessage1 : ""}
            </Typography>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={0} md={gap} />
      <Grid
        item
        xs={12}
        md={textMd}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h7">{text2}</Typography>
      </Grid>
      <Grid item xs={12} md={6 - textMd - gap / 2 - offset}>
        <FormControl
          variant="outlined"
          size="small"
          margin="normal"
          disabled={disabled2}
          error={isValidate && ddlValue2 == errorValue2}
          className={whiteBackground ? "form-white-backgound" : null}
          sx={{
            width: fullWidth ? "-webkit-fill-available" : ddlLength,
            my: 1,
          }}
        >
          <Select value={ddlValue2} onChange={ddlOnChange2}>
            {addChoose2 ? (
              <MenuItem value="choose">
                <em>Choose</em>
              </MenuItem>
            ) : null}
            {ddlValues2.map((val, index) => (
              <MenuItem key={index} value={val.value}>
                {val.text}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            <Typography variant="formHelperText" color="error">
              {isValidate && ddlValue2 == errorValue2 ? errorMessage2 : ""}
            </Typography>
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}
