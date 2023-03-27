import { columnNormalize } from "@/globals/column-normalize";
import { tableOrder } from "@/globals/types";
import _ from "lodash";

export function handleColumnChange(id, columns, setColumnSelect, columnSelect) {
  if (id == "reset") {
    setColumnSelect(_.cloneDeep(columns));
  } else {
    let temp = [...columnSelect];
    const index = columnSelect.findIndex((h) => {
      return h.id == id;
    });
    temp[index].isShow = !temp[index].isShow;
    setColumnSelect(temp);
  }
}

export const commonTableProps = {
  page: 1,
  rowsPerPage: 10,
  orderBy: columnNormalize.created.id,
  order: tableOrder.desc,
  search: "",
  totalRows: 0,
  txtIsStock: "F",
  status: "all",
};

export function handleSearchTable(value, setTableProps) {
  setTableProps((prevState) => ({
    ...prevState,
    search: value,
    page: 1,
  }));
}

export function handleChangePage(value, setTableProps) {
  console.log("page:", value);
  setTableProps((prevState) => ({
    ...prevState,
    page: value,
  }));
}

export function handleChangeRowsPerPage(value, setTableProps) {
  setTableProps((prevState) => ({
    ...prevState,
    rowsPerPage: value,
    page: 1,
  }));
}

export function handleChangeStatus(value, setTableProps) {
  setTableProps((prevState) => ({
    ...prevState,
    status: value,
    page: 1,
  }));
}

export function handleChangeOrder(orderBy, setTableProps) {
  setTableProps((prevState) => ({
    ...prevState,
    orderBy: orderBy,
    order: prevState.order == tableOrder.asc ? tableOrder.desc : tableOrder.asc,
  }));
}
