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
import PageHeader from "@/components/general/pageHeader";
import {
  confirmationType,
  dialogTypesMaster,
  informationStatusIcon,
  masterStatusDdlValues,
} from "@/globals/types";
import ActionDialogMaster from "@/components/master/actionDialogMaster";
import ConfirmationDialog from "@/components/general/confirmationDialog";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/globals/column-normalize";

const columns = [
  columnNormalize.action2Button,
  columnNormalize.vendorLong,
  columnNormalize.telp,
  columnNormalize.email,
  columnNormalize.address,
  columnNormalize.material,
  columnNormalize.status,
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
  const [rowStatusSelect, setRowStatusSelect] = React.useState("active");

  const [isValidate, setValidate] = React.useState(false);

  const rows = [
    {
      action: null,
      email: "",
      vendor: "Zeals Digital Asia",
      telp: "2139810938",
      address: "SBE BVDI",
      material: "SBE",
      status: informationStatusIcon.approved,
    },
    {
      action: null,
      email: "",
      vendor: "Yasin Global Training",
      telp: "1313123123",
      address: "SBE Dekanat",
      material: "SBE",
      status: informationStatusIcon.approved,
    },
  ];

  function handleActionEdit(row) {
    setValidate(false);
    setVendor(row.vendor);
    setTelp(row.telp);
    setEmail(row.email);
    setAddress(row.address);
    setMaterial(row.material);
    setRowStatusSelect("active");
    setDialogType(dialogTypesMaster.editVendor);
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
        <title>Master Vendor</title>
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
        isValidate={isValidate}
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
