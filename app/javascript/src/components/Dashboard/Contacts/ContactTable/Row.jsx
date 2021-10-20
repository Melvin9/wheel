import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Checkbox, Dropdown, Avatar, Typography } from "neetoui";

const Row = ({ contact }) => {
  return (
    <tr>
      <td>
        <Checkbox name="1" />
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
      <td>{contact.email}</td>
      <td>{contact.createdAt}</td>
      <td>
        <div className="flex flex-row items-center justify-end space-x-3">
          <Dropdown icon={MenuHorizontal} buttonStyle="icon" autoWidth>
            <li>Edit</li>
            <li>Delete</li>
          </Dropdown>
        </div>
      </td>
    </tr>
  );
};

export default Row;
