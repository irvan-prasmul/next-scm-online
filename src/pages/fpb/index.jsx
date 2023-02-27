import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import Link from "@mui/material/Link";
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
  FileUploadRounded,
  ImageOutlined,
  AccountTreeRounded,
} from "@mui/icons-material";
import TableIcon from "mdi-react/TableIcon";
import Moment from "react-moment";
import MainTable from "@/components/mainTable";
import _ from "lodash";
import moment from "moment/moment";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import ConfirmationDialog from "@/components/confirmationDialog";

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
    align: "center",
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
    purchase: "approved",
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
    approval: "cancelled",
    purchase: "rejected",
    informationStatus: "none",
  },
];

function renderStatusIcon(status) {
  return status == "pending" ? (
    <HourglassFullTwoTone />
  ) : status == "approved" ? (
    <CheckBox color="success" />
  ) : status == "cancelled" ? (
    <Cancel color="warning" />
  ) : (
    <CloseRounded color="error" />
  );
}

function handleEdit(row, col) {
  console.log("handle edit:", col);
  console.log(row);
}

const dialogTypes = { pta: "PTA", other: "Other", track: "Track" };

export default function Fpb() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [statusSelect, setStatusSelect] = React.useState("All");
  const handleStatusSelect = (event) => {
    setStatusSelect(event.target.value);
  };

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
    // console.log("col: ", columns);
    // console.log("columnSelect: ", columnSelect);
  };

  const [dialogType, setDialogType] = React.useState(dialogTypes.pta);
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleCloseDialog = (event) => {
    setOpenDialog(false);
  };

  const [confirmDialog, setConfirmDialog] = React.useState(false);

  function dialogAction() {
    console.log("dialogAction");
  }

  function createNew(event) {
    router.replace("/fpb/create");
  }

  const customCell = [
    {
      id: "fpbnumber",
      element: (row, col) => {
        return (
          <TableCell key="fpbnumber" align="left">
            <Typography variant="bodyTable1" sx={{ pl: 1 }}>
              {col}
            </Typography>
            <br />
            <Button
              variant="text"
              size="small"
              onClick={(e) => handleEdit(row, col)}
            >
              <EditRounded color="primaryButton" /> Edit
            </Button>
            <Button
              variant="text"
              size="small"
              onClick={(e) => setConfirmDialog(true)}
            >
              <CloseRounded color="error" /> Cancel
            </Button>
          </TableCell>
        );
      },
    },
    {
      id: "pta",
      element: (row, col) => {
        return (
          <TableCell key="pta" align="center">
            <Button
              variant="text"
              size="small"
              onClick={(e) => {
                setDialogType(dialogTypes.pta);
                setOpenDialog(!openDialog);
              }}
            >
              <FileUploadRounded color="primaryButton" /> Upload
            </Button>
          </TableCell>
        );
      },
    },
    {
      id: "other",
      element: (row, col) => {
        return (
          <TableCell key="other" align="center">
            <Button
              variant="text"
              size="small"
              onClick={(e) => {
                setDialogType(dialogTypes.other);
                setOpenDialog(!openDialog);
              }}
            >
              <FileUploadRounded color="primaryButton" /> Upload
            </Button>
          </TableCell>
        );
      },
    },
    {
      id: "file",
      element: (row, col) => {
        return (
          <TableCell key="file" align="center">
            <Link
              href={col}
              target="_blank"
              underline="none"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <ImageOutlined color="primaryButton" fontSize="small" />
              <Typography variant="bodyTable1" color="blue">
                View
              </Typography>
            </Link>
          </TableCell>
        );
      },
    },
    {
      id: "approval",
      element: (row, col) => {
        return (
          <TableCell key="approval" align="center">
            {renderStatusIcon(col)}
          </TableCell>
        );
      },
    },
    {
      id: "purchase",
      element: (row, col) => {
        return (
          <TableCell key="purchase" align="center">
            {renderStatusIcon(col)}
          </TableCell>
        );
      },
    },
    {
      id: "trackStatus",
      element: (row, col) => {
        return (
          <TableCell key="trackStatus" align="center">
            <Button
              variant="contained"
              size="small"
              color="secondaryButton"
              onClick={(e) => {
                setDialogType(dialogTypes.track);
                setOpenDialog(!openDialog);
              }}
            >
              <AccountTreeRounded fontSize="small" />
              <Typography variant="bodyTable1">Tracking</Typography>
            </Button>
          </TableCell>
        );
      },
    },
  ];

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
              onClick={createNew}
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
        <ButtonGroup variant="contained" color="secondaryButton" sx={{ pt: 2 }}>
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
                  <TableCell className="plain-table" align="center" colSpan={2}>
                    <Typography variant="h5">Information Status</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="plain-table" align="center" width={60}>
                    <HourglassFullTwoTone />
                  </TableCell>
                  <TableCell className="plain-table">
                    <Typography variant="bodyCst1">Waiting</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="plain-table" align="center" width={60}>
                    <Cancel color="warning" />
                  </TableCell>
                  <TableCell className="plain-table">
                    <Typography variant="bodyCst1">Canceled by User</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="plain-table" align="center" width={60}>
                    <CheckBox color="success" />
                  </TableCell>
                  <TableCell className="plain-table">
                    <Typography variant="bodyCst1">Approved</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="plain-table" align="center" width={60}>
                    <CloseRounded color="error" />
                  </TableCell>
                  <TableCell className="plain-table">
                    <Typography variant="bodyCst1">Rejected</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="plain-table" align="center" width={60}>
                    <ShoppingCartCheckoutRounded color="primaryButton" />
                  </TableCell>
                  <TableCell className="plain-table">
                    <Typography variant="bodyCst1">PO Process</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="plain-table" align="center" width={60}>
                    <Inventory2Rounded color="info" />
                  </TableCell>
                  <TableCell className="plain-table">
                    <Typography variant="bodyCst1">
                      Ready for pick up
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="plain-table" align="center" width={60}>
                    <Flag color="success" />
                  </TableCell>
                  <TableCell className="plain-table">
                    <Typography variant="bodyCst1">Delivered</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <ActionDialogFpb
        type={dialogType}
        isOpen={openDialog}
        handleClose={handleCloseDialog}
        action={dialogAction}
      />
      <ConfirmationDialog
        type={"cancel"}
        isOpen={confirmDialog}
        handleClose={(e) => setConfirmDialog(false)}
        action={dialogAction}
      />
    </>
  );
}
