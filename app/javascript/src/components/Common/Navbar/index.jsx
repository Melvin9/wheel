import React from "react";

import { Toastr } from "neetoui";
import { Sidebar } from "neetoui/layouts";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

import { NAV_LINKS } from "./constants";

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        appName="neetoUI"
        collapsible
        isCollapsed
        navLinks={NAV_LINKS}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit",
              onClick: () => {
                window.location.href = "/my/profile";
              }
            },
            {
              label: "Logout",
              onClick: handleLogout
            }
          ],
          email: "oliver@example.com",
          imageUrl: "https://randomuser.me/api/portraits/men/90.jpg",
          name: "Kieran Miller"
        }}
      />
    </div>
  );
};

export default withRouter(NavBar);
