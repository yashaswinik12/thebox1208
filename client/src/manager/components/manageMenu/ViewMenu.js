import React, { useState, useEffect } from "react";
import axios from "axios";
import SpecialDishModal from "./SpecialDishModal";

function ViewMenu({ setSection }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSpecialModal, setShowSpecialModal] = useState(false);
  const [menuData, setMenuData] = useState([]);

  const fetchMenuData = async () => {
    try {
      const response = await axios.get(
        "https://5j4ncx-3001.csb.app/api/getmenudata",
        {
          withCredentials: true,
        }
      );
      setMenuData(response.data);
    } catch (error) {
      console.log("Error fetching menu data:", error);
    }
  };
  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <>
      <section className="content" id="viewMenu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Manage Menu</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container-fluid">
          {menuData.map((data) => (
            <div key={data._id} className="col-md-4">
              <div className="card m-2">
                <h4 className="card-header"> {data.category} </h4>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <b> Dish Name </b>
                    </div>
                    <div className="col-md-2">
                      <b> Price </b>
                    </div>
                    <div className="col-md-4">
                      <b> Action </b>
                    </div>
                  </div>
                  <hr />
                  {data.dishes.map((dish) => (
                    <div key={dish._id} className="row">
                      <div className="col-md-6">{dish.dish_name}</div>
                      <div className="col-md-2">{dish.dish_price}</div>
                      <div className="col-md-4">
                        <button
                          type="button"
                          className="btn bg-transparent special_Dish_btn"
                          title="Special Menu"
                          onClick={() => {}}
                        >
                          <i
                            style={{ color: "black" }}
                            className="fas fa-utensils"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SpecialDishModal
        show={showSpecialModal}
        handleClose={() => setShowSpecialModal(false)}
        // data={modalData}
        fetchMenuData={fetchMenuData}
      />
    </>
  );
}

export default ViewMenu;
