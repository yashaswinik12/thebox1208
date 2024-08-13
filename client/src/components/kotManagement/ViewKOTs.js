import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewKOTs() {
  const [kotData, setKotData] = useState([]);

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(
        "https://5j4ncx-3001.csb.app/api/showkots",
        {
          withCredentials: true,
        }
      );
      setKotData(response.data);
    } catch (error) {
      console.log("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);
  return (
    <>
      <section className="content" id="viewMenu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Manage Kots</h3>
                  {/* <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-block btn-dark"
                      id="addBtn"
                      onClick={() => setSection("AddMenu")}
                    >
                      <img src="../../dist/img/add.svg" alt="Add" /> Add Dishes
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container-fluid">
          {kotData.map((data) => (
            <div key={data._id} className="col-md-4">
              <div className="card m-2">
                <h4 className="card-header"> {data.customer_name} </h4>
                <div className="card-body">
                  <div className="d-flex justify-content-around m-2">
                    <h5>Area: {data.table_area}</h5>
                    <h5>Table No.: {data.table_no}</h5>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <b> Dish Name </b>
                    </div>
                    <div className="col-md-2">
                      <b> Quantity </b>
                    </div>
                    <div className="col-md-4">
                      <b> Action </b>
                    </div>
                  </div>
                  <hr />
                  {data.order_items.map((dish) => (
                    <div key={dish._id} className="row m-2">
                      <div className="col-md-6">{dish.dish_name}</div>
                      <div className="col-md-2">{dish.quantity}</div>
                      <div className="col-md-4">
                        <button
                          type="button"
                          className="btn"
                          title="Order Completed"
                        >
                          Complete
                        </button>
                      </div>
                    </div>
                  ))}
                  <hr />
                  <div className="m-2">
                    <span className="font-weight-bold">Comment : </span>
                    <span>{data.comment}</span>
                  </div>
                  <button type="button" className="btn" title="Order Completed">
                    All Complete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ViewKOTs;
