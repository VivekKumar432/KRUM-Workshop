import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // const [user, setUser] = useState("");
  const nav = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:4545/user/logout");
      if (response.status === 200) {
        console.log("Logout was Success");
        nav("/login");
      }
    } catch (error) {
      console.log("there was some error in the logout", error);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/dashboard">
            <img
              src="https://images.ctfassets.net/wfutmusr1t3h/1uDoOud2qDtZLTlbFkWvmp/409e95209e7c23d9a70c6288afe2548a/Compete-river-4__7___1_.png"
              alt="Bootstrap"
              width="30"
              height="24"
            ></img>
            KR Mangalam University
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button type="button" class="btn btn-primary">
                  Users
                </button>
              </li>
              <li className="nav-item">
                <button type="button" class="btn btn-secondary">
                  Profile
                </button>
              </li>
              <li className="nav-item">
                <button type="button" class="btn btn-warning">
                  Reset Password
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
