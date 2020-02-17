import React from "react";
import { Container, Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import headerImage from "../img/Header4.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${headerImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ffffff;
    height: 200px;
    position: relative;
    z-index: 0;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Hervey Bay Limousines</h1>
        <p>Servicing Hervey Bay and Maryborough</p>
      </Container>
    </Jumbo>
  </Styles>
);
