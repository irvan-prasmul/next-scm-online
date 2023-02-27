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
import ActionDialogAddNewItem from "@/components/fpb/actionDialogAddNewItem";

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
  const [plantSelect, setPlantSelect] = React.useState([
    "R001 - BSD",
    "R002 - Cilandak",
  ]);

  const [activity, setActivity] = React.useState("Choose");
  const HandleActivitySelect = (event) => {
    if (event.target.value != "Choose") setActivity(event.target.value);
  };
  const [activitySelect, setActivitySelect] = React.useState([
    "Non - IO",
    "IO",
  ]);

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
              onClick={(e) => handleEdit(row, col)}
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
          flexWrap: "wrap",
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
              flexWrap: "wrap",
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
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
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
              flexWrap: "wrap",
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
              flexWrap: "wrap",
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
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
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
              flexWrap: "wrap",
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
              disabled={profitCenter == "Choose"}
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
            </FormControl>
          </Grid>
        </Grid>
        <Divider sx={{ pt: 4, mb: 2 }} />
        <Grid container>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="primaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
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
              color="success"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
              onClick={(e) => console.log("save")}
            >
              <SaveRounded sx={{ mr: 1 }} /> Save
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="secondaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
              onClick={(e) => {
                setConfirmType("close");
                setConfirmDialog(true);
              }}
            >
              <DoNotDisturbOutlined sx={{ mr: 1 }} /> Close
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
              flexWrap: "wrap",
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
      <ActionDialogAddNewItem
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
