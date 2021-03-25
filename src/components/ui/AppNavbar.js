import React, { Fragment, useEffect, useState } from "react";
import { Button, Nav, NavItem } from "reactstrap";
import "../../utilies/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const AppNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const authorisedLink = (
    <Fragment>
      <Nav navbar>
        <p>
          <span className="mr-2">Log out</span>
          <FontAwesomeIcon classname="m-2" icon="sign-out-alt" />
        </p>
        <NavItem></NavItem>
      </Nav>
    </Fragment>
  );

  const guestlink = (
    <Fragment>
      <Nav navbar>
        <NavItem>
          <p>
            <span className="mr-2">
              Login <FontAwesomeIcon classname="m-2" icon="sign-in-alt" />
            </span>
            <FontAwesomeIcon classname="m-2" icon="user-plus" />
          </p>
        </NavItem>
      </Nav>
    </Fragment>
  );

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

  }, []);

  return (
    <div className={`posi ${show && " shadow-lg text-dark bg-white"} `}>
      {show ? (
        <h2 color="dark" className="mr-3">
          FarmBase
        </h2>
      ) : (
        ""
      )}
      <Nav className="input-group rounded w-50">
        <input
          type="search"
          className="form-control rounded mr-2 p-2 "
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <Button className="input-group-text border-0" id="search-addon">
          <FontAwesomeIcon icon="search" onClick={toggleNavbar} />
        </Button>
      </Nav>
      {collapsed ? guestlink : authorisedLink}
    </div>
  );
};
