import {
  AddShoppingCartRounded,
  CheckOutlined,
  DoNotDisturbOutlined,
  HighlightOff,
  SearchRounded,
  UnfoldMore,
} from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ActionDialogAddNewItem({ isOpen, handleClose }) {
  const [materialSearch, setMaterialSearch] = React.useState("");
  const handleMaterialSearch = (event) => {
    setMaterialSearch(event.target.value);
  };

  const [materialName, setMaterialName] = React.useState("");
  const [uom, setUom] = React.useState("");
  const [unitPrice, setUnitPrice] = React.useState("");

  const [isValidate, setValidate] = React.useState(false);

  const handleMouseDownMaterialSearch = (event) => {
    event.preventDefault();
  };

  const handleClickShowMaterialSearch = (event) => {
    console.log("search click");
  };
  return (
    <Dialog
      maxWidth="md"
      fullWidth
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
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <AddShoppingCartRounded />
            </Grid>
            <Grid
              item
              xs
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">Add an item</Typography>
            </Grid>
            <Grid item xs="1">
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
                <InputLabel>Search by material name</InputLabel>
                <Input
                  value={materialSearch}
                  fullWidth
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
          <Divider sx={{ mb: 3 }} />
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
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">Rp.</InputAdornment>
                  }
                  value={unitPrice}
                  onChange={(e) => {
                    setUnitPrice(e.target.value);
                  }}
                  error={isValidate && unitPrice == ""}
                />
                <FormHelperText sx={{ color: "error.main" }}>
                  {isValidate && unitPrice == ""
                    ? "Please fill out this field."
                    : ""}
                </FormHelperText>
              </FormControl>
              {/* <TextField
                variant="outlined"
                size="small"
                value={unitPrice}
                onChange={(e) => {
                  setUnitPrice(e.target.value);
                }}
                error={isValidate && unitPrice == ""}
                helperText={
                  isValidate && unitPrice == ""
                    ? "Please fill out this field."
                    : ""
                }
              /> */}
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          color="secondaryButton"
        >
          <DoNotDisturbOutlined sx={{ mr: 1 }} />
          Close
        </Button>
        <Button onClick={handleClose} variant="contained" color="success">
          <CheckOutlined sx={{ mr: 1 }} />
          Add Item
        </Button>
      </DialogActions>
      <style>{".MuiDialog-paperWidthMd{max-width: 800px;}"}</style>
    </Dialog>
  );
}
