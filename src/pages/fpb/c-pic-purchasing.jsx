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
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import moment from "moment/moment";
import ActionDialogFpb from "@/components/fpb/actionDialogFpb";
import GradingRounded from "@mui/icons-material/GradingRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import DriveFileRenameOutlineRounded from "@mui/icons-material/DriveFileRenameOutlineRounded";
import ActionDialogMaterialItem from "@/components/fpb/actionDialogMaterialItem";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/tableInformationStatus";
import {
  fpbNumberTextDownload,
  iconView,
  imageView,
  longTextWithReadMore,
  picPurchasingType,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import {
  confirmationType,
  dialogTypesFpb,
  paginationPropType,
  purchasingTypeDdlValues,
} from "@/globals/types";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import ConfirmationDialog from "@/components/confirmationDialog";
import { columnNormalize } from "@/column-normalize";

const columns = [
  columnNormalize.id,
  columnNormalize.purchasingType1Button,
  columnNormalize.fpbNo,
  columnNormalize.noPo,
  columnNormalize.materialName,
  columnNormalize.price,
  columnNormalize.qtyPO,
  columnNormalize.uom,
  columnNormalize.total,
  columnNormalize.vendor,
  columnNormalize.constCenter,
  columnNormalize.planDate,
  columnNormalize.file,
  columnNormalize.requesterName,
  columnNormalize.requesterNotes,
  columnNormalize.docPta,
  columnNormalize.docIo,
  columnNormalize.docOther,
  columnNormalize.ictNotes,
  columnNormalize.picPurc,
  columnNormalize.purchasingNotes,
  columnNormalize.status,
  columnNormalize.informationStatus,
  columnNormalize.documentStatus,
];

const rows = [
  {
    id: 1,
    purchasingType: "waiting",
    fpbNumber: "F23100468",
    noPo: "409338102",
    materialName: "Fuel Cell",
    price: 898987,
    qtyPo: 1,
    uom: "UN",
    total: 898989,
    vendor: "Fatmajaya Cipta Media",
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
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picPurc: "None",
    purchasingNotes: "",
    status: "waiting",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    documentStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    purchasingType: "PO",
    fpbNumber: "F23100468",
    noPo: "409338102",
    materialName: "Fuel Cell",
    price: 898987,
    qtyPo: 1,
    uom: "UN",
    total: 898989,
    vendor: "Fatmajaya Cipta Media",
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
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picPurc: "None",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "active",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    documentStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    purchasingType: "Petty Cash",
    fpbNumber: "F23100468",
    noPo: "409338102",
    materialName: "Fuel Cell",
    price: 898987,
    qtyPo: 1,
    uom: "UN",
    total: 898989,
    vendor: "Fatmajaya Cipta Media",
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
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picPurc: "None",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "finance",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    documentStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    purchasingType: "CC",
    fpbNumber: "F23100468",
    noPo: "409338102",
    materialName: "Fuel Cell",
    price: 898987,
    qtyPo: 1,
    uom: "UN",
    total: 898989,
    vendor: "Fatmajaya Cipta Media",
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
    ictNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picPurc: "None",
    purchasingNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "finance",
    informationStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    documentStatus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const statusDdlValues = [
  { value: "all", text: "All" },
  { value: "waiting", text: "Waiting" },
  { value: "po", text: "PO" },
  { value: "keuangan", text: "Keuangan" },
];

export default function FpbPicPurchasingd() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [status, setStatus] = React.useState("all");
  const [picPurchase, setPicPurchase] = React.useState("all");

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
    picPurchasingType({
      id: "purchasingType",
      handleClick: (row, col) => {
        const value = row[col.id];
        setDialogType(dialogTypesFpb.inputPurchasingtype);
        setDialogBody(row["status"] == "finance" ? "value" : "all");
        setOpenDialog(true);
      },
    }),
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
      edit: { purchasingNotes: true },
      setDialogType,
      setDialogBody,
      setOpenDialog,
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
          ddlValue={status}
          ddlValues={statusDdlValues}
          ddlOnChange={(e) => {
            setStatus(e.target.value);
          }}
        />
        <RowDdlSimple
          text="PIC Purchase"
          ddlValue={picPurchase}
          ddlValues={purchasingTypeDdlValues}
          ddlOnChange={(e) => {
            setPicPurchase(e.target.value);
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
              "Purchase Order",
              "Finance",
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
