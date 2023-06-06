import React from "react";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";
import { useState } from "react";
import Header from "./Header";
function Abar() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div>
        <div className=" bg-secondary min-vh-100 pt-100 ">
          <div className="row">
            {toggle && (
              <div className="col-4 col-md-2 bg-white min-vh-100 position-fixed ">
                <Sidebar />
              </div>
            )}
            {/* <div className="position-fixed">
              <Header />
            </div> */}
            {toggle && <div className="col-4 col-md-2 "></div>}

            <div className="col">
              <Home Toggle={Toggle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abar;
