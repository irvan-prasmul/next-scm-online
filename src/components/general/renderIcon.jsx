import { informationStatusIcon } from "@/globals/types";
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
  switch (status) {
    case informationStatusIcon.waiting:
    case informationStatusIcon.waitingForApproval:
      return <HourglassFullTwoTone />;
    case informationStatusIcon.cancelledByUser:
    case informationStatusIcon.canceled:
      return <Cancel color="warning" />;
    case informationStatusIcon.approved:
    case informationStatusIcon.approvedByProcurement:
    case informationStatusIcon.reviewed:
      return <CheckBox color="success" />;
    case informationStatusIcon.rejected:
      return <CloseRounded color="error" />;
    case informationStatusIcon.poProcess:
    case informationStatusIcon.purchaseOrder:
      return <ShoppingCartCheckoutRounded color="primaryButton" />;
    case informationStatusIcon.ready:
    case informationStatusIcon.ready:
    case informationStatusIcon.goodsReceipt:
      return <Inventory2Rounded color="info" />;
    case informationStatusIcon.delivered:
    case informationStatusIcon.goodsIssue:
      return <Flag color="success" />;
    case informationStatusIcon.finance:
      return <LocalAtmRounded color="success" />;
    default:
      return <Remove />;
  }

  // return status == "Waiting" ||
  //   status == "Waiting For Approval" ||
  //   status == "waiting" ? (
  //   <HourglassFullTwoTone />
  // ) : status == "Canceled by User" || status == "canceled" ? (
  //   <Cancel color="warning" />
  // ) : status == "Approved" ||
  //   status == "approved" ||
  //   status == "Reviewed" ||
  //   status == "reviewed" ||
  //   status == "Approved by Procurement" ? (
  //   <CheckBox color="success" />
  // ) : status == "Rejected" || status == "rejected" ? (
  //   <CloseRounded color="error" />
  // ) : status == "PO Process" ||
  //   status == "poProcess" ||
  //   status == "Purchase Order" ||
  //   status == "purchaseOrder" ? (
  //   <ShoppingCartCheckoutRounded color="primaryButton" />
  // ) : status == "Ready for pick up" ||
  //   status == "ready" ||
  //   status == "Goods Receipt" ? (
  //   <Inventory2Rounded color="info" />
  // ) : status == "Delivered" ||
  //   status == "delivered" ||
  //   status == "Goods Issue" ? (
  //   <Flag color="success" />
  // ) : status == "Finance" || status == "finance" ? (
  //   <LocalAtmRounded color="success" />
  // ) : (
  //   <Remove />
  // );
}
