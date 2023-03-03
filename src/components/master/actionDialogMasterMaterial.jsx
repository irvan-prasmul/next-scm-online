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
import InsertDriveFileRounded from "@mui/icons-material/InsertDriveFileRounded";
import { dialogTypesMasterMaterial } from "@/types";

export default function ActionDialogMasterMaterial({
  type,
  isOpen,
  handleClose,
  action,
}) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

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
            {type == dialogTypesMasterMaterial.add ? (
              <InsertDriveFileRounded />
            ) : (
              <></>
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
            {type == "none" ? (
              <Typography variant="h6">none</Typography>
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
    if (type == dialogTypesMasterMaterial.add)
      return (
        <Box sx={{ p: 2 }}>
          <Typography> table here</Typography>
        </Box>
      );
    if (type == "Reviewer") {
      return (
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid
              item
              xs="auto"
              sx={{ display: "flex", alignItems: "center", pr: 2 }}
            >
              <Typography variant="h6">Reviewer</Typography>
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                size="small"
                margin="normal"
                sx={{ width: "300px" }}
              >
                <Select
                  value={statusSelect}
                  onChange={(e) => setStatusSelect(e.target.value)}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"DIL"}>DIL</MenuItem>
                  <MenuItem value={"ESO"}>ESO</MenuItem>
                  <MenuItem value={"FRP"}>FRP</MenuItem>
                  <MenuItem value={"PNK"}>PNK</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      );
    } else if (type == "PTA" || type == "Other")
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
      type == "Requester Notes" ||
      type == "ICT Notes" ||
      type == "Purchasing Notes" ||
      type == "Information Status" ||
      type == "Document Status"
    ) {
      return (
        <Box
          sx={{ p: 2, m: 2, backgroundColor: "#f2f2f2", textAlign: "justify" }}
        >
          <Typography variant="bodyCst1">{bodyValue}</Typography>
        </Box>
      );
    } else if (type == "Requester Notes#EDIT#") {
      return (
        <Box sx={{ backgroundColor: "#f2f2f2", textAlign: "justify" }}>
          <TextField
            multiline
            rows={5}
            variant="outlined"
            size="small"
            sx={{ width: 450 }}
            value={bodyValue}
            // onChange={(e) => {
            //   setInformation(e.target.value);
            // }}
          />
        </Box>
      );
    }
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
    if (type == "Reviewer" || type == "Requester Notes#EDIT#") {
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
    } else if (type == "PTA" || type == "Other")
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
      maxWidth="xs"
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
