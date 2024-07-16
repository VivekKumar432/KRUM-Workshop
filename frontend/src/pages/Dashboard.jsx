import React from "react";
import Header from "../components/Header";

import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const handleLogout = () => {
    console.log("Logged out");
    toast.success("Logged out Successfully", {
      position: "bottom-left",
      height: 50,
      width: 50,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: ,
    });
  };
  return (
    <div>
      <Header />
    </div>
  );
};

export default Dashboard;
