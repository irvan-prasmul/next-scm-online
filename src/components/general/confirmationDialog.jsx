import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import Zoom from "@mui/material/Zoom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import TextField from "@mui/material/TextField";
import { confirmationType } from "@/globals/types";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

function noType() {
  return <>Default</>;
}

function warningVariant(type, isValue) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ErrorOutlineRounded color="warning" sx={{ fontSize: 72 }} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* FIRST LINE */}
        <Typography variant="h5">
          {(() => {
            switch (type) {
              case confirmationType.flagIct:
              case confirmationType.save:
              case confirmationType.ready:
                return "Confirmation";
              default:
                return `Are you sure you want to ${type}?`;
            }
          })()}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: type == confirmationType.reject ? 3 : 0,
        }}
      >
        <Typography variant="bodyCst1">
          {/* SECOND LINE */}
          {(() => {
            switch (type) {
              case confirmationType.close:
                return "Your changes will be lost!";
              case confirmationType.cancel:
              case confirmationType.delete:
                return "This action cannot be undone!";
              case confirmationType.reject:
                return "Once reject, you will not be able to recovery this data!\n*** Please write the reason in the column below : ";
              case confirmationType.flagIct:
                return (
                  (isValue ? "Unset" : "Set") + ' as "ICT" Material Group?'
                );
              case confirmationType.save:
                return "Are you sure you want to save?";
              case confirmationType.ready:
                return "Are you sure the item have been taken?";
              default:
                return "";
            }
          })()}
        </Typography>
      </Grid>
      {/* THIRD LINE */}
      {(() => {
        console.log("type ", type);
        switch (type) {
          case confirmationType.reject:
            return (
              <Grid item xs={12} sx={{ pt: 2 }}>
                <TextField size="small" label="Reason" fullWidth />
              </Grid>
            );
          case confirmationType.ready:
            return (
              <Grid item xs={12} sx={{ pt: 2 }}>
                <TextField size="small" label="Recipient's Name" fullWidth />
              </Grid>
            );
          default:
            return null;
        }
      })()}
    </Grid>
  );
}

export default function ConfirmationDialog({
  type,
  isOpen,
  handleClose,
  action = (e) => console.log("ConfirmationDialog"),
  isValue = false,
}) {
  return (
    <Dialog
      TransitionComponent={Transition}
      maxWidth="xs"
      open={isOpen}
      onClose={handleClose}
      disableScrollLock={true}
    >
      <DialogContent>
        {(() => {
          switch (type) {
            case confirmationType.cancel:
            case confirmationType.delete:
            case confirmationType.close:
            case confirmationType.approve:
            case confirmationType.reject:
            case confirmationType.flagIct:
            case confirmationType.save:
            case confirmationType.receipt:
            case confirmationType.ready:
              return warningVariant(type, isValue);
            default:
              return noType();
          }
        })()}
      </DialogContent>
      <DialogActions sx={{ pr: 3, pb: 3 }}>
        <Button
          onClick={handleClose}
          variant="contained"
          color="secondaryButton"
        >
          Cancel
        </Button>
        <Button onClick={action} variant="contained" color="success">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
