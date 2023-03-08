import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import CubeScanIcon from "mdi-react/CubeScanIcon";
import {
  editAndDeleteAction,
  openExpandedRow,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import Add from "@mui/icons-material/Add";
import {
  confirmationType,
  dialogTypesMaster,
  dummyDdlAll,
  masterStatus,
  masterStatusDdlValues,
} from "@/types";
import ActionDialogMaster from "@/components/master/actionDialogMaster";
import FileDocumentOutlineIcon from "mdi-react/FileDocumentOutlineIcon";
import FileExcelOutlineIcon from "mdi-react/FileExcelOutlineIcon";
import FilePowerpointOutlineIcon from "mdi-react/FilePowerpointOutlineIcon";
import ConfirmationDialog from "@/components/confirmationDialog";
import CloudUpload from "@mui/icons-material/CloudUpload";
import CloudDownload from "@mui/icons-material/CloudDownload";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import { tableExpandedRows } from "@/components/mainTable/maintableCustomRows";
import ClosedCaptionOutlined from "@mui/icons-material/ClosedCaptionOutlined";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import NewspaperVariantMultipleOutlineIcon from "mdi-react/NewspaperVariantMultipleOutlineIcon";
import ArrowForward from "@mui/icons-material/ArrowForward";
import RowDatePickerSimple from "@/components/rowSimplified/rowDatePickerSimple";
import RowDateRangePickerSimple from "@/components/rowSimplified/rowDateRangePickerSimple";
import { addDays } from "date-fns";

const columns = [
  {
    id: "id",
    label: "#",
    minWidth: 22,
    isShow: true,
  },
  {
    id: "fpbnumber",
    label: "No. FPB",
    minWidth: 175,
    isShow: true,
  },
  {
    id: "noPo",
    label: "No. PO",
    minWidth: 80,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "created",
    label: "Created",
    minWidth: 100,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  {
    id: "requester",
    label: "Requester",
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
    id: "qtyPB",
    label: "Qty PB",
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
    id: "estPrice",
    label: "Est Price",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "totalEst",
    label: "Total Est",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "netPrice",
    label: "Net Price",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  {
    id: "totalNet",
    label: "Total Net",
    minWidth: 120,
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
    id: "status",
    label: "Status",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "informationStatus",
    label: "Information Status",
    minWidth: 500,
    isShow: true,
  },
];

export default function ReportsRequestVendor() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();

  const [period, setPeriod] = React.useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [status, setStatus] = React.useState("all");
  const [vendor, setVendor] = React.useState("all");

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
  const [confirmType, setConfirmType] = React.useState("");
  const [confirmDialog, setConfirmDialog] = React.useState(false);
  const rows = [];

  const customCell = [];

  return (
    <>
      <Head>
        <title>Report</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <PageHeader
        icon={<NewspaperVariantMultipleOutlineIcon />}
        title={["Report", "Request", "Vendor"]}
      />
      <Box sx={{ p: 2 }}>
        <RowDateRangePickerSimple
          md={2}
          text="Period"
          dateValue={period}
          dateOnChange={(e) => {
            console.log("setdate:", e);
            setPeriod([e.selection]);
          }}
        />
        <RowDdlSimple
          md={2}
          text="Status"
          ddlValue={status}
          ddlValues={dummyDdlAll}
          ddlOnChange={(e) => setStatus(e.target.value)}
        />
        <RowDdlSimple
          md={2}
          text="Vendor"
          ddlValue={vendor}
          ddlValues={dummyDdlAll}
          ddlOnChange={(e) => setVendor(e.target.value)}
        />
        <MainTableMenu
          handleRefreshTable={(e) => {
            console.log("refresh table");
          }}
          searchTable={searchTable}
          handleSearchTable={handleSearchTable}
          columnSelect={columnSelect}
          handleColumnChange={handleColumnChange}
          customButtons={[
            <Button
              key="1"
              size="small"
              onClick={(e) => {
                const URL =
                  "https://ws-dev.prasetiyamulya.ac.id/fpb/C_item/print_pdf/7182";
                if (typeof window !== "undefined") {
                  window.location.href = URL;
                }
              }}
            >
              <FileDocumentOutlineIcon sx={{ mr: 1 }} />
              <Typography variant="bodyCst1">CSV</Typography>
            </Button>,
            <Button
              key="2"
              size="small"
              onClick={(e) => {
                const URL =
                  "https://ws-dev.prasetiyamulya.ac.id/fpb/C_item/print_pdf/7182";
                if (typeof window !== "undefined") {
                  window.location.href = URL;
                }
              }}
            >
              <FileExcelOutlineIcon sx={{ mr: 1 }} />
              <Typography variant="bodyCst1">Excel</Typography>
            </Button>,
            <Button
              key="3"
              size="small"
              onClick={(e) => {
                const URL =
                  "https://ws-dev.prasetiyamulya.ac.id/fpb/C_item/print_pdf/7182";
                if (typeof window !== "undefined") {
                  window.location.href = URL;
                }
              }}
            >
              <FilePowerpointOutlineIcon sx={{ mr: 1 }} />
              <Typography variant="bodyCst1">PDF</Typography>
            </Button>,
          ]}
        />
        <Paper sx={{ width: "100%", mt: 2 }}>
          <MainTable
            columns={columnSelect}
            rows={rows}
            maxHeight={1000}
            customCell={customCell}
            isExpandable={true}
          />
        </Paper>
      </Box>
      {/* <ActionDialogReports
        type={dialogType}
        isOpen={openDialog}
        handleClose={(e) => setOpenDialog(false)}
        action={(e) => setValidate(true)}
        isValidate={isValidate}
      /> */}
      <ConfirmationDialog
        type={confirmType}
        isOpen={confirmDialog}
        handleClose={(e) => setConfirmDialog(false)}
        action={() => {
          console.log("confirm action");
        }}
      />
    </>
  );
}
