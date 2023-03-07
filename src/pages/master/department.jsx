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
import RowButtonSimple from "@/components/rowSimplified/rowButtonSimple";
import RowMasterImport from "@/components/rowSimplified/rowMasterImport";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";

const columns = [
  {
    id: "action",
    label: "Action",
    minWidth: 160,
    isShow: true,
  },
  {
    id: "idUnit",
    label: "ID Unit",
    minWidth: 110,
    isShow: true,
  },
  {
    id: "company",
    label: "Company",
    minWidth: 120,
    isShow: true,
  },
  {
    id: "unitName",
    label: "Unit Name",
    minWidth: 300,
    isShow: true,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 110,
    isShow: true,
  },
];

export default function MasterDepartment() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();

  const [fileInput, setFileInput] = React.useState([]);
  const handleFileInput = (e) => {
    setFileInput(e.target.files[0]);
    console.log("file:", fileInput);
  };
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

  const [idUnit, setIdUnit] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [unitName, setUnitName] = React.useState("");
  const [rowStatusSelect, setRowStatusSelect] = React.useState(
    masterStatus.active
  );

  const rows = [
    {
      action: null,
      unitName: "Pengembangan Ent E E",
      idUnit: "UK98",
      company: "STEM",
      status: masterStatus.active,
    },
    {
      action: null,
      unitName: "Pengembangan CSE",
      idUnit: "UK99",
      company: "STEM",
      status: masterStatus.active,
    },
  ];

  function handleActionEdit(row) {
    setIdUnit(row.idUnit);
    setCompany(row.company);
    setUnitName(row.unitName);
    setRowStatusSelect(masterStatus.active);
    setDialogType(dialogTypesMaster.editDepartment);
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
        <title>Master Department</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <PageHeader icon={<CubeScanIcon />} title="Master Department" />
      <Box sx={{ p: 2 }}>
        <RowButtonSimple
          md={1}
          text="Dept."
          buttonOnClick={(e) => {
            setIdUnit("");
            setUnitName("");
            setCompany("");
            setDialogType(dialogTypesMaster.addDepartment);
            setOpenDialog(true);
          }}
        />
        <RowMasterImport
          md={1}
          handleButton2={(e) => {
            const URL =
              "https://ws-dev.prasetiyamulya.ac.id/fpb/C_master/download_template_material";
            if (typeof window !== "undefined") {
              window.location.href = URL;
            }
          }}
          handleFileInput={handleFileInput}
        />
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
        idUnit={idUnit}
        setIdUnit={setIdUnit}
        unitName={unitName}
        setUnitName={setUnitName}
        company={company}
        setCompany={setCompany}
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
