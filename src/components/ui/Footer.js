import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "reactstrap";

export const Footer = () => {
  return (
    <div className="base_Container p-3  d-flex justify-content-center">
      <Container className="d-flex border-bottom m-4">
        <div className="mr-auto w-50">
          <h5>Farmbase Sourcing</h5>
          <p>
            Farmbase allows users (e.g. traders, exporters, farmers and buyers)
            to buy and sell farm products in bulk and explore the services of
            our trusted field facilitators, service providers and logistics
            partners who ensure safe production and timely delivery between farm
            gate and door step. Everybody WINS!!!
          </p>
        </div>
        <div>
          <div className='mb-4'>
            <a href="/#" className="m-3">
              <FontAwesomeIcon icon={["fab", "facebook"]} size='lg' />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={["fab", "twitter"]} size='lg' />
            </a>
          </div>
            <p>Copyright 2021 All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
  };
