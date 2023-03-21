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
import SaveRounded from "@mui/icons-material/SaveRounded";
import Note from "@mui/icons-material/Note";
import TextField from "@mui/material/TextField";
import {
  dialogTypesFpb,
  purchasingTypeDdlValues,
  purchasingTypeOptionDdlValues,
} from "@/globals/types";
import RowDdlSimple from "../rowSimplified/rowDdlSimple";
import SearchRounded from "@mui/icons-material/SearchRounded";
import RowTextFieldSimple from "../rowSimplified/rowTexfieldSimple";
import Slide from "@mui/material/Slide";
import { columnNormalize } from "@/globals/column-normalize";
import MainTable from "../mainTable/mainTable";
import { trackingId, trackingStatus } from "../mainTable/mainTableCustomCells";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const columns = [
  columnNormalize.id,
  columnNormalize.dateGeneric,
  columnNormalize.informationGeneric,
  columnNormalize.status,
];

function headerIcon(type) {
  switch (type) {
    case dialogTypesFpb.track:
      return <AccountTreeRounded />;
    case dialogTypesFpb.pta:
    case dialogTypesFpb.io:
    case dialogTypesFpb.otherDoc:
      return <FileUploadRounded />;
    case dialogTypesFpb.reviewer:
    case dialogTypesFpb.inputPurchasingtype:
      return <LocalAtmRounded />;
    case dialogTypesFpb.requesterNotes:
    case dialogTypesFpb.ictNotes:
    case dialogTypesFpb.purchasingNotes:
    case dialogTypesFpb.informationStatus:
    case dialogTypesFpb.documentStatus:
      return <BookmarkRounded />;
    case dialogTypesFpb.requesterNotes + "#EDIT#":
    case dialogTypesFpb.purchasingNotes + "#EDIT#":
      return <Note />;
    case dialogTypesFpb.reviewerIct:
      <SearchRounded />;
    default:
      return null;
  }
}

function headerText(type) {
  switch (type) {
    case dialogTypesFpb.track:
      return <Typography variant="h6">Track Status</Typography>;
    case dialogTypesFpb.pta:
    case dialogTypesFpb.io:
      return <Typography variant="h6">Upload Dokumen {type}</Typography>;
    case dialogTypesFpb.otherDoc:
      return <Typography variant="h6">Upload Other Documents</Typography>;
    case dialogTypesFpb.reviewer:
      return <Typography variant="h6">Review FPB</Typography>;
    case dialogTypesFpb.requesterNotes + "#EDIT#":
    case dialogTypesFpb.purchasingNotes + "#EDIT#":
      return <Typography variant="h6">Update Requester Notes</Typography>;
    case dialogTypesFpb.reviewerIct:
      return <Typography variant="h6">Review ICT</Typography>;
    default:
      return <Typography variant="h6">{type}</Typography>;
  }
}

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

  const customCell = [
    trackingId({ id: "number" }),
    trackingStatus({ id: "status" }),
  ];

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
            {headerIcon(type)}
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
            {headerText(type)}
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
    switch (type) {
      case dialogTypesFpb.track:
        return (
          <Box sx={{ p: 2 }}>
            <MainTable
              columns={columns}
              rows={bodyValue}
              maxHeight={400}
              customCell={customCell}
              isPagination={false}
            />
          </Box>
        );
      case dialogTypesFpb.reviewer:
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
      case dialogTypesFpb.pta:
      case dialogTypesFpb.io:
      case dialogTypesFpb.otherDoc:
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
      case dialogTypesFpb.requesterNotes:
      case dialogTypesFpb.ictNotes:
      case dialogTypesFpb.purchasingNotes:
      case dialogTypesFpb.informationStatus:
      case dialogTypesFpb.documentStatus:
        return (
          <Box
            sx={{
              p: 2,
              m: 2,
              backgroundColor: "#f2f2f2",
              textAlign: "justify",
            }}
          >
            <Typography variant="bodyCst1">{bodyValue}</Typography>
          </Box>
        );
      case dialogTypesFpb.requesterNotes + "#EDIT#":
      case dialogTypesFpb.purchasingNotes + "#EDIT#":
        return (
          <Box sx={{ backgroundColor: "#f2f2f2", textAlign: "justify", m: 2 }}>
            <TextField
              multiline
              rows={5}
              variant="outlined"
              size="small"
              fullWidth
              defaultValue={bodyValue}
              onChange={(e) => {
                console.log("text:", e.target.value);
              }}
            />
          </Box>
        );
      case dialogTypesFpb.reviewerIct:
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
      case dialogTypesFpb.inputPurchasingtype:
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
      default:
        return null;
    }
  }

  function renderAction(type) {
    switch (type) {
      case dialogTypesFpb.track:
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
          </>
        );
      case dialogTypesFpb.reviewer:
      case dialogTypesFpb.requesterNotes + "#EDIT#":
      case dialogTypesFpb.purchasingNotes + "#EDIT#":
      case dialogTypesFpb.reviewerIct:
      case dialogTypesFpb.inputPurchasingtype:
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
      case dialogTypesFpb.pta:
      case dialogTypesFpb.io:
      case dialogTypesFpb.otherDoc:
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
      default:
        return null;
    }
  }

  return (
    <Dialog
      TransitionComponent={Transition}
      maxWidth={(() => {
        switch (type) {
          case dialogTypesFpb.reviewerIct:
            return "md";
          case dialogTypesFpb.requesterNotes:
          case dialogTypesFpb.ictNotes:
          case dialogTypesFpb.purchasingNotes:
          case dialogTypesFpb.informationStatus:
          case dialogTypesFpb.documentStatus:
          case dialogTypesFpb.requesterNotes + "#EDIT#":
          case dialogTypesFpb.purchasingNotes + "#EDIT#":
            return "sm";
          default:
            return "xs";
        }
      })()}
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
      <DialogActions sx={{ mb: 1, mr: 1 }}>{renderAction(type)}</DialogActions>
    </Dialog>
  );
}
