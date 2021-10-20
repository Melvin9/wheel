import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";

const Header = ({ note, setSelectedNoteId, setShowDeleteAlert }) => {
  return (
    <div className="flex w-full justify-between">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown
        icon={() => <MenuVertical size={15} color="gray" />}
        buttonStyle="text"
        position="bottom-end"
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
