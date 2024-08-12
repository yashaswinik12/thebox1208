import "./login.css";
import "./style.css";

import { BrowserRouter } from "react-router-dom";

import AllRoutes from "./router/AllRoutes";
import AdminRoutes from "./router/AdminRoutes";
import ManagerRoutes from "./router/ManagerRoutes";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}
