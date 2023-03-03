import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import _ from "lodash";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";

export function pjbExpandedRows({ id }) {
  return {
    id,
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
        </Table>
      );
    },
  };
}
