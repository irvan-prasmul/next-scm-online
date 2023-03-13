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
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import CheckBox from "@mui/icons-material/CheckBox";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import moment from "moment/moment";
import IconButton from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import Search from "@mui/icons-material/Search";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/fpb/tableInformationStatus";
import CubeScanIcon from "mdi-react/CubeScanIcon";
import {
  editAndDeleteAction,
  renderSwitch,
} from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import Add from "@mui/icons-material/Add";
import {
  confirmationType,
  dialogTypesMasterMaterial,
  masterMaterialStatus,
  masterStatusDdlValues,
} from "@/types";
import ActionDialogMasterMaterial from "@/components/master/actionDialogMasterMaterial";
import FileDocumentOutlineIcon from "mdi-react/FileDocumentOutlineIcon";
import FileExcelOutlineIcon from "mdi-react/FileExcelOutlineIcon";
import FilePowerpointOutlineIcon from "mdi-react/FilePowerpointOutlineIcon";
import ConfirmationDialog from "@/components/confirmationDialog";
import RowButtonSimple from "@/components/rowSimplified/rowButtonSimple";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/column-normalize";

const columns = [
  columnNormalize.action2Button,
  columnNormalize.materialGroup,
  columnNormalize.description,
  columnNormalize.flagIct,
  columnNormalize.status,
];

const rows = [
  {
    action: null,
    materialGroup: "ZM01",
    description: "Prasmul Stock, valuated",
    flagIct: true,
    status: "active",
  },
  {
    action: null,
    materialGroup: "ZM02",
    description: "Prasmul Stock, Non-value",
    flagIct: false,
    status: "active",
  },
];

export default function MasterMaterialGroup() {
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

  const [materialGroup, setMaterialGroup] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [rowStatusSelect, setRowStatusSelect] = React.useState("active");

  const [selectedFlagIct, setSelectedFlagIct] = React.useState(false);
  const [isValidate, setValidate] = React.useState(false);

  function handleActionEdit(row) {
    setValidate(false);
    setMaterialGroup(row.materialGroup);
    setDescription(row.description);
    setRowStatusSelect("active");
    setDialogType(dialogTypesMasterMaterial.editGroup);
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
    renderSwitch({
      id: "flagIct",
      onChange: (e) => {
        console.log("switched", e);
        setSelectedFlagIct(!e.target.checked);
        setConfirmType(confirmationType.flagIct);
        setConfirmDialog(true);
      },
    }),
  ];

  return (
    <>
      <Head>
        <title>Material Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/scm-online/favicon.ico" />
      </Head>
      <PageHeader icon={<CubeScanIcon />} title="Master Material Group" />
      <Box sx={{ p: 2 }}>
        <RowButtonSimple
          md={1}
          text="Material"
          buttonOnClick={(e) => {
            setValidate(false);
            setMaterialGroup("");
            setDescription("");
            setDialogType(dialogTypesMasterMaterial.addGroup);
            setOpenDialog(true);
          }}
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
          csvButton
          csvButtonAction={(e) => {
            const URL =
              "https://ws-dev.prasetiyamulya.ac.id/fpb/C_item/print_pdf/7182";
            if (typeof window !== "undefined") {
              window.location.href = URL;
            }
          }}
          excelButton
          excelButtonAction={(e) => {
            const URL =
              "https://ws-dev.prasetiyamulya.ac.id/fpb/C_item/print_pdf/7182";
            if (typeof window !== "undefined") {
              window.location.href = URL;
            }
          }}
          pdfButton
          pdfButtonAction={(e) => {
            const URL =
              "https://ws-dev.prasetiyamulya.ac.id/fpb/C_item/print_pdf/7182";
            if (typeof window !== "undefined") {
              window.location.href = URL;
            }
          }}
        />
        <Paper sx={{ width: "100%", mt: 2 }}>
          <MainTable
            columns={columnSelect}
            rows={rows}
            maxHeight={1000}
            customCell={customCell}
          />
        </Paper>
      </Box>
      <ActionDialogMasterMaterial
        type={dialogType}
        isOpen={openDialog}
        handleClose={(e) => setOpenDialog(false)}
        action={(e) => setValidate(true)}
        materialGroup={materialGroup}
        setMaterialGroup={setMaterialGroup}
        description={description}
        setDescription={setDescription}
        rowStatusSelect={rowStatusSelect}
        setRowStatusSelect={setRowStatusSelect}
        isValidate={isValidate}
      />
      <ConfirmationDialog
        type={confirmType}
        isOpen={confirmDialog}
        handleClose={(e) => setConfirmDialog(false)}
        action={() => {
          console.log("confirm action");
        }}
        isValue={selectedFlagIct}
      />
    </>
  );
}
