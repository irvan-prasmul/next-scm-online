import React from "react";
import AccountTreeRounded from "@mui/icons-material/AccountTreeRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import FileUploadRounded from "@mui/icons-material/FileUploadRounded";
import HighlightOff from "@mui/icons-material/HighlightOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FileUpload from "react-mui-fileuploader";
import BookmarkRounded from "@mui/icons-material/BookmarkRounded";
import LocalAtmRounded from "@mui/icons-material/LocalAtmRounded";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SaveRounded from "@mui/icons-material/SaveRounded";
import Note from "@mui/icons-material/Note";
import TextField from "@mui/material/TextField";
import {
  dialogTypesFpb,
  purchasingTypeDdlValues,
  purchasingTypeOptionDdlValues,
} from "@/types";
import RowDdlSimple from "../rowSimplified/rowDdlSimple";
import SearchRounded from "@mui/icons-material/SearchRounded";
import RowTextFieldSimple from "../rowSimplified/rowTexfieldSimple";

export default function ActionDialogFpb({
  type,
  isOpen,
  handleClose,
  action,
  bodyValue,
  setBodyValue,
}) {
  const [fileInput, setFileInput] = React.useState([]);
  const [applyOption, setApplyption] = React.useState("choose");
  const handleFileInput = (files) => {
    console.log("file", files);
    setFileInput([...files]);
  };
  const [statusSelect, setStatusSelect] = React.useState("all");

  function renderHeader(type) {
    return (
      <Box
        sx={{
          p: 2,
          width: "100%",
          backgroundColor: "lightBlueHeader.main",
          color: "lightBlueHeader.contrastText",
        }}
      >
        <Grid container>
          <Grid
            item
            xs="auto"
            sx={{
              display: "flex !important",
              flexDirection: "column !important",
              justifyContent: "center !important",
              pr: 1,
            }}
          >
            {type == dialogTypesFpb.track ? (
              <AccountTreeRounded />
            ) : type == dialogTypesFpb.pta || type == dialogTypesFpb.other ? (
              <FileUploadRounded />
            ) : type == dialogTypesFpb.reviewer ||
              type == dialogTypesFpb.inputPurchasingtype ? (
              <LocalAtmRounded />
            ) : type == dialogTypesFpb.requesterNotes ||
              type == dialogTypesFpb.ictNotes ||
              type == dialogTypesFpb.purchasingNotes ||
              type == dialogTypesFpb.informationStatus ||
              type == dialogTypesFpb.documentStatus ? (
              <BookmarkRounded />
            ) : type == dialogTypesFpb.requesterNotes + "#EDIT#" ||
              type == dialogTypesFpb.purchasingNotes + "#EDIT#" ? (
              <Note />
            ) : type == dialogTypesFpb.reviewerIct ? (
              <SearchRounded />
            ) : null}
          </Grid>
          <Grid
            item
            xs
            sx={{
              display: "flex !important",
              flexDirection: "column !important",
              justifyContent: "center !important",
            }}
          >
            {type == dialogTypesFpb.track ? (
              <Typography variant="h6">Track Status</Typography>
            ) : type == dialogTypesFpb.pta ? (
              <Typography variant="h6">Upload Dokumen {type}</Typography>
            ) : type == dialogTypesFpb.other ? (
              <Typography variant="h6">Upload Other Documents</Typography>
            ) : type == dialogTypesFpb.reviewer ? (
              <Typography variant="h6">Review FPB</Typography>
            ) : type == dialogTypesFpb.requesterNotes + "#EDIT#" ||
              type == dialogTypesFpb.purchasingNotes + "#EDIT#" ? (
              <Typography variant="h6">Update Requester Notes</Typography>
            ) : type == dialogTypesFpb.reviewerIct ? (
              <Typography variant="h6">Review ICT</Typography>
            ) : (
              <Typography variant="h6">{type}</Typography>
            )}
          </Grid>
          <Grid item xs={1}>
            <IconButton variant="text" color="darkBg" onClick={handleClose}>
              <HighlightOff />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    );
  }

  function renderBody(type) {
    if (type == dialogTypesFpb.track)
      return (
        <Box sx={{ p: 2 }}>
          <Typography> table here</Typography>
        </Box>
      );
    if (type == dialogTypesFpb.reviewer) {
      return (
        <Box sx={{ p: 2 }}>
          <RowDdlSimple
            md={3}
            text="Reviewer"
            ddlValue={statusSelect}
            ddlValues={[
              {
                value: "all",
                text: "All",
              },
              {
                value: "dil",
                text: "DIL",
              },
              {
                value: "eso",
                text: "ESO",
              },
              {
                value: "frp",
                text: "FRP",
              },
              {
                value: "pnk",
                text: "PNK",
              },
            ]}
            fullWidth
            ddlOnChange={(e) => setStatusSelect(e.target.value)}
          />
        </Box>
      );
    } else if (type == dialogTypesFpb.pta || type == dialogTypesFpb.other)
      return (
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid item xs="auto" sx={{ pr: 2 }}>
              <Typography variant="h6">File</Typography>
            </Grid>
            <Grid item xs>
              <Grid container>
                <Grid item xs={12}>
                  <FileUpload
                    title="Select a file..."
                    multiFile={false}
                    maxFileSize={10}
                    onFilesChange={handleFileInput}
                    allowedExtensions={["jpg", "jpeg", "png", "pdf"]}
                    onContextReady={(context) => {}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="bodyCst1" color="error">
                    * Allowed file types : jpg, jpeg, png & pdf. Max size : 10
                    MB.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      );
    else if (
      type == dialogTypesFpb.requesterNotes ||
      type == dialogTypesFpb.ictNotes ||
      type == dialogTypesFpb.purchasingNotes ||
      type == dialogTypesFpb.informationStatus ||
      type == dialogTypesFpb.documentStatus
    ) {
      return (
        <Box
          sx={{ p: 2, m: 2, backgroundColor: "#f2f2f2", textAlign: "justify" }}
        >
          <Typography variant="bodyCst1">{bodyValue}</Typography>
        </Box>
      );
    } else if (
      type == dialogTypesFpb.requesterNotes + "#EDIT#" ||
      type == dialogTypesFpb.purchasingNotes + "#EDIT#"
    ) {
      return (
        <Box sx={{ backgroundColor: "#f2f2f2", textAlign: "justify", m: 2 }}>
          <TextField
            multiline
            rows={5}
            variant="outlined"
            size="small"
            // sx={{ width: 450 }}
            fullWidth
            value={bodyValue}
            // onChange={(e) => {
            //   setInformation(e.target.value);
            // }}
          />
        </Box>
      );
    } else if (type == dialogTypesFpb.reviewerIct) {
      return (
        <Box sx={{ p: 2 }}>
          <RowTextFieldSimple
            text="Notes"
            textFieldValue={bodyValue}
            textFieldOnChange={setBodyValue}
            fullWidth
            multiline
            row={5}
          />
        </Box>
      );
    } else if (type == dialogTypesFpb.inputPurchasingtype) {
      return (
        <Box sx={{ p: 2 }}>
          <RowDdlSimple
            md={4}
            text="Purchasing Type"
            ddlValue={bodyValue}
            ddlValues={purchasingTypeDdlValues}
            fullWidth
            ddlOnChange={(e) => setBodyValue(e.target.value)}
          />
          <RowDdlSimple
            md={4}
            text="Apply Option"
            ddlValue={applyOption}
            ddlValues={purchasingTypeOptionDdlValues}
            fullWidth
            ddlOnChange={(e) => setApplyOption(e.target.value)}
          />
        </Box>
      );
    }
  }

  function renderAction(type) {
    if (type == dialogTypesFpb.track)
      return (
        <>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondaryButton"
          >
            <DoNotDisturbOutlined sx={{ mr: 1 }} />
            Cancel
          </Button>
        </>
      );
    if (
      type == dialogTypesFpb.reviewer ||
      type == dialogTypesFpb.requesterNotes + "#EDIT#" ||
      type == dialogTypesFpb.purchasingNotes + "#EDIT#" ||
      type == dialogTypesFpb.reviewerIct ||
      type == dialogTypesFpb.inputPurchasingtype
    ) {
      return (
        <>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondaryButton"
          >
            <DoNotDisturbOutlined sx={{ mr: 1 }} />
            Close
          </Button>
          <Button onClick={action} variant="contained" color="success">
            <SaveRounded sx={{ mr: 1 }} />
            Save
          </Button>
        </>
      );
    } else if (type == dialogTypesFpb.pta || type == dialogTypesFpb.other)
      return (
        <>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondaryButton"
          >
            <DoNotDisturbOutlined sx={{ mr: 1 }} />
            Cancel
          </Button>
          <Button onClick={action} variant="contained" color="success">
            <FileUploadRounded sx={{ mr: 1 }} />
            Upload
          </Button>
        </>
      );
  }

  return (
    <Dialog
      maxWidth={
        type == dialogTypesFpb.reviewerIct
          ? "md"
          : type == dialogTypesFpb.requesterNotes ||
            type == dialogTypesFpb.ictNotes ||
            type == dialogTypesFpb.purchasingNotes ||
            type == dialogTypesFpb.informationStatus ||
            type == dialogTypesFpb.documentStatus ||
            type == dialogTypesFpb.requesterNotes + "#EDIT#" ||
            type == dialogTypesFpb.purchasingNotes + "#EDIT#"
          ? "sm"
          : "xs"
      }
      fullWidth
      open={isOpen}
      onClose={handleClose}
      disableScrollLock={true}
    >
      <DialogContent sx={{ p: 0 }}>
        <Card>
          <CardContent sx={{ p: 0 }}>
            {renderHeader(type)}

            {renderBody(type)}
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>{renderAction(type)}</DialogActions>
    </Dialog>
  );
}
