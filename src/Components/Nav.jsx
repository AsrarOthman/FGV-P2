import React from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "../App.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const name = "Asrar Othman";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function Nav({ Toggle }) {
  return (
    <div className=" bd box-s">
      <nav className="navbar navbar-expand-sm   ">
        <i className="ml2 navbar-brand bi bi-justify-left" onClick={Toggle}></i>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-justify"></i>
        </button>
        <h4>FGV Argi Services Sdn Bhd</h4>
        <div className="bd" style={{ position: "absolute", right: "10.5%" }}>
          <Stack direction="row" spacing={2}>
            <Avatar {...stringAvatar(name)} />
          </Stack>
        </div>

        <div className=" mr2 collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                className=" bd nav-link dropdown-toggle text-black"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Asrar Othman
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  Setting{" "}
                </a>
                <a className="dropdown-item" href="#">
                  Logout{" "}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
