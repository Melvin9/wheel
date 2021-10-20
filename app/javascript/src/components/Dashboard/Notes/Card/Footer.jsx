import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Avatar, Tooltip, Tag, Typography } from "neetoui/v2";

const Footer = ({ tags }) => {
  return (
    <div className="flex justify-between pt-3 items-center">
      <div className="flex space-x-2">
        {tags.map((tag, index) => (
          <Tag key={index} label={tag} size="small" />
        ))}
      </div>

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
