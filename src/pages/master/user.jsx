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
import Person from "@mui/icons-material/Person";
import RowButtonSimple from "@/components/rowSimplified/rowButtonSimple";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";

const columns = [
  {
    id: "preview",
    label: "Preview",
    minWidth: 160,
    isShow: true,
  },
  {
    id: "nik",
    label: "NIK",
    minWidth: 110,
    isShow: true,
  },
  {
    id: "name",
    label: "Name",
    minWidth: 120,
    isShow: true,
  },
  {
    id: "initial",
    label: "Initial",
    minWidth: 120,
    isShow: true,
  },
  {
    id: "email1",
    label: "E-mail",
    minWidth: 120,
    isShow: true,
  },
  {
    id: "role",
    label: "Role",
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

export default function MasterUser() {
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

  const [nik, setNik] = React.useState("");
  const [name, setName] = React.useState("");
  const [initial, setInitial] = React.useState("");
  const [email1, setEmail1] = React.useState("");
  const [email2, setEmail2] = React.useState("");
  const [role, setRole] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [rowStatusSelect, setRowStatusSelect] = React.useState(
    masterStatus.active
  );

  function buttonExpandedRow(row) {
    return (
      <>
        <Button
          variant="contained"
          size="small"
          sx={{ mr: 1 }}
          color="primaryButton"
          onClick={(e) => {
            setNik(row.nik);
            setName(row.name);
            setInitial(row.initial);
            setRole(row.role);
            setEmail1(row.email1);
            setEmail2(row.expandedProps["E-mail 2"]);
            setPassword(row.password);
            setDepartment(row.expandedProps.department);
            setPosition(row.Position);
            setRowStatusSelect(masterStatus.active);
            setDialogType(dialogTypesMaster.editUser);
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
      initial: "ACCNT",
      nik: "1231412",
      name: "Accounting",
      email1: "acc@pmbs.ac.id",
      role: "pjb",
      password: "1234",
      status: masterStatus.active,
      Position: "DK",
      expandedProps: {
        Action: buttonExpandedRow,
        Department: "YPM - Keuangan",
        "E-mail 2": "acc@pmbs.ac.id",
      },
    },
    {
      preview: null,
      initial: "ADF",
      nik: "223",
      name: "Ade Febransyah",
      email1: "acc@pmbs.ac.id",
      role: "Requester",
      password: "1234",
      Position: "",
      status: masterStatus.active,
      expandedProps: {
        Action: buttonExpandedRow,
        Department: "YPM - Keuangan",
        "E-mail 2": "acc@pmbs.ac.id",
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
        <title>Master Users</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <PageHeader icon={<Person />} title="Master Users" />
      <Box sx={{ p: 2 }}>
        <RowButtonSimple
          md={1}
          text="User"
          buttonText="Add New user"
          buttonOnClick={(e) => {
            setNik("");
            setInitial("");
            setName("");
            setEmail1("");
            setEmail2("");
            setRole("Choose");
            setPassword("");
            setDepartment("Choose");
            setPosition("Choose");
            setDialogType(dialogTypesMaster.addUser);
            setOpenDialog(true);
          }}
        />
        <RowDdlSimple
          md={1}
          text="Role"
          ddlValue={statusSelect}
          ddlValues={masterStatusDdlValues}
          ddlOnChange={(e) => {
            setStatusSelect(e.target.value);
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
        nik={nik}
        setNik={setNik}
        initial={initial}
        setInitial={setInitial}
        name={name}
        setName={setName}
        role={role}
        setRole={setRole}
        email1={email1}
        setEmail1={setEmail1}
        email2={email2}
        setEmail2={setEmail2}
        password={password}
        setPassword={setPassword}
        department={department}
        setDepartment={setDepartment}
        position={position}
        setPosition={setPosition}
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
