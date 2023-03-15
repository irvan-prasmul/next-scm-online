import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import GradingRounded from "@mui/icons-material/GradingRounded";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/tableInformationStatus";
import {
  fpbNumberTextDownload,
  iconView,
  imageView,
  longTextWithReadMore,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import {
  confirmationType,
  dialogTypesFpb,
  paginationPropType,
} from "@/globals/types";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import ConfirmationDialog from "@/components/confirmationDialog";
import { columnNormalize } from "@/globals/column-normalize";

const columns = [
  columnNormalize.id,
  columnNormalize.purchaseMethod,
  columnNormalize.picPurc,
  columnNormalize.fpbNo,
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
  columnNormalize.createdDate,
  columnNormalize.requesterName,
  columnNormalize.department,
  columnNormalize.activity,
  columnNormalize.ioBudget,
  columnNormalize.docPta,
  columnNormalize.docIo,
  columnNormalize.docOther,
  columnNormalize.eventName,
  columnNormalize.eventPic,
  columnNormalize.eventContact,
  columnNormalize.ictNotes,
  columnNormalize.purchasingNotes,
  columnNormalize.status,
  columnNormalize.informationStatus,
  columnNormalize.documentStatus,
  columnNormalize.drop,
];

const rows = [
  {
    id: 1,
    purchaseMethod: "CC",
    picPurc: "None",
    fpbNumber: "F23100468",
    materialName: "Fuel Cell",
    category: "Non-ICT",
    qtyPo: 1,
    uom: "UN",
    price: 898987,
    total: 898989,
    noPo: "409338102",
    vendor: "Fatmajaya Cipta Media",
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    file: "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181676451233.png",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdDate: "1976-04-19T12:59-0500",
    requesterName: "Irvan",
    department: "ICT",
    activity: "Non-IO",
    ioBudget: "",
    docPta:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14151233.png",
    docIo:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/151233.png",
    docOther:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181333.png",
    eventName: "test Community Development II STEM (Periode 1)",
    eventDate: "1976-04-19T12:59-0500",
    eventPic: "test",
    eventContact: "1231412",
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "active",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    documentStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    drop: "",
  },
  {
    id: 2,
    purchaseMethod: "CC",
    picPurc: "None",
    fpbNumber: "F23100468",
    materialName: "Fuel Cell",
    category: "Non-ICT",
    qtyPo: 1,
    uom: "UN",
    price: 898987,
    total: 898989,
    noPo: "409338102",
    vendor: "Fatmajaya Cipta Media",
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    file: "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181676451233.png",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdDate: "1976-04-19T12:59-0500",
    requesterName: "Irvan",
    department: "ICT",
    activity: "Non-IO",
    ioBudget: "",
    docPta:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14151233.png",
    docIo:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/151233.png",
    docOther:
      "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181333.png",
    eventName: "test Community Development II STEM (Periode 1)",
    eventDate: "1976-04-19T12:59-0500",
    eventPic: "test",
    eventContact: "1231412",
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "active",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    documentStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    drop: "",
  },
];

const purchaseMethodDdlValues = [
  { value: "all", text: "All" },
  { value: "waiting", text: "Waiting" },
  { value: "cc", text: "CC" },
  { value: "pic", text: "PIC" },
  { value: "user", text: "User" },
];

const picPurchaseDdlValues = [
  { value: "all", text: "All" },
  { value: "dil", text: "DIL" },
  { value: "eso", text: "ESO" },
];

const documenStatusDdlValues = [
  { value: "all", text: "All" },
  { value: "waiting", text: "Waiting" },
  { value: "done", text: "Done" },
];

export default function FpbListPurchasingHead() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [purchaseMethod, setStatusSelect] = React.useState("all");
  const [picPurchase, setPicPurchase] = React.useState("all");
  const [documentStatus, setDocumentStatus] = React.useState("all");

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
    fpbNumberTextDownload({ id: "fpbNumer" }),
    imageView({ id: ["file", "docPta", "docIo", "docOther"] }),
    iconView({ id: "status" }),
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
      handleReadMore: (row, col) => {
        const value = row[col.id];
        setDialogType(dialogTypesFpb[col.id]);
        setDialogBody(value);
        setOpenDialog(true);
      },
    }),
  ];

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageHeader icon={<GradingRounded />} title="Review FPB" />
      <Box sx={{ p: 2 }}>
        <RowDdlSimple
          text="Purchase Method"
          ddlValue={purchaseMethod}
          ddlValues={purchaseMethodDdlValues}
          ddlOnChange={(e) => {
            setStatusSelect(e.target.value);
          }}
        />
        <RowDdlSimple
          text="PIC Purchase"
          ddlValue={picPurchase}
          ddlValues={picPurchaseDdlValues}
          ddlOnChange={(e) => {
            setPicPurchase(e.target.value);
          }}
        />
        <RowDdlSimple
          text="Document Status"
          ddlValue={documentStatus}
          ddlValues={documenStatusDdlValues}
          ddlOnChange={(e) => {
            setDocumentStatus(e.target.value);
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
              "Approved by Procurement",
              "Purchase Order",
              "Goods Receipt",
              "Goods Issue",
            ]}
          />
        </Paper>
      </Box>
      <ActionDialogFpb
        type={dialogType}
        isOpen={openDialog}
        handleClose={(e) => setOpenDialog(false)}
        action={(e) => {
          setConfirmDialog(true);
        }}
        bodyValue={dialogBody}
        setBodyValue={setDialogBody}
      />
      <ConfirmationDialog
        type={confirmationType.save}
        isOpen={confirmDialog}
        handleClose={(e) => setConfirmDialog(false)}
        action={dialogAction}
      />
    </>
  );
}
