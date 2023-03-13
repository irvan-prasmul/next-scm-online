import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import PageHeader from "@/components/pageHeader";
import { dummyDdlAll } from "@/globals/types";
import ConfirmationDialog from "@/components/confirmationDialog";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import NewspaperVariantMultipleOutlineIcon from "mdi-react/NewspaperVariantMultipleOutlineIcon";
import RowDateRangePickerSimple from "@/components/rowSimplified/rowDateRangePickerSimple";
import { addDays } from "date-fns";
import { columnNormalize } from "@/globals/column-normalize";

const columns = [
  columnNormalize.id,
  columnNormalize.fpbNo,
  columnNormalize.noPo,
  columnNormalize.created,
  columnNormalize.requester,
  columnNormalize.department,
  columnNormalize.activity,
  columnNormalize.ioBudget,
  columnNormalize.materialName,
  columnNormalize.category,
  columnNormalize.qtyPB,
  columnNormalize.uom,
  columnNormalize.estPrice,
  columnNormalize.totalEst,
  columnNormalize.netPrice,
  columnNormalize.totalNet,
  columnNormalize.constCenter,
  columnNormalize.image,
  columnNormalize.planDate,
  columnNormalize.picPurc,
  columnNormalize.requesterNotes,
  columnNormalize.purchasingNotes,
  columnNormalize.approvalPjk,
  columnNormalize.approvalPjb,
  columnNormalize.approvalProcurement,
  columnNormalize.reviewIct,
  columnNormalize.approvalPurchasing,
  columnNormalize.documentStatus,
  columnNormalize.docDate,
  columnNormalize.delivered,
  columnNormalize.status,
  columnNormalize.informationStatus,
];
export default function ReportsFpbHistory() {
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
      </Head>
      <PageHeader
        icon={<NewspaperVariantMultipleOutlineIcon />}
        title={["Report", "FPB History"]}
      />
      <Box sx={{ p: 2 }}>
        <RowDateRangePickerSimple
          md={2}
          text="Period"
          dateValue={period}
          dateOnChange={(e) => setPeriod([e.selection])}
        />
        <RowDdlSimple
          md={2}
          text="Status"
          ddlValue={status}
          ddlValues={dummyDdlAll}
          ddlOnChange={(e) => setStatus(e.target.value)}
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
