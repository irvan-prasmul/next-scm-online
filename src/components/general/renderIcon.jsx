import Cancel from "@mui/icons-material/Cancel";
import CheckBox from "@mui/icons-material/CheckBox";
import CloseRounded from "@mui/icons-material/CloseRounded";
import Flag from "@mui/icons-material/Flag";
import HourglassFullTwoTone from "@mui/icons-material/HourglassFullTwoTone";
import Inventory2Rounded from "@mui/icons-material/Inventory2Rounded";
import LocalAtmRounded from "@mui/icons-material/LocalAtmRounded";
import Remove from "@mui/icons-material/Remove";
import ShoppingCartCheckoutRounded from "@mui/icons-material/ShoppingCartCheckoutRounded";

export default function RenderIcon({ status }) {
  return status == "Waiting" ||
    status == "Waiting For Approval" ||
    status == "waiting" ? (
    <HourglassFullTwoTone />
  ) : status == "Canceled by User" || status == "canceled" ? (
    <Cancel color="warning" />
  ) : status == "Approved" ||
    status == "approved" ||
    status == "Reviewed" ||
    status == "reviewed" ||
    status == "Approved by Procurement" ? (
    <CheckBox color="success" />
  ) : status == "Rejected" || status == "rejected" ? (
    <CloseRounded color="error" />
  ) : status == "PO Process" ||
    status == "poProcess" ||
    status == "Purchase Order" ||
    status == "purchaseOrder" ? (
    <ShoppingCartCheckoutRounded color="primaryButton" />
  ) : status == "Ready for pick up" ||
    status == "ready" ||
    status == "Goods Receipt" ? (
    <Inventory2Rounded color="info" />
  ) : status == "Delivered" ||
    status == "delivered" ||
    status == "Goods Issue" ? (
    <Flag color="success" />
  ) : status == "Finance" || status == "finance" ? (
    <LocalAtmRounded color="success" />
  ) : (
    <Remove />
  );
}
