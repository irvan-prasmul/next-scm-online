import { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import { paginationPropType } from "@/types";

export default function MainTable({
  columns,
  rows,
  maxHeight,
  customCell,
  paginationProp = paginationPropType.none,
  qty = 0,
  total = 0,
  isExpandable = false,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function generateTableHeadRow() {
    let headerGroupList = [];
    let rowHeader2 = [];
    columns.map((element) => {
      if (element.group) {
        const hIndex = headerGroupList.findIndex((h) => {
          return h.name == element.group;
        });
        if (element.isShow) {
          if (hIndex >= 0) {
            headerGroupList[hIndex].count++;
          } else {
            headerGroupList.push({
              name: element.group,
              count: 1,
              rendered: 0,
            });
          }
          rowHeader2.push(element);
        }
      }
    });

    return (
      <TableHead>
        <TableRow>
          {columns.map((column) => {
            if (column.isShow)
              if (column.group) {
                const index = headerGroupList.findIndex((h) => {
                  return h.name == column.group;
                });
                const colSpan = headerGroupList[index].count;
                if (headerGroupList[index].rendered++ == 0) {
                  return (
                    <TableCell
                      key={"group-head" + column.group + index}
                      align="center"
                      rowSpan={1}
                      colSpan={colSpan}
                    >
                      {column.group}
                    </TableCell>
                  );
                }
              } else
                return (
                  <TableCell
                    key={"normal-head" + column.id}
                    align={column.align}
                    rowSpan={2}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                );
          })}
        </TableRow>
        <TableRow>
          {rowHeader2.map((column) => {
            if (column.isShow)
              return (
                <TableCell
                  key={"lower-head" + column.id}
                  align={column.align}
                  rowSpan={1}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              );
          })}
        </TableRow>
      </TableHead>
    );
  }

  function normalTableRow(row, index) {
    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={"normal-row" + index}>
        {columns.map((column) => {
          if (column.isShow) {
            if (customCell) {
              const ccIndex = customCell.findIndex((i) => {
                if (Array.isArray(i.id)) {
                  const aid = i.id.findIndex((aid) => {
                    return aid == column.id;
                  });
                  if (aid >= 0) return true;
                  else return false;
                } else return i.id == column.id;
              });
              if (ccIndex >= 0) return customCell[ccIndex].element(row, column);
            }
            const value = row[column.id];
            return (
              <TableCell key={"normal-cell" + column.id} align={column.align}>
                <Typography variant="bodyTable1" sx={{ pl: 1 }}>
                  {column.format && value ? column.format(value) : value}
                </Typography>
              </TableCell>
            );
          } else return null;
        })}
      </TableRow>
    );
  }

  function ExpandableTableRow(row, index) {
    const [open, setOpen] = useState(false);
    const expandId = customCell.findIndex((e) => {
      return e.id == "expandedRow";
    });
    let activeColumn = 0;
    return (
      <>
        <TableRow
          hover
          role="checkbox"
          tabIndex={-1}
          key={"expandable-row" + index}
        >
          {columns.map((column) => {
            if (column.isShow) {
              activeColumn++;
              if (customCell) {
                const ccIndex = customCell.findIndex((i) => {
                  if (Array.isArray(i.id)) {
                    const aid = i.id.findIndex((aid) => {
                      return aid == column.id;
                    });
                    if (aid >= 0) return true;
                    else return false;
                  } else return i.id == column.id;
                });
                if (ccIndex >= 0) {
                  if (customCell[ccIndex].expandTrigger == true)
                    return customCell[ccIndex].element(
                      row,
                      column,
                      open,
                      setOpen
                    );
                  else return customCell[ccIndex].element(row, column);
                }
              }
              const value = row[column.id];
              return (
                <TableCell
                  key={"expandable-cell" + column.id}
                  align={column.align}
                >
                  <Typography variant="bodyTable1" sx={{ pl: 1 }}>
                    {column.format && value ? column.format(value) : value}
                  </Typography>
                </TableCell>
              );
            } else return null;
          })}
        </TableRow>
        {open ? (
          <TableRow key={"expanded-row" + index}>
            <TableCell
              colSpan={activeColumn}
              style={{ paddingBottom: 0, paddingTop: 0 }}
            >
              <Collapse in={open} timeout="auto" unmountOnExit>
                {customCell[expandId].element(row)}
              </Collapse>
            </TableCell>
          </TableRow>
        ) : (
          <></>
        )}
      </>
    );
  }

  function generateTableBodyRow() {
    return (
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => {
            if (isExpandable) return ExpandableTableRow(row, index);
            else return normalTableRow(row, index);
          })}
      </TableBody>
    );
  }

  function generateTableFooter() {
    return (
      <Grid container>
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {paginationProp == paginationPropType.qtyAndTotal ? (
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
                <Typography variant="h7">Total qty: {qty}</Typography>
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
                <Typography variant="h7">Total price: {total}</Typography>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs="auto">
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            showFirstButton
            showLastButton
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <TableContainer sx={{ maxHeight: maxHeight }}>
        <Table>
          {generateTableHeadRow()}
          {generateTableBodyRow()}
        </Table>
      </TableContainer>
      {generateTableFooter()}
    </>
  );
}
