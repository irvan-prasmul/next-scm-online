import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import Link from "@mui/material/Link";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import EditRounded from "@mui/icons-material/EditRounded";
import CheckBox from "@mui/icons-material/CheckBox";
import CloseRounded from "@mui/icons-material/CloseRounded";
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
import Switch from "@mui/material/Switch";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Inventory2Rounded from "@mui/icons-material/Inventory2Rounded";
import RenderIcon from "../general/renderIcon";
import ArrowDownwardRounded from "@mui/icons-material/ArrowDownwardRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { columnNormalize } from "@/globals/column-normalize";

export function autoIncrementNumber({ id }) {
  return {
    id,
    element: (row, col, index, page, perPage) => {
      return (
        <TableCell key={col.id} align="left">
          <Typography variant="bodyTable1" sx={{ pl: 1 }}>
            {(page - 1) * perPage + (index + 1)}
          </Typography>
        </TableCell>
      );
    },
  };
}

export function textWithEditOrCancelTextButton({
  id,
  handleEdit = (row, col) => {},
  handleCancel = (row, col) => {},
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

export function renderFpbNumber({
  id,
  handleEdit = (row, col) => {},
  handleCancel = (row, col) => {},
}) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      const xValue = row["x_noFpb"];
      let bodyValue = [];
      if (xValue == "print_fpb_pdf") {
        bodyValue.push(
          <Button
            variant="text"
            size="small"
            color="primaryButton"
            onClick={(e) => {
              const URL =
                process.env.NEXT_PUBLIC_BE_URL +
                "fpb/C_item/print_pdf/" +
                row["idFpbHead"];
              if (typeof window !== "undefined") {
                window.location.href = URL;
              }
            }}
          >
            {value}
            <AdfScannerRounded
              color="primaryButton"
              sx={{ fontSize: "1.2rem" }}
            />
          </Button>
        );
      } else if (Array.isArray(xValue)) {
        bodyValue.push(
          <TableCell key={col.id} align="left">
            <Typography variant="bodyTable1" sx={{ pl: 1 }}>
              {value}
            </Typography>
            <br />
            {xValue.findIndex((i) => i == "edit") >= 0 ? (
              <Button
                variant="text"
                size="small"
                onClick={(e) => handleEdit(row, value)}
              >
                <EditRounded color="primaryButton" /> Edit
              </Button>
            ) : null}
            {xValue.findIndex((i) => i == "cancel") >= 0 ? (
              <Button
                variant="text"
                size="small"
                onClick={(e) => handleCancel(row, value)}
              >
                <CloseRounded color="error" /> Cancel
              </Button>
            ) : null}
          </TableCell>
        );
      } else {
        bodyValue.push(
          <Typography variant="bodyTable1" sx={{ pl: 1 }}>
            {value}
          </Typography>
        );
      }
      return (
        <TableCell key={col.id} align="left">
          {bodyValue}
        </TableCell>
      );
    },
  };
}

// TODO:: DELETE LATER SHOULD BE DEPRECATED
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

export function uploadDocument({ id, handleUpload = (row, col) => {} }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      const docURL =
        col.id == columnNormalize.pta.id
          ? "pta"
          : col.id == columnNormalize.io.id
          ? "io"
          : "other_doc";
      return (
        <TableCell key={col.id} align="center">
          {value == "-" ? (
            "-"
          ) : value ? (
            <>
              <Button variant="text" size="small">
                <Link
                  href={
                    process.env.NEXT_PUBLIC_BE_URL +
                    "assets/upload_img/other_doc/" +
                    docURL +
                    "/" +
                    value
                  }
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
              </Button>
              |
              <Button
                variant="text"
                color="primaryButton"
                size="small"
                onClick={(e) => handleUpload(row, col)}
              >
                Edit
                <DriveFileRenameOutlineRounded sx={{ fontSize: "1.2rem" }} />
              </Button>
            </>
          ) : (
            <Button
              variant="text"
              size="small"
              onClick={(e) => handleUpload(row, col)}
            >
              <FileUploadRounded color="primaryButton" /> Upload
            </Button>
          )}
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
  handleReadMore = (row, col) => {},
  handleEdit = (row, col) => {},
}) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="left">
          {value?.length > limit[col.id] ? (
            <>
              <Typography variant="bodyTable1">
                {value.substring(0, limit[col.id])}
                ...
              </Typography>
              <Button
                variant="text"
                color="primaryButton"
                size="small"
                onClick={(e) => handleReadMore(row, col)}
              >
                Read More
              </Button>
              {edit && edit[col.id] ? (
                <Button
                  variant="text"
                  color="primaryButton"
                  size="small"
                  onClick={(e) => handleEdit(row, col)}
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
              onClick={(e) => handleEdit(row, col)}
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

export function materialNameEdit({ id, handleClick = (row, col) => {} }) {
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
            onClick={(e) => handleClick(row, col)}
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

export function renderSwitch({ id, onChange = (event) => {} }) {
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
export function picPurchasingType({ id, handleClick = (row, col) => {} }) {
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
export function trackStatus({ id, handleClick = (row, col) => {} }) {
  return {
    id,
    element: (row, col) => {
      return (
        <TableCell key={col.id} align="center">
          <Button
            variant="contained"
            size="small"
            color="secondaryButton"
            onClick={(e) => handleClick(row, col)}
          >
            <AccountTreeRounded fontSize="small" />
            <Typography variant="bodyTable1">Tracking</Typography>
          </Button>
        </TableCell>
      );
    },
  };
}
export function setReviewerFpb({ id, handleClick = (row, col) => {} }) {
  return {
    id,
    element: (row, col) => {
      return (
        <TableCell key={col.id} align="center">
          <Button
            variant="contained"
            size="small"
            color="primaryButton"
            onClick={(e) => handleClick(row, col)}
          >
            <EditRounded fontSize="small" />
            <Typography variant="bodyTable1">Input</Typography>
          </Button>
        </TableCell>
      );
    },
  };
}
export function ictReviewFpb({ id, handleClick = (row, col) => {} }) {
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

export function warehouseFpbReceipt({ id, handleClick = (row, col) => {} }) {
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
  handleEdit = (row, col) => {},
  handleDelete = (row, col) => {},
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
            onClick={(e) => handleEdit(row, col)}
          >
            <EditRounded /> Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={(e) => handleDelete(row, col)}
          >
            <DeleteRounded /> Delete
          </Button>
        </TableCell>
      );
    },
  };
}

export function pjkAction({
  id,
  handleApprove = (row, col) => {},
  handleReject = (row, col) => {},
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
            color="success"
            onClick={(e) => handleApprove(row, col)}
          >
            <CheckBox /> Approve
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={(e) => handleReject(row, col)}
          >
            <DeleteRounded /> Reject
          </Button>
        </TableCell>
      );
    },
  };
}

export function procurementAction({
  id,
  handleCheck = (row, col) => {},
  handleClose = (row, col) => {},
}) {
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
            onClick={(e) => handleCheck(row, col)}
          >
            <CheckBox />
          </IconButton>
          <IconButton
            variant="contained"
            size="small"
            color="error"
            onClick={(e) => handleClose(row, col)}
          >
            <CloseRounded />
          </IconButton>
        </TableCell>
      );
    },
  };
}

export function editAndDeleteAction({
  id,
  handleEdit = (row, col) => {},
  handleDelete = (row, col) => {},
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
            onClick={(e) => {
              handleEdit(row, col);
            }}
          >
            <EditRounded /> Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={(e) => handleDelete(row, col)}
          >
            <DeleteRounded /> Delete
          </Button>
        </TableCell>
      );
    },
  };
}

// TRACK MODAL
export function trackingId({ id }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="center">
          {value == "down" ? <ArrowDownwardRounded /> : <ArrowForwardRounded />}
        </TableCell>
      );
    },
  };
}
export function trackingStatus({ id }) {
  return {
    id,
    element: (row, col) => {
      const value = row[col.id];
      return (
        <TableCell key={col.id} align="center">
          <Typography
            variant="bodyTable1"
            color={value == "Waiting" ? "orange" : "green"}
          >
            {value}
          </Typography>
        </TableCell>
      );
    },
  };
}
