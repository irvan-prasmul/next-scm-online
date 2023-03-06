import React from "react";
import AccountTreeRounded from "@mui/icons-material/AccountTreeRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import FileUploadRounded from "@mui/icons-material/FileUploadRounded";
import HighlightOff from "@mui/icons-material/HighlightOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FileUpload from "react-mui-fileuploader";
import BookmarkRounded from "@mui/icons-material/BookmarkRounded";
import LocalAtmRounded from "@mui/icons-material/LocalAtmRounded";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SaveRounded from "@mui/icons-material/SaveRounded";
import Note from "@mui/icons-material/Note";
import TextField from "@mui/material/TextField";
import InsertDriveFileRounded from "@mui/icons-material/InsertDriveFileRounded";
import { dialogTypesMasterMaterial, masterMaterialStatus } from "@/types";
import NoteEditOutlineIcon from "mdi-react/NoteEditOutlineIcon";
import Refresh from "@mui/icons-material/Refresh";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

export default function ActionDialogMasterMaterial({
  type,
  isOpen,
  handleClose,
  action,
  // head
  name = "name",
  setName = (e) => console.log("undefined"),
  description = "description",
  setDescription = (e) => console.log("undefined"),
  // detail
  plu = "plu",
  setPlu = (e) => console.log("undefined"),
  materialHead = "materialHead",
  setMaterialHead = (e) => console.log("undefined"),
  price = "price",
  setPrice = (e) => console.log("undefined"),
  stock = "stock",
  setStock = (e) => console.log("undefined"),
  reorderPoint = "reorderPoint",
  setReorderPoint = (e) => console.log("undefined"),
  uom = "uom",
  setUom = (e) => console.log("undefined"),
  materialType = "materialType",
  setMaterialType = (e) => console.log("undefined"),
  materialGroup = "materialGroup",
  setMaterialGroup = (e) => console.log("undefined"),
  // edit
  rowStatusSelect = masterMaterialStatus.active,
  setRowStatusSelect = (e) => console.log("undefined"),
}) {
  const [isValidate, setValidate] = React.useState(false);

  function renderHeader(type) {
    return (
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
              display: "flex !important",
              flexDirection: "column !important",
              justifyContent: "center !important",
              pr: 1,
            }}
          >
            {type == dialogTypesMasterMaterial.add ||
            type == dialogTypesMasterMaterial.addDetail ||
            type == dialogTypesMasterMaterial.addType ||
            type == dialogTypesMasterMaterial.addGroup ? (
              <InsertDriveFileRounded />
            ) : type == dialogTypesMasterMaterial.edit ||
              type == dialogTypesMasterMaterial.editDetail ||
              type == dialogTypesMasterMaterial.editType ||
              type == dialogTypesMasterMaterial.editGroup ? (
              <NoteEditOutlineIcon />
            ) : (
              <></>
            )}
          </Grid>
          <Grid
            item
            xs
            sx={{
              display: "flex !important",
              flexDirection: "column !important",
              justifyContent: "center !important",
            }}
          >
            {
              // type == "none" ? (
              //   <Typography variant="h7">none</Typography>
              // ) :
              <Typography variant="h7">{type}</Typography>
            }
          </Grid>
          <Grid item xs={1}>
            <IconButton variant="text" color="darkBg" onClick={handleClose}>
              <HighlightOff />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    );
  }

  function statusRow(type) {
    return type == dialogTypesMasterMaterial.edit ||
      type == dialogTypesMasterMaterial.editDetail ||
      type == dialogTypesMasterMaterial.editType ||
      type == dialogTypesMasterMaterial.editGroup ? (
      <Grid container>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h7">Status</Typography>
        </Grid>
        <Grid item xs>
          <FormControl
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
          >
            <Select
              value={rowStatusSelect}
              onChange={(e) => setRowStatusSelect(e.target.value)}
            >
              <MenuItem value={masterMaterialStatus.all}>All</MenuItem>
              <MenuItem value={masterMaterialStatus.active}>Active</MenuItem>
              <MenuItem value={masterMaterialStatus.inactive}>
                Inactive
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    ) : (
      <></>
    );
  }

  function renderBody(type) {
    if (
      type == dialogTypesMasterMaterial.add ||
      type == dialogTypesMasterMaterial.edit
    )
      return (
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7" sx={{ mt: 1 }}>
                Name
              </Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Description</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                multiline
                rows={3}
                variant="outlined"
                size="small"
                fullWidth
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          {statusRow(type)}
        </Box>
      );
    if (
      type == dialogTypesMasterMaterial.addDetail ||
      type == dialogTypesMasterMaterial.editDetail
    )
      return (
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">PLU</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={plu}
                onChange={(e) => {
                  setPlu(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">Material Head</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select
                  value={materialHead}
                  onChange={(e) => setMaterialHead(e.target.value)}
                >
                  <MenuItem value={"opt1"}>opt1</MenuItem>
                  <MenuItem value={"opt2"}>opt2</MenuItem>
                  <MenuItem value={"opt3"}>opt3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">Material Name</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">Price</Typography>
            </Grid>
            <Grid item xs>
              <FormControl variant="outlined" fullWidth size="small">
                <OutlinedInput
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">Rp.</InputAdornment>
                  }
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  error={isValidate && price == ""}
                  fullWidth
                />
                <FormHelperText sx={{ color: "error.main" }}>
                  {isValidate && price == ""
                    ? "Please fill out this field."
                    : ""}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">Stock</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={stock}
                onChange={(e) => {
                  setStock(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">Reorder Point</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={reorderPoint}
                onChange={(e) => {
                  setReorderPoint(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">UOM</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select value={uom} onChange={(e) => setUom(e.target.value)}>
                  <MenuItem value={"opt1"}>opt1</MenuItem>
                  <MenuItem value={"opt2"}>opt2</MenuItem>
                  <MenuItem value={"opt3"}>opt3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">Material Type</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select
                  value={materialType}
                  onChange={(e) => setMaterialType(e.target.value)}
                >
                  <MenuItem value={"opt1"}>opt1</MenuItem>
                  <MenuItem value={"opt2"}>opt2</MenuItem>
                  <MenuItem value={"opt3"}>opt3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">Material Group</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select
                  value={materialGroup}
                  onChange={(e) => setMaterialGroup(e.target.value)}
                >
                  <MenuItem value={"opt1"}>opt1</MenuItem>
                  <MenuItem value={"opt2"}>opt2</MenuItem>
                  <MenuItem value={"opt3"}>opt3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {statusRow(type)}
        </Box>
      );
    if (
      type == dialogTypesMasterMaterial.addType ||
      type == dialogTypesMasterMaterial.editType
    )
      return (
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7" sx={{ mt: 1 }}>
                Material Type
              </Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={materialType}
                onChange={(e) => {
                  setMaterialType(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Description</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                multiline
                rows={3}
                variant="outlined"
                size="small"
                fullWidth
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          {statusRow(type)}
        </Box>
      );
    if (
      type == dialogTypesMasterMaterial.addGroup ||
      type == dialogTypesMasterMaterial.editGroup
    )
      return (
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h7" sx={{ mt: 1 }}>
                Material Group
              </Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={materialGroup}
                onChange={(e) => {
                  setMaterialGroup(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Description</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                multiline
                rows={3}
                variant="outlined"
                size="small"
                fullWidth
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          {statusRow(type)}
        </Box>
      );
  }

  function renderAction(type) {
    if (
      type == dialogTypesMasterMaterial.add ||
      type == dialogTypesMasterMaterial.addDetail ||
      type == dialogTypesMasterMaterial.addType ||
      type == dialogTypesMasterMaterial.addGroup
    ) {
      return (
        <>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondaryButton"
          >
            <DoNotDisturbOutlined sx={{ mr: 1 }} />
            Close
          </Button>
          <Button onClick={action} variant="contained" color="success">
            <SaveRounded sx={{ mr: 1 }} />
            Save
          </Button>
        </>
      );
    }
    if (
      type == dialogTypesMasterMaterial.edit ||
      type == dialogTypesMasterMaterial.editDetail ||
      type == dialogTypesMasterMaterial.editType ||
      type == dialogTypesMasterMaterial.editGroup
    ) {
      return (
        <>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondaryButton"
          >
            <DoNotDisturbOutlined sx={{ mr: 1 }} />
            Close
          </Button>
          <Button onClick={action} variant="contained" color="success">
            <Refresh sx={{ mr: 1 }} />
            Update
          </Button>
        </>
      );
    }
  }

  return (
    <Dialog
      fullWidth
      disableEscapeKeyDown
      maxWidth={
        type == dialogTypesMasterMaterial.addDetail ||
        type == dialogTypesMasterMaterial.editDetail
          ? "md"
          : "sm"
      }
      open={isOpen}
      disableScrollLock={true}
    >
      <DialogContent sx={{ p: 0 }}>
        <Card>
          <CardContent sx={{ p: 0 }}>
            {renderHeader(type)}

            {renderBody(type)}
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>{renderAction(type)}</DialogActions>
    </Dialog>
  );
}
