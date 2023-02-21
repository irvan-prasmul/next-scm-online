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
      icon: "ShoppingCart",
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
      icon: "ShoppingCart",
      isOpen: false,
      child: [
        {
          href: "/fpb/receipt",
          icon: "Shortcut",
          name: "Receipt",
        },
      ],
    },
    {
      name: "Master",
      icon: "DropboxIcon",
      isOpen: false,
      child: [
        {
          href: "/master/material",
          icon: "Shortcut",
          name: "Material",
        },
      ],
    },
    {
      name: "Reports",
      icon: "TableIcon",
      isOpen: false,
      child: [
        {
          href: "/reports/status",
          name: "Status",
          icon: "Shortcut",
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
      icon: "NewspaperVariantMultipleOutlineIcon",
    },
    {
      name: "Master",
      icon: "DropboxIcon",
      isOpen: false,
      child: [
        {
          icon: "PackageVariantClosedIcon",
          name: "Material",
          isOpen: false,
          child: [
            {
              href: "/material/head",
              name: "Material Head",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/material/det",
              name: "Material Det",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/material/type",
              name: "Material Type",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/material/group",
              name: "Material Group",
              icon: "CircleOutlineIcon",
            },
          ],
        },
        {
          href: "/department",
          name: "Department",
          icon: "Shortcut",
        },
        {
          href: "/cost-center",
          name: "Cost Center",
          icon: "Shortcut",
        },
        {
          href: "/user",
          name: "User",
          icon: "Shortcut",
        },
        {
          href: "/config-pjb",
          name: "Config PJB",
          icon: "Shortcut",
        },
        {
          href: "/vendor",
          name: "Vendor",
          icon: "Shortcut",
        },
      ],
    },
    {
      name: "Reports",
      icon: "TableIcon",
      isOpen: false,
      child: [
        {
          href: "/reports/price-compare",
          name: "Price Comparison",
          icon: "Shortcut",
        },
        {
          name: "request",
          icon: "Shortcut",
          isOpen: false,
          child: [
            {
              href: "/reports/request/vendor",
              name: "Vendor",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/reports/request/material",
              name: "Material",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/reports/request/pic",
              name: "PIC",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/reports/request/department",
              name: "Department",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/reports/request/status",
              name: "Status",
              icon: "CircleOutlineIcon",
            },
          ],
        },
        {
          href: "/reports/fpb-history",
          name: "FPB History",
          icon: "Shortcut",
        },
        {
          href: "/reports/fpb-all",
          name: "FPB All",
          icon: "Shortcut",
        },
      ],
    },
    {
      name: "Chart",
      icon: "ChartAreasplineVariantIcon",
      isOpen: false,
      child: [
        {
          href: "/chart/fpb",
          name: "FPB",
          icon: "Shortcut",
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
      icon: "ShoppingCart",
    },
    {
      name: "Master",
      icon: "DropboxIcon",
      isOpen: false,
      child: [
        {
          href: "/master/user",
          name: "User",
          icon: "Shortcut",
        },
        {
          href: "/master/config-pjb",
          name: "Config PJB",
          icon: "Shortcut",
        },
      ],
    },
    {
      name: "Reports",
      icon: "TableIcon",
      isOpen: false,
      child: [
        {
          href: "/reports/price-compare",
          name: "Price Comparison",
          icon: "Shortcut",
        },
        {
          name: "request",
          icon: "Shortcut",
          isOpen: false,
          child: [
            {
              href: "/reports/request/vendor",
              name: "Vendor",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/reports/request/material",
              name: "Material",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/reports/request/pic",
              name: "PIC",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/reports/request/department",
              name: "Department",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/reports/request/status",
              name: "Status",
              icon: "CircleOutlineIcon",
            },
          ],
        },
        {
          href: "/reports/fpb-history",
          name: "FPB History",
          icon: "Shortcut",
        },
        {
          href: "/reports/fpb-all",
          name: "FPB All",
          icon: "Shortcut",
        },
      ],
    },
    {
      name: "Chart",
      icon: "ChartAreasplineVariantIcon",
      isOpen: false,
      child: [
        {
          href: "/chart/fpb",
          name: "FPB",
          icon: "Shortcut",
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
      icon: "ShoppingCart",
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
      icon: "ArrowTopRightBoldBoxIcon",
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
