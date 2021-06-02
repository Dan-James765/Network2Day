import { Avatar } from "@material-ui/core";
import React from "react";

function HeaderItem({ title, Icon, avatar }) {
  return (
    <>
      <div className="flex flex-col items-center cursor-pointer w-12 text-gray-500 text-opacity-70 sm:w-20 hover:text-gray-700 ">
        {Icon && <Icon className="h-5 w-5" />}
        {avatar && <Avatar src={avatar} className="object-contain" />}
        <p className="tracking-tight whitespace-nowrap text-xs ">{title}</p>
      </div>
    </>
  );
}

export default HeaderItem;
