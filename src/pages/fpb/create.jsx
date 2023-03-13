import Head from "next/head";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import MenuList from "@mui/material/MenuList";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Add from "@mui/icons-material/Add";
import Refresh from "@mui/icons-material/Refresh";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import EditRounded from "@mui/icons-material/EditRounded";
import ArrowForward from "@mui/icons-material/ArrowForward";
import SaveRounded from "@mui/icons-material/SaveRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import ConfirmationDialog from "@/components/confirmationDialog";
import ActionDialogMaterialItem from "@/components/fpb/actionDialogMaterialItem";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import PersonRounded from "@mui/icons-material/PersonRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import Collapse from "@mui/material/Collapse";
import TableChartRounded from "@mui/icons-material/TableChartRounded";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import { requesterCreateAction } from "@/components/mainTable/mainTableCustomCells";
import RowTextSimple from "@/components/rowSimplified/rowTextSimple";
import PageHeader from "@/components/pageHeader";
import RowTextFieldSimple from "@/components/rowSimplified/rowTexfieldSimple";
import RowDatePickerSimple from "@/components/rowSimplified/rowDatePickerSimple";

const regexPhone = /^\d+$/;

const columns = [
  {
    id: "materialName",
    label: "Material Name",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "qtyPB",
    label: "Qty PB",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "uom",
    label: "UOM",
    minWidth: 100,
    isShow: true,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    isShow: true,
  },
];

const rows = [
  {
    id: 1,
    materialName: "Fuel Cell",
    price: 321312312,
    qtyPB: 11111,
    uom: "UN",
  },
  {
    id: 2,
    materialName: "C Clamp Cell",
    price: 1133334455,
    qtyPB: 11111,
    uom: "UN",
  },
];

export default function FpbCreate() {
  const auth = useSelector((state) => state.auth);
  //   const dispatch = useDispatch();
  const [userName, setUserName] = React.useState("");

  React.useEffect(() => {
    setUserName(auth.userName);
  }, [auth]);

  const [profitCenter, setProfitCenter] = React.useState("Choose");
  const HandleProfitCenterSelect = (event) => {
    if (event.target.value != "Choose") setProfitCenter(event.target.value);
  };
  const [profitCenterSelect, setProfitCenterSelect] = React.useState([
    "External Riset",
    "SBE S1",
    "SBE S2",
    "SBE S3",
    "SHSI S1",
    "STEM",
    "UNI",
    "YPM",
  ]);

  const [plant, setPlant] = React.useState("Choose");
  const HandlePlantSelect = (event) => {
    if (event.target.value != "Choose") setPlant(event.target.value);
  };
  const plantSelect = ["R001 - BSD", "R002 - Cilandak"];

  const [activity, setActivity] = React.useState("Choose");
  const HandleActivitySelect = (event) => {
    if (event.target.value != "Choose") setActivity(event.target.value);
  };
  const activitySelect = ["Non - IO", "IO"];
  const [ioBudget, setIoBudget] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [picName, setPicName] = React.useState("");
  const [picPhone, setPicPhone] = React.useState("");

  const [isValidate, setValidate] = React.useState(false);

  const [addNewItemDialog, setAddNewItemDialog] = React.useState(false);

  const [searchTable, setSearchTable] = React.useState("");
  function handleSearchTable(e) {
    setSearchTable(e.target.value);
    console.log("refresh table");
  }

  const [columnSelect, setColumnSelect] = React.useState(_.cloneDeep(columns));
  const handleColumnChange = (id) => {
    console.log("ddl click: ", id);
    if (id == "reset") {
      setColumnSelect(_.cloneDeep(columns));
    } else {
      let temp = [...columnSelect];
      const index = columnSelect.findIndex((h) => {
        return h.id == id;
      });
      temp[index].isShow = !temp[index].isShow;
      setColumnSelect(temp);
    }
  };

  const [confirmDialog, setConfirmDialog] = React.useState(false);
  const [confirmType, setConfirmType] = React.useState("cancel");

  function dialogAction() {
    console.log("dialogAction");
  }

  const customCell = [
    requesterCreateAction({
      id: "action",
      setAddNewItemDialog,
      setConfirmType,
      setConfirmDialog,
    }),
  ];

  function eventForm() {
    return (
      <Box className="event-box">
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">-- EVENT --</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ pt: 1, mb: 2 }} />
        <RowTextFieldSimple
          md={2}
          text="IO Budget"
          textFieldValue={ioBudget}
          textFieldOnChange={(e) => setIoBudget(e.target.value)}
          isValidate={isValidate}
          textFieldLength={330}
          offset={3}
          whiteBackground
        />
        <RowTextFieldSimple
          md={2}
          text="Event Name"
          textFieldValue={eventName}
          textFieldOnChange={(e) => setEventName(e.target.value)}
          isValidate={isValidate}
          textFieldLength={330}
          offset={3}
          multiline
          rows={2}
          whiteBackground
        />
        <RowDatePickerSimple
          md={2}
          text="Date"
          dateValue={eventDate}
          dateOnChange={(val) => setEventDate(val)}
          isValidate={isValidate}
          offset={3}
          datePickerLength={330}
          whiteBackground
        />
        <RowTextFieldSimple
          md={2}
          text="PIC Name"
          textFieldValue={picName}
          textFieldOnChange={(e) => setPicName(e.target.value)}
          isValidate={isValidate}
          textFieldLength={330}
          offset={3}
          whiteBackground
          endAdornment={
            <InputAdornment position="end">
              <PersonRounded />
            </InputAdornment>
          }
        />
        <RowTextFieldSimple
          md={2}
          text="PIC Phone"
          textFieldValue={picPhone}
          textFieldOnChange={(e) => {
            e.target.value == "" || regexPhone.test(e.target.value)
              ? setPicPhone(e.target.value)
              : null;
          }}
          isValidate={isValidate}
          textFieldLength={330}
          offset={3}
          controlled
          whiteBackground
          endAdornment={
            <InputAdornment position="end">
              <PhoneRounded />
            </InputAdornment>
          }
        />
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{"FPB Create"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/scm-online/favicon.ico" />
      </Head>
      <PageHeader icon={<ShoppingCart />} title={["FPB", "Create"]} />
      <Divider />
      <Box className="alternate-backgound" sx={{ p: 2 }}>
        <RowTextSimple text="Requester" otherText={": " + userName} />
        <Grid container sx={{ pt: 2 }}>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              pt: 1,
            }}
          >
            <Typography variant="h7">Profit Center</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl
              variant="outlined"
              size="small"
              margin="normal"
              className="form-white-backgound form-compact"
              fullWidth
            >
              <Select
                fullWidth
                value={profitCenter}
                onChange={HandleProfitCenterSelect}
              >
                <MenuItem value="Choose">
                  <em>Choose</em>
                </MenuItem>
                {profitCenterSelect.map((val, index) => {
                  return (
                    <MenuItem value={val} key={index}>
                      {val}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText sx={{ color: "error.main" }}>
                {isValidate && profitCenter == "Choose"
                  ? "Please choose an option."
                  : ""}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={0} md={2} />
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h7">Business Area</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              className="form-white-backgound form-compact"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={
                profitCenter == "External Riset"
                  ? "ZR07 - PO EXTERNAL RISET"
                  : "Choose profit center"
              }
            />
          </Grid>
        </Grid>
        <Grid container sx={{ pt: 2 }}>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              pt: 1,
            }}
          >
            <Typography variant="h7">Plant</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl
              variant="outlined"
              size="small"
              margin="normal"
              className="form-white-backgound form-compact"
              fullWidth
              disabled={profitCenter == "Choose"}
            >
              <Select fullWidth value={plant} onChange={HandlePlantSelect}>
                <MenuItem value="Choose">
                  <em>Choose</em>
                </MenuItem>
                {plantSelect.map((val, index) => {
                  return (
                    <MenuItem value={val} key={index}>
                      {val}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText sx={{ color: "error.main" }}>
                {isValidate && plant == "Choose"
                  ? "Please choose an option."
                  : ""}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={0} md={2} />
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h7">Activity</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl
              variant="outlined"
              size="small"
              margin="normal"
              className="form-white-backgound form-compact"
              fullWidth
              disabled={plant == "Choose"}
            >
              <Select
                fullWidth
                value={activity}
                onChange={HandleActivitySelect}
              >
                <MenuItem value="Choose">
                  <em>Choose</em>
                </MenuItem>
                {activitySelect.map((val, index) => {
                  return (
                    <MenuItem value={val} key={index}>
                      {val}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText sx={{ color: "error.main" }}>
                {isValidate && activity == "Choose"
                  ? "Please choose an option."
                  : ""}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Collapse in={activity == "IO"} timeout={600}>
          {eventForm()}
        </Collapse>
        <Divider sx={{ pt: 4, mb: 2 }} />
        <Grid container>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="primaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => setAddNewItemDialog(true)}
              disabled={
                profitCenter == "Choose" ||
                plant == "Choose" ||
                activity == "Choose"
              }
            >
              <Add sx={{ mr: 1 }} /> Add New Item
            </Button>
          </Grid>
          <Grid item xs />
          <Grid item xs="auto" sx={{ pr: 1 }}>
            <Button
              variant="contained"
              color="secondaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => {
                setConfirmType("close");
                setConfirmDialog(true);
              }}
            >
              <DoNotDisturbOutlined sx={{ mr: 1 }} /> Close
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="success"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => setValidate(true)}
            >
              <SaveRounded sx={{ mr: 1 }} /> Save
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ pt: 2, mb: 4 }} />
        <MainTableMenu
          handleRefreshTable={(e) => {
            console.log("refresh table");
          }}
          searchTable={searchTable}
          handleSearchTable={handleSearchTable}
          columnSelect={columnSelect}
          handleColumnChange={handleColumnChange}
        />
        <Paper sx={{ width: "100%", mt: 2 }}>
          <MainTable
            columns={columnSelect}
            rows={rows}
            maxHeight={1000}
            customCell={customCell}
          />
        </Paper>
      </Box>
      <ActionDialogMaterialItem
        isOpen={addNewItemDialog}
        handleClose={(e) => setAddNewItemDialog(false)}
      />
      <ConfirmationDialog
        type={confirmType}
        isOpen={confirmDialog}
        handleClose={(e) => setConfirmDialog(false)}
        action={dialogAction}
      />
    </>
  );
}
