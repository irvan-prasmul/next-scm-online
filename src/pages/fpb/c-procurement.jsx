import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import ActionDialogMaterialItem from "@/components/fpb/actionDialogMaterialItem";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/tableInformationStatus";
import NewspaperVariantOutlineIcon from "mdi-react/NewspaperVariantOutlineIcon";
import {
  fpbNumberTextDownload,
  imageView,
  longTextWithReadMore,
  procurementAction,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import {
  confirmationType,
  dialogTypesFpb,
  paginationPropType,
} from "@/globals/types";
import ConfirmationDialog from "@/components/confirmationDialog";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/globals/column-normalize";

const columns = [
  columnNormalize.id,
  columnNormalize.action2Button,
  columnNormalize.status,
  columnNormalize.fpbNumber,
  columnNormalize.materialName,
  columnNormalize.category,
  columnNormalize.qtyPO,
  columnNormalize.uom,
  columnNormalize.price,
  columnNormalize.total,
  columnNormalize.noPo,
  columnNormalize.vendor,
  columnNormalize.constCenter,
  columnNormalize.planDate,
  columnNormalize.file,
  columnNormalize.requesterNotes,
  columnNormalize.created,
  columnNormalize.requesterName,
  columnNormalize.department,
  columnNormalize.activity,
  columnNormalize.ioBudget,
  columnNormalize.eventName,
  columnNormalize.eventDate,
  columnNormalize.eventPic,
  columnNormalize.eventContact,
  columnNormalize.picPurc,
  columnNormalize.purchasingNotes,
  columnNormalize.documentStatus,
  columnNormalize.informationStatus,
  columnNormalize.reviewIct,
  columnNormalize.ictNotes,
  columnNormalize.docPta,
  columnNormalize.docIo,
  columnNormalize.docOther,
];

const rows = [
  {
    id: 1,
    action: null,
    status: "pending",
    fpbNumber: "F23100468",
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
    procurementAction({
      id: "action",
      handleCheck: (row, col) => {
        setConfirmType(confirmationType.approve);
        setConfirmDialog(true);
      },
      handleClose: (row, col) => {
        setConfirmType(confirmationType.reject);
        setConfirmDialog(true);
      },
    }),
    fpbNumberTextDownload({ id: "fpbNumber" }),
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
      handleReadMore: (row, col) => {
        const value = row[col.id];
        setDialogType(dialogTypesFpb[col.id]);
        setDialogBody(value);
        setOpenDialog(true);
      },
      handleEdit: (row, col) => {
        const value = row[col.id];
        setDialogType(dialogTypesFpb[col.id] + "#EDIT#");
        setDialogBody(value ?? "");
        setOpenDialog(true);
      },
    }),
  ];

  return (
    <>
      <Head>
        <title>Home</title>
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
