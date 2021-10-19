import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Avatar, Tooltip, Tag, Typography } from "neetoui/v2";

const Footer = () => {
  return (
    <div className="flex justify-between items-center pt-3">
      <Tag className="p-2" label="Getting started" size="small" />
      <div className="flex items-center space-x-2">
        <Clock size={12} />
        <Tooltip content="Wednesday, 10:30AM" placement="bottom">
          <div>
            <Typography style="body3" className="text-gray">
              Created 2 hours ago
            </Typography>
          </div>
        </Tooltip>
        <Avatar user={{ name: "Oliver Smith" }} size="medium" />
      </div>
    </div>
  );
};
export default Footer;
