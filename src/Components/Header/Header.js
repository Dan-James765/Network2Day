import React from "react";

import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <>
      <header className="flex shadow-md items-center py-2  sticky justify-center bg-white">
        <div className="flex items-center  ">
          <img
            className="object-contain h-8 cursor-pointer"
            src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1622121055~hmac=30225e6030493001321e262a2a746c2d"
            alt=""
          />

          <div className="flex pl-3 items-center  ">
            <FaSearch className="text-gray-400 text-xs absolute " />
            <input
              className="rounded bg-blue-100 bg-opacity-50 hover:bg-blue-200 hover:bg-opacity-40 shadow outline-none pl-4 text-gray-500 focus:outline-blue w-full py-1 px-2 "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex px-40 gap-2">
          <HeaderItem title="Home" Icon={AiFillHome} />
          <HeaderItem title="Network" Icon={FaUserFriends} />
          <HeaderItem title="Jobs" Icon={IoMdBriefcase} />
          <HeaderItem title="Messages" Icon={RiMessage2Line} />
          <HeaderItem title="Notifications" Icon={FaBell} />
        </div>
        <div className="pt-1">
          <HeaderItem avatar="https://media-exp1.licdn.com/dms/image/C4D03AQFt_IC9LorHsA/profile-displayphoto-shrink_800_800/0/1601912891614?e=1627516800&v=beta&t=_F_yC7bMPVbqvPbGZmxnyyTj7iq9cx4Kz3EgjYxaDlI" />
        </div>
      </header>
    </>
  );
}

export default Header;
