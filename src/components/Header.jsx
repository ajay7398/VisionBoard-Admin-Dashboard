
import { MdHome } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaRegEnvelope } from "react-icons/fa";
import { MdPodcasts } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import React, { useEffect, useState } from "react";
import {
  MdDashboard,
  MdTableChart,
  MdReceiptLong,
  MdTranslate,
  MdNotifications,
  MdPerson,
  MdLogin,
  MdAssignment
} from "react-icons/md";

function Header() {
  const sidebarLinks = [
    {
      label: "Dashboard",
      icon: MdDashboard, // ✅ Just reference, not JSX
      path: "/dashboard",
    },
    {
      label: "Tables",
      icon: MdTableChart,
      path: "/tables",
    },
    {
      label: "Billing",
      icon: MdReceiptLong,
      path: "/billing",
    },
    {
      label: "RTL",
      icon: MdTranslate,
      path: "/rtl",
    },
    {
      label: "Notifications",
      icon: MdNotifications,
      path: "/notifications",
    },
    {
      label: "Profile",
      icon: MdPerson,
      path: "/profile",
    },
    {
      label: "Sign In",
      icon: MdLogin,
      path: "/signin",
    },
    {
      label: "Sign Up",
      icon: MdAssignment,
      path: "/signup",
    },
  ];

  const menu = [
    {
      "icon": FaRegEnvelope,
      "text": "Check new messages"
    },
    {
      "icon": MdPodcasts,
      "text": "Manage Podcast sessions"
    },
    {
      "icon": IoMdCart,
      "text": "Payment successfully completed"
    }
  ]

  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dropdown) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [dropdown]);


  return (
    <>
      <aside className={`${toggle ? 'left-[5%]' : '-left-[100%]'} transition-all duration-700 ease-linear h-[94%] w-[90%] lg:w-[30%] bg-gray-800 z-[1200] fixed `}>
        <RxCross2 onClick={() => setToggle(false)} className=" font-bold text-slate-300 flex items-end absolute right-5 top-5" />
        <h1 className="text-slate-200 text-center mt-10">Dashboard</h1>
        <div className="h-0.5 w-full bg-slate-400"></div>
        <div className="text-white w-full my-3">
          {sidebarLinks.map((link, i) => {
            const IconComponent = link.icon;
            return (
              <div key={i} className="flex items-center text-slate-200 gap-2 px-8 py-2 hover:bg-gray-700 w-[90%] mx-auto cursor-pointer rounded-lg">
                <IconComponent className="text-xl" />
                <h3>{link.label}</h3>
              </div>
            );
          })}
        </div>

      </aside>

      <header className={`max-w-full h-auto sticky top-[0.75rem] z-50`}>
        {/* Header Container */}
        <div style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          transition: 'background-color 0.3s ease'

        }} className="box-border backdrop-blur-md p-3 my-5 rounded-2xl  ">
          {/* Main Flex Container */}
          <div className="flex flex-col gap-2  md:justify-between md:flex-row">
            {/* Breadcrumb & Title */}
            <div className='text-slate-500 lg:basis-1/2'>
              <div className='flex gap-1 items-center'>
                <MdHome className=" inline w-[1em] h-[1em] text-slate-400" /><span className='text-slate-400'>/</span>
                Dashboard
              </div>

              <h2 className="text-xl font-bold text-slate-600">Dashboard</h2>
            </div>

            {/* Search + Icons Nav */}
            <nav className=" flex flex-row justify-center gap-4 min-h-[56px] basis-[70%] lg:basis-1/2 items-center">
              {/* Responsive Input (shrinks/grows) */}
              <input
                type="text"
                placeholder="Search here"
                className="text-[18px] outline-1 outline-slate-300 border border-gray-300 font-semibold h-12 px-3 rounded-md shrink min-w-[100px] basis-[60%]"
              />

              {/* Icon Container - wraps on small screens */}
              <div className="box-border flex text-slate-600 items-center flex-wrap  gap-4  rounded-lg shrink basis-[30%] md:grid md:grid-cols-2 md:basis-[20%] lg:flex lg:basis-[40%] lg:justify-netween ">
                <IoPersonCircle className="text-[1.6rem] " />
                <MdMenuOpen onClick={() => setToggle(!toggle)} className="text-[1.6rem] " />
                <IoMdSettings className="text-[1.6rem] " />
                <FaBell onClick={() => setDropdown(!dropdown)} className="text-[1.6rem] " />
                {dropdown && (
                  <div className="fixed p-5 right-0 w-[100%] mx-auto bg-white shadow-lg ring-1 ring-slate-400 rounded-lg z-50 top-40 lg:w-[30%] lg:top-18 md:w-[50%] md:top-24  overflow-hidden">
                    {menu.map((item, i) => (
                      <div key={i} className="hover:bg-slate-200 p-3 flex items-center gap-4 text-[16px] rounded-lg w-full">
                        <item.icon className="text-xl text-slate-600 flex-shrink-0" />
                        <h3 className="text-slate-600 min-w-96">{item.text}</h3>
                      </div>

                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

    </>
  );
}

export default Header;
