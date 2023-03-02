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
import MainTable from "@/components/mainTable";
import _ from "lodash";
import moment from "moment/moment";
import { IconButton } from "@mui/material";
import { AddCircle, RemoveCircle, Search } from "@mui/icons-material";
import MainTableMenu from "@/components/mainTableMenu";
import TableInfomationStatus from "@/components/fpb/tableInformationStatus";

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

export default function FpbPJBudget() {
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

  function viewDetail(data) {
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
        Action: viewDetail("test"),
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
        Action: viewDetail("test"),
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
    {
      id: "preview",
      expandTrigger: true,
      element: (row, col, open, setOpen) => {
        return (
          <TableCell key={col.id} align="center">
            <IconButton
              variant="contained"
              size="small"
              color={open ? "error" : "primaryButton"}
              onClick={(e) => {
                setOpen(!open);
              }}
            >
              {open ? <RemoveCircle /> : <AddCircle />}
            </IconButton>
          </TableCell>
        );
      },
    },
    {
      id: "expandedRow",
      element: (row) => {
        return (
          <Table size="small" sx={{ mt: 1, mb: 2, width: 400 }}>
            {Object.keys(row.expandedProps).map((key) => {
              return (
                <TableRow key={key}>
                  <TableCell sx={{ width: "25%" }}>
                    <Typography variant="bodyTable1" sx={{ pl: 1 }}>
                      {key}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ width: 5 }}>
                    <Typography variant="bodyTable1" sx={{ pl: 1 }}>
                      :
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ width: "100%" }}>
                    <Typography variant="bodyTable1" sx={{ pl: 1 }}>
                      {row.expandedProps[key]}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
            {/* {row.expandedProps.map((key, prop) => {
              <TableRow key={key}>
                <TableCell>
                  <Typography variant="bodyTable1" sx={{ pl: 1 }}>
                    {key}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="bodyTable1" sx={{ pl: 1 }}>
                    :
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="bodyTable1" sx={{ pl: 1 }}>
                    {prop}
                  </Typography>
                </TableCell>
              </TableRow>;
            })} */}
          </Table>
        );
      },
    },
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
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <Box
        sx={{
          pt: 1,
          pl: 2,
          pb: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <CheckBox />
        <Typography variant="h6">Approval PJ Budget</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h7">Status</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <FormControl
              variant="outlined"
              size="small"
              margin="normal"
              sx={{ width: "300px" }}
            >
              <Select value={statusSelect} onChange={handleStatusSelect}>
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Waiting"}>Waiting For Approval</MenuItem>
                <MenuItem value={"Done"}>Done</MenuItem>
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
        <Paper sx={{ width: 300, mt: 2 }}>
          <TableInfomationStatus
            statusList={["Waiting For Approval", "Approved", "Rejected"]}
          />
        </Paper>
      </Box>
    </>
  );
}
