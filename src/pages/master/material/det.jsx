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
import { openExpandedRow } from "@/components/mainTable/mainTableCustomCells";
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
import CloudUpload from "@mui/icons-material/CloudUpload";
import CloudDownload from "@mui/icons-material/CloudDownload";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import { tableExpandedRows } from "@/components/mainTable/maintableCustomRows";
import RowButtonSimple from "@/components/rowSimplified/rowButtonSimple";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import RowMasterImport from "@/components/rowSimplified/rowMasterImport";
import { columnNormalize } from "@/column-normalize";

const columns = [
  columnNormalize.preview,
  columnNormalize.plu,
  columnNormalize.materialNameWide,
  columnNormalize.price,
  columnNormalize.stock,
  columnNormalize.reorderPoint,
  columnNormalize.status,
];

export default function MasterMaterialDet() {
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

  const [name, setName] = React.useState("");
  const [materialHead, setMaterialHead] = React.useState("");
  const [plu, setPlu] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [reorderPoint, setReorderPoint] = React.useState("");
  const [uom, setUom] = React.useState("");
  const [materialType, setMaterialType] = React.useState("");
  const [materialGroup, setMaterialGroup] = React.useState("");
  const [rowStatusSelect, setRowStatusSelect] = React.useState("active");

  const [isValidate, setValidate] = React.useState(false);

  function buttonExpandedRow(row) {
    return (
      <>
        <Button
          variant="contained"
          size="small"
          sx={{ mr: 1 }}
          color="primaryButton"
          onClick={(e) => {
            setValidate(false);
            setName(row.materialName);
            setMaterialHead(row.expandedProps.materialHead);
            setPlu(row.plu);
            setPrice(row.price);
            setStock(row.stock);
            setReorderPoint(row.reorderPoint);
            setUom(row.expandedProps.uom);
            setMaterialType(row.expandedProps.materialType);
            setMaterialGroup(row.expandedProps.materialGroup);
            setRowStatusSelect("active");
            setDialogType(dialogTypesMasterMaterial.editDetail);
            setOpenDialog(true);
          }}
        >
          <EditRounded /> Edit
        </Button>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={(e) => {
            setConfirmType(confirmationType.delete);
            setConfirmDialog(true);
          }}
        >
          <DeleteRounded /> Delete
        </Button>
      </>
    );
  }

  const rows = [
    {
      preview: null,
      plu: 3145132,
      materialName: "Hydrogen Fuel Cell",
      price: 12312,
      stock: 12,
      reorderPoint: 32,
      status: "active",
      expandedProps: {
        Action: buttonExpandedRow,
        "Material Head": "RT",
        UOM: "UOM",
        "UOM Descp": "Non-IO",
        "Material Type": "ZM03 (Prasmul Non-stock)",
        "Type Descp": "Perlengkapan Listrik & Teknik",
        "Material Group": "1211",
        "Group Descp": "Perlengkapan Listrik & Teknik",
      },
    },
    {
      preview: null,
      plu: 654743,
      materialName: "1,10-Phenanthroline Monohydrate",
      price: 12312,
      stock: 12,
      reorderPoint: 32,
      status: "active",
      expandedProps: {
        Action: buttonExpandedRow("test"),
        "Material Head": "RT",
        UOM: "UOM",
        "UOM Descp": "Non-IO",
        "Material Type": "ZM03 (Prasmul Non-stock)",
        "Type Descp": "Perlengkapan Listrik & Teknik",
        "Material Group": "1211",
        "Group Descp": "Perlengkapan Listrik & Teknik",
      },
    },
  ];

  const customCell = [
    openExpandedRow({ id: "preview" }),
    tableExpandedRows({ id: "expandedRow" }),
  ];

  return (
    <>
      <Head>
        <title>Material Detail</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <PageHeader icon={<CubeScanIcon />} title="Master Material Detail" />
      <Box sx={{ p: 2 }}>
        <RowButtonSimple
          md={1}
          text="Material"
          buttonOnClick={(e) => {
            setValidate(false);
            setName("");
            setPlu("");
            setMaterialHead("choose");
            setPrice("");
            setStock("");
            setReorderPoint("");
            setUom("choose");
            setMaterialType("choose");
            setMaterialGroup("choose");
            setDialogType(dialogTypesMasterMaterial.addDetail);
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
      <ActionDialogMasterMaterial
        type={dialogType}
        isOpen={openDialog}
        handleClose={(e) => setOpenDialog(false)}
        action={(e) => setValidate(true)}
        name={name}
        setName={setName}
        plu={plu}
        setPlu={setPlu}
        materialHead={materialHead}
        setMaterialHead={setMaterialHead}
        price={price}
        setPrice={setPrice}
        stock={stock}
        setStock={setStock}
        reorderPoint={reorderPoint}
        setReorderPoint={setReorderPoint}
        uom={uom}
        setUom={setUom}
        materialType={materialType}
        setMaterialType={setMaterialType}
        materialGroup={materialGroup}
        setMaterialGroup={setMaterialGroup}
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
