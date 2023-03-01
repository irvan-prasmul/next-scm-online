import { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableFooter from "@mui/material/TableFooter";
import Grid from "@mui/material/Grid";

export default function MainTable({
  columns,
  rows,
  maxHeight,
  customCell,
  paginationProp,
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
  const generateTableHeadRow = () => {
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
                      key={column.group + index}
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
                    key={column.id}
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
                  key={column.id}
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
  };
  return (
    <>
      <TableContainer sx={{ maxHeight: maxHeight }}>
        <Table>
          {generateTableHeadRow()}
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      if (column.isShow) {
                        if (customCell) {
                          const ccIndex = customCell.findIndex((i) => {
                            if (Array.isArray(i.id)) {
                              const aid = i.id.findIndex((aid) => {
                                return aid == column.id;
                              });
                              // console.log("isarray:", aid, i.id);
                              if (aid >= 0) return true;
                              else return false;
                            } else return i.id == column.id;
                          });
                          if (ccIndex >= 0)
                            return customCell[ccIndex].element(row, column);
                        }
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Typography variant="bodyTable1" sx={{ pl: 1 }}>
                              {column.format && value
                                ? column.format(value)
                                : value}
                            </Typography>
                          </TableCell>
                        );
                      } else return null;
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {paginationProp}
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
    </>
  );
}
