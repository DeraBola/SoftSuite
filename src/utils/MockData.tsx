import { Icons } from "@/components/Icons/Icons";
import { Tab } from "@/types/Types";

export const ElementsBreadCrumbs = [
  {
    name: " Payroll Management",
    icon: <Icons.ArrowRight />
  },
  {
    name: " Element Setup",
    icon: <Icons.ArrowRight />
  },
  {
    name: "Elements",
    // icon: <Icons.ArrowRight />
  },
];

export const SideBarTopTabs: Tab[] = [
  {
    name: "Dashboard",
    icon: <Icons.dashboard />,
  },
  {
    name: "Payroll activities",
    icon: <Icons.activity />,
    grayArrowDown: <Icons.grayArrowDown />,
    whiteArrowDown: <Icons.whiteArrowUp />,
  },
  {
    name: "Salary structure",
    icon: <Icons.structure />,
  },
  {
    name: "Element Setup",
    icon: <Icons.graySettings />,
    ActiveIcon: <Icons.settings />,
    grayArrowDown: <Icons.grayArrowDown />,
    whiteArrowDown: <Icons.whiteArrowUp />,
    menus: [
      {
        name: "Elements",
        link: "/elements"
      },
      {
        name: "Balance",
        link: "/"
      }
    ]
  },
  {
    name: "Employees",
    icon: <Icons.profile />,
    link: "/"
  }
];

export const SideBarBottomTabs = [
  {
    name: "Payroll Settings",
    icon: <Icons.graySettings />,
    icon2: <Icons.grayArrowDown />,
    link: "/"
  },
  {
    name: "My Account",
    icon: <Icons.profile2 />,
    link: "/"
  },
  {
    name: "Logout",
    icon: <Icons.logOut />,
    link: "/"
  }
];
