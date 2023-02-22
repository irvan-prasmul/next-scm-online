import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  Checkbox,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
} from "@mui/material";
import { Add, Refresh, ShoppingCart } from "@mui/icons-material";
import TableIcon from "mdi-react/TableIcon";
import Moment from "react-moment";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  sx: {
    "&& .Mui-selected": {
      backgroundColor: "#007bff !important",
      color: "white !important",
    },
  },
};

// const columnsSelect = [
//   "#",
//   "Created",
//   "FPB Number",
//   "PTA",
//   "IO",
//   "Other",
//   "Material Name",
//   "Category",
//   "Price",
//   "Qty PB",
//   "UOM",
//   "Total",
//   "Cost Center",
//   "Plan Date",
//   "File",
//   "Requester Note",
//   "ICT Note",
//   "PIC Purc.",
//   "Purchasing Notes",
//   "No. PO",
//   "Approval",
//   "Purchase",
//   "Information Status",
//   "Track Status",
// ];

const columnsGroup = ["Upload Document", "Status"];

const columns = [
  { id: "id", label: "#", minWidth: 22 },
  {
    id: "created",
    label: "Created",
    minWidth: 100,
  },
  {
    id: "fpbnumber",
    label: "FPB Number",
    minWidth: 100,
    // align: 'right',
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "pta",
    label: "PTA",
    minWidth: 100,
    group: "Upload Document",
  },
  {
    id: "io",
    label: "IO",
    minWidth: 100,
    group: "Upload Document",
  },
  {
    id: "other",
    label: "Other",
    minWidth: 100,
    group: "Upload Document",
  },
  {
    id: "materialName",
    label: "Material Name",
    minWidth: 100,
  },
];
function createData(id, created, fpbnumber, pta, io, other, materialName) {
  return {
    id,
    created,
    fpbnumber,
    pta,
    io,
    other,
    materialName,
  };
}

const rows = [
  createData(
    1,
    "1976-04-19T12:59-0500",
    "F23100468",
    null,
    null,
    null,
    "Fuel Cell"
  ),
  createData(
    2,
    "1976-05-19T12:59-0500",
    "F23100469",
    null,
    null,
    null,
    "Battery"
  ),
];

export default function Fpb() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const router = useRouter();

  const [statusSelect, setStatusSelect] = React.useState("All");
  const handleStatusSelect = (event) => {
    setStatusSelect(event.target.value);
  };

  const [columnName, setColumnName] = React.useState([...columns]);
  const handleColumnChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    const temp = value.find((element) => {
      return element.id === "reset";
    });
    console.log("temp:", temp);
    if (temp) setColumnName([...columns]);
    else setColumnName(value);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const generateTableRow = () => {
    const headerGroupList = columns.filter((x) =>
      x.find((element) => {
        return element.group;
      })
    );
    let headerGroup = [
      {
        name: "Upload Document",
        CustomElementRegistry: "2",
      },
    ];
    headerGroupList.forEach((element) => {
      if (headerGroup.length == 0)
        headerGroup.push({
          name: element,
          count: 1,
        });
    });

    return <div></div>;
  };
  return (
    <>
      <Head>
        <title>FPB</title>
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
          flexWrap: "wrap",
        }}
      >
        <ShoppingCart />
        <Typography variant="h6">FPB Dashboard (Non-Stock)</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={1}
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="subtitle1">FPB</Typography>
          </Grid>
          <Grid item xs={12} md={11}>
            <Button
              variant="contained"
              color="primaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
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
              flexWrap: "wrap",
            }}
          >
            <Typography variant="subtitle1">Status</Typography>
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
                <MenuItem value={"Waiting for Approval"}>
                  Waiting for Approval
                </MenuItem>
                <MenuItem value={"Approved"}>Approved</MenuItem>
                <MenuItem value={"Rejected"}>Rejected</MenuItem>
                <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container sx={{ pt: 2 }}>
          <Grid
            item
            xs="auto"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              pr: 2,
            }}
          >
            <Button
              variant="contained"
              color="secondaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Refresh sx={{ mr: 1 }} /> Refresh Table
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Select
              multiple
              displayEmpty
              size="small"
              value={columnName}
              onChange={handleColumnChange}
              renderValue={() => "Select Columns"}
              sx={{
                backgroundColor: "#6c757d",
                color: "white",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#6c757d",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#6c757d",
                },
              }}
              MenuProps={MenuProps}
            >
              {[...columns, { id: "reset", label: "Restore Columns" }].map(
                (col) => (
                  <MenuItem key={col.id} value={col}>
                    <ListItemText primary={col.label} />
                  </MenuItem>
                )
              )}
            </Select>
          </Grid>
        </Grid>
        <Paper sx={{ width: "100%", mt: 2 }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                {generateTableRow}
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    Country
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 57, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : column.id == "created" ? (
                                <Moment date={value} format="YYYY-MM-DD" />
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
