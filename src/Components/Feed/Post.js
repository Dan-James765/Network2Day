import React from "react";
import AvatarXP from "./AvatarXP";
import FeedItemIcons from "./FeedItemIcons";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { GiShare } from "react-icons/gi";
import { MdSend } from "react-icons/md";

function Post({ name, description, message, photoUrl }) {
  return (
    <>
      <div className="bg-white w-w-140 py-4 rounded-lg pl-4 my-4 ">
        <div className="flex mb-2 ">
          <AvatarXP avatar="https://media-exp1.licdn.com/dms/image/C4D03AQFt_IC9LorHsA/profile-displayphoto-shrink_800_800/0/1601912891614?e=1627516800&v=beta&t=_F_yC7bMPVbqvPbGZmxnyyTj7iq9cx4Kz3EgjYxaDlI" />
          <div className="ml-2">
            <h2 className="text-2xl font-medium">{name}</h2>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </div>

        <div className="truncate">
          <p>{message}</p>
        </div>

        <div className="flex flex-row ">
          <FeedItemIcons title="Like" Icon={AiOutlineLike} color="#979CA6" />
          <FeedItemIcons
            title="Comment"
            Icon={FaRegCommentDots}
            color="#979CA6"
          />
          <FeedItemIcons title="Share" Icon={GiShare} color="#979CA6" />
          <FeedItemIcons title="Send" Icon={MdSend} color="#979CA6" />
        </div>
      </div>
    </>
  );
}

export default Post;
