import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Checkbox, Dropdown, Avatar, Typography } from "neetoui";

import { DEFAULT_CREATED_AT } from "../constants";

const Row = ({
  contact,
  setSelectedContactId,
  setShowDeleteAlert,
  setShowPane
}) => {
  return (
    <tr>
      <td>
        <Checkbox name={contact.id} />
      </td>

      <td>
        <div className="flex items-center space-x-2">
          <Avatar
            size={"large"}
            user={{ name: `${contact.firstName} ${contact.lastName}` }}
          />
          <div className="flex flex-col">
            <Typography style="h5" weight="semi-bold">
              {contact.firstName} {contact.lastName}
            </Typography>
            <Typography style="body3" weight="medium">
              {contact.role.value}
            </Typography>
          </div>
        </div>
      </td>
      <td>
        <Typography style="body2" weight="light" className="w-24 truncate">
          {contact.email}
        </Typography>
      </td>
      <td>{contact.createdAt ? contact.createdAt : DEFAULT_CREATED_AT}</td>
      <td>
        <div className="flex flex-row items-center justify-end space-x-3">
          <Dropdown icon={MenuHorizontal} buttonStyle="icon" autoWidth>
            <li
              onClick={() => {
                setSelectedContactId(contact.id);
                setShowPane(true);
              }}
            >
              Edit
            </li>
            <li
              onClick={() => {
                setSelectedContactId(contact.id);
                setShowDeleteAlert(true);
              }}
            >
              Delete
            </li>
          </Dropdown>
        </div>
      </td>
    </tr>
  );
};

export default Row;
