import { Fragment, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import TableSortLabel from "@mui/material/TableSortLabel";

export default function MainTable({
  columns,
  rows,
  minHeight = 200,
  customCell,
  isExpandable = false,
  isLoading = false,
  page = 0,
  rowsPerPage = 10,
  skeletonHeight = 50,
  sortableTableHead = [],
  orderBy = "",
  order = "",
  handleSortableHeader = () => {},
}) {
  function isSortableHeader(column) {
    if (sortableTableHead.findIndex((i) => i == column.id) >= 0)
      return (
        <TableSortLabel
          active={orderBy === column.id}
          direction={orderBy === column.id ? order : "asc"}
          onClick={(e) => handleSortableHeader(column.id)}
        >
          {column.label}
        </TableSortLabel>
      );
    return column.label;
  }

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
              } else {
                return (
                  <TableCell
                    key={"normal-head" + column.id}
                    align={column.align}
                    rowSpan={2}
                    style={{ minWidth: column.minWidth }}
                  >
                    {isSortableHeader(column)}
                  </TableCell>
                );
              }
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
                  {isSortableHeader(column)}
                </TableCell>
              );
          })}
        </TableRow>
      </TableHead>
    );
  }

  function customCellIndex(customCell, column) {
    return customCell.findIndex((i) => {
      if (Array.isArray(i.id)) {
        const aid = i.id.findIndex((aid) => {
          return aid == column.id;
        });
        if (aid >= 0) return true;
        else return false;
      } else return i.id == column.id;
    });
  }

  function normalCell(column, value) {
    return (
      <TableCell key={"table-cell" + column.id} align={column.align}>
        <Typography variant="bodyTable1" sx={{ pl: 1 }}>
          {column.format && value ? column.format(value) : value}
        </Typography>
      </TableCell>
    );
  }

  function normalTableRow(row, index) {
    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={"table-row" + index}>
        {columns.map((column) => {
          if (column.isShow) {
            if (customCell) {
              const ccIndex = customCellIndex(customCell, column);
              if (ccIndex >= 0)
                return customCell[ccIndex].element(
                  row,
                  column,
                  index,
                  page,
                  rowsPerPage
                );
            }
            const value = row[column.id];
            return normalCell(column, value);
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
      <Fragment key={index}>
        <TableRow hover role="checkbox" tabIndex={-1} key={"table-row" + index}>
          {columns.map((column) => {
            if (column.isShow) {
              activeColumn++;
              if (customCell) {
                const ccIndex = customCellIndex(customCell, column);
                if (ccIndex >= 0) {
                  if (customCell[ccIndex].expandTrigger == true)
                    return customCell[ccIndex].element(
                      row,
                      column,
                      open,
                      setOpen
                    );
                  else
                    return customCell[ccIndex].element(
                      row,
                      column,
                      index,
                      page,
                      rowsPerPage
                    );
                }
              }
              const value = row[column.id];
              return normalCell(column, value);
            } else return null;
          })}
        </TableRow>
        {open ? (
          <TableRow
            style={{ display: open ? "table-row" : "none" }}
            tabIndex={-1}
            key={"expanded-row" + index}
          >
            <TableCell
              colSpan={activeColumn}
              style={{ paddingBottom: 0, paddingTop: 0 }}
            >
              {/* <Collapse in={open} timeout="auto" unmountOnExit> */}
              {customCell[expandId].element(row, index)}
              {/* </Collapse> */}
            </TableCell>
          </TableRow>
        ) : null}
      </Fragment>
    );
  }

  function generateTableBodyRow() {
    return (
      <>
        <TableBody sx={{ display: isLoading ? "none" : "table-row-group" }}>
          {rows && rows.length > 0
            ? rows
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  if (isExpandable) return ExpandableTableRow(row, index);
                  else return normalTableRow(row, index);
                })
            : null}
        </TableBody>
        <TableBody sx={{ display: isLoading ? "table-row-group" : "none" }}>
          {/* {bodySkeleton} */}
          {(function (cells, i, len) {
            while (++i <= len) {
              cells.push(
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    sx={{ height: skeletonHeight }}
                  >
                    <Skeleton
                      animation="pulse"
                      sx={{
                        width: "-webkit-fill-available",
                        height: "-webkit-fill-available",
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            }
            return cells;
          })([], 0, rowsPerPage)}
        </TableBody>
      </>
    );
  }

  return (
    <>
      <TableContainer sx={{ minHeight: minHeight }}>
        <Table>
          {generateTableHeadRow()}
          {/* <Skeleton
            animation="wave"
            sx={{
              display: isLoading ? "block" : "none",
              width: "-webkit-fill-available",
            }}
          /> */}
          {/* <CircularProgress
            sx={{
              display: isLoading ? "block" : "none",
              width: "-webkit-fill-available",
            }}
          /> */}
          {generateTableBodyRow()}
        </Table>
      </TableContainer>
    </>
  );
}
