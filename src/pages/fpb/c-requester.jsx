import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
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
import Link from "@mui/material/Link";
import Add from "@mui/icons-material/Add";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import AccountTreeRounded from "@mui/icons-material/AccountTreeRounded";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import FileUploadRounded from "@mui/icons-material/FileUploadRounded";
import EditRounded from "@mui/icons-material/EditRounded";
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
import ConfirmationDialog from "@/components/confirmationDialog";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import MainTableMenu from "@/components/mainTableMenu";
import TableInfomationStatus from "@/components/fpb/tableInformationStatus";

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
    minWidth: 175,
    isShow: true,
  },
  {
    id: "pta",
    label: "PTA",
    minWidth: 110,
    isShow: true,
    align: "left",
    group: "Upload Document",
  },
  {
    id: "io",
    label: "IO",
    minWidth: 110,
    isShow: true,
    group: "Upload Document",
  },
  {
    id: "other",
    label: "Other",
    minWidth: 110,
    isShow: true,
    group: "Upload Document",
  },
  {
    id: "materialName",
    label: "Material Name",
    minWidth: 230,
    isShow: true,
  },
  {
    id: "category",
    label: "Category",
    minWidth: 90,
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
    id: "requesterNotes",
    label: "Requester Notes",
    minWidth: 202,
    isShow: true,
  },
  {
    id: "ictNotes",
    label: "ICT Notes",
    minWidth: 202,
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
    minWidth: 256,
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
    minWidth: 500,
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
    materialName: "Hydrogen Fuel Cell extra long",
    category: "Non-ICT",
    price: 8989871212112,
    qtyPB: 111111,
    uom: "UN",
    total: 898989122121212,
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    file: "",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // ictNotes: "",
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picPurc: "bukan aku",
    // purchasingNotes: "",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    noPo: 123,
    approval: "pending",
    purchase: "approved",
    // informationStatus: "",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    approval: "canceled",
    purchase: "rejected",
    informationStatus: "none",
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

function handleEdit(row, col) {
  console.log("handle edit:", col);
  console.log(row);
}

const dialogTypes = {
  pta: "PTA",
  other: "Other",
  track: "Track",
  requesterNotes: "Requester Notes",
  ictNotes: "ICT Notes",
  purchasingNotes: "Purchasing Notes",
  informationStatus: "Information Status",
};

export default function FpbRequester() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [statusSelect, setStatusSelect] = React.useState("All");
  const handleStatusSelect = (event) => {
    setStatusSelect(event.target.value);
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

  const [dialogType, setDialogType] = React.useState(dialogTypes.pta);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogBody, setDialogBody] = React.useState("");
  const [confirmDialog, setConfirmDialog] = React.useState(false);

  function dialogAction() {
    console.log("dialogAction");
  }

  const customCell = [
    {
      id: "fpbnumber",
      element: (row, col) => {
        const value = row[col.id];
        return (
          <TableCell key={col.id} align="left">
            <Typography variant="bodyTable1" sx={{ pl: 1 }}>
              {value}
            </Typography>
            <br />
            <Button
              variant="text"
              size="small"
              onClick={(e) => handleEdit(row, value)}
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
      id: ["pta", "other"],
      element: (row, col) => {
        return (
          <TableCell key={col.id} align="center">
            <Button
              variant="text"
              size="small"
              onClick={(e) => {
                setDialogType(dialogTypes[col.id]);
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
      id: [
        "requesterNotes",
        "ictNotes",
        "purchasingNotes",
        "informationStatus",
      ],
      element: (row, col) => {
        const value = row[col.id];
        return (
          <TableCell key={col.id} align="left">
            {((col.id == "requesterNotes" || col.id == "ictNotes") &&
              value.length > 50) ||
            (col.id == "purchasingNotes" && value.length > 60) ||
            (col.id == "informationStatus" && value.length > 135) ? (
              <>
                <Typography variant="bodyTable1">
                  {col.id == "requesterNotes" || col.id == "ictNotes"
                    ? value.substring(0, 50)
                    : col.id == "purchasingNotes"
                    ? value.substring(0, 60)
                    : col.id == "informationStatus"
                    ? value.substring(0, 135)
                    : ""}
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
    {
      id: "trackStatus",
      element: (row, col) => {
        return (
          <TableCell key={col.id} align="center">
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
              }}
              onClick={(e) => router.replace("/fpb/create")}
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
                <MenuItem value={"Canceled"}>Canceled</MenuItem>
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
              "Canceled by User",
              "Approved",
              "Rejected",
              "PO Process",
              "Ready for pick up",
              "Delivered",
            ]}
          />
        </Paper>
      </Box>
      <ActionDialogFpb
        type={dialogType}
        isOpen={openDialog}
        handleClose={(e) => setOpenDialog(false)}
        action={dialogAction}
        bodyValue={dialogBody}
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
