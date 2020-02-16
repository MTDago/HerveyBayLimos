import { Container } from "react-bootstrap";
import React from "react";

export const Layout = props => (
  <Container>
    <div>{props.children}</div>
  </Container>
);
