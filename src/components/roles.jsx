export const roles = {
  Requester: [
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
    {
      href: "/fpb",
      name: "FPB",
      icon: "mdi-cart",
    },
  ],
  PJK: [
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
  ],
  PJB: [
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
  ],
  Warehouse: [
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
    {
      name: "FPB",
      icon: "mdi-cart",
      isOpen: false,
      child: [
        {
          href: "/fpb/receipt",
          icon: "mdi-share",
          name: "Receipt",
        },
      ],
    },
    {
      name: "Master",
      icon: "mdi-dropbox",
      isOpen: false,
      child: [
        {
          href: "/master/material",
          icon: "mdi-share",
          name: "Material",
        },
      ],
    },
    {
      name: "Reports",
      icon: "mdi-table",
      isOpen: false,
      child: [
        {
          href: "/reports/status",
          name: "Status",
          icon: "mdi-share",
        },
      ],
    },
  ],
  Procurement: [
    {
      href: "/home/dashboard",
      name: "Dashboard",
      icon: "Home",
    },
    {
      href: "/fpb/approval",
      name: "Approval FPB",
      icon: "mdi-newspaper-variant-outline",
    },
    {
      name: "Master",
      icon: "mdi-dropbox",
      isOpen: false,
      child: [
        {
          icon: "mdi-package-variant-closed",
          name: "Material",
          isOpen: false,
          child: [
            {
              href: "/material/head",
              name: "Material Head",
              icon: "mdi-circle-outline",
            },
            {
              href: "/material/det",
              name: "Material Det",
              icon: "mdi-circle-outline",
            },
            {
              href: "/material/type",
              name: "Material Type",
              icon: "mdi-circle-outline",
            },
            {
              href: "/material/group",
              name: "Material Group",
              icon: "mdi-circle-outline",
            },
          ],
        },
        {
          href: "/department",
          name: "Department",
          icon: "mdi-share",
        },
        {
          href: "/cost-center",
          name: "Cost Center",
          icon: "mdi-share",
        },
        {
          href: "/user",
          name: "User",
          icon: "mdi-share",
        },
        {
          href: "/config-pjb",
          name: "Config PJB",
          icon: "mdi-share",
        },
        {
          href: "/vendor",
          name: "Vendor",
          icon: "mdi-share",
        },
      ],
    },
    {
      name: "Reports",
      icon: "mdi-table",
      isOpen: false,
      child: [
        {
          href: "/reports/price-compare",
          name: "Price Comparison",
          icon: "mdi-share",
        },
        {
          name: "request",
          icon: "mdi-share",
          isOpen: false,
          child: [
            {
              href: "/reports/request/vendor",
              name: "Vendor",
              icon: "mdi-circle-outline",
            },
            {
              href: "/reports/request/material",
              name: "Material",
              icon: "mdi-circle-outline",
            },
            {
              href: "/reports/request/pic",
              name: "PIC",
              icon: "mdi-circle-outline",
            },
            {
              href: "/reports/request/department",
              name: "Department",
              icon: "mdi-circle-outline",
            },
            {
              href: "/reports/request/status",
              name: "Status",
              icon: "mdi-circle-outline",
            },
          ],
        },
        {
          href: "/reports/fpb-history",
          name: "FPB History",
          icon: "mdi-share",
        },
        {
          href: "/reports/fpb-all",
          name: "FPB All",
          icon: "mdi-share",
        },
      ],
    },
    {
      name: "Chart",
      icon: "mdi-chart-areaspline-variant",
      isOpen: false,
      child: [
        {
          href: "/chart/fpb",
          name: "FPB",
          icon: "mdi-share",
        },
      ],
    },
  ],
  "Purchasing Head": [
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
    {
      href: "/fpb/list",
      name: "FPB List",
      icon: "mdi-cart",
    },
    {
      name: "Master",
      icon: "mdi-dropbox",
      isOpen: false,
      child: [
        {
          href: "/master/user",
          name: "User",
          icon: "mdi-share",
        },
        {
          href: "/master/config-pjb",
          name: "Config PJB",
          icon: "mdi-share",
        },
      ],
    },
    {
      name: "Reports",
      icon: "mdi-table",
      isOpen: false,
      child: [
        {
          href: "/reports/price-compare",
          name: "Price Comparison",
          icon: "mdi-share",
        },
        {
          name: "request",
          icon: "mdi-share",
          isOpen: false,
          child: [
            {
              href: "/reports/request/vendor",
              name: "Vendor",
              icon: "mdi-circle-outline",
            },
            {
              href: "/reports/request/material",
              name: "Material",
              icon: "mdi-circle-outline",
            },
            {
              href: "/reports/request/pic",
              name: "PIC",
              icon: "mdi-circle-outline",
            },
            {
              href: "/reports/request/department",
              name: "Department",
              icon: "mdi-circle-outline",
            },
            {
              href: "/reports/request/status",
              name: "Status",
              icon: "mdi-circle-outline",
            },
          ],
        },
        {
          href: "/reports/fpb-history",
          name: "FPB History",
          icon: "mdi-share",
        },
        {
          href: "/reports/fpb-all",
          name: "FPB All",
          icon: "mdi-share",
        },
      ],
    },
    {
      name: "Chart",
      icon: "mdi-chart-areaspline-variant",
      isOpen: false,
      child: [
        {
          href: "/chart/fpb",
          name: "FPB",
          icon: "mdi-share",
        },
      ],
    },
  ],
  "Reviewer ICT": [
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
    {
      href: "/fpb/review",
      name: "Review FPB",
      icon: "mdi-cart",
    },
  ],
  "PIC Purchasing": [
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
    {
      href: "/sap",
      name: "SAP",
      icon: "mdi-arrow-top-right-bold-box",
    },
  ],
  "Reviewer Purchasing": [
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
  ],
};
