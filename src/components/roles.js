export const roles = {
  AllMenus: [
    {
      name: "Requester",
      icon: "CircleOutlineIcon",
      isOpen: false,
      child: [
        {
          href: "/home/dashboard",
          name: "Home",
          icon: "Home",
        },
        {
          href: "/fpb/c-requester",
          name: "FPB",
          icon: "ShoppingCart",
        },
      ],
    },
    {
      name: "Reviewer Purchasing",
      icon: "CircleOutlineIcon",
      isOpen: false,
      child: [
        {
          href: "/fpb/c-reviewer",
          name: "Home",
          icon: "Home",
        },
      ],
    },
    {
      name: "PJK",
      icon: "CircleOutlineIcon",
      isOpen: false,
      child: [
        {
          href: "/fpb/c-pj-kegiatan",
          name: "Home",
          icon: "Home",
        },
      ],
    },
    {
      name: "PJB",
      icon: "CircleOutlineIcon",
      isOpen: false,
      child: [
        {
          href: "/fpb/c-pj-budget",
          name: "Home",
          icon: "Home",
        },
      ],
    },
    {
      name: "Procurement",
      icon: "CircleOutlineIcon",
      isOpen: false,
      child: [
        {
          href: "/home/dashboard",
          name: "Home",
          icon: "Home",
        },
        {
          href: "/fpb/c-procurement",
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
                  href: "/master/material/head",
                  name: "Material Head",
                  icon: "CircleOutlineIcon",
                },
                {
                  href: "/master/material/det",
                  name: "Material Det",
                  icon: "CircleOutlineIcon",
                },
                {
                  href: "/master/material/type",
                  name: "Material Type",
                  icon: "CircleOutlineIcon",
                },
                {
                  href: "/master/material/group",
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
      ],
    },
  ],
  Requester: [
    {
      href: "/home/dashboard",
      name: "Home",
      icon: "Home",
    },
    {
      href: "/fpb/c-requester",
      name: "FPB",
      icon: "ShoppingCart",
    },
  ],
  "Reviewer Purchasing": [
    {
      href: "/fpb/c-reviewer",
      name: "Home",
      icon: "Home",
    },
  ],
  PJK: [
    {
      href: "/fpb/c-pj-kegiatan",
      name: "Home",
      icon: "Home",
    },
  ],
  PJB: [
    {
      href: "/fpb/c-pj-budget",
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
          href: "/master/master/",
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
      name: "Home",
      icon: "Home",
    },
    {
      href: "/fpb/c-procurement",
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
              href: "/master/material/head",
              name: "Material Head",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/master/material/det",
              name: "Material Det",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/master/material/type",
              name: "Material Type",
              icon: "CircleOutlineIcon",
            },
            {
              href: "/master/material/group",
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
              href: "/reports/request/master/",
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
              href: "/reports/request/master/",
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
};
