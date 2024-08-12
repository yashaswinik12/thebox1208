import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../admin/pages/AdminDashboard/AdminDashboard";
import AdminInventory from "../admin/pages/AdminInventory";
import AdminManageMenu from "../admin/pages/AdminManageMenu";
import AdminStaff from "../admin/pages/AdminStaff";
import AdminTable from "../admin/pages/AdminTable";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/table-management" element={<AdminTable />} />
      <Route path="/manage-menu" element={<AdminManageMenu />} />
      <Route path="/inventory" element={<AdminInventory />} />
      <Route path="/staff" element={<AdminStaff />} />
    </Routes>
  );
}

export default AdminRoutes;
