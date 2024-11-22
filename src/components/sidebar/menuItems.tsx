import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
  IoPersonOutline,
} from "react-icons/io5";

export const menuItems = [
  {
    path: "/dashboard",
    icon: <IoCalendarOutline size={30} />,
    title: "Dashboard",
  },
  {
    path: "/dashboard/rest-todos",
    icon: <IoCheckboxOutline size={30} />,
    title: "Rest Todos",
  },
  {
    path: "/dashboard/server-todos",
    icon: <IoListOutline size={30} />,
    title: "Server Actions",
  },
  {
    path: "/dashboard/cookies",
    icon: <IoCodeWorkingOutline size={30} />,
    title: "Cookies",
  },
  {
    path: "/dashboard/products",
    icon: <IoBasketOutline size={30} />,
    title: "Products",
  },
  {
    path: "/dashboard/profile",
    icon: <IoPersonOutline size={30} />,
    title: "Profile",
  },
];
