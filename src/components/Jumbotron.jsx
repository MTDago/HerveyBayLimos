import React from "react";
import { Container, Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import headerImage from "../img/Header.jpg";

const Styles = styled.div``;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid="true" className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Hervey Bay Limousine Services</h1>
        <p>Servicing Hervey Bay and Maryborough</p>
      </Container>
    </Jumbo>
  </Styles>
);
