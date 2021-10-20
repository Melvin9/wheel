import React from "react";

import { Home, UserCircle, Settings } from "neetoicons";
import { Toastr } from "neetoui";
import { Sidebar } from "neetoui/layouts";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

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
        navLinks={[
          {
            icon: function noRefCheck() {
              return <Home />;
            },
            label: "Notes",
            to: "/notes"
          },
          {
            icon: function noRefCheck() {
              return <UserCircle />;
            },
            label: "Contacts",
            to: "/contacts"
          },
          {
            icon: function noRefCheck() {
              return <Settings />;
            },
            label: "Settings",
            to: "/settings"
          }
        ]}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit",
              onClick: null
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
