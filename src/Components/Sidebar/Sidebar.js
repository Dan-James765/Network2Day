import React from "react";
import { Avatar } from "@material-ui/core";
import { BsBookmarkFill } from "react-icons/bs";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="flex hover:text-linkedinblue text-gray-500 font-semibold  px-2 cursor-pointer my-2">
      <span>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <>
      <div className=" flex-grow-0.2 text-center  rounded-lg w-2/12   ">
        <div className=" py-4 px-4  rounded-lg bg-white border border-gray-300 ">
          <div className="flex flex-col items-center  rounded-lg pb-4 ">
            <img
              src="https://wallpapercave.com/wp/wp3306977.jpg"
              alt=""
              className="-mb-4 h-16 rounded-lg min-w-full   "
            />
            <Avatar
              className="mb-5 object-cover border cursor-pointer "
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFt_IC9LorHsA/profile-displayphoto-shrink_800_800/0/1601912891614?e=1627516800&v=beta&t=_F_yC7bMPVbqvPbGZmxnyyTj7iq9cx4Kz3EgjYxaDlI"
            />
            <div className="divide-y-2 divide-white ">
              <h2 className="font-semibold text-lg hover:underline cursor-pointer">
                Dan James
              </h2>
              <h4 className="text-xs text-gray-500 cursor-pointer ">
                Software Engineer
              </h4>
            </div>
          </div>
          <hr className="border border-gray-200 w-full" />
          <div className="text-xs py-2 cursor-pointer  ">
            <div className="flex py-2 hover:bg-gray-100 rounded-lg">
              <p className="px-2 text-gray-500 font-medium ">
                Who Viewed Your Profile
              </p>
              <p className="ml-auto text-linkedinblue font-medium pr-2 cursor-pointer">
                2,430
              </p>
            </div>
            <div className="flex  rounded-lg py-2 hover:bg-gray-100">
              <p className="px-2 text-gray-500 font-medium  ">
                Who Viewed Your Posts
              </p>
              <p className="ml-auto text-linkedinblue font-medium pr-2">136</p>
            </div>
          </div>
          <hr className="border border-gray-200 w-full " />
          <div className="text-xs py-2">
            <div className="flex py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <p className="px-2 text-gray-500">
                Access Exclusive Tools & Insights
                <br />
                <span className="flex text-black font-medium">
                  Try Premium for Free
                  <img
                    src="https://www.linkedin-makeover.com/wp-content/uploads/2021/01/upgrade-linkedin-premium.png"
                    alt=""
                    className="h-4 ml-1 "
                  />
                </span>
              </p>
            </div>
          </div>
          <hr className="border border-gray-200 w-full  " />
          <div className="py-2 cursor-pointer">
            <p className="px-2 text-black font-medium text-xs py-2 flex items-start hover:bg-gray-100 rounded-lg">
              <BsBookmarkFill className="mt-1 text-gray-500 " />
              <span className="ml-1">My items</span>
            </p>
          </div>
        </div>
        <div className="text-left p-2 mt-2 bg-white rounded-lg border border-gray-300 ">
          <p className="px-4 hover:underline cursor-pointer font-semibold text-black">
            Recent
          </p>
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("nodejs")}
          {recentItem("frontend")}
          {recentItem("fullstack")}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
