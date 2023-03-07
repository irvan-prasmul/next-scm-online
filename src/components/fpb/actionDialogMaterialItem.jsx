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
import RowTextFieldSimple from "../rowSimplified/rowTexfieldSimple";
import RowDdlSimple from "../rowSimplified/rowDdlSimple";
import RowDatePickerSimple from "../rowSimplified/rowDatePickerSimple";
import RowSelectFileSimple from "../rowSimplified/rowSelectFileSimple";

export default function ActionDialogMaterialItem({ isOpen, handleClose }) {
  const [materialSearch, setMaterialSearch] = React.useState("");
  const handleMaterialSearch = (event) => {
    setMaterialSearch(event.target.value);
  };

  const [materialName, setMaterialName] = React.useState("");
  const [uom, setUom] = React.useState("");
  const [unitPrice, setUnitPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [costCenter, setCostCenter] = React.useState("choose");
  const [costCenterSelect, setCostCenterSelect] = React.useState([
    { value: "1", text: "26201 - SBE BVDI" },
    { value: "2", text: "21202 - SBE Dekanat" },
  ]);
  const [usagePlan, setUsagePlan] = React.useState("");
  const [fileInput, setFileInput] = React.useState([]);
  // const handleFileInput = (files) => {
  //   console.log("file", files);
  //   setFileInput([...files]);
  // };
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
    setCostCenter("choose");
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
          <Divider sx={{ mb: 2, pt: 2 }} />
          <RowTextFieldSimple
            md={3}
            text="Material Name"
            textFieldValue={materialName}
            textFieldOnChange={(e) => setMaterialName(e.target.value)}
            isValidate={isValidate}
            fullWidth
            disabled
          />
          <RowTextFieldSimple
            md={3}
            text="UOM"
            textFieldValue={uom}
            textFieldOnChange={(e) => setUom(e.target.value)}
            isValidate={isValidate}
            disabled
          />
          <RowTextFieldSimple
            md={3}
            text="Unit Price"
            textFieldValue={unitPrice}
            textFieldOnChange={(e) => setUnitPrice(e.target.value)}
            isValidate={isValidate}
            type="number"
            startAdornment={
              <InputAdornment position="start">Rp.</InputAdornment>
            }
          />
          <RowTextFieldSimple
            md={3}
            text="Quantity"
            textFieldValue={quantity}
            textFieldOnChange={(e) => setQuantity(e.target.value)}
            isValidate={isValidate}
            type="number"
          />
          <RowDdlSimple
            md={3}
            text="Cost Center"
            ddlValue={costCenter}
            ddlValues={costCenterSelect}
            ddlOnChange={(e) => {
              if (e.target.value != "choose") setCostCenter(e.target.value);
            }}
            isValidate={isValidate}
            addChoose
          />
          <RowDatePickerSimple
            md={3}
            text="Usage Plan"
            dateValue={usagePlan}
            dateOnChange={(val) => setUsagePlan(val)}
            isValidate={isValidate}
          />
          <RowTextFieldSimple
            md={3}
            text="File"
            textFieldValue={undefined}
            textFieldOnChange={(e) => setFileInput(e.target.files[0])}
            type="file"
          />
          <RowTextFieldSimple
            md={3}
            text="Information"
            textFieldValue={information}
            textFieldOnChange={(e) => setInformation(e.target.value)}
            fullWidth
            multiline
            placeholder="Merk, seri, ukuran, dll"
            rows={2}
          />
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
