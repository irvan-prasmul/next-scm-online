import { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";

export default function MainTable({ columns, rows, maxHeight, customCell }) {
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
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      if (column.isShow) {
                        const value = row[column.id];
                        if (customCell) {
                          const ccIndex = customCell.findIndex((i) => {
                            return i.id == column.id;
                          });
                          if (ccIndex >= 0)
                            return customCell[ccIndex].element(row, value);
                        }
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format ? column.format(value) : value}
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
