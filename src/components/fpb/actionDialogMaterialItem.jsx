import AddShoppingCartRounded from "@mui/icons-material/AddShoppingCartRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import CheckOutlined from "@mui/icons-material/CheckOutlined";
import HighlightOff from "@mui/icons-material/HighlightOff";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import RowTextFieldSimple from "../rowSimplified/rowTexfieldSimple";
import RowDdlSimple from "../rowSimplified/rowDdlSimple";
import RowDatePickerSimple from "../rowSimplified/rowDatePickerSimple";
import RowSearchList from "../rowSimplified/rowSearchList";

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
            <Grid item xs />
            <Grid item xs="auto">
              <IconButton variant="text" color="darkBg" onClick={handleClose}>
                <HighlightOff />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ pt: 1, pr: 2, pb: 2, pl: 2 }}>
          <RowSearchList
            text="Search"
            textFieldValue={materialSearch}
            textFieldOnChange={handleMaterialSearch}
            endAdornmentAction={handleClickShowMaterialSearch}
            fullWidth
            md={3}
            placeholder="Search by material name"
            searchNote="* If the item name is not available, please contact anisa.mirza@pmbs.ac.id."
          />
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
      <DialogActions sx={{ mb: 1, mr: 1 }}>
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
