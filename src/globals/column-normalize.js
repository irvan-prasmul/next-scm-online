import moment from "moment/moment";

export const columnNormalize = {
  id: { id: "number", label: "#", minWidth: 22, isShow: true, align: "center" },
  dateGeneric: {
    id: "date",
    label: "Date",
    minWidth: 100,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  informationGeneric: {
    id: "info",
    label: "Information",
    minWidth: 150,
    isShow: true,
  },
  created: {
    id: "created_date",
    label: "Created",
    minWidth: 100,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  fpbNumber: {
    id: "noFpb",
    label: "FPB Number",
    minWidth: 175,
    isShow: true,
  },
  fpbNo: {
    id: "noFpb",
    label: "No. FPB",
    minWidth: 175,
    isShow: true,
  },
  resvFpbNumber: {
    id: "noFpb",
    label: "Resv./FPB Number",
    minWidth: 175,
    isShow: true,
  },
  pta: {
    id: "pta",
    label: "PTA",
    minWidth: 145,
    isShow: true,
    align: "left",
    group: "Upload Document",
  },
  io: {
    id: "io",
    label: "IO",
    minWidth: 145,
    isShow: true,
    group: "Upload Document",
  },
  otherDoc: {
    id: "otherDoc",
    label: "Other",
    minWidth: 145,
    isShow: true,
    group: "Upload Document",
  },
  materialName: {
    id: "materialName",
    label: "Material Name",
    minWidth: 230,
    isShow: true,
  },
  materialNameWide: {
    id: "materialName",
    label: "Material Name",
    minWidth: 330,
    isShow: true,
  },
  category: {
    id: "x_f_ict",
    label: "Category",
    minWidth: 90,
    isShow: true,
  },
  price: {
    id: "price",
    label: "Price",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  qtyPB: {
    id: "qty_pb",
    label: "Qty PB",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  uom: {
    id: "uom",
    label: "UOM",
    minWidth: 80,
    isShow: true,
  },
  total: {
    id: "totPrice",
    label: "Total",
    minWidth: 121,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  costCenter: {
    id: "costCenter",
    label: "Cost Center",
    minWidth: 156,
    isShow: true,
  },
  planDate: {
    id: "planDate",
    label: "Plan Date",
    minWidth: 100,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  img: {
    id: "img",
    label: "File",
    minWidth: 115,
    isShow: true,
  },
  requesterNotes: {
    id: "x_req_notes",
    label: "Requester Notes",
    minWidth: 202,
    isShow: true,
  },
  ictNotes: {
    id: "x_ict_notes",
    label: "ICT Notes",
    minWidth: 202,
    isShow: true,
  },
  picPurc: {
    id: "picPurc",
    label: "PIC Purc.",
    minWidth: 100,
    isShow: true,
  },
  purchasingNotes: {
    id: "x_purc_notes",
    label: "Purchasing Notes",
    minWidth: 256,
    isShow: true,
  },
  noPo: {
    id: "noPo",
    label: "No. PO",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  approval: {
    id: "approval",
    label: "Approval",
    minWidth: 100,
    isShow: true,
    group: "Status",
  },
  purchase: {
    id: "s_adm",
    label: "Purchase",
    minWidth: 100,
    isShow: true,
    group: "Status",
  },
  informationStatus: {
    id: "notes_x",
    label: "Information Status",
    minWidth: 500,
    isShow: true,
  },
  trackStatus: {
    id: "tracking",
    label: "Track Status",
    minWidth: 100,
    isShow: true,
  },
  reviewer: {
    id: "reviewer",
    label: "Reviewer",
    minWidth: 100,
    isShow: true,
  },
  qtyPO: {
    id: "qtyPO",
    label: "Qty PO",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  vendor: {
    id: "vendor",
    label: "Vendor",
    minWidth: 100,
    isShow: true,
  },
  vendorLong: {
    id: "vendor",
    label: "Vendor",
    minWidth: 200,
    isShow: true,
  },
  requesterName: {
    id: "requesterName",
    label: "Requester Name",
    minWidth: 130,
    isShow: true,
  },
  docPta: {
    id: "pta",
    label: "Doc PTA",
    minWidth: 115,
    isShow: true,
  },
  docIo: {
    id: "io",
    label: "Doc IO",
    minWidth: 115,
    isShow: true,
    align: "left",
  },
  docOther: {
    id: "otherDoc",
    label: "Other Doc",
    minWidth: 115,
    isShow: true,
    align: "left",
  },
  activity: {
    id: "activity",
    label: "Activity",
    minWidth: 110,
    isShow: true,
    align: "left",
  },
  ioBudget: {
    id: "ioBudget",
    label: "IO Budget",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  eventName: {
    id: "eventName",
    label: "Event Name",
    minWidth: 210,
    isShow: true,
    align: "left",
  },
  eventDate: {
    id: "eventDate",
    label: "Event Date",
    minWidth: 100,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  eventPic: {
    id: "eventPic",
    label: "Event PIC",
    minWidth: 115,
    isShow: true,
    align: "left",
  },
  eventContact: {
    id: "eventContact",
    label: "Event Contact",
    minWidth: 115,
    isShow: true,
    align: "left",
  },
  status: {
    id: "status",
    label: "Status",
    minWidth: 100,
    isShow: true,
  },
  documentStatus: {
    id: "documentStatus",
    label: "Document Status",
    minWidth: 500,
    isShow: true,
  },
  preview: {
    id: "preview",
    label: "Preview",
    minWidth: 30,
    isShow: true,
  },
  createdDate: {
    id: "createdDate",
    label: "Created Date",
    minWidth: 150,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  unit: {
    id: "unit",
    label: "Unit",
    minWidth: 110,
    isShow: true,
  },
  doctype: {
    id: "doctype",
    label: "Doctype",
    minWidth: 110,
    isShow: true,
  },
  action1Button: {
    id: "action",
    label: "Action",
    minWidth: 100,
    isShow: true,
  },
  purchasingType1Button: {
    id: "purchasingType",
    label: "Purchasing Type",
    minWidth: 130,
    isShow: true,
  },
  action2Button: {
    id: "action",
    label: "Action",
    minWidth: 202,
    isShow: true,
  },
  action2IconButton: {
    id: "action",
    label: "Action",
    minWidth: 150,
    isShow: true,
  },
  qty: {
    id: "qty",
    label: "Qty",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  department: {
    id: "department",
    label: "Department",
    minWidth: 130,
    isShow: true,
  },
  reviewIct: {
    id: "reviewIct",
    label: "Review ICT",
    minWidth: 110,
    isShow: true,
  },
  name: {
    id: "name",
    label: "Name",
    minWidth: 110,
    isShow: true,
  },
  description: {
    id: "description",
    label: "Description",
    minWidth: 500,
    isShow: true,
  },
  descriptionShort: {
    id: "description",
    label: "Description",
    minWidth: 130,
    isShow: true,
  },
  plu: {
    id: "plu",
    label: "PLU",
    minWidth: 110,
    isShow: true,
  },
  stock: {
    id: "stock",
    label: "Stock",
    minWidth: 110,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  reorderPoint: {
    id: "reorderPoint",
    label: "Reorder Point",
    minWidth: 110,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  materialType: {
    id: "materialType",
    label: "Material Type",
    minWidth: 110,
    isShow: true,
  },
  materialGroup: {
    id: "materialGroup",
    label: "Material Group",
    minWidth: 110,
    isShow: true,
  },
  flagIct: {
    id: "flagIct",
    label: "Flag ICT",
    minWidth: 110,
    isShow: true,
  },
  idUnit: {
    id: "idUnit",
    label: "ID Unit",
    minWidth: 110,
    isShow: true,
  },
  company: {
    id: "company",
    label: "Company",
    minWidth: 120,
    isShow: true,
  },
  unitName: {
    id: "unitName",
    label: "Unit Name",
    minWidth: 300,
    isShow: true,
  },
  costCenterId: {
    id: "costCenterId",
    label: "Cost Center Id",
    minWidth: 110,
    isShow: true,
  },
  controllingArea: {
    id: "controllingArea",
    label: "Controlling Area",
    minWidth: 120,
    isShow: true,
  },
  companyCode: {
    id: "companyCode",
    label: "Company Code",
    minWidth: 120,
    isShow: true,
  },
  nik: {
    id: "nik",
    label: "NIK",
    minWidth: 110,
    isShow: true,
  },
  initial: {
    id: "initial",
    label: "Initial",
    minWidth: 120,
    isShow: true,
  },
  email1: {
    id: "email1",
    label: "E-mail",
    minWidth: 120,
    isShow: true,
  },
  email: {
    id: "email",
    label: "E-mail",
    minWidth: 120,
    isShow: true,
  },
  role: {
    id: "role",
    label: "Role",
    minWidth: 120,
    isShow: true,
  },
  userLabelName: {
    id: "user",
    label: "Name",
    minWidth: 160,
    isShow: true,
  },
  level: {
    id: "level",
    label: "Level",
    minWidth: 120,
    isShow: true,
  },
  telp: {
    id: "telp",
    label: "Telp",
    minWidth: 120,
    isShow: true,
  },
  address: {
    id: "address",
    label: "Address",
    minWidth: 170,
    isShow: true,
  },
  material: {
    id: "material",
    label: "Material",
    minWidth: 120,
    isShow: true,
  },
  requester: {
    id: "requester",
    label: "Requester",
    minWidth: 130,
    isShow: true,
  },
  estPrice: {
    id: "estPrice",
    label: "Est Price",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  totalEst: {
    id: "totalEst",
    label: "Total Est",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  netPrice: {
    id: "netPrice",
    label: "Net Price",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  totalNet: {
    id: "totalNet",
    label: "Total Net",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  selisih: {
    id: "selisih",
    label: "Selisih",
    minWidth: 120,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
  docDate: {
    id: "docDate",
    label: "Document Date",
    minWidth: 130,
    isShow: true,
    format: (value) => moment(value).format("YYYY-MM-DD"),
  },
  image: {
    id: "image",
    label: "Image",
    minWidth: 115,
    isShow: true,
  },
  approvalPjk: {
    id: "approvalPjk",
    label: "Approval PJK",
    minWidth: 110,
    isShow: true,
  },
  approvalPjb: {
    id: "approvalPjb",
    label: "Approval PJB",
    minWidth: 110,
    isShow: true,
  },
  approvalProcurement: {
    id: "approvalProcurement",
    label: "Approval Procurement",
    minWidth: 110,
    isShow: true,
  },
  approvalPurchasing: {
    id: "approvalPurchasing",
    label: "Approval Purchasing",
    minWidth: 110,
    isShow: true,
  },
  delivered: {
    id: "delivered",
    label: "Delivered",
    minWidth: 110,
    isShow: true,
  },
  trackApproval: {
    id: "trackApproval",
    label: "Track Approval",
    minWidth: 100,
    isShow: true,
  },
  purchaseMethod: {
    id: "purchaseMethod",
    label: "Purchase Method",
    minWidth: 100,
    isShow: true,
  },
  drop: {
    id: "drop",
    label: "Drop",
    minWidth: 100,
    isShow: true,
  },
  qtyReceipt: {
    id: "qtyReceipt",
    label: "Qty Receipt",
    minWidth: 100,
    isShow: true,
    format: (value) => value.toLocaleString("id"),
    align: "right",
  },
};
