import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFillBellFill,
} from "react-icons/bs";

export const sidebar = [
  {
    id: "0",
    icon: BsGrid1X2Fill,
    title: "Dashboard",
  },
  {
    id: "1",
    icon: BsFillArchiveFill,
    title: "Products",
  },
  {
    id: "2",
    icon: BsFillGrid3X3GapFill,
    title: "Categories",
  },
  {
    id: "3",
    icon: BsPeopleFill,
    title: "Customers",
  },
  {
    id: "4",
    icon: BsListCheck,
    title: "Inventory",
  },
  {
    id: "5",
    icon: BsMenuButtonWideFill,
    title: "Reports",
  },
  {
    id: "6",
    icon: BsFillGearFill,
    title: "Setting",
  },
];

export const cards = [
  { id: "0", heading1: "300", heading3: "PRODUCTS", icon: BsFillArchiveFill },
  {
    id: "1",
    heading1: "12",
    heading3: "CATEGORIES",
    icon: BsFillGrid3X3GapFill,
  },
  { id: "2", heading1: "33", heading3: "CUSTOMERS", icon: BsPeopleFill },
  { id: "3", heading1: "42", heading3: "ALERTS", icon: BsFillBellFill },
];

export const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
