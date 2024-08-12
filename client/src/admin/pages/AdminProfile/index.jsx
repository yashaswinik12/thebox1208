import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminProfile() {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/userdata", {
        withCredentials: true,
      });
      if (response.data === "Null") {
        navigate("/login");
      } else {
        setUserData(response.data);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <h1>Admin Profile</h1>
      <div>
        <h1> Restaurant Code : {userData.restaurant_code} </h1>
        <h3> Name: {userData.name} </h3>
        <h3> Email: {userData.email} </h3>
        <h3> Mobile: {userData.mobile} </h3>
      </div>
    </div>
  );
}

export default AdminProfile;
