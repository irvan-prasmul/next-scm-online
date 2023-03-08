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
import {
  dialogTypesMaster,
  dummyDdlChoose,
  masterStatus,
  masterStatusDdlValues,
} from "@/types";
import NoteEditOutlineIcon from "mdi-react/NoteEditOutlineIcon";
import Refresh from "@mui/icons-material/Refresh";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import SearchRounded from "@mui/icons-material/SearchRounded";
import RowDdlSimple from "../rowSimplified/rowDdlSimple";
import RowTextFieldSimple from "../rowSimplified/rowTexfieldSimple";
import RowSearchList from "../rowSimplified/rowSearchList";

export default function ActionDialogMaster({
  type,
  isOpen,
  handleClose,
  action,
  //dept, cc
  idUnit = "idUnit",
  setIdUnit = (e) => console.log("undefined"),
  company = "company",
  setCompany = (e) => console.log("undefined"),
  unitName = "unitName",
  setUnitName = (e) => console.log("undefined"),
  costCenterId = "costCenterId",
  setCostCenterId = (e) => console.log("undefined"),
  controllingArea = "controllingArea",
  setControllingArea = (e) => console.log("undefined"),
  companyCode = "companyCode",
  setCompanyCode = (e) => console.log("undefined"),
  profitCenter = "profitCenter",
  setProfitCenter = (e) => console.log("undefined"),
  description = "description",
  setDescription = (e) => console.log("undefined"),
  //user
  role = "role",
  setRole = (e) => console.log("undefined"),
  nik = "nik",
  setNik = (e) => console.log("undefined"),
  name = "name",
  setName = (e) => console.log("undefined"),
  initial = "initial",
  setInitial = (e) => console.log("undefined"),
  email1 = "email1",
  setEmail1 = (e) => console.log("undefined"),
  email2 = "email2",
  setEmail2 = (e) => console.log("undefined"),
  password = "password",
  setPassword = (e) => console.log("undefined"),
  department = "department",
  setDepartment = (e) => console.log("undefined"),
  position = "position",
  setPosition = (e) => console.log("undefined"),
  //pjb
  user = "user",
  setUser = (e) => console.log("undefined"),
  level = "level",
  setLevel = (e) => console.log("undefined"),
  //vendor
  telp = "telp",
  setTelp = (e) => console.log("undefined"),
  address = "address",
  setAddress = (e) => console.log("undefined"),
  material = "material",
  setMaterial = (e) => console.log("undefined"),
  vendor = "vendor",
  setVendor = (e) => console.log("undefined"),
  email = "email",
  setEmail = (e) => console.lgo("undefined"),

  // edit
  rowStatusSelect = "active",
  setRowStatusSelect = (e) => console.log("undefined"),
  isValidate = false,
  setValidate = (e) => console.lgo("undefined"),
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
            {type == dialogTypesMaster.addDepartment ||
            type == dialogTypesMaster.addCostCenter ||
            type == dialogTypesMaster.addUser ||
            type == dialogTypesMaster.addPjb ||
            type == dialogTypesMaster.addVendor ? (
              <InsertDriveFileRounded />
            ) : type == dialogTypesMaster.editDepartment ||
              type == dialogTypesMaster.editCostCenter ||
              type == dialogTypesMaster.editUser ||
              type == dialogTypesMaster.editPjb ||
              type == dialogTypesMaster.editVendor ? (
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
            {<Typography variant="h7">{type}</Typography>}
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
    return type == dialogTypesMaster.editDepartment ||
      type == dialogTypesMaster.editCostCenter ||
      type == dialogTypesMaster.editUser ||
      type == dialogTypesMaster.editVendor ? (
      <RowDdlSimple
        md={3}
        fullWidth
        text="Status"
        ddlValue={rowStatusSelect}
        ddlValues={masterStatusDdlValues}
        ddlOnChange={(e) => setRowStatusSelect(e.target.value)}
      />
    ) : (
      <></>
    );
  }

  function renderBody(type) {
    if (
      type == dialogTypesMaster.addDepartment ||
      type == dialogTypesMaster.editDepartment
    )
      return (
        <Box sx={{ p: 2 }}>
          <RowTextFieldSimple
            text="ID Unit"
            textFieldValue={idUnit}
            textFieldOnChange={(e) => setIdUnit(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowTextFieldSimple
            text="Company"
            textFieldValue={company}
            textFieldOnChange={(e) => setCompany(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowTextFieldSimple
            text="Unit Name"
            textFieldValue={unitName}
            textFieldOnChange={(e) => setUnitName(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          {statusRow(type)}
        </Box>
      );
    if (
      type == dialogTypesMaster.addCostCenter ||
      type == dialogTypesMaster.editCostCenter
    )
      return (
        <Box sx={{ p: 2 }}>
          <RowTextFieldSimple
            text="Cost Center Id"
            textFieldValue={costCenterId}
            textFieldOnChange={(e) => setCostCenterId(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowTextFieldSimple
            text="Controlling Area"
            textFieldValue={controllingArea}
            textFieldOnChange={(e) => setControllingArea(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowDdlSimple
            md={3}
            fullWidth
            text="Company Code"
            ddlValue={companyCode}
            ddlValues={dummyDdlChoose}
            ddlOnChange={(e) => setCompanyCode(e.target.value)}
            isValidate={isValidate}
          />
          <RowDdlSimple
            md={3}
            fullWidth
            text="Profit Center"
            ddlValue={profitCenter}
            ddlValues={dummyDdlChoose}
            ddlOnChange={(e) => setProfitCenter(e.target.value)}
            isValidate={isValidate}
          />
          <RowTextFieldSimple
            text="Description"
            textFieldValue={description}
            textFieldOnChange={(e) => setDescription(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          {statusRow(type)}
        </Box>
      );
    if (type == dialogTypesMaster.addUser || type == dialogTypesMaster.editUser)
      return (
        <Box sx={{ p: 2 }}>
          <RowDdlSimple
            md={3}
            fullWidth
            text="Role"
            ddlValue={role}
            ddlValues={[
              { value: "choose", text: "Choose" },
              { value: "pjb", text: "PJB" },
              { value: "pjk", text: "PJK" },
            ]}
            ddlOnChange={(e) => setRole(e.target.value)}
            isValidate={isValidate}
          />
          <RowTextFieldSimple
            text="NIK"
            textFieldValue={nik}
            textFieldOnChange={(e) => setNik(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowTextFieldSimple
            text="Name"
            textFieldValue={name}
            textFieldOnChange={(e) => setName(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowTextFieldSimple
            text="Initial"
            textFieldValue={nik}
            textFieldOnChange={(e) => setInitial(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowTextFieldSimple
            text="Email 1"
            textFieldValue={email1}
            textFieldOnChange={(e) => setEmail1(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
            placeholder="Email@pmbs"
          />
          <RowTextFieldSimple
            text="Email 2"
            textFieldValue={email2}
            textFieldOnChange={(e) => setEmail2(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
            placeholder="Email@prasetiyamulya"
          />
          <RowTextFieldSimple
            text="Password"
            textFieldValue={password}
            textFieldOnChange={(e) => setPassword(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
            type="password"
          />
          <RowDdlSimple
            md={3}
            fullWidth
            text="Department"
            ddlValue={department}
            ddlValues={dummyDdlChoose}
            ddlOnChange={(e) => setDepartment(e.target.value)}
            isValidate={isValidate}
          />
          <RowDdlSimple
            md={3}
            fullWidth
            text="Position"
            ddlValue={position}
            ddlValues={[
              { value: "choose", text: "Choose" },
              { value: "dk", text: "Dekan" },
              { value: "pjk", text: "PJK" },
            ]}
            ddlOnChange={(e) => setPosition(e.target.value)}
            isValidate={isValidate}
          />
          {statusRow(type)}
        </Box>
      );
    if (type == dialogTypesMaster.addPjb || type == dialogTypesMaster.editPjb)
      return (
        <Box sx={{ p: 2 }}>
          <RowDdlSimple
            md={3}
            fullWidth
            text="User"
            ddlValue={user}
            ddlValues={dummyDdlChoose}
            ddlOnChange={(e) => setUser(e.target.value)}
            isValidate={isValidate}
          />
          <RowDdlSimple
            md={3}
            fullWidth
            text="Company"
            ddlValue={company}
            ddlValues={dummyDdlChoose}
            ddlOnChange={(e) => setCompany(e.target.value)}
            isValidate={isValidate}
          />
          <RowTextFieldSimple
            text="Level"
            textFieldValue={level}
            textFieldOnChange={(e) => setLevel(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
            type="number"
          />
        </Box>
      );
    if (
      type == dialogTypesMaster.addVendor ||
      type == dialogTypesMaster.editVendor
    )
      return (
        <Box sx={{ p: 2 }}>
          <RowTextFieldSimple
            text="Name"
            textFieldValue={vendor}
            textFieldOnChange={(e) => setVendor(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowTextFieldSimple
            text="Telp"
            textFieldValue={telp}
            textFieldOnChange={(e) => setTelp(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowTextFieldSimple
            text="E-mail"
            textFieldValue={email}
            textFieldOnChange={(e) => setEmail(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowTextFieldSimple
            text="Address"
            textFieldValue={address}
            textFieldOnChange={(e) => setAddress(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
          />
          <RowSearchList
            text="Material"
            textFieldValue={material}
            textFieldOnChange={(e) => setMaterial(e.target.value)}
            fullWidth
            isValidate={isValidate}
            md={3}
            placeholder="Search by material name"
            searchNote="*If the item name is not available, please contact warehouse."
          />
          {statusRow(type)}
        </Box>
      );
  }

  function renderAction(type) {
    if (
      type == dialogTypesMaster.addDepartment ||
      type == dialogTypesMaster.addCostCenter ||
      type == dialogTypesMaster.addUser ||
      type == dialogTypesMaster.addPjb ||
      type == dialogTypesMaster.addVendor
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
      type == dialogTypesMaster.editDepartment ||
      type == dialogTypesMaster.editCostCenter ||
      type == dialogTypesMaster.editUser ||
      type == dialogTypesMaster.editPjb ||
      type == dialogTypesMaster.editVendor
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
      maxWidth="sm"
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
