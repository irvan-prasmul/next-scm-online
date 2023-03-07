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

const columns = [
  {
    id: "action",
    label: "Action",
    minWidth: 160,
    isShow: true,
  },
  {
    id: "vendor",
    label: "Vendor",
    minWidth: 200,
    isShow: true,
  },
  {
    id: "telp",
    label: "Telp",
    minWidth: 120,
    isShow: true,
  },
  {
    id: "email",
    label: "Email",
    minWidth: 120,
    isShow: true,
  },
  {
    id: "address",
    label: "Address",
    minWidth: 170,
    isShow: true,
  },
  {
    id: "material",
    label: "Material",
    minWidth: 120,
    isShow: true,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 110,
    isShow: true,
  },
];

export default function MasterVendor() {
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
  const [confirmType, setConfirmType] = React.useState("");
  const [confirmDialog, setConfirmDialog] = React.useState(false);

  const [vendor, setVendor] = React.useState("");
  const [telp, setTelp] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [material, setMaterial] = React.useState("");
  const [rowStatusSelect, setRowStatusSelect] = React.useState(
    masterStatus.active
  );

  const rows = [
    {
      action: null,
      email: "",
      vendor: "Zeals Digital Asia",
      telp: "2139810938",
      address: "SBE BVDI",
      material: "SBE",
      status: masterStatus.active,
    },
    {
      action: null,
      email: "",
      vendor: "Yasin Global Training",
      telp: "1313123123",
      address: "SBE Dekanat",
      material: "SBE",
      status: masterStatus.active,
    },
  ];

  function handleActionEdit(row) {
    setVendor(row.vendor);
    setTelp(row.telp);
    setEmail(row.email);
    setAddress(row.address);
    setMaterial(row.material);
    setRowStatusSelect(masterStatus.active);
    setDialogType(dialogTypesMaster.editVendor);
    setOpenDialog(true);
  }

  function handleActionDelete(e) {
    setConfirmType(confirmationType.delete);
    setConfirmDialog(true);
  }

  const customCell = [
    editAndDeleteAction({
      id: "action",
      handleEdit: handleActionEdit,
      handleDelete: handleActionDelete,
    }),
  ];

  return (
    <>
      <Head>
        <title>Master Vendor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <PageHeader icon={<CubeScanIcon />} title="Master Vendor" />
      <Box sx={{ p: 2 }}>
        <RowDdlSimple
          md={1}
          text="Status"
          ddlValue={statusSelect}
          ddlValues={masterStatusDdlValues}
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
      <ActionDialogMaster
        type={dialogType}
        isOpen={openDialog}
        handleClose={(e) => setOpenDialog(false)}
        action={(e) => {
          console.log("action");
        }}
        vendor={vendor}
        setVendor={setVendor}
        telp={telp}
        setTelp={setTelp}
        email={email}
        setEmail={setEmail}
        address={address}
        setAddress={setAddress}
        material={material}
        setMaterial={setMaterial}
        rowStatusSelect={rowStatusSelect}
        setRowStatusSelect={setRowStatusSelect}
      />
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
