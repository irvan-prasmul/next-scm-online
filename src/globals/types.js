export const paginationPropType = {
  none: "none",
  qtyAndTotal: "qtyTotal",
};

export const tableOrder = {
  asc: "asc",
  desc: "desc",
};

export const dialogTypesFpb = {
  pta: "PTA",
  io: "IO",
  otherDoc: "Other",
  track: "Track",
  requesterNotes: "Requester Notes",
  ictNotes: "ICT Notes",
  purchasingNotes: "Purchasing Notes",
  informationStatus: "Information Status",
  documentStatus: "Document Status",
  reviewer: "Reviewer",
  reviewerIct: "Reviewer ICT",
  inputPurchasingtype: "Input Purchasing Type",
};

export const confirmationType = {
  cancel: "cancel",
  delete: "delete",
  close: "close",
  approve: "approve",
  reject: "reject",
  flagIct: "flagIct",
  save: "save",
  receipt: "receipt",
  ready: "ready",
};

export const dialogTypesMasterMaterial = {
  addHead: "Add Master Material Head",
  editHead: "Edit Master Material Head",
  addDetail: "Add Master Material Detail",
  editDetail: "Edit Master Material Detail",
  addType: "Add Master Material Type",
  editType: "Edit Master Material Type",
  addGroup: "Add Master Material Group",
  editGroup: "Edit Master Material Group",
};

export const dialogTypesMaster = {
  addDepartment: "Add Master Department",
  editDepartment: "Edit Master Department",
  addCostCenter: "Add Master Cost Center",
  editCostCenter: "Edit Master Cost Center",
  addUser: "Add New User Account",
  editUser: "Edit User Account",
  addPjb: "Add New PJB",
  editPjb: "Edit PJB Config",
  addVendor: "Add Master Vendor",
  editVendor: "Edit Master Vendor",
};

export const masterMaterialStatus = {
  all: "All",
  active: "Active",
  inactive: "Inactive",
  choose: "Choose",
};

export const masterStatus = {
  all: "All",
  active: "Active",
  inactive: "Inactive",
  choose: "Choose",
};

export const informationStatusIcon = {
  waiting: "Waiting",
  waitingForApproval: "Waiting For Approval",
  canceled: "Cancelled",
  cancelledByUser: "Canceled by User",
  approved: "Approved",
  approvedByProcurement: "Approved by Procurement",
  reviewed: "Reviewed",
  rejected: "Rejected",
  poProcess: "PO Process",
  purchaseOrder: "Purchase Order",
  ready: "Ready",
  readyForPickup: "Ready for pick up",
  goodsReceipt: "Goods Receipt",
  delivered: "Delivered",
  goodsIssue: "Goods Issue",
  finance: "Finance",
  none: "None",
};

////// DDL /////////////////////////////////////////
export const masterStatusDdlValues = [
  { value: "all", text: "All" },
  { value: "active", text: "Active" },
  { value: "inactive", text: "Inactive" },
];

export const purchasingTypeOptionDdlValues = [
  { value: "choose", text: "Choose" },
  { value: "once", text: "Run once" },
  { value: "multiple", text: "Runs multiple" },
];

export const purchasingTypeDdlValues = [
  { value: "all", text: "All" },
  { value: "po", text: "PO" },
  { value: "um", text: "UM" },
  { value: "cc", text: "CC" },
  { value: "pc", text: "Petty Cash" },
];

export const dummyDdlChoose = [
  {
    value: "choose",
    text: "Choose",
  },
  {
    value: "opt1",
    text: "opt1",
  },
  {
    value: "opt2",
    text: "opt2",
  },
  {
    value: "opt3",
    text: "opt3",
  },
];

export const dummyDdlAll = [
  {
    value: "all",
    text: "All",
  },
  {
    value: "opt1",
    text: "opt1",
  },
  {
    value: "opt2",
    text: "opt2",
  },
  {
    value: "opt3",
    text: "opt3",
  },
];
////////// DDL /////////////////////////////
