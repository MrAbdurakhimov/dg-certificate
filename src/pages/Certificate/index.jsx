import React from "react";
import styled from "styled-components";
import { findUser } from "../../utils/findUser";
import { useParams } from "react-router-dom";

import QRCode from "react-qr-code";
import { Download } from "react-feather";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px;
  height: 100vh;
  align-items: center;
`;
const CertificateArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 825px;
  height: 632px;
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.07);
`;

const ShareDownload = styled.div`
  flex: 2;
`;

const Name = styled.div`
  font-family: "Poppins";
  font-size: 54px;
  font-weight: bold;
`;

const Certificate = () => {
  const params = useParams();
  const user = findUser(params.catid);
  console.log(user);
  return (
    <Container>
      <CertificateArea>
        <Name>{user.firstName + " " + user.secondName}</Name>
        <QRCode
          size={128}
          value={"https://dg-cert.uz/certificate/" + params.catid}
        />
      </CertificateArea>
      <ShareDownload>
        <Download /> Download your certificate
      </ShareDownload>
    </Container>
  );
};

export default Certificate;
