import PageHeader from "@/components/pageHeader";
import RowImportSimple from "@/components/rowSimplified/rowImportSimple";
import Box from "@mui/material/Box";
import ArrowTopRightBoldBoxIcon from "mdi-react/ArrowTopRightBoldBoxIcon";
import Head from "next/head";
import React from "react";

export default function SapIndex() {
  const [fileInput, setFileInput] = React.useState([]);

  return (
    <>
      <Head>
        <title>Import PO</title>
      </Head>
      <PageHeader
        icon={<ArrowTopRightBoldBoxIcon />}
        title="Import PO Number From SAP"
      />
      <Box sx={{ p: 2 }}>
        <RowImportSimple
          md={2}
          test="Import PO"
          handleButton2={(e) => {
            const URL =
              "https://ws-dev.prasetiyamulya.ac.id/fpb/C_purc/download_template_po";
            if (typeof window !== "undefined") {
              window.location.href = URL;
            }
          }}
          handleFileInput={(e) => setFileInput(e.target.files[0])}
        />
      </Box>
    </>
  );
}
