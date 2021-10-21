import React from "react";

import { Home, UserCircle, Settings } from "neetoicons";

export const NAV_LINKS = [
  {
    icon: () => <Home />,
    label: "Notes",
    to: "/notes"
  },
  {
    icon: () => <UserCircle />,
    label: "Contacts",
    to: "/contacts"
  },
  {
    icon: () => <Settings />,
    label: "Settings",
    to: "/my/profile"
  }
];
