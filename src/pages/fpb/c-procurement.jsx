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
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import moment from "moment/moment";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import ActionDialogMaterialItem from "@/components/fpb/actionDialogMaterialItem";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/fpb/tableInformationStatus";
import NewspaperVariantOutlineIcon from "mdi-react/NewspaperVariantOutlineIcon";
import {
  fpbNumberTextDownload,
  imageView,
  longTextWithReadMore,
  procurementAction,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import { paginationPropType } from "@/types";
import ConfirmationDialog from "@/components/confirmationDialog";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";

const columns = [
  { id: "id", label: "#", minWidth: 22, isShow: true, align: "center" },
  {
    id: "action",
    label: "Action",
    minWidth: 150,
    isShow: true,
  },
  {
    id: "status",
    label: "Status",
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
    id: "price",
    label: "Price",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
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
    id: "noPo",
    label: "No. PO",
    minWidth: 100,
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
    id: "requesterNotes",
    label: "Requester Notes",
    minWidth: 202,
    isShow: true,
  },
  {
    id: "created",
    label: "Created Date",
    minWidth: 100,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
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
    id: "documentStatus",
    label: "Document Status",
    minWidth: 500,
    isShow: true,
  },
  {
    id: "informationStatus",
    label: "Information Status",
    minWidth: 500,
    isShow: true,
  },
  {
    id: "reviewIct",
    label: "Review ICT",
    minWidth: 110,
    isShow: true,
    align: "left",
  },
  {
    id: "ictNotes",
    label: "ICT Notes",
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
];

const rows = [
  {
    id: 1,
    action: null,
    status: "pending",
    fpbnumber: "F23100468",
    materialName: "Fuel Cell",
    category: "Non-ICT",
    qtyPo: 1,
    uom: "UN",
    price: 898987,
    total: 898989,
    noPo: null,
    vendor: null,
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    file: "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181676451233.png",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    created: "1976-04-19T12:59-0500",
    requesterName: "Irvan",
    department: "UNI-ICT",
    activity: "IO",
    ioBudget: 3313212,
    eventName: "test Community Development II STEM (Periode 1)",
    eventDate: "1976-04-19T12:59-0500",
    eventPic: "test",
    eventContact: "1231412",
    picPurc: "bukan aku",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    documentStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    reviewIct: "test",
    ictNotes: "ictNotes",
    docPta:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14151233.png",
    docIo:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/151233.png",
    docOther:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181333.png",
  },
];

const statusDdlValues = [
  { value: "all", text: "All" },
  { value: "waiting", text: "Waiting for Approval" },
  { value: "approved", text: "Approved" },
  { value: "rejected", text: "Rejected" },
  { value: "PO", text: "PO" },
  { value: "reciept", text: "Reciept" },
  { value: "delivered", text: "Delivered" },
];

export default function FpbProcurement() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [statusSelect, setStatusSelect] = React.useState("all");
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

  const [dialogType, setDialogType] = React.useState("");
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

  const [confirmType, setConfirmType] = React.useState("");
  const [confirmDialog, setConfirmDialog] = React.useState(false);

  const customCell = [
    procurementAction({ id: "action", setConfirmType, setConfirmDialog }),
    fpbNumberTextDownload({ id: "fpbnumber" }),
    imageView({ id: ["file", "docPta", "docIo", "docOther"] }),
    longTextWithReadMore({
      id: [
        "requesterNotes",
        "ictNotes",
        "purchasingNotes",
        "informationStatus",
        "documentStatus",
      ],
      limit: {
        requesterNotes: 50,
        ictNotes: 50,
        purchasingNotes: 60,
        informationStatus: 135,
        documentStatus: 135,
      },
      edit: { requesterNotes: true },
      setDialogType,
      setDialogBody,
      setOpenDialog,
    }),
  ];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <PageHeader icon={<NewspaperVariantOutlineIcon />} title="FPB List" />
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
              "Goods Receipt",
              "Delivered",
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
