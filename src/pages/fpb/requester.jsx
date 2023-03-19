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
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/general/pageHeader";
import { dialogTypesFpb, paginationPropType } from "@/globals/types";
import RowButtonSimple from "@/components/rowSimplified/rowButtonSimple";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/globals/column-normalize";
import {
  getUserDataReservationDetails,
  getUserModalTracking,
} from "../api/fpb/user";

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

// const rows = [
//   {
//     id: 1,
//     created: "1976-04-19T12:59-0500",
//     fpbNumber: "F23100468",
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
//     id: 2,
//     created: "1976-04-19T12:59-0500",
//     fpbNumber: "F23100469",
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

  const [rows, setRows] = React.useState([]);

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
      id: "noFpb",
      handleEdit: (row, col) => {
        console.log("handle edit");
      },
      handleCancel: (row, col) => {
        console.log("handle cancel");
      },
    }),
    uploadDocument({
      id: ["pta", "io", "otherDoc"],
      handleUpload: (row, col) => {
        setDialogType(dialogTypesFpb[col.id]);
        setOpenDialog(true);
      },
    }),
    imageView({ id: "img" }),
    longTextWithReadMore({
      id: ["x_req_notes", "x_ict_notes", "x_purc_notes", "notes_x"],
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
    iconView({ id: ["status_x", "s_adm"] }),
    trackStatus({
      id: "tracking",
      handleClick: async (row, col) => {
        try {
          const res = await getUserModalTracking();
          let fullTrack = [{ id: "firstRowDummy" }];
          res.tracking_pjk.map((pjk, index) => {
            if (pjk.flag_pjk_level == "A") {
              res.tracking_pjb.map((pjb, index) => {
                fullTrack.push({ ...pjk, ...pjb });
              });
            } else {
              fullTrack.push(pjk);
            }
          });
          res.fullTrack = fullTrack;
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
      const res = await getUserDataReservationDetails({
        draw: 1,
        start: 0,
        length: 10,
        txtIsStock: "F",
      });
      setRows(res.data);
      console.log("api return:", res.data);
    } catch (e) {
      console.log(e);
    }
    // .then((res) => {
    //   console.log("api return:", res);
    // })
    // .catch((e) => {});
  }

  useEffect(() => {
    getTableData();
  }, []);

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
