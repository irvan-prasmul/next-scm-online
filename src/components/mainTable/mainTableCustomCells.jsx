import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import Link from "@mui/material/Link";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import EditRounded from "@mui/icons-material/EditRounded";
import CheckBox from "@mui/icons-material/CheckBox";
import CloseRounded from "@mui/icons-material/CloseRounded";
import Cancel from "@mui/icons-material/Cancel";
import HourglassFullTwoTone from "@mui/icons-material/HourglassFullTwoTone";
import _ from "lodash";
import DoNotDisturbOutlined from "@mui/icons-material/DoNotDisturbOutlined";
import DriveFileRenameOutlineRounded from "@mui/icons-material/DriveFileRenameOutlineRounded";
import FileUploadRounded from "@mui/icons-material/FileUploadRounded";
import AccountTreeRounded from "@mui/icons-material/AccountTreeRounded";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";
import AdfScannerRounded from "@mui/icons-material/AdfScannerRounded";
import { confirmationType, dialogTypesFpb } from "@/globals/types";
import Switch from "@mui/material/Switch";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Inventory2Rounded from "@mui/icons-material/Inventory2Rounded";
import RenderIcon from "../renderIcon";

export function textWithEditOrCancelTextButton({
  id,
  handleEdit,
  handleCancel,
}) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="left">
          <Typography variant="bodyTable1" sx={{ pl: 1 }}>
            {value}
          </Typography>
          <br />
          <Button
            variant="text"
            size="small"
            onClick={(e) => handleEdit(row, value)}
          >
            <EditRounded color="primaryButton" /> Edit
          </Button>
          <Button
            variant="text"
            size="small"
            onClick={(e) => handleCancel(row, value)}
          >
            <CloseRounded color="error" /> Cancel
          </Button>
        </TableCell>
      );
    },
  };
}

export function uploadDocument({ id, handleUpload }) {
  return {
    id,
    element: (row, col) => {
      return (
        <TableCell key={col.id} align="center">
          <Button
            variant="text"
            size="small"
            onClick={(e) => handleUpload(row, col)}
          >
            <FileUploadRounded color="primaryButton" /> Upload
          </Button>
        </TableCell>
      );
    },
  };
}

export function imageView({ id }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      if (value == "" || value == undefined || value == null)
        return (
          <TableCell key={col.id} align="left">
            <Link
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <DoNotDisturbOutlined
                color="primaryButton"
                style={{ marginRight: 1, fontSize: "1.1rem" }}
              />
              <Typography variant="bodyTable1" color="blue">
                No Image
              </Typography>
            </Link>
          </TableCell>
        );
      return (
        <TableCell key={col.id} align="left">
          <Link
            href={value}
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ImageOutlined color="primaryButton" fontSize="small" />
            <Typography variant="bodyTable1" color="blue">
              View
            </Typography>
          </Link>
        </TableCell>
      );
    },
  };
}

export function longTextWithReadMore({
  id,
  limit,
  edit,
  setDialogType,
  setDialogBody,
  setOpenDialog,
}) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="left">
          {value.length > limit[col.id] ? (
            <>
              <Typography variant="bodyTable1">
                {value.substring(0, limit[col.id])}
                ...
              </Typography>
              <Button
                variant="text"
                color="primaryButton"
                size="small"
                onClick={(e) => {
                  setDialogType(dialogTypesFpb[col.id]);
                  setDialogBody(value);
                  setOpenDialog(true);
                }}
              >
                Read More
              </Button>
              {edit && edit[col.id] ? (
                <Button
                  variant="text"
                  color="primaryButton"
                  size="small"
                  onClick={(e) => {
                    setDialogType(dialogTypesFpb[col.id] + "#EDIT#");
                    setDialogBody(value);
                    setOpenDialog(true);
                  }}
                >
                  Edit
                  <DriveFileRenameOutlineRounded sx={{ fontSize: "1.2rem" }} />
                </Button>
              ) : null}
            </>
          ) : edit && edit[col.id] && (value.length == 0 || value == "") ? (
            <Button
              variant="contained"
              size="small"
              color="primaryButton"
              onClick={(e) => {
                setDialogType(dialogTypesFpb[col.id] + "#EDIT#");
                setDialogBody("");
                setOpenDialog(true);
              }}
            >
              <EditRounded fontSize="small" />
              <Typography variant="bodyTable1">Input</Typography>
            </Button>
          ) : null}
        </TableCell>
      );
    },
  };
}

export function iconView({ id }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="center">
          <RenderIcon status={value} />
          {/* {renderStatusIcon(value)} */}
        </TableCell>
      );
    },
  };
}

export function materialNameEdit({ id, setEditItemDialog }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="left">
          <Button
            variant="text"
            color="primaryButton"
            size="small"
            onClick={(e) => setEditItemDialog(true)}
          >
            <Typography variant="bodyCst1">{value}</Typography>
            <DriveFileRenameOutlineRounded sx={{ fontSize: "1.25rem" }} />
          </Button>
        </TableCell>
      );
    },
  };
}

export function openExpandedRow({ id }) {
  return {
    id,
    expandTrigger: true,
    element: (row, col, open, setOpen) => {
      return (
        <TableCell key={col.id} align="center">
          <IconButton
            variant="contained"
            size="small"
            color={open ? "error" : "primaryButton"}
            onClick={(e) => {
              setOpen(!open);
            }}
          >
            {open ? <RemoveCircle /> : <AddCircle />}
          </IconButton>
        </TableCell>
      );
    },
  };
}

export function fpbNumberTextDownload({ id }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="left">
          <Button
            variant="text"
            size="small"
            color="primaryButton"
            onClick={(e) => {
              const URL =
                "https://ws-dev.prasetiyamulya.ac.id/fpb/C_item/print_pdf/7182";
              if (typeof window !== "undefined") {
                window.location.href = URL;
              }
            }}
          >
            {value}{" "}
            <AdfScannerRounded
              color="primaryButton"
              sx={{ fontSize: "1.2rem" }}
            />
          </Button>
        </TableCell>
      );
    },
  };
}

export function renderSwitch({ id, onChange }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="left">
          <Switch checked={value} onChange={onChange} />
        </TableCell>
      );
    },
  };
}

// HYBRID TEXT BUTTON
export function picPurchasingType({ id, handleClick }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      const status = row["status"];
      if (status && status == "waiting")
        return (
          <TableCell key={col.id} align="center">
            <Button
              variant="contained"
              size="small"
              color="primaryButton"
              onClick={(e) => {
                handleClick(row, col);
              }}
            >
              <EditRounded fontSize="small" />
              <Typography variant="bodyTable1">Input</Typography>
            </Button>
          </TableCell>
        );
      else if (status && status == "finance")
        return (
          <TableCell key={col.id} align="center">
            <Button
              variant="text"
              size="small"
              color="primaryButton"
              onClick={(e) => {
                handleClick(row, col);
              }}
            >
              <Typography variant="bodyTable1">{value}</Typography>
              <DriveFileRenameOutlineRounded fontSize="small" />
            </Button>
          </TableCell>
        );
      else
        return (
          <TableCell key={col.id} align="center">
            <Typography variant="bodyTable1">{value}</Typography>
          </TableCell>
        );
    },
  };
}

// BELOW ARE SINGLE BUTTON TO OPEN DIALOG
export function trackStatus({ id, setDialogType, setOpenDialog }) {
  return {
    id,
    element: (row, col) => {
      return (
        <TableCell key={col.id} align="center">
          <Button
            variant="contained"
            size="small"
            color="secondaryButton"
            onClick={(e) => {
              setDialogType(dialogTypesFpb.track);
              setOpenDialog(true);
            }}
          >
            <AccountTreeRounded fontSize="small" />
            <Typography variant="bodyTable1">Tracking</Typography>
          </Button>
        </TableCell>
      );
    },
  };
}
export function setReviewerFpb({ id, setDialogType, setOpenDialog }) {
  return {
    id,
    element: (row, col) => {
      return (
        <TableCell key={col.id} align="center">
          <Button
            variant="contained"
            size="small"
            color="primaryButton"
            onClick={(e) => {
              setDialogType(dialogTypesFpb[col.id]);
              setOpenDialog(true);
            }}
          >
            <EditRounded fontSize="small" />
            <Typography variant="bodyTable1">Input</Typography>
          </Button>
        </TableCell>
      );
    },
  };
}
export function ictReviewFpb({ id, handleClick }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="center">
          {value ? (
            <Typography variant="bodyTableBoldItalic">Reviewed</Typography>
          ) : (
            <Button
              variant="contained"
              size="small"
              color="primaryButton"
              onClick={(e) => handleClick(row, col)}
            >
              <SearchRounded fontSize="small" />
              <Typography variant="bodyTable1">Review</Typography>
            </Button>
          )}
        </TableCell>
      );
    },
  };
}

export function warehouseFpbReceipt({ id, handleClick }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="center">
          {value == "received" ? (
            <Typography variant="bodyTableBoldItalic">Done</Typography>
          ) : (
            <Button
              variant="contained"
              size="small"
              color="primaryButton"
              onClick={(e) => handleClick(row, col)}
            >
              {value == "ready" ? (
                <>
                  <CheckBox fontSize="small" />
                  <Typography variant="bodyTable1">Ready</Typography>
                </>
              ) : value == "waiting" ? (
                <>
                  <Inventory2Rounded fontSize="small" />
                  <Typography variant="bodyTable1">Receipt</Typography>
                </>
              ) : null}
            </Button>
          )}
        </TableCell>
      );
    },
  };
}

// BELOW ARE 2 BUTTON ACTIONS
export function requesterCreateAction({
  id,
  setAddNewItemDialog,
  setConfirmType,
  setConfirmDialog,
}) {
  return {
    id,
    element: (row, col) => {
      return (
        <TableCell key="action" align="left">
          <Button
            variant="contained"
            size="small"
            sx={{ mr: 1 }}
            color="primaryButton"
            onClick={(e) => setAddNewItemDialog(true)}
          >
            <EditRounded /> Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={(e) => {
              setConfirmType(confirmationType.delete);
              setConfirmDialog(true);
            }}
          >
            <DeleteRounded /> Delete
          </Button>
        </TableCell>
      );
    },
  };
}

export function pjkAction({ id, setConfirmType, setConfirmDialog }) {
  return {
    id,
    element: (row, col) => {
      return (
        <TableCell key="action" align="left">
          <Button
            variant="contained"
            size="small"
            sx={{ mr: 1 }}
            color="success"
            onClick={(e) => {
              setConfirmType(confirmationType.approve);
              setConfirmDialog(true);
            }}
          >
            <CheckBox /> Approve
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={(e) => {
              setConfirmType(confirmationType.reject);
              setConfirmDialog(true);
            }}
          >
            <DeleteRounded /> Reject
          </Button>
        </TableCell>
      );
    },
  };
}

export function procurementAction({ id, setConfirmType, setConfirmDialog }) {
  return {
    id,
    element: (row, col) => {
      return (
        <TableCell key="action" align="center">
          <IconButton
            variant="contained"
            size="small"
            sx={{ mr: 1 }}
            color="success"
            onClick={(e) => {
              setConfirmType(confirmationType.approve);
              setConfirmDialog(true);
            }}
          >
            <CheckBox />
          </IconButton>
          <IconButton
            variant="contained"
            size="small"
            color="error"
            onClick={(e) => {
              setConfirmType(confirmationType.reject);
              setConfirmDialog(true);
            }}
          >
            <CloseRounded />
          </IconButton>
        </TableCell>
      );
    },
  };
}

export function editAndDeleteAction({ id, handleEdit, handleDelete }) {
  return {
    id,
    element: (row, col) => {
      return (
        <TableCell key="action" align="left">
          <Button
            variant="contained"
            size="small"
            sx={{ mr: 1 }}
            color="primaryButton"
            onClick={(e) => {
              handleEdit(row);
            }}
          >
            <EditRounded /> Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={handleDelete}
          >
            <DeleteRounded /> Delete
          </Button>
        </TableCell>
      );
    },
  };
}
