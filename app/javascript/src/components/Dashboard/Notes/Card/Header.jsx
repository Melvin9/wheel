import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Dropdown } from "neetoui/v2";

const Header = () => {
  return (
    <div className="flex w-full justify-between">
      <Typography style="h4">Typography</Typography>
      <Dropdown
        icon={() => <MenuVertical size={15} color="gray" />}
        buttonStyle="text"
        position="bottom-end"
        className="pr-0"
      >
        <li>Edit</li>
        <li>Delete</li>
      </Dropdown>
    </div>
  );
};

export default Header;
