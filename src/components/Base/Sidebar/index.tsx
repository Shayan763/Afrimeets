"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import Heading from "@/components/Base/Heading";
import { twMerge } from "tailwind-merge";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { FiLock, FiMenu } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsCreditCard, BsDownload } from "react-icons/bs";
import { MdLogout, MdOutlinePersonPin } from "react-icons/md";
import { LuLayoutDashboard, LuListTodo } from "react-icons/lu";
import { AiOutlineShop } from "react-icons/ai";
import { PiShapes } from "react-icons/pi";
import { IconType } from "react-icons";
interface MenuItem {
  id?: number;
  label: string;
  icon?: IconType;
  link?: string;
}
const workerItems: MenuItem[] = [
  {
    id: 1,
    label: "Account Preferences",
    icon: IoPersonOutline,
    link: "/account-preference",
  },
  { id: 2, label: "Qualifications", icon: FiLock, link: "/qualification" },
  {
    id: 3,
    label: "Previous Experience",
    icon: IoIosInformationCircleOutline,
    link: "/previous-experience",
  },
  { id: 4, label: "Applied Shifts", icon: BsDownload, link: "/applied-shifts" },
  { id: 5, label: "Settings", icon: IoSettingsOutline, link: "/settings" },
  { id: 6, label: "Vacation Mode" },
];

const employerItems: MenuItem[] = [
  {
    id: 1,
    label: "Account Preferences",
    icon: IoPersonOutline,
    link: "/employer/account-preference",
  },
  {
    id: 2,
    label: "Manage Subscription",
    icon: FiLock,
    link: "/employer/manage-subscription",
  },
  {
    id: 3,
    label: "Manage Shifts",
    icon: BsDownload,
    link: "/employer/manage-shifts",
  },
  {
    id: 4,
    label: "Settings",
    icon: IoSettingsOutline,
    link: "/employer/settings",
  },
];

const adminItems: MenuItem[] = [
  {
    id: 1,
    label: "Dashboard",
    icon: LuLayoutDashboard,
    link: "/admin/dashboard",
  },
  {
    id: 2,
    label: "Workers",
    icon: MdOutlinePersonPin,
    link: "/admin/manage-workers",
  },
  {
    id: 3,
    label: "Employers",
    icon: AiOutlineShop,
    link: "/admin/manage-employers",
  },
  {
    id: 4,
    label: "Subscriptions",
    icon: LuListTodo,
    link: "/admin/subscription",
  },
  {
    id: 5,
    label: "Shift Categories",
    icon: PiShapes,
    link: "/admin/shift-categories",
  },
  { id: 6, label: "Payments", icon: BsCreditCard, link: "/admin/payments" },
];

const Sidebar: React.FC = () => {
  const [vacationMode, setVacationMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = useMemo(() => {
    if (pathname.startsWith("/admin")) return adminItems;
    if (pathname.startsWith("/employer")) return employerItems;
    return workerItems;
  }, [pathname]);

  const activeMenu = useMemo(() => {
    return menuItems.find((menu) => menu.link && pathname === menu.link);
  }, [pathname, menuItems]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const getNavItemClasses = (menu: { id?: number; link?: string }) => {
    return twMerge(
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap",
      activeMenu?.id === menu.id ? "text-primary" : "hover:bg-gray-100"
    );
  };

  return (
    <div className="flex items-start justify-start relative">
      <button
        onClick={toggleDrawer}
        className="md:hidden flex items-center justify-center"
      >
        <FiMenu size={24} />
      </button>
      <div
        className={twMerge(
          `fixed z-10 inset-y-0 left-0 w-[16rem] transform bg-white shadow-lg rounded-lg`,
          isDrawerOpen ? "translate-x-0" : "-translate-x-full",
          `md:relative md:translate-x-0 transition-transform duration-200 ease-in-out`
        )}
      >
        <div className="h-full flex flex-col justify-between pb-6 pt-6">
          {/* Main Heading */}
          <div className="p-4 flex-grow">
            <Heading level={1} className="font-semibold text-secondary mb-8">
              Settings
            </Heading>
            <div className="flex flex-col items-start mt-4 space-y-2">
              {menuItems.map((menu) => {
                if (!menu.id) {
                  return (
                    <div
                      key={menu.label}
                      className="py-2 px-6 text-gray-500 font-semibold text-sm"
                    ></div>
                  );
                }
                if (menu.label === "Vacation Mode") {
                  return (
                    <div
                      key={menu.id}
                      className="flex items-center justify-between w-full py-3 px-6"
                    >
                      <span className="text-md font-medium text-black">
                        {menu.label}
                      </span>
                      <div
                        className="relative inline-flex items-center cursor-pointer"
                        onClick={() => setVacationMode(!vacationMode)}
                      >
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={vacationMode}
                          readOnly
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-primary pb-1"></div>
                        <div className="absolute left-1 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></div>
                      </div>
                    </div>
                  );
                }
                const Icon = menu.icon;
                const classes = getNavItemClasses(menu);

                return (
                  <Link
                    href={menu.link || "#"}
                    key={menu.id}
                    className={classes}
                  >
                    <span className="flex py-3 px-3 items-center w-full h-full">
                      <div className="w-10">
                        {Icon && (
                          <Icon
                            size={20}
                            className={twMerge(
                              activeMenu?.id === menu.id
                                ? "text-primary"
                                : "text-black"
                            )}
                          />
                        )}
                      </div>
                      <span
                        className={twMerge(
                          "text-md font-medium text-gray-600",
                          activeMenu?.id === menu.id
                            ? "text-primary"
                            : "text-black"
                        )}
                      >
                        {menu.label}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Logout Button */}
          <div className="p-4 mt-auto">
            <Link
              href="/login"
              className="flex items-center py-3 px-6 rounded hover:bg-gray-100 cursor-pointer"
            >
              <MdLogout size={20} className="text-black" />
              <span className="text-md font-medium text-black ml-3">
                Logout
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay to close the drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-5 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
