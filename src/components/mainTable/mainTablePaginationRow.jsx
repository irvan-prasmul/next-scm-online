import { paginationPropType } from "@/globals/types";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import RowDdlSimple from "../rowSimplified/rowDdlSimple";

export default function MainTablePaginationRow({
  page = 0,
  rowsPerPage = 10,
  paginationProp = paginationPropType.none,
  rowsPerPageOptions = [10, 25, 100],
  totalRows = 0,
  handleChangePage = (event, newPage) => {
    // setPage(newPage);
  },
  handleChangeRowsPerPage = (event) => {
    // setRowsPerPage(+event.target.value);
    // setPage(0);
  },
  qty = 0,
  total = 0,
}) {
  const remainder = totalRows % rowsPerPage;
  const pageCount =
    remainder > 0
      ? Math.floor(totalRows / rowsPerPage) + 1
      : Math.floor(totalRows / rowsPerPage);
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
              <Typography variant="h7">Total price: {total}</Typography>
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
              <Typography variant="h7">Total qty: {qty}</Typography>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
      <Grid
        item
        xs="auto"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="bodyTable1">Show</Typography>
        <Select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          size="small"
          variant="standard"
          sx={{ py: 2, px: 1 }}
        >
          {rowsPerPageOptions.map((val, index) => (
            <MenuItem key={index} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="bodyTable1">entries</Typography>
        <Pagination page={page} count={pageCount} onChange={handleChangePage} />
      </Grid>
    </Grid>
  );
}
