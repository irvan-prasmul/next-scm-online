import React from "react";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import _ from "lodash";
import RenderIcon from "./renderIcon";

export default function TableInfomationStatus({ statusList }) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className="plain-table" align="center" colSpan={2}>
              <Typography variant="h5">Information Status</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statusList.map((status) => {
            return (
              <TableRow key={status}>
                <TableCell className="plain-table" align="center" width={60}>
                  <RenderIcon status={status} />
                </TableCell>
                <TableCell className="plain-table">
                  <Typography variant="bodyCst1">{status}</Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
