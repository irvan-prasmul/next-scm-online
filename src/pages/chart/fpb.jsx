import PageHeader from "@/components/general/pageHeader";
import RowDateRangePickerSimple from "@/components/rowSimplified/rowDateRangePickerSimple";
import RowLineChartSimple from "@/components/rowSimplified/rowLineChartSimple";
import Box from "@mui/material/Box";
import ChartAreasplineVariantIcon from "mdi-react/ChartAreasplineVariantIcon";
import Head from "next/head";
import React from "react";
import { addDays } from "date-fns";
import RowPieChartSimple from "@/components/rowSimplified/rowPieChartSimple";

const data = [
  {
    name: "2023-03-01",
    Waiting: 16,
    Approved: 5,
    Rejected: 0,
    "Cancelled by User": 0,
  },
  {
    name: "2023-03-02",
    Waiting: 3,
    Approved: 0,
    Rejected: 0,
    "Cancelled by User": 3,
  },
  {
    name: "2023-03-03",
    Waiting: 21,
    Approved: 0,
    Rejected: 0,
    "Cancelled by User": 0,
  },
  {
    name: "2023-03-04",
    Waiting: 0,
    Approved: 0,
    Rejected: 0,
    "Cancelled by User": 0,
  },
];

const dataPie = [
  { name: "Waiting", value: 400 },
  { name: "Approved", value: 300 },
  { name: "Rejected", value: 300 },
  { name: "Cancelled by User", value: 200 },
];

const chartColor = ["#d7df01", "#ffa500", "#4b8a08", "#ff0000"];

export default function ChartFpb() {
  const [period, setPeriod] = React.useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <>
      <Head>
        <title>Chart FPB</title>
      </Head>
      <PageHeader icon={<ChartAreasplineVariantIcon />} title="Chart : FPB" />
      <Box sx={{ p: 2 }}>
        <RowDateRangePickerSimple
          md={2}
          text="Period"
          dateValue={period}
          dateOnChange={(e) => setPeriod([e.selection])}
        />
        <RowLineChartSimple data={data} chartColor={chartColor} />
        <RowPieChartSimple data={dataPie} chartColor={chartColor} />
      </Box>
    </>
  );
}
