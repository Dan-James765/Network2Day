import { Avatar } from "@material-ui/core";

import React from "react";

function AvatarXP({ avatar }) {
  return (
    <>
      <div className=" mt-1 ">
        {avatar && (
          <Avatar src={avatar} className="object-contain cursor-pointer" />
        )}
      </div>
    </>
  );
}

export default AvatarXP;
