import AddShoppingCartRounded from "@mui/icons-material/AddShoppingCartRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import CheckOutlined from "@mui/icons-material/CheckOutlined";
import HighlightOff from "@mui/icons-material/HighlightOff";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FileUpload from "react-mui-fileuploader";

export default function ActionDialogMaterialItem({ isOpen, handleClose }) {
  const [materialSearch, setMaterialSearch] = React.useState("");
  const handleMaterialSearch = (event) => {
    setMaterialSearch(event.target.value);
  };

  const [materialName, setMaterialName] = React.useState("");
  const [uom, setUom] = React.useState("");
  const [unitPrice, setUnitPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [costCenter, setCostCenter] = React.useState("Choose");
  const HandleCostCenterSelect = (event) => {
    if (event.target.value != "Choose") setCostCenter(event.target.value);
  };
  const [costCenterSelect, setCostCenterSelect] = React.useState([
    "26201 - SBE BVDI",
    "21202 - SBE Dekanat",
  ]);
  const [usagePlan, setUsagePlan] = React.useState("");
  const [fileInput, setFileInput] = React.useState([]);
  const handleFileInput = (files) => {
    console.log("file", files);
    setFileInput([...files]);
  };
  const [information, setInformation] = React.useState("");

  const [isValidate, setValidate] = React.useState(false);

  const handleMouseDownMaterialSearch = (event) => {
    event.preventDefault();
  };

  const handleClickShowMaterialSearch = (event) => {
    console.log("search click");
  };

  function resetAndClose(event) {
    handleClose();
    setMaterialName("");
    setUom("");
    setUnitPrice("");
    setQuantity("");
    setCostCenter("Choose");
    setUsagePlan("");
    setFileInput([]);
    setInformation("");
    setValidate(false);
  }

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      scroll="body"
      open={isOpen}
      onClose={(e) => {}}
      disableScrollLock={true}
      disableEscapeKeyDown
    >
      <DialogContent sx={{ p: 0 }}>
        <Box
          sx={{
            p: 2,
            width: "100%",
            backgroundColor: "lightBlueHeader.main",
            color: "lightBlueHeader.contrastText",
          }}
        >
          <Grid container>
            <Grid
              item
              xs="auto"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AddShoppingCartRounded />
            </Grid>
            <Grid
              item
              xs
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Add an item</Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton variant="text" color="darkBg" onClick={handleClose}>
                <HighlightOff />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ pt: 1, pr: 2, pb: 2, pl: 2 }}>
          <Grid container>
            <Grid item xs={12} md={3} sx={{ pt: 3 }}>
              <Typography variant="h7"> Search</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  value={materialSearch}
                  fullWidth
                  placeholder="Search by material name"
                  size="small"
                  onChange={handleMaterialSearch}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowMaterialSearch}
                        onMouseDown={handleMouseDownMaterialSearch}
                      >
                        <SearchRounded />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText>
                  <Typography variant="bodyTable1" color="error">
                    * If the item name is not available, please contact
                    anisa.mirza@pmbs.ac.id.
                  </Typography>
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Divider sx={{ mb: 3, pt: 2 }} />
          <Grid container>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mt: 1,
              }}
            >
              <Typography variant="h7"> Material Name</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={materialName}
                onChange={(e) => {
                  setMaterialName(e.target.value);
                }}
                error={isValidate && materialName == ""}
                helperText={
                  isValidate && materialName == ""
                    ? "Please fill out this field."
                    : ""
                }
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mt: 1,
              }}
            >
              <Typography variant="h7"> UOM</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                variant="outlined"
                size="small"
                disabled
                value={uom}
                onChange={(e) => {
                  setUom(e.target.value);
                }}
                error={isValidate && uom == ""}
                helperText={
                  isValidate && uom == "" ? "Please fill out this field." : ""
                }
                sx={{ width: 250 }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mt: 1,
              }}
            >
              <Typography variant="h7"> Unit Price</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">Rp.</InputAdornment>
                  }
                  value={unitPrice}
                  onChange={(e) => {
                    setUnitPrice(e.target.value);
                  }}
                  error={isValidate && unitPrice == ""}
                  sx={{ width: 250 }}
                />
                <FormHelperText sx={{ color: "error.main" }}>
                  {isValidate && unitPrice == ""
                    ? "Please fill out this field."
                    : ""}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mt: 1,
              }}
            >
              <Typography variant="h7"> Quantity</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                variant="outlined"
                size="small"
                type="number"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                error={isValidate && quantity == ""}
                helperText={
                  isValidate && quantity == ""
                    ? "Please fill out this field."
                    : ""
                }
                sx={{ width: 250 }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mt: 1,
              }}
            >
              <Typography variant="h7"> Cost Center</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                error={isValidate && costCenter == "Choose"}
                className="form-white-backgound form-compact"
                sx={{ width: 250 }}
              >
                <Select value={costCenter} onChange={HandleCostCenterSelect}>
                  <MenuItem value="Choose">
                    <em>Choose</em>
                  </MenuItem>
                  {costCenterSelect.map((val, index) => {
                    return (
                      <MenuItem value={val} key={index}>
                        {val}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText sx={{ color: "error.main" }}>
                  {isValidate && costCenter == "Choose"
                    ? "Please choose an option."
                    : ""}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mt: 1,
              }}
            >
              <Typography variant="h7"> Usage Plan</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  value={usagePlan}
                  disablePast
                  views={["year", "month", "day"]}
                  onChange={(newValue) => setUsagePlan(newValue)}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      error={isValidate && usagePlan == ""}
                      helperText={
                        isValidate && usagePlan == ""
                          ? "Please select a date."
                          : ""
                      }
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mt: 1,
              }}
            >
              <Typography variant="h7"> File</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ maxWidth: 300 }}>
                <FileUpload
                  title="Select a file..."
                  multiFile={false}
                  maxFileSize={10}
                  buttonLabel="click here"
                  onFilesChange={handleFileInput}
                  allowedExtensions={["jpg", "jpeg", "png", "pdf"]}
                  onContextReady={(context) => {}}
                  showPlaceholderImage={false}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                mt: 1,
              }}
            >
              <Typography variant="h7"> Information</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                multiline
                rows={2}
                fullWidth
                placeholder="Merk, seri, ukuran, dll"
                variant="outlined"
                size="small"
                value={information}
                onChange={(e) => {
                  setInformation(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={resetAndClose}
          variant="contained"
          color="secondaryButton"
        >
          <DoNotDisturbOutlined sx={{ mr: 1 }} />
          Close
        </Button>
        <Button
          onClick={(e) => {
            setValidate(true);
          }}
          variant="contained"
          color="success"
        >
          <CheckOutlined sx={{ mr: 1 }} />
          Add Item
        </Button>
      </DialogActions>
      <style>{".MuiDialog-paperWidthMd{max-width: 800px;}"}</style>
    </Dialog>
  );
}
