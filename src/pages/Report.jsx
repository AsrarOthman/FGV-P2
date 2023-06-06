import React from "react";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import Nav from "../Components/Nav";
import Tandan from "../Components/Tandan";
import "../Components/Sidebar.css";
import "./Page.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { LocalizationProvider } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MuiPacker from "../Components/MuiPacker";
// yarn add @mui/material dan yarn add @material-ui/core

function Report() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const [report, setReport] = React.useState("");

  const handleChange = (event) => {
    setReport(event.target.value);
  };
  console.log(value);
  return (
    <div className=" main-content">
      <div>
        <div className=" ">
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
                  <h4 className=" bd p-2 ml2">Laporan</h4>
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

              <div className="  margtop">
                <Nav Toggle={Toggle} />
                {/* ___________Start code page______________ */}

                <div className="">
                  <div className="card shadow rounded m-3">
                    <div className="card-body">
                      <h5 className="ml2 card-title">
                        Laporan bagi aktiviti di Seed Lab
                      </h5>
                      <hr className="text-dark ml2 mr2" />

                      <p className="card-text">
                        Sila pilih laporan yang dikehendaki :-{" "}
                      </p>
                      <div className="d-flex" style={{ gap: "5%" }}>
                        <div>
                          <div className="bd d-flex flex-row" style={{ gap: "5%"}}>
                            <FormControl sx={{ m: 0, minWidth: 230 }}>
                              <InputLabel id="demo-simple-select-autowidth-label">
                                Report
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={report}
                                onChange={handleChange}
                                autoWidth
                                label="Report"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Penerimaan Tandan</MenuItem>
                                <MenuItem value={2}>Melerai</MenuItem>
                                <MenuItem value={3}>Basuh Biji</MenuItem>
                                <MenuItem value={3}>Rendan Fresh</MenuItem>
                                <MenuItem value={3}>Rawatan Kulat</MenuItem>
                                <MenuItem value={3}>Bilik Sejuk</MenuItem>
                                <MenuItem value={3}>QC Biji Bersih</MenuItem>
                                <MenuItem value={3}>Batching</MenuItem>
                                <MenuItem value={3}>Printing</MenuItem>
                                <MenuItem value={3}>Bilik Panas</MenuItem>
                                <MenuItem value={3}>
                                  Check Kulat Bilik Panas
                                </MenuItem>
                              </Select>
                            </FormControl>
                            <div className="">
                              <LocalizationProvider  dateAdapter={AdapterDateFns}>
                              <MuiPacker />
                            </LocalizationProvider>
                            </div>
                        
                          </div>
                          {/* <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Sila pilih laporan</option>
                            <option value="1">Penerimaan Tandan</option>
                            <option value="2">Melerai</option>
                            <option value="3">Depericarp</option>
                            <option value="4"> Basuh Biji</option>
                            <option value="5">Rendan Fresh Seed</option>
                            <option value="6">Rawatan Kulat</option>
                            <option value="7">Bilik Sejuk</option>
                            <option value="8">QC Biji Bersih</option>
                            <option value="9">Batching</option>
                            <option value="10"> Printing</option>
                            <option value="11">Bilik Panas</option>
                            <option value="12">Check Kulat Bilik Panas</option>
                          </select> */}
                        </div>
                        <div>
                          {/* <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select> */}
                        </div>
                      </div>

                      {/* <a href="#" className="mt2 btn btn-primary">
                        Jana Dokumen
                      </a> */}
                      <div className="m4">
                        <Button href="#" variant="outlined">
                          Jana Dokumen
                        </Button>
                      </div>
                      {/* <TextField
                        label="Input"
                        value={value}
                        onChange={handleInputChange}
                      /> */}
                    </div>
                  </div>
                  <div className="card shadow rounded m-3">
                    <div className="card-body">
                      <h5 className="card-title">Laporan</h5>
                      <div className="d-flex flex-row bd">
                        <div>
                          <p className="card-text">
                            Laporan bagi penerimaan Tandan
                          </p>
                        </div>
                        <div>
                          <a
                            href="#"
                            style={{ position: "absolute", right: "0px" }}
                            className="btn btn-primary mr2"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                      <div>
                        <Tandan />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ___________End code page________________ */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
