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
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Refresh from "@mui/icons-material/Refresh";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import Flag from "@mui/icons-material/Flag";
import Inventory2Rounded from "@mui/icons-material/Inventory2Rounded";
import CheckBox from "@mui/icons-material/CheckBox";
import ShoppingCartCheckoutRounded from "@mui/icons-material/ShoppingCartCheckoutRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import Cancel from "@mui/icons-material/Cancel";
import HourglassFullTwoTone from "@mui/icons-material/HourglassFullTwoTone";
import MainTable from "@/components/mainTable";
import _ from "lodash";
import moment from "moment/moment";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import TableChartRounded from "@mui/icons-material/TableChartRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import TextField from "@mui/material/TextField";
import ActionDialogMaterialItem from "@/components/fpb/actionDialogMaterialItem";
import Remove from "@mui/icons-material/Remove";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import ConfirmationDialog from "@/components/confirmationDialog";
import MainTableMenu from "@/components/mainTableMenu";
import TableInfomationStatus from "@/components/fpb/tableInformationStatus";

const columns = [
  { id: "id", label: "#", minWidth: 22, isShow: true, align: "center" },
  {
    id: "action",
    label: "Action",
    minWidth: 202,
    isShow: true,
  },
  {
    id: "fpbnumber",
    label: "Resv./FPB Number",
    minWidth: 110,
    isShow: true,
  },
  {
    id: "materialName",
    label: "Material Name",
    minWidth: 230,
    isShow: true,
  },
  {
    id: "price",
    label: "Price",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "qty",
    label: "Qty",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "uom",
    label: "UOM",
    minWidth: 80,
    isShow: true,
  },
  {
    id: "total",
    label: "Total",
    minWidth: 121,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "constCenter",
    label: "Cost Center",
    minWidth: 156,
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
    minWidth: 115,
    isShow: true,
  },
  {
    id: "requesterName",
    label: "Requester Name",
    minWidth: 130,
    isShow: true,
  },
  {
    id: "department",
    label: "Department",
    minWidth: 130,
    isShow: true,
  },
  {
    id: "requesterNotes",
    label: "Requester Notes",
    minWidth: 202,
    isShow: true,
  },
  {
    id: "picPurchase",
    label: "PIC Purc.",
    minWidth: 110,
    isShow: true,
    align: "left",
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
];

const rows = [
  {
    id: 1,
    action: null,
    fpbnumber: "F23100468",
    materialName: "Fuel Cell",
    price: 898987,
    qty: 1,
    uom: "UN",
    total: 898989,
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    file: "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181676451233.png",
    requesterName: "Irvan",
    department: "UNI-ICT",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picPurc: "bukan aku",
    approval: "pending",
    purchase: "approved",
  },
];

function renderStatusIcon(status) {
  return status == "pending" ? (
    <HourglassFullTwoTone />
  ) : status == "approved" ? (
    <CheckBox color="success" />
  ) : status == "canceled" ? (
    <Cancel color="warning" />
  ) : (
    <CloseRounded color="error" />
  );
}

const dialogTypes = {
  requesterNotes: "Requester Notes",
};

export default function FpbAprrovalPJKegiatan() {
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
  const [searchTable, setSearchTable] = React.useState("");
  function handleSearchTable(e) {
    setSearchTable(e.target.value);
    console.log("refresh table");
  }

  const [dialogType, setDialogType] = React.useState(
    dialogTypes.requesterNotes
  );
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogBody, setDialogBody] = React.useState("");
  const handleCloseDialog = (event) => {
    setOpenDialog(false);
    // setDialogBody("");
  };

  const [editItemDialog, setEditItemDialog] = React.useState(false);

  const [confirmType, setConfirmType] = React.useState("");
  const [confirmDialog, setConfirmDialog] = React.useState(false);

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
              color="success"
              onClick={(e) => {
                setConfirmType("approve");
                setConfirmDialog(true);
              }}
            >
              <CheckBox /> Approve
            </Button>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={(e) => {
                setConfirmType("Reject");
                setConfirmDialog(true);
              }}
            >
              <DeleteRounded /> Reject
            </Button>
          </TableCell>
        );
      },
    },
    {
      id: "file",
      element: (row, col) => {
        const value = row[col.id];
        if (value == "" || value == undefined || value == null)
          return (
            <TableCell key={col.id} align="left">
              <Link
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <DoNotDisturbOutlined
                  color="primaryButton"
                  style={{ marginRight: 1, fontSize: "1.1rem" }}
                />
                <Typography variant="bodyTable1" color="blue">
                  No Image
                </Typography>
              </Link>
            </TableCell>
          );
        return (
          <TableCell key={col.id} align="left">
            <Link
              href={value}
              target="_blank"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
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
      id: "requesterNotes",
      element: (row, col) => {
        const value = row[col.id];
        return (
          <TableCell key={col.id} align="left">
            {col.id == "requesterNotes" && value.length > 50 ? (
              <>
                <Typography variant="bodyTable1">
                  {col.id == "requesterNotes" ? value.substring(0, 50) : ""}
                  ...
                </Typography>
                <Button
                  variant="text"
                  color="primaryButton"
                  size="small"
                  onClick={(e) => {
                    setDialogType(dialogTypes[col.id]);
                    setDialogBody(value);
                    setOpenDialog(!openDialog);
                  }}
                >
                  Read More
                </Button>
              </>
            ) : (
              <></>
            )}
          </TableCell>
        );
      },
    },
    {
      id: ["approval", "purchase"],
      element: (row, col) => {
        const value = row[col.id];
        return (
          <TableCell key={col.id} align="center">
            {renderStatusIcon(value)}
          </TableCell>
        );
      },
    },
  ];

  function tablePaginationProp() {
    return (
      <Grid
        container
        sx={{
          pl: 3,
        }}
      >
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 3,
          }}
        >
          <Typography variant="h7">Total price: 312313123</Typography>
        </Grid>
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 3,
          }}
        >
          <Typography variant="h7">Total qty: 1111</Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Head>
        <title>Home</title>
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
        }}
      >
        <CheckBox />
        <Typography variant="h6">Approval PJ Kegiatan</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
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
            <Typography variant="h7">Status</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <FormControl
              variant="outlined"
              size="small"
              margin="normal"
              sx={{ width: "300px" }}
            >
              <Select value={statusSelect} onChange={handleStatusSelect}>
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Waiting"}>Waiting For Approval</MenuItem>
                <MenuItem value={"Approved"}>Approved</MenuItem>
                <MenuItem value={"Rejected"}>Rejected</MenuItem>
                <MenuItem value={"Canceled"}>Canceled by user</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
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
            paginationProp={tablePaginationProp()}
          />
        </Paper>
        <Paper sx={{ width: 300, mt: 2 }}>
          <TableInfomationStatus
            statusList={[
              "Waiting",
              "Approved",
              "Rejected",
              "Purchase Order",
              "Ready for pick up",
              "Delivered",
              "None",
            ]}
          />
        </Paper>
      </Box>
      <ActionDialogMaterialItem
        isOpen={editItemDialog}
        handleClose={(e) => setEditItemDialog(false)}
      />
      <ActionDialogFpb
        type={dialogType}
        isOpen={openDialog}
        handleClose={handleCloseDialog}
        action={dialogAction}
        bodyValue={dialogBody}
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
