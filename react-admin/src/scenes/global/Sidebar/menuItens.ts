import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  TimelineOutlined,
  MapOutlined,
  PieChartOutlineOutlined,
} from "@mui/icons-material";

export const menuItens = [
  {
    title: "Dashboard",
    path: "/",
    icon: HomeOutlined,
  },
  {
    tag: "Data",
    title: "Manage Team",
    path: "/team",
    icon: PeopleOutlined,
  },
  {
    title: "Contacts Information",
    path: "/contacts",
    icon: ContactsOutlined,
  },
  {
    title: "Invoices Balances",
    path: "/invoices",
    icon: ReceiptOutlined,
  },
  {
    tag: "Pages",
    title: "Profile Form",
    path: "/form",
    icon: PersonOutlined,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: CalendarTodayOutlined,
  },
  {
    title: "FAQ Page",
    path: "/faq",
    icon: HelpOutlined,
  },
  {
    tag: "Charts",
    title: "Bar Chart",
    path: "/bar",
    icon: BarChartOutlined,
  },
  {
    title: "Pie Chart",
    path: "/pie",
    icon: PieChartOutlineOutlined,
  },
  {
    title: "Line Chart",
    path: "/line",
    icon: TimelineOutlined,
  },
  {
    title: "Geography Chart",
    path: "/geography",
    icon: MapOutlined,
  },
];
