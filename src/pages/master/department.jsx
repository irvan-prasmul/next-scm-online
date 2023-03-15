import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import CubeScanIcon from "mdi-react/CubeScanIcon";
import { editAndDeleteAction } from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import {
  confirmationType,
  dialogTypesMaster,
  masterStatusDdlValues,
} from "@/globals/types";
import ActionDialogMaster from "@/components/master/actionDialogMaster";
import ConfirmationDialog from "@/components/confirmationDialog";
import RowButtonSimple from "@/components/rowSimplified/rowButtonSimple";
import RowImportSimple from "@/components/rowSimplified/rowImportSimple";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/globals/column-normalize";

const columns = [
  columnNormalize.action2Button,
  columnNormalize.idUnit,
  columnNormalize.company,
  columnNormalize.unitName,
  columnNormalize.status,
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
  const [rowStatusSelect, setRowStatusSelect] = React.useState("active");

  const [isValidate, setValidate] = React.useState(false);

  const rows = [
    {
      action: null,
      unitName: "Pengembangan Ent E E",
      idUnit: "UK98",
      company: "STEM",
      status: "active",
    },
    {
      action: null,
      unitName: "Pengembangan CSE",
      idUnit: "UK99",
      company: "STEM",
      status: "active",
    },
  ];

  function handleActionEdit(row) {
    setValidate(false);
    setIdUnit(row.idUnit);
    setCompany(row.company);
    setUnitName(row.unitName);
    setRowStatusSelect("active");
    setDialogType(dialogTypesMaster.editDepartment);
    setOpenDialog(true);
  }

  function handleActionDelete() {
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
      </Head>
      <PageHeader icon={<CubeScanIcon />} title="Master Department" />
      <Box sx={{ p: 2 }}>
        <RowButtonSimple
          md={1}
          text="Dept."
          buttonOnClick={(e) => {
            setValidate(false);
            setIdUnit("");
            setUnitName("");
            setCompany("");
            setDialogType(dialogTypesMaster.addDepartment);
            setOpenDialog(true);
          }}
        />
        <RowImportSimple
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
            isExpandable={true}
          />
        </Paper>
      </Box>
      <ActionDialogMaster
        type={dialogType}
        isOpen={openDialog}
        handleClose={(e) => setOpenDialog(false)}
        action={(e) => setValidate(true)}
        idUnit={idUnit}
        setIdUnit={setIdUnit}
        unitName={unitName}
        setUnitName={setUnitName}
        company={company}
        setCompany={setCompany}
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
      />
    </>
  );
}
