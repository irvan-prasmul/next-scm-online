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
import { materialHeadActionButtons } from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/pageHeader";
import Add from "@mui/icons-material/Add";
import {
  confirmationType,
  dialogTypesMasterMaterial,
  masterMaterialStatus,
} from "@/types";
import ActionDialogMasterMaterial from "@/components/master/actionDialogMasterMaterial";
import FileDocumentOutlineIcon from "mdi-react/FileDocumentOutlineIcon";
import FileExcelOutlineIcon from "mdi-react/FileExcelOutlineIcon";
import FilePowerpointOutlineIcon from "mdi-react/FilePowerpointOutlineIcon";
import ConfirmationDialog from "@/components/confirmationDialog";

const columns = [
  {
    id: "action",
    label: "Action",
    minWidth: 160,
    isShow: true,
  },
  {
    id: "materialType",
    label: "Material Type",
    minWidth: 110,
    isShow: true,
  },
  {
    id: "description",
    label: "Description",
    minWidth: 500,
    isShow: true,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 110,
    isShow: true,
  },
];

const rows = [
  {
    action: null,
    materialType: "ZM01",
    description: "Prasmul Stock, valuated",
    status: masterMaterialStatus.active,
  },
  {
    action: null,
    materialType: "ZM02",
    description: "Prasmul Stock, Non-value",
    status: masterMaterialStatus.active,
  },
];

export default function MasterMaterialType() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [statusSelect, setStatusSelect] = React.useState("All");

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

  const [materialType, setMaterialType] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [rowStatusSelect, setRowStatusSelect] = React.useState(
    masterMaterialStatus.active
  );

  function handleActionEdit(row) {
    setMaterialType(row.materialType);
    setDescription(row.description);
    setRowStatusSelect(masterMaterialStatus.active);
    setDialogType(dialogTypesMasterMaterial.editType);
    setOpenDialog(true);
  }

  function handleActionDelete(e) {
    setConfirmType(confirmationType.delete);
    setConfirmDialog(true);
  }

  const customCell = [
    materialHeadActionButtons({
      id: "action",
      handleEdit: handleActionEdit,
      handleDelete: handleActionDelete,
    }),
  ];

  return (
    <>
      <Head>
        <title>Material Type</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <PageHeader icon={<CubeScanIcon />} title="Master Material Type" />
      <Box sx={{ p: 2 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={1}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h7">Material</Typography>
          </Grid>
          <Grid item xs={12} md={11}>
            <Button
              variant="contained"
              color="primaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => {
                setMaterialType("");
                setDescription("");
                setDialogType(dialogTypesMasterMaterial.addType);
                setOpenDialog(true);
              }}
            >
              <Add sx={{ mr: 1 }} /> Add New
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h7">Status</Typography>
          </Grid>
          <Grid item xs={12} md={11}>
            <FormControl
              variant="outlined"
              size="small"
              margin="normal"
              sx={{ width: "300px" }}
            >
              <Select
                value={statusSelect}
                onChange={(e) => setStatusSelect(e.target.value)}
              >
                <MenuItem value={masterMaterialStatus.all}>All</MenuItem>
                <MenuItem value={masterMaterialStatus.active}>Active</MenuItem>
                <MenuItem value={masterMaterialStatus.inactive}>
                  Inactive
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
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
              key="21"
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
          />
        </Paper>
      </Box>
      <ActionDialogMasterMaterial
        type={dialogType}
        isOpen={openDialog}
        handleClose={(e) => setOpenDialog(false)}
        action={(e) => {
          console.log("action");
        }}
        materialType={materialType}
        setMaterialType={setMaterialType}
        description={description}
        setDescription={setDescription}
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
