import React from "react";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import Nav from "../Components/Nav";
import "../Components/Sidebar.css";
import img from "../assets/img.png";

function Home() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="">
      <div>
        <div className=" main-content ">
          <div className="row">
            {toggle && (
              <div className="col-4 col-md-2  min-vh-100 position-fixed gborder ">
                <Sidebar />
              </div>
            )}
            {toggle && <div className="col-4 col-md-2  "></div>}
            <div className="topm col">
              <div style={{}} className="d-flex bd">
                <div className="">
                  <h4 className=" bd p-2 ml2">Dashboard</h4>
                </div>
                <div className="">
                  <h4
                    style={{ position: "absolute", right: "0px" }}
                    className=" bd p-2 mr2"
                  >
                    Seed Laboratory
                  </h4>
                </div>
              </div>

              <hr className="text-dark ml2 mr2" />

              <div className="">
                <Nav Toggle={Toggle} />

                <div className="px-3 container-fluid">
                  <div className=" m-3 row g-3 my-2">
                    <div className=" col-md-3 ">
                      <div
                        className="bd p-3 bg-white  shadow card h3  "
                        style={{ position: "relative" }}
                      >
                        <div>
                          <p
                            className="bd"
                            style={{
                              position: "absolute",
                              top: "10%",
                              left: "7%",
                              fontSize: "18px",
                            }}
                          >
                            Jumlah Biji
                          </p>
                          <h3
                            className="bd"
                            style={{
                              position: "absolute",
                              top: "30%",
                              left: "35%",
                              fontSize: "40px",
                            }}
                          >
                            324
                          </h3>
                          <h5
                            className=""
                            style={{
                              position: "absolute",
                              top: "75%",
                              left: "10%",
                              fontSize: "15px",
                              color: "green",
                            }}
                          >
                            2332
                          </h5>
                          <h5
                            className=""
                            style={{
                              position: "absolute",
                              top: "75%",
                              right: "10%",
                              fontSize: "15px",
                              color: "green",
                            }}
                          >
                            2765432
                          </h5>
                        </div>

                        <i
                          className="bi bi-droplet-fill p-3 fs-1"
                          style={{
                            position: "absolute",
                            top: "0%",
                            left: "70%",
                          }}
                        ></i>
                      </div>
                    </div>
                    <div className=" col-md-3 ">
                      <div
                        className="bd p-3 bg-white  shadow card h3  "
                        style={{ position: "relative" }}
                      >
                        <div>
                          <p
                            className="bd"
                            style={{
                              position: "absolute",
                              top: "10%",
                              left: "7%",
                              fontSize: "18px",
                            }}
                          >
                            Jumlah Tanda
                          </p>
                          <h3
                            className="bd"
                            style={{
                              position: "absolute",
                              top: "30%",
                              left: "35%",
                              fontSize: "40px",
                            }}
                          >
                            377
                          </h3>
                          <h5
                            className=""
                            style={{
                              position: "absolute",
                              top: "75%",
                              left: "10%",
                              fontSize: "15px",
                              color: "green",
                            }}
                          >
                            2732
                          </h5>
                          <h5
                            className=""
                            style={{
                              position: "absolute",
                              top: "75%",
                              right: "10%",
                              fontSize: "15px",
                              color: "green",
                            }}
                          >
                            27432
                          </h5>
                        </div>

                        <i
                          className="bi bi-tree p-3 fs-1"
                          style={{
                            position: "absolute",
                            top: "0%",
                            left: "70%",
                          }}
                        ></i>
                      </div>
                    </div>

                    <div className=" col-md-3 ">
                      <div
                        className="bd p-3 bg-white  shadow card h3  "
                        style={{ position: "relative" }}
                      >
                        <div>
                          <p
                            className="bd"
                            style={{
                              position: "absolute",
                              top: "10%",
                              left: "7%",
                              fontSize: "18px",
                            }}
                          >
                            Jumlah Stok
                          </p>
                          <h3
                            className="bd"
                            style={{
                              position: "absolute",
                              top: "30%",
                              left: "35%",
                              fontSize: "40px",
                            }}
                          >
                            324
                          </h3>
                          <h5
                            className=""
                            style={{
                              position: "absolute",
                              top: "75%",
                              left: "10%",
                              fontSize: "15px",
                              color: "green",
                            }}
                          >
                            7732
                          </h5>
                          <h5
                            className=""
                            style={{
                              position: "absolute",
                              top: "75%",
                              right: "10%",
                              fontSize: "15px",
                              color: "green",
                            }}
                          >
                            27432
                          </h5>
                        </div>

                        <i
                          className="bi bi-boxes p-3 fs-1"
                          style={{
                            position: "absolute",
                            top: "0%",
                            left: "70%",
                          }}
                        ></i>
                      </div>
                    </div>
                    <div className=" col-md-3 ">
                      <div
                        className="bd p-3 bg-white  shadow card h3  "
                        style={{ position: "relative" }}
                      >
                        <div>
                          <p
                            className="bd"
                            style={{
                              position: "absolute",
                              top: "10%",
                              left: "7%",
                              fontSize: "18px",
                            }}
                          >
                            Jumlah Jualan Biji
                          </p>
                          <h3
                            className="bd"
                            style={{
                              position: "absolute",
                              top: "30%",
                              left: "35%",
                              fontSize: "40px",
                            }}
                          >
                            324
                          </h3>
                          <h5
                            className=""
                            style={{
                              position: "absolute",
                              top: "75%",
                              left: "10%",
                              fontSize: "15px",
                              color: "green",
                            }}
                          >
                            975
                          </h5>
                          <h5
                            className=""
                            style={{
                              position: "absolute",
                              top: "75%",
                              right: "10%",
                              fontSize: "15px",
                              color: "green",
                            }}
                          >
                            987432
                          </h5>
                        </div>

                        <i
                          className="bi bi-graph-up-arrow p-3 fs-1"
                          style={{
                            position: "absolute",
                            top: "0%",
                            left: "70%",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="text-dark mt2 ml2 mr2" />
                <div className="ml2 listbox shadow card  rounded">
                  <div className=" m-3 px-3">
                    <table className="px-3 table caption-top bg-white rounded mt-2">
                      <caption className="px-3 text-black fs-4">
                        List of data
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colSpan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="m-3 px-3">
                  <figure className="figure">
                    <img
                      src={img}
                      className="figure-img img-fluid rounded"
                      alt="..."
                    />
                    <figcaption className="figure-caption text-end">
                      A caption for the above GRaph.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
