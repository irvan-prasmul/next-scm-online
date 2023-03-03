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
import { confirmationType } from "@/types";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

function noType() {
  return <>Default</>;
}

function warningVariant(type) {
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
        <Typography variant="h5">Are you sure you want to {type}?</Typography>
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
          {type == confirmationType.close
            ? "Your changes will be lost!"
            : type == confirmationType.cancel || type == confirmationType.delete
            ? "This action cannot be undone!"
            : type == confirmationType.reject
            ? "Once reject, you will not be able to recovery this data!\n*** Please write the reason in the column below : "
            : ""}
        </Typography>
      </Grid>
      {type == confirmationType.reject ? (
        <Grid item xs={12} sx={{ pt: 2 }}>
          <TextField size="small" label="Reason" fullWidth />
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
}

export default function ConfirmationDialog({
  type,
  isOpen,
  handleClose,
  action,
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
        {type == confirmationType.cancel ||
        type == confirmationType.delete ||
        type == confirmationType.close ||
        type == confirmationType.approve ||
        type == confirmationType.reject
          ? warningVariant(type)
          : noType()}
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
