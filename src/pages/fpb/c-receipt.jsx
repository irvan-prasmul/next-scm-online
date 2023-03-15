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
  iconView,
  longTextWithReadMore,
  warehouseFpbReceipt,
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
  columnNormalize.action1Button,
  columnNormalize.status,
  columnNormalize.materialName,
  columnNormalize.qtyPO,
  columnNormalize.qtyReceipt,
  columnNormalize.uom,
  columnNormalize.price,
  columnNormalize.total,
  columnNormalize.fpbNo,
  columnNormalize.noPo,
  columnNormalize.constCenter,
  columnNormalize.planDate,
  columnNormalize.requesterNotes,
  columnNormalize.picPurc,
  columnNormalize.purchasingNotes,
  columnNormalize.informationStatus,
];

const rows = [
  {
    id: 1,
    action: "waiting",
    status: "active",
    materialName: "Fuel Cell",
    qtyPo: 1,
    uom: "UN",
    price: 898987,
    total: 898989,
    fpbNumber: "F23100468",
    noPo: "4020006810",
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picPurc: "YYM",
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    action: "ready",
    status: "active",
    materialName: "Fuel Cell",
    qtyPo: 1,
    uom: "UN",
    price: 898987,
    total: 898989,
    fpbNumber: "F23100468",
    noPo: "4020006810",
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picPurc: "YYM",
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    action: "received",
    status: "active",
    materialName: "Fuel Cell",
    qtyPo: 1,
    uom: "UN",
    price: 898987,
    total: 898989,
    fpbNumber: "F23100468",
    noPo: "4020006810",
    constCenter: "SBE Dekanat",
    planDate: "1976-04-19T12:59-0500",
    requesterNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picPurc: "YYM",
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const statusDdlValues = [
  { value: "all", text: "All" },
  { value: "waiting", text: "Waiting" },
  { value: "ready", text: "Ready for Pick up" },
  { value: "recieved", text: "Already Recieved" },
];

export default function FpbReceipt() {
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
  const [confirmDialogType, setConfirmDialogType] = React.useState(
    confirmationType.receipt
  );

  function dialogAction() {
    console.log("dialogAction");
  }

  const customCell = [
    warehouseFpbReceipt({
      id: "action",
      handleClick: (row, col) => {
        const value = row[col.id];
        setConfirmDialogType(
          value == "waiting"
            ? confirmationType.receipt
            : value == "ready"
            ? confirmationType.ready
            : ""
        );
        setConfirmDialog(true);
      },
    }),
    iconView({ id: "status" }),
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
            statusList={["Purchase Order", "Goods Receipt", "Goods Issue"]}
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
        type={confirmDialogType}
        isOpen={confirmDialog}
        handleClose={(e) => setConfirmDialog(false)}
        action={dialogAction}
      />
    </>
  );
}
