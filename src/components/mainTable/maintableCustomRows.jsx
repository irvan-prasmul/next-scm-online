import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import _ from "lodash";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";

export function tableExpandedRows({ id }) {
  return {
    id,
    element: (row) => {
      return (
        <TableContainer>
          <Table size="small" sx={{ mt: 1, mb: 2, width: 450 }}>
            {Object.keys(row.expandedProps).map((key) => {
              let tempRow = {};
              if (typeof row.expandedProps[key] == "function") {
                tempRow = _.cloneDeep(row);
                delete tempRow.expandedProps[key];
              }
              return (
                <TableRow key={key}>
                  <TableCell sx={{ width: "25%" }}>
                    <Typography variant="h7" sx={{ pl: 1 }}>
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
                      {typeof row.expandedProps[key] == "function"
                        ? row.expandedProps[key](tempRow)
                        : row.expandedProps[key]}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </Table>
        </TableContainer>
      );
    },
  };
}
