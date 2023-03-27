/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import ConfirmationDialog from "@/components/general/confirmationDialog";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/general/tableInformationStatus";
import {
  textWithEditOrCancelTextButton,
  imageView,
  uploadDocument,
  longTextWithReadMore,
  iconView,
  trackStatus,
  autoIncrementNumber,
  renderFpbNumber,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/general/pageHeader";
import {
  dialogTypesFpb,
  informationStatusIcon,
  paginationPropType,
  tableOrder,
} from "@/globals/types";
import RowButtonSimple from "@/components/rowSimplified/rowButtonSimple";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/globals/column-normalize";
import {
  getUserDataReservationDetails,
  getUserModalTracking,
} from "../api/fpb/user";
import {
  commonTableProps,
  handleChangeOrder,
  handleChangePage,
  handleChangeRowsPerPage,
  handleChangeStatus,
  handleColumnChange,
  handleSearchTable,
} from "@/components/mainTable/mainTableCommons";
import MainTablePaginationRow from "@/components/mainTable/mainTablePaginationRow";
import useDeepCompareEffect from "use-deep-compare-effect";

const columns = [
  columnNormalize.id,
  columnNormalize.created,
  columnNormalize.fpbNumber,
  columnNormalize.pta,
  columnNormalize.io,
  columnNormalize.otherDoc,
  columnNormalize.materialName,
  columnNormalize.category,
  columnNormalize.price,
  columnNormalize.qtyPB,
  columnNormalize.uom,
  columnNormalize.total,
  columnNormalize.costCenter,
  columnNormalize.planDate,
  columnNormalize.img,
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

const sortableTableHead = [
  columnNormalize.created.id,
  columnNormalize.materialName.id,
  columnNormalize.price.id,
  columnNormalize.qtyPB.id,
  columnNormalize.planDate.id,
];

// const rows = [
//   {
//     number: 1,
//     created: "1976-04-19T12:59-0500",
//     noFpb: "F23100468",
//     pta: null,
//     io: null,
//     other: null,
//     materialName: "Hydrogen Fuel Cell extra long",
//     category: "Non-ICT",
//     price: 8989871212112,
//     qtyPB: 111111,
//     uom: "UN",
//     total: 898989122121212,
//     costCenter: "SBE Dekanat",
//     planDate: "1976-04-19T12:59-0500",
//     file: "",
//     requesterNotes:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     // ictNotes: "",
//     ictNotes:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     picPurc: "bukan aku",
//     // purchasingNotes: "",
//     purchasingNotes:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     noPo: 123,
//     approval: "pending",
//     purchase: "approved",
//     // informationStatus: "",
//     informationStatus:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     number: 2,
//     created: "1976-04-19T12:59-0500",
//     noFpb: "F23100469",
//     pta: null,
//     io: null,
//     other: null,
//     materialName: "Fuel Cell",
//     category: "Non-ICT",
//     price: 898987,
//     qtyPB: 1,
//     uom: "UN",
//     total: 898989,
//     costCenter: "SBE Dekanat",
//     planDate: "1976-04-19T12:59-0500",
//     file: "https://ws-dev.prasetiyamulya.ac.id/fpb/assets/upload_img/14181676451233.png",
//     requesterNotes: "test",
//     ictNotes: "x_ict_notes",
//     picPurc: "bukan aku",
//     purchasingNotes: "tes",
//     noPo: 123,
//     approval: "canceled",
//     purchase: "rejected",
//     informationStatus: "none",
//   },
// ];

const statusDdlValues = [
  { value: "all", text: "All" },
  { value: "waiting", text: "Waiting for Approval" },
  { value: "approved", text: "Approved" },
  { value: "rejected", text: "Rejected" },
  { value: "canceled", text: "Canceled" },
];

export default function FpbRequester() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  // const [statusSelect, setStatusSelect] = React.useState("all");
  const [columnSelect, setColumnSelect] = React.useState(_.cloneDeep(columns));
  const [tableLoading, setTableLoading] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [tableProps, setTableProps] = React.useState(
    _.cloneDeep(commonTableProps)
  );

  const [dialogType, setDialogType] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogBody, setDialogBody] = React.useState("");
  const [confirmDialog, setConfirmDialog] = React.useState(false);

  function dialogAction() {
    console.log("dialogAction");
  }

  const customCell = [
    autoIncrementNumber({ id: columnNormalize.id.id }),
    renderFpbNumber({
      id: columnNormalize.fpbNumber.id,
      handleEdit: (row, col) => {
        console.log("handle edit");
      },
      handleCancel: (row, col) => {
        console.log("handle cancel");
      },
    }),
    uploadDocument({
      id: [
        columnNormalize.pta.id,
        columnNormalize.io.id,
        columnNormalize.otherDoc.id,
      ],
      handleUpload: (row, col) => {
        setDialogType(dialogTypesFpb[col.id]);
        setOpenDialog(true);
      },
    }),
    imageView({ id: columnNormalize.img.id }),
    longTextWithReadMore({
      id: [
        columnNormalize.requesterNotes.id,
        columnNormalize.ictNotes.id,
        columnNormalize.purchasingNotes.id,
        columnNormalize.informationStatus.id,
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
    iconView({
      id: [columnNormalize.approval.id, columnNormalize.purchase.id],
    }),
    trackStatus({
      id: columnNormalize.trackStatus.id,
      handleClick: async (row, col) => {
        try {
          const res = await getUserModalTracking("tes");
          setDialogBody(res);
          setDialogType(dialogTypesFpb.track);
          setOpenDialog(true);
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ];

  async function getTableData() {
    try {
      setTableLoading(true);
      const res = await getUserDataReservationDetails(tableProps);
      if (Array.isArray(res.data.data)) {
        setRows(res.data.data);
        setTableProps((prevState) => ({
          ...prevState,
          totalRows: res.data.total,
        }));
      }

      console.log("api return:", res.data);
    } catch (e) {
      console.log(e);
    }
    setTableLoading(false);
  }

  useEffect(() => {
    getTableData();
  }, [
    tableProps.page,
    tableProps.rowsPerPage,
    tableProps.status,
    tableProps.orderBy,
    tableProps.order,
  ]);

  return (
    <>
      <Head>
        <title>FPB</title>
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
          ddlValue={tableProps.status}
          ddlValues={statusDdlValues}
          ddlOnChange={(e) => {
            handleChangeStatus(e.target.value, setTableProps);
          }}
        />
        <MainTableMenu
          handleRefreshTable={(e) => {
            console.log("refresh table:", tableProps);
            getTableData();
          }}
          searchTable={tableProps.search}
          handleSearchTable={(e) =>
            handleSearchTable(e.target.value, setTableProps)
          }
          columnSelect={columnSelect}
          handleColumnChange={(id) =>
            handleColumnChange(id, columns, setColumnSelect, columnSelect)
          }
        />
        <Paper sx={{ width: "100%", mt: 2 }}>
          <MainTable
            isLoading={tableLoading}
            columns={columnSelect}
            rows={rows}
            customCell={customCell}
            page={tableProps.page}
            rowsPerPage={tableProps.rowsPerPage}
            sortableTableHead={sortableTableHead}
            orderBy={tableProps.orderBy}
            order={tableProps.order}
            handleSortableHeader={(colId) => {
              handleChangeOrder(colId, setTableProps);
            }}
          />
          <MainTablePaginationRow
            page={tableProps.page}
            rowsPerPage={tableProps.rowsPerPage}
            paginationProp={paginationPropType.qtyAndTotal}
            totalRows={tableProps.totalRows}
            handleChangePage={(event, newPage) => {
              handleChangePage(newPage, setTableProps);
            }}
            handleChangeRowsPerPage={(e) => {
              handleChangeRowsPerPage(e.target.value, setTableProps);
            }}
          />
        </Paper>
        <Paper sx={{ width: 300, mt: 2 }}>
          <TableInfomationStatus
            statusList={[
              informationStatusIcon.waiting,
              informationStatusIcon.cancelledByUser,
              informationStatusIcon.approved,
              informationStatusIcon.rejected,
              informationStatusIcon.poProcess,
              informationStatusIcon.readyForPickup,
              informationStatusIcon.delivered,
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
