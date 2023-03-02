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
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import EditRounded from "@mui/icons-material/EditRounded";
import CheckBox from "@mui/icons-material/CheckBox";
import CloseRounded from "@mui/icons-material/CloseRounded";
import Cancel from "@mui/icons-material/Cancel";
import HourglassFullTwoTone from "@mui/icons-material/HourglassFullTwoTone";
import MainTable from "@/components/mainTable";
import _ from "lodash";
import moment from "moment/moment";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import GradingRounded from "@mui/icons-material/GradingRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import DriveFileRenameOutlineRounded from "@mui/icons-material/DriveFileRenameOutlineRounded";
import ActionDialogMaterialItem from "@/components/fpb/actionDialogMaterialItem";
import MainTableMenu from "@/components/mainTableMenu";
import TableInfomationStatus from "@/components/fpb/tableInformationStatus";

const columns = [
  { id: "id", label: "#", minWidth: 22, isShow: true, align: "center" },
  {
    id: "reviewer",
    label: "Reviewer",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "fpbnumber",
    label: "FPB Number",
    minWidth: 110,
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
    id: "qtyPO",
    label: "Qty PO",
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
    id: "vendor",
    label: "Vendor",
    minWidth: 100,
    isShow: true,
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
    id: "requesterNotes",
    label: "Requester Notes",
    minWidth: 202,
    isShow: true,
  },
  {
    id: "docPta",
    label: "Doc PTA",
    minWidth: 115,
    isShow: true,
    align: "left",
  },
  {
    id: "docIo",
    label: "Doc IO",
    minWidth: 115,
    isShow: true,
    align: "left",
  },
  {
    id: "docOther",
    label: "Other Doc",
    minWidth: 115,
    isShow: true,
    align: "left",
  },
  {
    id: "activity",
    label: "Activity",
    minWidth: 110,
    isShow: true,
    align: "left",
  },
  {
    id: "ioBudget",
    label: "IO Budget",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "eventName",
    label: "Event Name",
    minWidth: 210,
    isShow: true,
    align: "left",
  },
  {
    id: "eventDate",
    label: "Event Date",
    minWidth: 100,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  {
    id: "eventPic",
    label: "Event PIC",
    minWidth: 115,
    isShow: true,
    align: "left",
  },
  {
    id: "eventContact",
    label: "Event Contact",
    minWidth: 115,
    isShow: true,
    align: "left",
  },
  {
    id: "picPurc",
    label: "PIC Purc.",
    minWidth: 90,
    isShow: true,
    align: "left",
  },
  {
    id: "purchasingNotes",
    label: "Purchasing Notes",
    minWidth: 256,
    isShow: true,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "informationStatus",
    label: "Information Status",
    minWidth: 500,
    isShow: true,
  },
  {
    id: "documentStatus",
    label: "Document Status",
    minWidth: 500,
    isShow: true,
  },
  //
];

const rows = [
  {
    id: 1,
    reviewer: null,
    fpbnumber: "F23100468",
    noPo: null,
    materialName: "Fuel Cell",
    price: 898987,
    qtyPo: 1,
    uom: "UN",
    total: 898989,
    vendor: null,
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    file: "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181676451233.png",
    requesterName: "Irvan",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    docPta:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14151233.png",
    docIo:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/151233.png",
    docOther:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181333.png",
    activity: "IO",
    ioBudget: 3313212,
    eventName: "test Community Development II STEM (Periode 1)",
    eventDate: "1976-04-19T12:59-0500",
    eventPic: "test",
    category: "Non-ICT",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ictNotes: "ictNotes",
    picPurc: "bukan aku",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "pending",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    documentStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  // {
  //   id: 2,
  //   reviewer: null,
  //   fpbnumber: "F23100468",
  //   noPo: null,
  //   materialName: "Fuel Cell",
  //   price: 898987,
  //   qtyPo: 1,
  //   uom: "UN",
  //   total: 898989,
  //   vendor: null,
  //   constCenter: "SBE Dekanat",
  //   planDate: "1976-04-19T12:59-0500",
  //   file: "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181676451233.png",
  //   requesterName: "Irvan",
  //   requesterNotes:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   docPta: null,
  //   docIo: null,
  //   docOther: null,
  //   activity: "IO",
  //   ioBudget: 3313212,
  //   eventName: "test Community Development II STEM (Periode 1)",
  //   eventDate: "1976-04-19T12:59-0500",
  //   eventPic: "test",
  //   category: "Non-ICT",
  //   requesterNotes: "test",
  //   ictNotes: "ictNotes",
  //   picPurc: "bukan aku",
  //   purchasingNotes:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   status: "pending",
  //   informationStatus:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   documetStatus:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
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
  purchasingNotes: "Purchasing Notes",
  informationStatus: "Information Status",
  documentStatus: "Document Status",
  reviewer: "Reviewer",
};

export default function FpbReviewer() {
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

  function dialogAction() {
    console.log("dialogAction");
  }

  const customCell = [
    {
      id: "reviewer",
      element: (row, col) => {
        return (
          <TableCell key={col.id} align="center">
            <Button
              variant="contained"
              size="small"
              color="primaryButton"
              onClick={(e) => {
                setDialogType(dialogTypes[col.id]);
                setOpenDialog(!openDialog);
              }}
            >
              <EditRounded fontSize="small" />
              <Typography variant="bodyTable1">Input</Typography>
            </Button>
          </TableCell>
        );
      },
    },
    {
      id: ["file", "docPta", "docIo", "docOther"],
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
      id: "materialName",
      element: (row, col) => {
        const value = row[col.id];
        return (
          <TableCell key={col.id} align="left">
            <Button
              variant="text"
              color="primaryButton"
              size="small"
              onClick={(e) => setEditItemDialog(true)}
            >
              <Typography variant="bodyCst1">{value}</Typography>
              <DriveFileRenameOutlineRounded sx={{ fontSize: "1.25rem" }} />
            </Button>
          </TableCell>
        );
      },
    },
    {
      id: "status",
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
      id: [
        "requesterNotes",
        "purchasingNotes",
        "informationStatus",
        "documentStatus",
      ],
      element: (row, col) => {
        const value = row[col.id];
        return (
          <TableCell key={col.id} align="left">
            {(col.id == "requesterNotes" && value.length > 50) ||
            (col.id == "purchasingNotes" && value.length > 60) ||
            ((col.id == "informationStatus" || col.id == "documentStatus") &&
              value.length > 135) ? (
              <>
                <Typography variant="bodyTable1">
                  {col.id == "requesterNotes"
                    ? value.substring(0, 50)
                    : col.id == "purchasingNotes"
                    ? value.substring(0, 60)
                    : col.id == "informationStatus" ||
                      col.id == "documentStatus"
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
        <GradingRounded />
        <Typography variant="h6">Review FPB</Typography>
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
            <Typography variant="h7">Review Status</Typography>
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
                <MenuItem value={"Canceled"}>Canceled by user</MenuItem>
                <MenuItem value={"Waiting"}>Waiting</MenuItem>
                <MenuItem value={"Reviewed"}>Reviewed</MenuItem>
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
              "Purchase Order",
              "Finance",
              "Goods Receipt",
              "Good Issue",
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
      {/* <ConfirmationDialog
        type={"cancel"}
        isOpen={confirmDialog}
        handleClose={(e) => setConfirmDialog(false)}
        action={dialogAction}
      /> */}
    </>
  );
}