import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Add from "@mui/icons-material/Add";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import SaveRounded from "@mui/icons-material/SaveRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import MainTable from "@/components/mainTable/mainTable";
import _ from "lodash";
import ConfirmationDialog from "@/components/confirmationDialog";
import ActionDialogMaterialItem from "@/components/fpb/actionDialogMaterialItem";
import InputAdornment from "@mui/material/InputAdornment";
import PersonRounded from "@mui/icons-material/PersonRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import Collapse from "@mui/material/Collapse";
import MainTableMenu from "@/components/mainTable/mainTableMenu";
import { requesterCreateAction } from "@/components/mainTable/mainTableCustomCells";
import RowTextSimple from "@/components/rowSimplified/rowTextSimple";
import PageHeader from "@/components/pageHeader";
import RowTextFieldSimple from "@/components/rowSimplified/rowTexfieldSimple";
import RowDatePickerSimple from "@/components/rowSimplified/rowDatePickerSimple";
import { testApi } from "../api/hello";
import useDeepCompareEffect from "use-deep-compare-effect";
import { setAuth } from "@/globals/slices";
import RowDoubleDdl from "@/components/rowSimplified/rowDoubleDdl";
import { columnNormalize } from "@/globals/column-normalize";
import { confirmationType } from "@/globals/types";

const regexPhone = /^\d+$/;

const columns = [
  columnNormalize.materialName,
  columnNormalize.price,
  columnNormalize.qtyPB,
  columnNormalize.uom,
  columnNormalize.action2Button,
];

const rows = [
  {
    id: 1,
    materialName: "Fuel Cell",
    price: 321312312,
    qtyPB: 11111,
    uom: "UN",
  },
  {
    id: 2,
    materialName: "C Clamp Cell",
    price: 1133334455,
    qtyPB: 11111,
    uom: "UN",
  },
];

export default function FpbCreate() {
  const auth = useSelector((state) => state.auth);
  // const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  // const axios = defaultClient(dispatch);
  const [userName, setUserName] = React.useState("");

  useDeepCompareEffect(() => {
    console.log("auth useDeepCompareEffect:", auth);
    setUserName(auth.userName);
  }, [auth]);
  // useAxiosInterceptor(client, dispatch);

  // React.useEffect(() => {
  //   console.log("auth effect:", auth);
  //   setUserName(auth.userName);
  // }, [auth.userName]);
  // useAxiosInterceptor(dispatch);

  const [profitCenter, setProfitCenter] = React.useState("choose");
  const HandleProfitCenterSelect = (event) => {
    if (event.target.value != "choose") setProfitCenter(event.target.value);
  };
  const [profitCenterDdl, setProfitCenterSelect] = React.useState([
    { value: "ER", text: "External Riset" },
    { value: "SBES1", text: "SBE S1" },
    { value: "SBES2", text: "SBE S2" },
    { value: "SBES3", text: "SBE S3" },
    { value: "SHSIS1", text: "SHSI S1" },
    { value: "STEM", text: "STEM" },
    { value: "UNI", text: "UNI" },
    { value: "YPM", text: "YPM" },
  ]);

  const [plant, setPlant] = React.useState("choose");
  const HandlePlantSelect = (event) => {
    if (event.target.value != "choose") setPlant(event.target.value);
  };
  const plantDdl = [
    { value: "R001", text: "R001 - BSD" },
    { value: "R002", text: "R002 - Cilandak" },
  ];

  const [activity, setActivity] = React.useState("choose");
  const HandleActivitySelect = (event) => {
    if (event.target.value != "choose") setActivity(event.target.value);
  };
  const activityDdl = [
    { value: "NIO", text: "Non - IO" },
    { value: "IO", text: "IO" },
  ];
  const [ioBudget, setIoBudget] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [picName, setPicName] = React.useState("");
  const [picPhone, setPicPhone] = React.useState("");

  const [isValidate, setValidate] = React.useState(false);

  const [addNewItemDialog, setAddNewItemDialog] = React.useState(false);

  const [searchTable, setSearchTable] = React.useState("");
  function handleSearchTable(e) {
    setSearchTable(e.target.value);
    console.log("refresh table");
  }

  const [columnSelect, setColumnSelect] = React.useState(_.cloneDeep(columns));
  const handleColumnChange = (id) => {
    console.log("ddl click: ", id);
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

  const [confirmDialog, setConfirmDialog] = React.useState(false);
  const [confirmType, setConfirmType] = React.useState("cancel");

  function dialogAction() {
    console.log("dialogAction");
  }

  const customCell = [
    requesterCreateAction({
      id: "action",
      handleEdit: () => setAddNewItemDialog(true),
      handleDelete: () => {
        setConfirmType(confirmationType.delete);
        setConfirmDialog(true);
      },
    }),
  ];

  function eventForm() {
    return (
      <Box className="event-box">
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">-- EVENT --</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ pt: 1, mb: 2 }} />
        <RowTextFieldSimple
          md={2}
          text="IO Budget"
          textFieldValue={ioBudget}
          textFieldOnChange={(e) => setIoBudget(e.target.value)}
          isValidate={isValidate}
          textFieldLength={330}
          offset={3}
          whiteBackground
        />
        <RowTextFieldSimple
          md={2}
          text="Event Name"
          textFieldValue={eventName}
          textFieldOnChange={(e) => setEventName(e.target.value)}
          isValidate={isValidate}
          textFieldLength={330}
          offset={3}
          multiline
          rows={2}
          whiteBackground
        />
        <RowDatePickerSimple
          md={2}
          text="Date"
          dateValue={eventDate}
          dateOnChange={(val) => setEventDate(val)}
          isValidate={isValidate}
          offset={3}
          datePickerLength={330}
          whiteBackground
        />
        <RowTextFieldSimple
          md={2}
          text="PIC Name"
          textFieldValue={picName}
          textFieldOnChange={(e) => setPicName(e.target.value)}
          isValidate={isValidate}
          textFieldLength={330}
          offset={3}
          whiteBackground
          endAdornment={
            <InputAdornment position="end">
              <PersonRounded />
            </InputAdornment>
          }
        />
        <RowTextFieldSimple
          md={2}
          text="PIC Phone"
          textFieldValue={picPhone}
          textFieldOnChange={(e) => {
            e.target.value == "" || regexPhone.test(e.target.value)
              ? setPicPhone(e.target.value)
              : null;
          }}
          isValidate={isValidate}
          textFieldLength={330}
          offset={3}
          controlled
          whiteBackground
          endAdornment={
            <InputAdornment position="end">
              <PhoneRounded />
            </InputAdornment>
          }
        />
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{"FPB Create"}</title>
      </Head>
      <PageHeader icon={<ShoppingCart />} title={["FPB", "Create"]} />
      <Divider />
      <Box className="alternate-backgound" sx={{ p: 2 }}>
        <RowTextSimple text="Requester" otherText={": " + userName} />
        <RowDoubleDdl
          text1="Profit Center"
          ddlValue1={profitCenter}
          ddlValues1={profitCenterDdl}
          ddlOnChange1={HandleProfitCenterSelect}
          addChoose1
          text2="Business Area"
          ddlValue2={profitCenter}
          ddlValues2={[
            { value: "choose", text: "Choose Profit center" },
            { value: "ER", text: "ZR07 - PO EXTERNAL RISET" },
            { value: "SBES1", text: "ZR03-PO SBE" },
            { value: "SBES2", text: "ZR03-PO SBE" },
            { value: "SBES3", text: "ZR03-PO SBE" },
            { value: "SHSIS1", text: "ZR06-PO SHSI" },
            { value: "STEM", text: "ZR05-PO STEM" },
            { value: "UNI", text: "ZR02-PO UNIV" },
            { value: "YPM", text: "ZR01-PO YAYASAN" },
          ]}
          disabled2
          isValidate={isValidate}
          whiteBackground
          gap={2}
        />
        <RowDoubleDdl
          text1="Plant"
          disabled1={profitCenter == "choose"}
          ddlValue1={plant}
          ddlValues1={plantDdl}
          ddlOnChange1={HandlePlantSelect}
          addChoose1
          text2="Activity"
          ddlValue2={activity}
          ddlValues2={activityDdl}
          ddlOnChange2={HandleActivitySelect}
          addChoose2
          disabled2={plant == "choose"}
          isValidate={isValidate}
          whiteBackground
          gap={2}
        />
        <Collapse in={activity == "IO"} timeout={600}>
          {eventForm()}
        </Collapse>
        <Divider sx={{ pt: 4, mb: 2 }} />
        <Grid container>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="primaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => setAddNewItemDialog(true)}
              disabled={
                profitCenter == "Choose" ||
                plant == "Choose" ||
                activity == "Choose"
              }
            >
              <Add sx={{ mr: 1 }} /> Add New Item
            </Button>
          </Grid>
          <Grid item xs />
          <Grid item xs="auto" sx={{ pr: 1 }}>
            <Button
              variant="contained"
              color="secondaryButton"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => {
                // console.log("dismiss:", error);
                console.log("dismiss:", auth);
                dispatch(
                  setAuth({
                    userToken: "dummy token",
                    userName: "fpb create",
                  })
                );
                setConfirmType("close");
                setConfirmDialog(true);
              }}
            >
              <DoNotDisturbOutlined sx={{ mr: 1 }} /> Close
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="success"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => {
                testApi(dispatch)
                  .then((response) => {
                    console.log("success");
                  })
                  .catch((err) => {
                    console.log("in page error:", err);
                  });
                // clientPortable
                //   .get("/")
                //   .then((res) => {
                //     console.log("success");
                //   })
                //   .catch((err) => {
                //     console.log("in page error:", err);
                //   });
                setValidate(true);
                // dispatch({
                //   type: "setAuth",
                //   payload: {
                //     userToken: "dummy token",
                //     userName: "setError",
                //   },
                // });
              }}
            >
              <SaveRounded sx={{ mr: 1 }} /> Save
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ pt: 2, mb: 4 }} />
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
          />
        </Paper>
      </Box>
      <ActionDialogMaterialItem
        isOpen={addNewItemDialog}
        handleClose={(e) => setAddNewItemDialog(false)}
      />
      <ConfirmationDialog
        type={confirmType}
        isOpen={confirmDialog}
        handleClose={(e) => setConfirmDialog(false)}
        action={dialogAction}
      />
    </>
  );
}
