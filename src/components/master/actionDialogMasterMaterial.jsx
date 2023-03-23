import React from "react";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
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
import SaveRounded from "@mui/icons-material/SaveRounded";
import InsertDriveFileRounded from "@mui/icons-material/InsertDriveFileRounded";
import {
  dialogTypesMasterMaterial,
  dummyDdlChoose,
  masterStatusDdlValues,
} from "@/globals/types";
import NoteEditOutlineIcon from "mdi-react/NoteEditOutlineIcon";
import Refresh from "@mui/icons-material/Refresh";
import InputAdornment from "@mui/material/InputAdornment";
import RowTextFieldSimple from "../rowSimplified/rowTexfieldSimple";
import RowDdlSimple from "../rowSimplified/rowDdlSimple";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ActionDialogMasterMaterial({
  type,
  isOpen,
  handleClose,
  action = (e) => console.log("ActionDialogMasterMaterial"),
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
  rowStatusSelect = "active",
  setRowStatusSelect = (e) => console.log("undefined"),
  isValidate = false,
  setValidate = (e) => console.log("undefined"),
}) {
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
            {(() => {
              switch (type) {
                case dialogTypesMasterMaterial.addHead:
                case dialogTypesMasterMaterial.addDetail:
                case dialogTypesMasterMaterial.addType:
                case dialogTypesMasterMaterial.addGroup:
                  return <InsertDriveFileRounded />;
                case dialogTypesMasterMaterial.editHead:
                case dialogTypesMasterMaterial.editDetail:
                case dialogTypesMasterMaterial.editType:
                case dialogTypesMasterMaterial.editGroup:
                  return <NoteEditOutlineIcon />;
                default:
                  return null;
              }
            })()}
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
            <Typography variant="h7">{type}</Typography>
          </Grid>
          <Grid item xs="auto">
            <IconButton variant="text" color="darkBg" onClick={handleClose}>
              <HighlightOff />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    );
  }

  function statusRow(type) {
    switch (type) {
      case dialogTypesMasterMaterial.editHead:
      case dialogTypesMasterMaterial.editDetail:
      case dialogTypesMasterMaterial.editType:
      case dialogTypesMasterMaterial.editGroup:
        return (
          <RowDdlSimple
            md={3}
            fullWidth
            text="Status"
            ddlValue={rowStatusSelect}
            ddlValues={masterStatusDdlValues}
            ddlOnChange={(e) => setRowStatusSelect(e.target.value)}
          />
        );
      default:
        return null;
    }
  }

  function renderBody(type) {
    switch (type) {
      case dialogTypesMasterMaterial.addHead:
      case dialogTypesMasterMaterial.editHead:
        return (
          <Box sx={{ p: 2 }}>
            <RowTextFieldSimple
              text="Name"
              textFieldValue={name}
              textFieldOnChange={(e) => setName(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
            />
            <RowTextFieldSimple
              text="Description"
              textFieldValue={description}
              textFieldOnChange={(e) => setDescription(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
              multiline
            />
            {statusRow(type)}
          </Box>
        );
      case dialogTypesMasterMaterial.addDetail:
      case dialogTypesMasterMaterial.editDetail:
        return (
          <Box sx={{ p: 2 }}>
            <RowTextFieldSimple
              text="PLU"
              textFieldValue={plu}
              textFieldOnChange={(e) => setPlu(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
            />
            <RowDdlSimple
              md={3}
              fullWidth
              text="Material Head"
              ddlValue={materialHead}
              ddlValues={dummyDdlChoose}
              ddlOnChange={(e) => setMaterialHead(e.target.value)}
              isValidate={isValidate}
            />
            <RowTextFieldSimple
              text="Material Name"
              textFieldValue={name}
              textFieldOnChange={(e) => setName(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
            />
            <RowTextFieldSimple
              text="Price"
              textFieldValue={price}
              textFieldOnChange={(e) => setPrice(e.target.value)}
              fullWidth
              isValidate={isValidate}
              startAdornment={
                <InputAdornment position="start">Rp.</InputAdornment>
              }
              md={3}
            />
            <RowTextFieldSimple
              text="Stock"
              textFieldValue={stock}
              textFieldOnChange={(e) => setStock(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
            />
            <RowTextFieldSimple
              text="Reorder Point"
              textFieldValue={reorderPoint}
              textFieldOnChange={(e) => setReorderPoint(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
            />
            <RowDdlSimple
              md={3}
              fullWidth
              text="UOM"
              ddlValue={uom}
              ddlValues={dummyDdlChoose}
              ddlOnChange={(e) => setUom(e.target.value)}
              isValidate={isValidate}
            />
            <RowDdlSimple
              md={3}
              fullWidth
              text="Material Type"
              ddlValue={materialType}
              ddlValues={dummyDdlChoose}
              ddlOnChange={(e) => setMaterialType(e.target.value)}
              isValidate={isValidate}
            />
            <RowDdlSimple
              md={3}
              fullWidth
              text="Material Group"
              ddlValue={materialGroup}
              ddlValues={dummyDdlChoose}
              ddlOnChange={(e) => setMaterialGroup(e.target.value)}
              isValidate={isValidate}
            />
            {statusRow(type)}
          </Box>
        );
      case dialogTypesMasterMaterial.addType:
      case dialogTypesMasterMaterial.editType:
        return (
          <Box sx={{ p: 2 }}>
            <RowTextFieldSimple
              text="Material Type"
              textFieldValue={materialType}
              textFieldOnChange={(e) => setMaterialType(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
            />
            <RowTextFieldSimple
              text="Description"
              textFieldValue={description}
              textFieldOnChange={(e) => setDescription(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
              multiline
            />
            {statusRow(type)}
          </Box>
        );
      case dialogTypesMasterMaterial.addGroup:
      case dialogTypesMasterMaterial.editGroup:
        return (
          <Box sx={{ p: 2 }}>
            <RowTextFieldSimple
              text="Material Group"
              textFieldValue={materialGroup}
              textFieldOnChange={(e) => setMaterialGroup(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
            />
            <RowTextFieldSimple
              text="Description"
              textFieldValue={description}
              textFieldOnChange={(e) => setDescription(e.target.value)}
              fullWidth
              isValidate={isValidate}
              md={3}
              multiline
            />
            {statusRow(type)}
          </Box>
        );
      default:
        return null;
    }
  }

  function renderAction(type) {
    switch (type) {
      case dialogTypesMasterMaterial.addHead:
      case dialogTypesMasterMaterial.addDetail:
      case dialogTypesMasterMaterial.addType:
      case dialogTypesMasterMaterial.addGroup:
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
      case dialogTypesMasterMaterial.editHead:
      case dialogTypesMasterMaterial.editDetail:
      case dialogTypesMasterMaterial.editType:
      case dialogTypesMasterMaterial.editGroup:
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
      default:
        return null;
    }
  }

  return (
    <Dialog
      TransitionComponent={Transition}
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
