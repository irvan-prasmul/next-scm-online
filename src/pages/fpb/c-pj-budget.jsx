import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CheckBox from "@mui/icons-material/CheckBox";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import Search from "@mui/icons-material/Search";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import TableInfomationStatus from "@/components/fpb/tableInformationStatus";
import { openExpandedRow } from "@/components/mainTable/mainTableCustomCells";
import { tableExpandedRows } from "@/components/mainTable/maintableCustomRows";
import { paginationPropType } from "@/types";
import PageHeader from "@/components/pageHeader";
import RowDdlSimple from "@/components/rowSimplified/rowDdlSimple";
import { columnNormalize } from "@/column-normalize";

const columns = [
  columnNormalize.preview,
  columnNormalize.fpbNumber,
  columnNormalize.createdDate,
  columnNormalize.unit,
  columnNormalize.doctype,
  columnNormalize.total,
];

const statusDdlValues = [
  { value: "all", text: "All" },
  { value: "waiting", text: "Waiting for Approval" },
  { value: "done", text: "Done" },
];

export default function FpbPJBudget() {
  // const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [statusSelect, setStatusSelect] = React.useState("all");

  const [columnSelect, setColumnSelect] = React.useState(_.cloneDeep(columns));
  const handleColumnChange = (id) => {
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
  };
  const [searchTable, setSearchTable] = React.useState("");
  function handleSearchTable(e) {
    setSearchTable(e.target.value);
    console.log("refresh table");
  }

  function buttonExpandedRow() {
    return (
      <Button
        variant="text"
        size="small"
        color="primaryButton"
        onClick={(e) => router.replace("/fpb/create")}
      >
        <Search fontSize="small" /> View Detail
      </Button>
    );
  }

  const rows = [
    {
      preview: null,
      fpbNumber: "F23100468",
      createdDate: "1976-04-19T12:59-0500",
      unit: "BSD",
      doctype: "UNI",
      total: 123141231,
      expandedProps: {
        Action: buttonExpandedRow(),
        Requester: "Theresia Uma Nurwiranti",
        Department: "UNI-PAFM",
        Activity: "Non-IO",
        Budget: "",
        "Event Name": "",
        "Event Date": "",
        "PIC Name": "",
        "PIC Phone": "",
      },
    },
    {
      preview: null,
      fpbNumber: "F2313210468",
      createdDate: "1976-04-19T12:59-0500",
      unit: "Cilandak",
      doctype: "UNI",
      total: 22222,
      expandedProps: {
        Action: buttonExpandedRow(),
        Requester: "tes",
        Department: "UNI-PAFM",
        Activity: "Non-IO",
        Budget: "",
        "Event Name": "",
        "Event Date": "",
        "PIC Name": "",
        "PIC Phone": "",
      },
    },
    {
      preview: null,
      fpbNumber: "F2313210468",
      createdDate: "1976-04-19T12:59-0500",
      unit: "Cilandak",
      doctype: "UNI",
      total: 22222,
      expandedProps: {
        Action: buttonExpandedRow(),
        Requester: "tes",
        Department: "UNI-PAFM",
        Activity: "Non-IO",
        Budget: "",
        "Event Name": "",
        "Event Date": "",
        "PIC Name": "",
        "PIC Phone": "",
      },
    },
    {
      preview: null,
      fpbNumber: "F2313210468",
      createdDate: "1976-04-19T12:59-0500",
      unit: "Cilandak",
      doctype: "UNI",
      total: 22222,
      expandedProps: {
        Action: buttonExpandedRow(),
        Requester: "tes",
        Department: "UNI-PAFM",
        Activity: "Non-IO",
        Budget: "",
        "Event Name": "",
        "Event Date": "",
        "PIC Name": "",
        "PIC Phone": "",
      },
    },
    {
      preview: null,
      fpbNumber: "F2313210468",
      createdDate: "1976-04-19T12:59-0500",
      unit: "Cilandak",
      doctype: "UNI",
      total: 22222,
      expandedProps: {
        Action: buttonExpandedRow(),
        Requester: "tes",
        Department: "UNI-PAFM",
        Activity: "Non-IO",
        Budget: "",
        "Event Name": "",
        "Event Date": "",
        "PIC Name": "",
        "PIC Phone": "",
      },
    },
  ];

  const customCell = [
    openExpandedRow({ id: "preview" }),
    tableExpandedRows({ id: "expandedRow" }),
  ];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/scm-online/favicon.ico" />
      </Head>
      <PageHeader icon={<CheckBox />} title="Approval PJ Budget" />
      <Box sx={{ p: 2 }}>
        <RowDdlSimple
          text="Status"
          ddlValue={statusSelect}
          ddlValues={statusDdlValues}
          ddlOnChange={(e) => {
            setStatusSelect(e.target.value);
          }}
        />
        <MainTableMenu
          handleRefreshTable={(e) => {
            console.log("refresh table");
          }}
          searchTable={searchTable}
          handleSearchTable={handleSearchTable}
          columnSelect={columnSelect}
          handleColumnChange={handleColumnChange}
        />
        <Paper sx={{ width: "100%", mt: 2 }}>
          <MainTable
            columns={columnSelect}
            rows={rows}
            maxHeight={1000}
            customCell={customCell}
            paginationProp={paginationPropType.qtyAndTotal}
            qty={1234567890}
            total={1234567890}
            isExpandable={true}
          />
        </Paper>
        <Paper sx={{ width: 300, mt: 2 }}>
          <TableInfomationStatus
            statusList={["Waiting For Approval", "Approved", "Rejected"]}
          />
        </Paper>
      </Box>
    </>
  );
}
