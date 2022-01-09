import React from "react";
import styled from "styled-components";

import { certificate } from "../../assets/";
const Container = styled.div``;
const CertificateArea = styled.img``;

const Certificate = ({ match, name, key, email }) => {

  return (
    <Container>
      <CertificateArea img={certificate} />
    </Container>
  );
};

export default Certificate;
