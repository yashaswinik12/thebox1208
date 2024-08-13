import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://5j4ncx-3001.csb.app/api/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Logged Out");
        navigate("/login");
      });
  });
  return <div></div>;
}

export default Logout;
