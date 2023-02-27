import { ErrorOutlineRounded } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";

function noType() {
  return <>Default</>;
}

function cancelVariant(type) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ErrorOutlineRounded color="warning" sx={{ fontSize: 72 }} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Are you sure you want to {type}?</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="bodyCst1">
          {type == "close"
            ? "Your changes will be lost!"
            : "This action cannot be undone!"}
        </Typography>
      </Grid>
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
      maxWidth="xs"
      open={isOpen}
      onClose={handleClose}
      disableScrollLock={true}
    >
      <DialogContent>
        {type == "cancel" || type == "delete" || type == "close"
          ? cancelVariant(type)
          : noType()}
      </DialogContent>
      <DialogActions>
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