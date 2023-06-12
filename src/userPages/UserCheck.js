import React from "react";
import { useCheckAuth } from "../hooks/useCheckAuth";
import LoadingPage from "../components/loading/LoadingPage";
import { Outlet } from "react-router-dom";

const UserCheck = () => {
  const isUser = useCheckAuth("/user-auth");

  return isUser ? <Outlet /> : <LoadingPage path="" />;
};

export default UserCheck;
