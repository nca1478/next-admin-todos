import Image from "next/image";
import Link from "next/link";
import SidebarItem from "../sidebarItem/SidebarItem";
import {
  IoCalendarOutline,
  IoCheckboxOutline,
  IoListOutline,
} from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const menuItems = [
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
];

export default function Sidebar() {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          {/* Logo */}
          <div className="-mx-6 px-6 py-4">
            <Link href="/dashboard" title="home">
              <Image
                src="https://www.seoptimer.com/storage/images/2022/08/direcly-logo.png"
                className="w-48"
                alt="My Company"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Profile Image */}
          <div className="mt-8 text-center">
            <Image
              src="https://randomuser.me/api/portraits/men/20.jpg"
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              alt=""
              width={150}
              height={150}
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Nelson J. Cadenas A.
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          {/* SidebarItems */}
          <ul className="space-y-2 tracking-wide mt-8">
            {menuItems.map((item) => (
              <SidebarItem key={item.title} {...item} />
            ))}
          </ul>
        </div>

        {/* Logout */}
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
