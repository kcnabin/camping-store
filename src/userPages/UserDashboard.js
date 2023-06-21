import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import UserMenu from "./UserMenu";
import UserInfo from "./UserInfo";

const UserDashboard = () => {
  return <DashboardLayout left={<UserMenu />} right={<UserInfo />} />;
};

export default UserDashboard;
