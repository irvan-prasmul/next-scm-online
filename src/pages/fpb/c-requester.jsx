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
import Paper from "@mui/material/Paper";
import Add from "@mui/icons-material/Add";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import moment from "moment/moment";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import ConfirmationDialog from "@/components/confirmationDialog";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/fpb/tableInformationStatus";
import {
  textWithEditOrCancelTextButton,
  imageView,
  uploadDocument,
  longTextWithReadMore,
  iconView,
  trackStatus,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import { paginationPropType } from "@/types";
import RowButtonSimple from "@/components/rowSimplified/rowButtonSimple";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/column-normalize";

const columns = [
  columnNormalize.id,
  columnNormalize.created,
  columnNormalize.fpbNumber,
  columnNormalize.pta,
  columnNormalize.other,
  columnNormalize.materialName,
  columnNormalize.category,
  columnNormalize.price,
  columnNormalize.qtyPB,
  columnNormalize.uom,
  columnNormalize.total,
  columnNormalize.constCenter,
  columnNormalize.planDate,
  columnNormalize.file,
  columnNormalize.requesterNotes,
  columnNormalize.ictNotes,
  columnNormalize.picPurc,
  columnNormalize.purchasingNotes,
  columnNormalize.noPo,
  columnNormalize.approval,
  columnNormalize.purchase,
  columnNormalize.informationStatus,
  columnNormalize.trackStatus,
];

const rows = [
  {
    id: 1,
    created: "1976-04-19T12:59-0500",
    fpbNumber: "F23100468",
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
    fpbNumber: "F23100469",
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

const statusDdlValues = [
  { value: "all", text: "All" },
  { value: "waiting", text: "Waiting for Approval" },
  { value: "approved", text: "Approved" },
  { value: "rejected", text: "Rejected" },
  { value: "canceled", text: "Canceled" },
];

function handleEdit(row, col) {
  console.log("handle edit:", col);
  console.log(row);
}

export default function FpbRequester() {
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
  const [confirmDialog, setConfirmDialog] = React.useState(false);

  function dialogAction() {
    console.log("dialogAction");
  }

  const customCell = [
    textWithEditOrCancelTextButton({
      id: "fpbNumber",
      handleEdit,
      setConfirmDialog,
    }),
    uploadDocument({
      id: ["pta", "other"],
      setDialogType,
      setOpenDialog,
    }),
    imageView({ id: "file" }),
    longTextWithReadMore({
      id: [
        "requesterNotes",
        "ictNotes",
        "purchasingNotes",
        "informationStatus",
      ],
      limit: {
        requesterNotes: 50,
        ictNotes: 50,
        purchasingNotes: 60,
        informationStatus: 135,
      },
      setDialogType,
      setDialogBody,
      setOpenDialog,
    }),
    iconView({ id: ["approval", "purchase"] }),
    trackStatus({
      id: "trackStatus",
      setDialogType,
      setOpenDialog,
    }),
  ];

  return (
    <>
      <Head>
        <title>FPB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/scm-online/favicon.ico" />
      </Head>
      <PageHeader icon={<ShoppingCart />} title="FPB Dashboard (Non-Stock)" />
      <Box sx={{ p: 2 }}>
        <RowButtonSimple
          md={1}
          text="FPB"
          buttonText="Create New"
          buttonOnClick={(e) => router.replace("/fpb/create")}
        />
        <RowDdlSimple
          md={1}
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
