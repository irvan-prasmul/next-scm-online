import React from "react";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Flag from "@mui/icons-material/Flag";
import Inventory2Rounded from "@mui/icons-material/Inventory2Rounded";
import CheckBox from "@mui/icons-material/CheckBox";
import ShoppingCartCheckoutRounded from "@mui/icons-material/ShoppingCartCheckoutRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import Cancel from "@mui/icons-material/Cancel";
import HourglassFullTwoTone from "@mui/icons-material/HourglassFullTwoTone";
import _ from "lodash";
import Remove from "@mui/icons-material/Remove";
import LocalAtmRounded from "@mui/icons-material/LocalAtmRounded";

export default function TableInfomationStatus({ statusList }) {
  function RenderIcon({ status }) {
    return status == "Waiting" || status == "Waiting For Approval" ? (
      <HourglassFullTwoTone />
    ) : status == "Canceled by User" ? (
      <Cancel color="warning" />
    ) : status == "Approved" ||
      status == "Reviewed" ||
      status == "Approved by Procurement" ? (
      <CheckBox color="success" />
    ) : status == "Rejected" ? (
      <CloseRounded color="error" />
    ) : status == "PO Process" || status == "Purchase Order" ? (
      <ShoppingCartCheckoutRounded color="primaryButton" />
    ) : status == "Ready for pick up" || status == "Goods Receipt" ? (
      <Inventory2Rounded color="info" />
    ) : status == "Delivered" || status == "Goods Issue" ? (
      <Flag color="success" />
    ) : status == "Finance" ? (
      <LocalAtmRounded color="success" />
    ) : status == "asd" ? (
      <LocalAtmRounded color="success" />
    ) : (
      <Remove />
    );
  }

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
