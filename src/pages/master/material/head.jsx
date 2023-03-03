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
import { pjbPreview } from "@/components/mainTable/mainTableCustemCells";
import { pjbExpandedRows } from "@/components/mainTable/maintableCustomRows";
import PageHeader from "@/components/pageHeader";
import Add from "@mui/icons-material/Add";

const columns = [
  {
    id: "preview",
    label: "Preview",
    minWidth: 100,
    isShow: true,
  },
  {
    id: "fpbnumber",
    label: "FPB Number",
    minWidth: 110,
    isShow: true,
  },
  {
    id: "createdDate",
    label: "Created Date",
    minWidth: 150,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  {
    id: "unit",
    label: "Unit",
    minWidth: 110,
    isShow: true,
  },
  {
    id: "doctype",
    label: "Doctype",
    minWidth: 110,
    isShow: true,
  },
  {
    id: "total",
    label: "Total",
    minWidth: 121,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
];

export default function MasterMaterialHead() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [statusSelect, setStatusSelect] = React.useState("All");
  const handleStatusSelect = (event) => {
    setStatusSelect(event.target.value);
  };

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

  function openExpandedRow(data) {
    return (
      <Button
        variant="text"
        size="small"
        color="primaryButton"
        onClick={(e) => router.replace("/fpb/create")}
      >
        <Search fontSize="small" /> View Detail
      </Button>
    );
  }

  const rows = [
    {
      preview: null,
      fpbnumber: "F23100468",
      createdDate: "1976-04-19T12:59-0500",
      unit: "BSD",
      doctype: "UNI",
      total: 123141231,
      expandedProps: {
        Action: openExpandedRow("test"),
        Requester: "Theresia Uma Nurwiranti",
        Department: "UNI-PAFM",
        Activity: "Non-IO",
        Budget: "",
        "Event Name": "",
        "Event Date": "",
        "PIC Name": "",
        "PIC Phone": "",
      },
    },
    {
      preview: null,
      fpbnumber: "F2313210468",
      createdDate: "1976-04-19T12:59-0500",
      unit: "Cilandak",
      doctype: "UNI",
      total: 22222,
      expandedProps: {
        Action: openExpandedRow("test"),
        Requester: "tes",
        Department: "UNI-PAFM",
        Activity: "Non-IO",
        Budget: "",
        "Event Name": "",
        "Event Date": "",
        "PIC Name": "",
        "PIC Phone": "",
      },
    },
  ];

  const customCell = [
    pjbPreview({ id: "preview" }),
    pjbExpandedRows({ id: "expandedRow" }),
  ];

  function tablePaginationProp() {
    return (
      <Grid
        container
        sx={{
          pl: 3,
        }}
      >
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 3,
          }}
        >
          <Typography variant="h7">Total price: 312313123</Typography>
        </Grid>
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 3,
          }}
        >
          <Typography variant="h7">Total qty: 1111</Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Head>
        <title>Material Head</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <PageHeader icon={<CubeScanIcon />} title="Master Material Head" />
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
            <Typography variant="h7">FPB</Typography>
          </Grid>
          <Grid item xs={12} md={11}>
            <Button
              variant="contained"
              color="primaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => router.replace("/fpb/create")}
            >
              <Add sx={{ mr: 1 }} /> Create New
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
              <Select value={statusSelect} onChange={handleStatusSelect}>
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Active"}>Active</MenuItem>
                <MenuItem value={"Inactive"}>Inactive</MenuItem>
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
        />
        <Paper sx={{ width: "100%", mt: 2 }}>
          <MainTable
            columns={columnSelect}
            rows={rows}
            maxHeight={1000}
            customCell={customCell}
            paginationProp={tablePaginationProp()}
            isExpandable={true}
          />
        </Paper>
      </Box>
    </>
  );
}
