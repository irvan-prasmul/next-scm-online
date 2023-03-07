import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CheckBox from "@mui/icons-material/CheckBox";
import CloseRounded from "@mui/icons-material/CloseRounded";
import Cancel from "@mui/icons-material/Cancel";
import HourglassFullTwoTone from "@mui/icons-material/HourglassFullTwoTone";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import moment from "moment/moment";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import ActionDialogMaterialItem from "@/components/fpb/actionDialogMaterialItem";
import ConfirmationDialog from "@/components/confirmationDialog";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/fpb/tableInformationStatus";
import {
  iconView,
  imageView,
  longTextWithReadMore,
  pjkAction,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import { paginationPropType } from "@/types";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";

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

const statusDdlValues = [
  { value: "all", text: "All" },
  { value: "waiting", text: "Waiting for Approval" },
  { value: "approved", text: "Approved" },
  { value: "rejected", text: "Rejected" },
  { value: "canceled", text: "Canceled by User" },
];

export default function FpbAprrovalPJKegiatan() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [statusSelect, setStatusSelect] = React.useState("all");

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

  const [dialogType, setDialogType] = React.useState("");
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
    pjkAction({ id: "action", setConfirmType, setConfirmDialog }),
    imageView({ id: "file" }),
    longTextWithReadMore({
      id: "requesterNotes",
      limit: {
        requesterNotes: 50,
      },
      setDialogType,
      setDialogBody,
      setOpenDialog,
    }),
    iconView({ id: ["approval", "purchase"] }),
  ];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <PageHeader icon={<CheckBox />} title="Approval PJ Kegiatan" />
      <Box sx={{ p: 2 }}>
        <RowDdlSimple
          text="Status"
          ddlValue={statusSelect}
          ddlValues={statusDdlValues}
          ddlOnChange={(e) => {
            setStatusSelect(e.target.value);
          }}
        />
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
            paginationProp={paginationPropType.qtyAndTotal}
            qty={1234567890}
            total={1234567890}
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
