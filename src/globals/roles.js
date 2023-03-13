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
          href: "/fpb/c-reviewer-purchasing",
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
              href: "/master/department",
              name: "Department",
              icon: "Shortcut",
            },
            {
              href: "/master/cost-center",
              name: "Cost Center",
              icon: "Shortcut",
            },
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
            {
              href: "/master/vendor",
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
              href: "/reports/price-comparison",
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
    },
    {
      name: "Reviewer ICT",
      icon: "CircleOutlineIcon",
      isOpen: false,
      child: [
        {
          href: "/home/dashboard",
          name: "Home",
          icon: "Home",
        },
        {
          href: "/fpb/c-reviewer-ict",
          name: "Review FPB",
          icon: "ShoppingCart",
        },
      ],
    },
    {
      name: "Purchasing Head",
      icon: "CircleOutlineIcon",
      isOpen: false,
      child: [
        {
          href: "/home/dashboard",
          name: "Home",
          icon: "Home",
        },
        {
          href: "/fpb/c-purchasing-head",
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
              href: "/reports/price-comparison",
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
    },
    {
      name: "Warehouse",
      icon: "CircleOutlineIcon",
      isOpen: false,
      child: [
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
              href: "/fpb/c-receipt",
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
              href: "/master/material/det",
              icon: "Shortcut",
              name: "Material",
            },
          ],
        },
      ],
    },
    {
      name: "PIC Purchasing",
      icon: "CircleOutlineIcon",
      isOpen: false,
      child: [
        {
          href: "/fpb/c-pic-purchasing",
          name: "Home",
          icon: "Home",
        },
        {
          href: "/sap",
          name: "SAP",
          icon: "ArrowTopRightBoldBoxIcon",
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
      href: "/fpb/c-reviewer-purchasing",
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
          href: "/fpb/c-receipt",
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
          href: "/master/material/det",
          icon: "Shortcut",
          name: "Material",
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
          href: "/master/department",
          name: "Department",
          icon: "Shortcut",
        },
        {
          href: "/master/cost-center",
          name: "Cost Center",
          icon: "Shortcut",
        },
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
        {
          href: "/master/vendor",
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
          href: "/reports/price-comparison",
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
      href: "/fpb/c-purchasing-head",
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
          href: "/reports/price-comparison",
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
      href: "/fpb/c-pic-purchasing",
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
