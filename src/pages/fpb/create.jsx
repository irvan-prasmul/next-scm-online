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
import MainTable from "@/components/mainTable";
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

  const [openColumnList, setOpenColumnList] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggleColumnList = () => {
    setOpenColumnList((prevOpen) => !prevOpen);
  };
  const handleCloseColumnList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenColumnList(false);
  };
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
    {
      id: "action",
      element: (row, col) => {
        return (
          <TableCell key="action" align="left">
            <Button
              variant="contained"
              size="small"
              sx={{ mr: 1 }}
              color="primaryButton"
              onClick={(e) => console.log("buka modal dengan data tabel")}
            >
              <EditRounded /> Edit
            </Button>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={(e) => {
                setConfirmType("delete");
                setConfirmDialog(true);
              }}
            >
              <DeleteRounded /> Delete
            </Button>
          </TableCell>
        );
      },
    },
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
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={0} md={3} />
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              pr: 2,
              pt: 1,
            }}
          >
            <Typography variant="h7">IO Budget</Typography>
          </Grid>
          <Grid item xs={12} md>
            <TextField
              size="small"
              className="form-white-backgound"
              value={ioBudget}
              onChange={(e) => setIoBudget(e.target.value)}
              error={isValidate && ioBudget == ""}
              helperText={
                isValidate && ioBudget == ""
                  ? "Please fill out this field."
                  : ""
              }
              sx={{ width: 330 }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            pt: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={0} md={3} />
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              pr: 2,
              pt: 1,
            }}
          >
            <Typography variant="h7">Event Name</Typography>
          </Grid>
          <Grid item xs={12} md>
            <TextField
              rows={2}
              multiline
              size="small"
              className="form-white-backgound"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              error={isValidate && eventName == ""}
              helperText={
                isValidate && eventName == ""
                  ? "Please fill out this field."
                  : ""
              }
              sx={{ width: 330 }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            pt: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={0} md={3} />
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              pr: 2,
              pt: 1,
            }}
          >
            <Typography variant="h7">Date</Typography>
          </Grid>
          <Grid item xs={12} md>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                value={eventDate}
                disablePast
                className="form-white-backgound"
                views={["year", "month", "day"]}
                onChange={(newValue) => setEventDate(newValue)}
                renderInput={(params) => (
                  <TextField
                    size="small"
                    className="form-white-backgound"
                    error={isValidate && eventDate == ""}
                    helperText={
                      isValidate && eventDate == ""
                        ? "Please select a date."
                        : ""
                    }
                    sx={{ width: 330 }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            pt: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={0} md={3} />
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              pr: 2,
              pt: 1,
            }}
          >
            <Typography variant="h7">PIC Name</Typography>
          </Grid>
          <Grid item xs={12} md>
            <FormControl
              className="form-white-backgound"
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <PersonRounded />
                  </InputAdornment>
                }
                value={picName}
                onChange={(e) => {
                  setPicName(e.target.value);
                }}
                error={isValidate && picName == ""}
                sx={{ width: 330 }}
              />
              <FormHelperText sx={{ color: "error.main" }}>
                {isValidate && picName == ""
                  ? "Please fill out this field."
                  : ""}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            pt: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={0} md={3} />
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              pr: 2,
              pt: 1,
            }}
          >
            <Typography variant="h7">PIC Phone</Typography>
          </Grid>
          <Grid item xs={12} md>
            <FormControl
              className="form-white-backgound"
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <PhoneRounded />
                  </InputAdornment>
                }
                value={picPhone}
                onChange={(e) => {
                  setPicPhone(e.target.value);
                }}
                error={isValidate && picPhone == ""}
                sx={{ width: 330 }}
              />
              <FormHelperText sx={{ color: "error.main" }}>
                {isValidate && picPhone == ""
                  ? "Please fill out this field."
                  : ""}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{"FPB Create"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <Box
        className="alternate-background-header"
        sx={{
          pt: 1,
          pl: 2,
          pb: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <ShoppingCart />
        <Typography variant="h6">FPB </Typography>
        <div>&nbsp;</div> <ArrowForward />
        <div>&nbsp;</div>
        <Typography variant="h6"> Create</Typography>
      </Box>
      <Divider />
      <Box className="alternate-backgound" sx={{ p: 2 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h7">Requester</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography variant="h7">: {userName}</Typography>
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
        <Grid container sx={{ pt: 2 }}>
          <Grid
            item
            xs="auto"
            sx={{
              display: "flex",
              alignItems: "center",
              pr: 2,
            }}
          >
            <ButtonGroup variant="contained" color="secondaryButton">
              <Button>
                <Refresh sx={{ mr: 1 }} />
                <Typography variant="bodyCst1">Refresh Table</Typography>
              </Button>
              <Button
                size="small"
                aria-controls={openColumnList ? "split-button-menu" : "none"}
                aria-expanded={openColumnList ? "true" : "false"}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggleColumnList}
                ref={anchorRef}
              >
                <TableChartRounded sx={{ mr: 1 }} />
                <Typography variant="bodyCst1">Select Columns</Typography>
                <ArrowDropDown sx={{ ml: 1 }} />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
              }}
              open={openColumnList}
              anchorEl={anchorRef.current}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloseColumnList}>
                      <MenuList
                        id="split-button-menu"
                        autoFocusItem
                        sx={{ minWidth: 250 }}
                      >
                        {[
                          ...columnSelect,
                          { id: "reset", label: "Restore Columns" },
                        ].map((col) => (
                          <MenuItem
                            onClick={() => handleColumnChange(col.id)}
                            key={col.id}
                            selected={col.isShow}
                          >
                            <ListItemText primary={col.label} />
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        </Grid>
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
