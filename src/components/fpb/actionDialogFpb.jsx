import React from "react";
import AccountTreeRounded from "@mui/icons-material/AccountTreeRounded";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import FileUploadRounded from "@mui/icons-material/FileUploadRounded";
import HighlightOff from "@mui/icons-material/HighlightOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FileUpload from "react-mui-fileuploader";

export default function ActionDialogFpb({ type, isOpen, handleClose, action }) {
  const [fileInput, setFileInput] = React.useState("All");
  const handleFileInput = (files) => {
    console.log("file", files);
    setFileInput([...files]);
  };

  function renderBody(type) {
    if (type == "Track")
      return (
        <Box sx={{ p: 2 }}>
          <Typography> table here</Typography>
        </Box>
      );
    else
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
  }

  function renderAction(type) {
    if (type == "Track")
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
    else
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
          <Button onClick={handleClose} variant="contained" color="success">
            <FileUploadRounded sx={{ mr: 1 }} />
            Upload
          </Button>
        </>
      );
  }

  return (
    <Dialog
      maxWidth="xs"
      open={isOpen}
      onClose={handleClose}
      disableScrollLock={true}
    >
      <DialogContent sx={{ p: 0 }}>
        <Card>
          <CardContent sx={{ p: 0 }}>
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
                  {type == "Track" ? (
                    <AccountTreeRounded />
                  ) : (
                    <FileUploadRounded />
                  )}
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
                  {type == "Track" ? (
                    <Typography variant="h6">Track Status</Typography>
                  ) : type == "PTA" ? (
                    <Typography variant="h6">Upload Dokumen {type}</Typography>
                  ) : (
                    <Typography variant="h6">Upload Other Documents</Typography>
                  )}
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    variant="text"
                    color="darkBg"
                    onClick={handleClose}
                  >
                    <HighlightOff />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            {renderBody(type)}
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>{renderAction(type)}</DialogActions>
    </Dialog>
  );
}
