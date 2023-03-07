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
import { dialogTypesMaster, masterStatus } from "@/types";
import NoteEditOutlineIcon from "mdi-react/NoteEditOutlineIcon";
import Refresh from "@mui/icons-material/Refresh";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import SearchRounded from "@mui/icons-material/SearchRounded";

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
  rowStatusSelect = masterStatus.active,
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
              <MenuItem value={masterStatus.all}>All</MenuItem>
              <MenuItem value={masterStatus.active}>Active</MenuItem>
              <MenuItem value={masterStatus.inactive}>Inactive</MenuItem>
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
      type == dialogTypesMaster.addDepartment ||
      type == dialogTypesMaster.editDepartment
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
                ID Unit
              </Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={idUnit}
                onChange={(e) => {
                  setIdUnit(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Company</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Unit Name</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={unitName}
                onChange={(e) => {
                  setUnitName(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          {statusRow(type)}
        </Box>
      );
    if (
      type == dialogTypesMaster.addCostCenter ||
      type == dialogTypesMaster.editCostCenter
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
              <Typography variant="h7">Cost Center Id</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={costCenterId}
                onChange={(e) => {
                  setCostCenterId(e.target.value);
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
              <Typography variant="h7">Controlling Area</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={controllingArea}
                onChange={(e) => {
                  setControllingArea(e.target.value);
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
              <Typography variant="h7">Company Code</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select
                  value={companyCode}
                  onChange={(e) => setCompanyCode(e.target.value)}
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
              <Typography variant="h7">Profit Center</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select
                  value={profitCenter}
                  onChange={(e) => setProfitCenter(e.target.value)}
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
              <Typography variant="h7">Description</Typography>
            </Grid>
            <Grid item xs>
              <TextField
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
    if (type == dialogTypesMaster.addUser || type == dialogTypesMaster.editUser)
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
              <Typography variant="h7">Role</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select value={role} onChange={(e) => setRole(e.target.value)}>
                  <MenuItem value={"Choose"}>Choose</MenuItem>
                  <MenuItem value={"pjb"}>pjb</MenuItem>
                  <MenuItem value={"pjk"}>pjk</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">NIK</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={nik}
                onChange={(e) => {
                  setNik(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Name</Typography>
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
              <Typography variant="h7">Initial</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={nik}
                onChange={(e) => {
                  setInitial(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Email 1</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Email@pmbs"
                value={email1}
                onChange={(e) => {
                  setEmail1(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Email 2</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Email@prasetiyamulya"
                value={email2}
                onChange={(e) => {
                  setEmail2(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Password</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                type="password"
                variant="outlined"
                size="small"
                fullWidth
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
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
              <Typography variant="h7">Department</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <MenuItem value={"Choose"}>Choose</MenuItem>
                  <MenuItem value={"opt1"}>opt1</MenuItem>
                  <MenuItem value={"opt2"}>opt2</MenuItem>
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
              <Typography variant="h7">Position</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
                disabled
              >
                <Select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <MenuItem value={"Choose"}>Choose</MenuItem>
                  <MenuItem value={"DK"}>DK</MenuItem>
                  <MenuItem value={"opt2"}>opt2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {statusRow(type)}
        </Box>
      );
    if (type == dialogTypesMaster.addPjb || type == dialogTypesMaster.editPjb)
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
              <Typography variant="h7">User</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select value={user} onChange={(e) => setUser(e.target.value)}>
                  <MenuItem value={"Choose"}>Choose</MenuItem>
                  <MenuItem value={"pjb"}>pjb</MenuItem>
                  <MenuItem value={"pjk"}>pjk</MenuItem>
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
              <Typography variant="h7">Company</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
              >
                <Select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                >
                  <MenuItem value={"Choose"}>Choose</MenuItem>
                  <MenuItem value={"pjb"}>pjb</MenuItem>
                  <MenuItem value={"pjk"}>pjk</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7">Level</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                type="number"
                variant="outlined"
                size="small"
                fullWidth
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      );
    if (
      type == dialogTypesMaster.addVendor ||
      type == dialogTypesMaster.editVendor
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
              <Typography variant="h7">Name</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={vendor}
                onChange={(e) => {
                  setVendor(e.target.value);
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
              <Typography variant="h7">Telp</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={telp}
                onChange={(e) => {
                  setTelp(e.target.value);
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
              <Typography variant="h7">E-mail</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
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
              <Typography variant="h7">Address</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={3} sx={{ mt: 1 }}>
              <Typography variant="h7"> Material</Typography>
            </Grid>
            <Grid item xs>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  value={material}
                  fullWidth
                  placeholder="Search by material name"
                  size="small"
                  onChange={(e) => setMaterial(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={(e) => {}}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        <SearchRounded />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText>
                  <Typography variant="bodyTable1" color="error">
                    *If the item name is not available, please contact
                    warehouse.
                  </Typography>
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
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
