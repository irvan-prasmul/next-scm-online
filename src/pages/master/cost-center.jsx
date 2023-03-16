import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import { editAndDeleteAction } from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/general/pageHeader";
import {
  confirmationType,
  dialogTypesMaster,
  masterStatusDdlValues,
} from "@/globals/types";
import ActionDialogMaster from "@/components/master/actionDialogMaster";
import ConfirmationDialog from "@/components/general/confirmationDialog";
import ClosedCaptionOutlined from "@mui/icons-material/ClosedCaptionOutlined";
import RowImportSimple from "@/components/rowSimplified/rowImportSimple";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/globals/column-normalize";

const columns = [
  columnNormalize.action2Button,
  columnNormalize.costCenterId,
  columnNormalize.controllingArea,
  columnNormalize.companyCode,
  columnNormalize.descriptionShort,
  columnNormalize.status,
];

export default function MasterCostCenter() {
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

  const [costCenterId, setCostCenterId] = React.useState("");
  const [controllingArea, setControllingArea] = React.useState("");
  const [companyCode, setCompanyCode] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [profitCenter, setProfitCenter] = React.useState("");
  const [rowStatusSelect, setRowStatusSelect] = React.useState("active");

  const [isValidate, setValidate] = React.useState(false);

  const rows = [
    {
      action: null,
      companyCode: "Pengembangan Ent E E",
      costCenterId: "UK98",
      controllingArea: "STEM",
      description: "SBE BVDI",
      profitCenter: "SBE",
      status: "active",
    },
    {
      action: null,
      companyCode: "Pengembangan CSE",
      costCenterId: "UK99",
      controllingArea: "STEM",
      description: "SBE Dekanat",
      profitCenter: "SBE",
      status: "active",
    },
  ];

  function handleActionEdit(row) {
    setValidate(false);
    setCostCenterId(row.costCenterId);
    setControllingArea(row.controllingArea);
    setCompanyCode(row.companyCode);
    setProfitCenter(row.profitCenter);
    setDescription(row.description);
    setRowStatusSelect("active");
    setDialogType(dialogTypesMaster.editCostCenter);
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
        <title>Master Cost Center</title>
      </Head>
      <PageHeader icon={<ClosedCaptionOutlined />} title="Master Cost Center" />
      <Box sx={{ p: 2 }}>
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
        costCenterId={costCenterId}
        setCostCenterId={setCostCenterId}
        companyCode={companyCode}
        setCompanyCode={setCompanyCode}
        controllingArea={controllingArea}
        setControllingArea={setControllingArea}
        profitCenter={profitCenter}
        setProfitCenter={setProfitCenter}
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
      />
    </>
  );
}
