import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className=" topm sidebar p-2 margtop gborder">
      {/* <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4 "> </i>
        <span className="brand-name fs-4">FGV</span>
      </div> */}
      {/* <hr className="text-dark" /> */}
      <div className="bg-green list-group  ">
        <Link to="/Home" className="list-group-item py-2 bg-green">
          <i className="bi bi-clipboard-data fs-5 me-3 bg-green"></i>
          <span>Home</span>
        </Link>
        <a className="list-group-item py-2 bg-green  ">
          <i className="bi bi-house fs-5 me-3 bg-green  "></i>
          <span>Pengurusan </span>
        </a>
        <a className="list-group-item py-2 bg-green ">
          <i className="bi bi-table fs-5 me-3 bg-green "></i>
          <span>Tandan</span>
        </a>
        <Link to="/report" className="list-group-item py-2 bg-green">
          <i className="bi bi-clipboard-data fs-5 me-3 bg-green"></i>
          <span>Report</span>
        </Link>
        <a className="list-group-item py-2 bg-green ">
          <i className="bi bi-people fs-5 me-3 bg-green "></i>
          <span>Stok</span>
        </a>
        <a className="list-group-item py-2 bg-green ">
          <i className="bi bi-power fs-5 me-3 bg-green "></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
