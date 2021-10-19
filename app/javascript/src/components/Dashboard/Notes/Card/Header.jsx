import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Dropdown } from "neetoui/v2";

const Header = ({ note, setSelectedNoteId, setShowDeleteAlert }) => {
  return (
    <div className="flex w-full justify-between">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown
        icon={() => <MenuVertical size={15} color="gray" />}
        buttonStyle="text"
        position="bottom-end"
        className="pr-0"
      >
        <li>Edit</li>
        <li
          onClick={() => {
            setSelectedNoteId(note.id);
            setShowDeleteAlert(true);
          }}
        >
          Delete
        </li>
      </Dropdown>
    </div>
  );
};

export default Header;
