import React, { useState, useEffect } from "react";
import axios from "axios";

import { MdLocalPrintshop } from "react-icons/md";

function DashboardSection({
  setMainSection,
  setTableId,
  setOrderId,
  setOrderType,
}) {
  const [tableData, setTableData] = useState([]);

  const fetchTableData = async () => {
    try {
      const response = await axios.get(
        "https://5j4ncx-3001.csb.app/api/gettabledata",
        {
          withCredentials: true,
        }
      );
      setTableData(response.data);
    } catch (error) {
      console.log("Error fetching table data:", error);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  const onClickTable = async (tableId) => {
    try {
      const response = await axios.get(
        `https://5j4ncx-3001.csb.app/api/gettabledata/${tableId}`,
        {
          withCredentials: true,
        }
      );
      const tableInfo = response.data;
      setTableId(tableId);
      setOrderId(tableInfo.order_id);
      setOrderType("Dine In");
      setMainSection("OrderSection"); // Pass order_id to OrderSection
    } catch (error) {
      console.log("Error fetching table details:", error);
    }
  };

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <button
                  className="btn text-center mx-3"
                  onClick={() => {
                    setOrderType("Delivery");
                    setMainSection("OrderSection");
                  }}
                >
                  Delivery
                </button>
                <button
                  className="btn text-center mx-3"
                  onClick={() => {
                    setOrderType("Pickup");
                    setMainSection("OrderSection");
                  }}
                >
                  Pick up
                </button>
              </div>
            </div>
            <div className="row w-100 px-2"></div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Table List</h3>
              </div>
              {tableData.map((table) => (
                <div className="card-body p-0 m-2" key={table._id}>
                  <div className="m-3" style={{ fontWeight: "bold" }}>
                    {table.area}
                  </div>
                  <ul className="row" style={{ listStyle: "none" }}>
                    {table.tables.map((table) => (
                      <li
                        key={table._id}
                        onClick={() => onClickTable(table._id)}
                      >
                        <div className="container">
                          <div
                            className={`dashboard-table d-flex justify-content-center align-items-center ${
                              table.current_status === "Save"
                                ? "table-save"
                                : table.current_status === "KOT" ||
                                  table.current_status === "KOT and Print"
                                ? "table-kot"
                                : ""
                            }`}
                          >
                            <div align="center">{table.table_no}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSection;
