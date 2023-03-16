import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import { openExpandedRow } from "@/components/mainTable/mainTableCustomCells";
import PageHeader from "@/components/general/pageHeader";
import { confirmationType, dialogTypesMaster } from "@/globals/types";
import ActionDialogMaster from "@/components/master/actionDialogMaster";
import ConfirmationDialog from "@/components/general/confirmationDialog";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import { tableExpandedRows } from "@/components/mainTable/maintableCustomRows";
import Person from "@mui/icons-material/Person";
import RowButtonSimple from "@/components/rowSimplified/rowButtonSimple";
import { columnNormalize } from "@/globals/column-normalize";

const columns = [
  columnNormalize.preview,
  columnNormalize.userLabelName,
  columnNormalize.nik,
  columnNormalize.company,
  columnNormalize.level,
];

export default function MasterPJB() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();

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

  const [user, setUser] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [level, setLevel] = React.useState(0);

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
            setUser(row.user);
            setCompany(row.company);
            setLevel(row.level);
            setDialogType(dialogTypesMaster.editPjb);
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
      level: "1",
      user: "Franky Supriyadi",
      company: "SBE",
      nik: "123",
      expandedProps: {
        Action: buttonExpandedRow,
        Initial: "FS",
        "E-mail": "acc@pmbs.ac.id",
      },
    },
    {
      preview: null,
      level: "3",
      user: "Adrian Teja",
      company: "RISET",
      nik: "321",
      expandedProps: {
        Action: buttonExpandedRow,
        Initial: "AT",
        "E-mail": "acc@pmbs.ac.id",
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
        <title>Master PJB</title>
      </Head>
      <PageHeader icon={<Person />} title="Master PJ Budget (PJB)" />
      <Box sx={{ p: 2 }}>
        <RowButtonSimple
          md={1}
          text="PJB"
          buttonOnClick={(e) => {
            setValidate(false);
            setUser("choose");
            setLevel(0);
            setCompany("choose");
            setDialogType(dialogTypesMaster.addPjb);
            setOpenDialog(true);
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
        user={user}
        setUser={setUser}
        level={level}
        setLevel={setLevel}
        company={company}
        setCompany={setCompany}
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
