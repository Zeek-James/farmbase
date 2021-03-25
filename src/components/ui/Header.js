import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import "../../utilies/fontawesome";

export const Header = () => {
  return (
    <div className="h-container" dark>
      <div className="pl-4 pr-4 dart d-flex align-items-end">
        <h1 href="/" className="mr-auto text-white">
          FarmBase
        </h1>
        <div className="text-white">
          <Nav>
            <NavItem>
              <NavLink href="/components/" className="text-white">
                Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white">
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Grains</DropdownItem>
                <DropdownItem>Legumes</DropdownItem>
                <DropdownItem>Fruits</DropdownItem>
                <DropdownItem>Nuts</DropdownItem>
                <DropdownItem>Vegetables</DropdownItem>
                <DropdownItem>Oil</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white">
                Who we are
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>About Us</DropdownItem>
                <DropdownItem>Our Market</DropdownItem>
                <DropdownItem>Fruits</DropdownItem>
                <DropdownItem>Nuts</DropdownItem>
                <DropdownItem>Vegetables</DropdownItem>
                <DropdownItem>Oil</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </div>
      </div>
    </div>
  );
};
