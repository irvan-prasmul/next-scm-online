import Head from "next/head";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
  ButtonGroup,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
} from "@mui/material";
import {
  Add,
  Refresh,
  ShoppingCart,
  ArrowDropDown,
  HourglassFullTwoTone,
  Cancel,
  CloseRounded,
  ShoppingCartCheckoutRounded,
  CheckBox,
  Inventory2Rounded,
  Flag,
  EditRounded,
} from "@mui/icons-material";
import TableIcon from "mdi-react/TableIcon";
import Moment from "react-moment";
import MainTable from "@/components/mainTable";
import _ from "lodash";
import moment from "moment/moment";

const columns = [
  { id: "id", label: "#", minWidth: 22, isShow: true, align: "center" },
  {
    id: "created",
    label: "Created",
    minWidth: 100,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  {
    id: "fpbnumber",
    label: "FPB Number",
    minWidth: 162,
    isShow: true,
  },
  {
    id: "pta",
    label: "PTA",
    minWidth: 100,
    isShow: true,
    group: "Upload Document",
  },
  {
    id: "io",
    label: "IO",
    minWidth: 100,
    isShow: true,
    group: "Upload Document",
  },
  {
    id: "other",
    label: "Other",
    minWidth: 100,
    isShow: true,
    group: "Upload Document",
  },
  {
    id: "materialName",
    label: "Material Name",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "category",
    label: "Category",
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
  },
  {
    id: "total",
    label: "Total",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "constCenter",
    label: "Cost Center",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "planDate",
    label: "Plan Date",
    minWidth: 100,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  {
    id: "file",
    label: "File",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "requesterNotes",
    label: "Requester Notes",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "ictNotes",
    label: "ICT Notes",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "picPurc",
    label: "PIC Purc.",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "purchasingNotes",
    label: "Purchasing Notes",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "noPo",
    label: "No. PO",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "approval",
    label: "Approval",
    minWidth: 100,
    isShow: true,
    group: "Status",
  },
  {
    id: "purchase",
    label: "Purchase",
    minWidth: 100,
    isShow: true,
    group: "Status",
  },
  {
    id: "informationStatus",
    label: "Information Status",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "trackStatus",
    label: "Track Status",
    minWidth: 100,
    isShow: true,
  },
];

const rows = [
  {
    id: 1,
    created: "1976-04-19T12:59-0500",
    fpbnumber: "F23100468",
    pta: null,
    io: null,
    other: null,
    materialName: "Fuel Cell",
    category: "Non-ICT",
    price: 898987,
    qtyPB: 1,
    uom: "UN",
    total: 898989,
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    file: "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181676451233.png",
    requesterNotes: "test",
    ictNotes: "ictNotes",
    picPurc: "bukan aku",
    purchasingNotes: "tes",
    noPo: 123,
    approval: "pending",
    purchase: "pending",
    informationStatus: "none",
  },
  {
    id: 2,
    created: "1976-04-19T12:59-0500",
    fpbnumber: "F23100469",
    pta: null,
    io: null,
    other: null,
    materialName: "Fuel Cell",
    category: "Non-ICT",
    price: 898987,
    qtyPB: 1,
    uom: "UN",
    total: 898989,
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    file: "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181676451233.png",
    requesterNotes: "test",
    ictNotes: "ictNotes",
    picPurc: "bukan aku",
    purchasingNotes: "tes",
    noPo: 123,
    approval: "pending",
    purchase: "pending",
    informationStatus: "none",
  },
];

function handleEdit(event) {
  console.log("handle edit:", event);
}

const customCell = [
  {
    id: "fpbnumber",
    element: (value) => (
      <TableCell key="fpbnumber" align="left">
        <Typography variant="bodyTable1" sx={{ pl: 1 }}>
          {value}
        </Typography>
        <br />
        <Button variant="text" size="small" onClick={handleEdit}>
          <EditRounded color="primaryButton" /> Edit
        </Button>
        <Button variant="text" size="small">
          <CloseRounded color="error" /> Cancel
        </Button>
      </TableCell>
    ),
  },
];

export default function Fpb() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const router = useRouter();
  const [statusSelect, setStatusSelect] = React.useState("All");
  const handleStatusSelect = (event) => {
    setStatusSelect(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
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
    // console.log("col: ", columns);
    // console.log("columnSelect: ", columnSelect);
  };

  return (
    <>
      <Head>
        <title>FPB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <Box
        sx={{
          pt: 1,
          pl: 2,
          pb: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <ShoppingCart />
        <Typography variant="h6">FPB Dashboard (Non-Stock)</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={1}
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h7">FPB</Typography>
          </Grid>
          <Grid item xs={12} md={11}>
            <Button
              variant="contained"
              color="primaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Add sx={{ mr: 1 }} /> Create New
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h7">Status</Typography>
          </Grid>
          <Grid item xs={12} md={11}>
            <FormControl
              variant="outlined"
              size="small"
              margin="normal"
              sx={{ width: "300px" }}
            >
              <Select value={statusSelect} onChange={handleStatusSelect}>
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Waiting for Approval"}>
                  Waiting for Approval
                </MenuItem>
                <MenuItem value={"Approved"}>Approved</MenuItem>
                <MenuItem value={"Rejected"}>Rejected</MenuItem>
                <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
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
                <Refresh sx={{ mr: 1 }} /> Refresh Table
              </Button>
              <Button
                size="small"
                aria-controls={open ? "split-button-menu" : "none"}
                aria-expanded={open ? "true" : "false"}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
                ref={anchorRef}
              >
                Select Columns
                <ArrowDropDown sx={{ ml: 1 }} />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
              }}
              open={open}
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
                    <ClickAwayListener onClickAway={handleClose}>
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
        <Paper sx={{ width: 300, mt: 2 }}>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    <Typography variant="h5">Information Status</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center" width={60}>
                    <HourglassFullTwoTone />
                  </TableCell>
                  <TableCell>
                    <Typography variant="bodyCst1">Waiting</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" width={60}>
                    <Cancel color="warning" />
                  </TableCell>
                  <TableCell>
                    <Typography variant="bodyCst1">Canceled by User</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" width={60}>
                    <CheckBox color="success" />
                  </TableCell>
                  <TableCell>
                    <Typography variant="bodyCst1">Approved</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" width={60}>
                    <CloseRounded color="error" />
                  </TableCell>
                  <TableCell>
                    <Typography variant="bodyCst1">Rejected</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" width={60}>
                    <ShoppingCartCheckoutRounded color="primaryButton" />
                  </TableCell>
                  <TableCell>
                    <Typography variant="bodyCst1">PO Process</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" width={60}>
                    <Inventory2Rounded color="info" />
                  </TableCell>
                  <TableCell>
                    <Typography variant="bodyCst1">
                      Ready for pick up
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" width={60}>
                    <Flag color="success" />
                  </TableCell>
                  <TableCell>
                    <Typography variant="bodyCst1">Delivered</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
}
