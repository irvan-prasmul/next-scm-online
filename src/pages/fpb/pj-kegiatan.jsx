import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CheckBox from "@mui/icons-material/CheckBox";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import ActionDialogMaterialItem from "@/components/fpb/actionDialogMaterialItem";
import ConfirmationDialog from "@/components/general/confirmationDialog";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/general/tableInformationStatus";
import {
  iconView,
  imageView,
  longTextWithReadMore,
  pjkAction,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/general/pageHeader";
import {
  confirmationType,
  dialogTypesFpb,
  informationStatusIcon,
  paginationPropType,
} from "@/globals/types";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/globals/column-normalize";

const columns = [
  columnNormalize.id,
  columnNormalize.action2Button,
  columnNormalize.resvFpbNumber,
  columnNormalize.materialName,
  columnNormalize.price,
  columnNormalize.qty,
  columnNormalize.uom,
  columnNormalize.total,
  columnNormalize.costCenter,
  columnNormalize.planDate,
  columnNormalize.img,
  columnNormalize.requesterName,
  columnNormalize.department,
  columnNormalize.requesterNotes,
  columnNormalize.picPurc,
  columnNormalize.approval,
  columnNormalize.purchase,
];

const rows = [
  {
    number: 1,
    action: null,
    noFpb: "F23100468",
    materialName: "Fuel Cell",
    price: 898987,
    qty: 1,
    uom: "UN",
    total: 898989,
    costCenter: "SBE Dekanat",
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
    pjkAction({
      id: "action",
      handleApprove: () => {
        setConfirmType(confirmationType.approve);
        setConfirmDialog(true);
      },
      handleReject: () => {
        setConfirmType(confirmationType.reject);
        setConfirmDialog(true);
      },
    }),
    imageView({ id: "img" }),
    longTextWithReadMore({
      id: "x_req_notes",
      limit: {
        requesterNotes: 50,
      },
      handleReadMore: (row, col) => {
        const value = row[col.id];
        setDialogType(dialogTypesFpb[col.id]);
        setDialogBody(value);
        setOpenDialog(true);
      },
    }),
    iconView({ id: ["status_x", "s_adm"] }),
  ];

  return (
    <>
      <Head>
        <title>Home</title>
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
              informationStatusIcon.waiting,
              informationStatusIcon.approved,
              informationStatusIcon.rejected,
              informationStatusIcon.purchaseOrder,
              informationStatusIcon.readyForPickup,
              informationStatusIcon.delivered,
              informationStatusIcon.none,
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
