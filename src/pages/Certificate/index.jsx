import React, { useRef } from "react";
import styled from "styled-components";
import { findUser } from "../../utils/findUser";
import { useParams } from "react-router-dom";
import { certificate } from "../../assets";
import QRCode from "react-qr-code";
import { Download } from "react-feather";
import { Button } from "@mui/material";
import ReactToPrint from "react-to-print";
import { mobile } from "../../utils/reasponsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 24px;
  height: 100vh;
  align-items: center;
`;
const CertificateArea = styled.div`
  display: block;
  flex: 1 825px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.07);
  position: relative;
`;

const ShareDownload = styled.div`
  margin: 32px;
  flex: 2;
  text-align: center;
  ${mobile("margin: 0;")}
`;

const Name = styled.div`
  font-family: "Poppins";
  font-weight: bold;
  position: absolute;
  bottom: 15%;
  color: #fff;
  margin-left: 7%;
  font-size: 3.3vw;
  font-weight: 400;
  font-family: "Great Vibes", cursive;
  ${mobile("bottom: 18%")}
`;
const Image = styled.img`
  width: 100%;
`;
const QRArea = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;
const Headline = styled.div`
  font-family: Sora;
  font-weight: 600;
  font-size: 36px;
  ${mobile("font-size: 24px;")}
`;
const Descritpion = styled.div`
  font-family: Sora;
  font-weight: 400;
  font-size: 18px;
`;

const Certificate = () => {
  const componentRef = useRef();
  const params = useParams();
  const user = findUser(params.catid);
  console.log(user);
  return (
    <Container>
      <CertificateArea ref={componentRef}>
        <Image src={certificate} />
        <Name id="name">{user.firstName + " " + user.secondName}</Name>
        <QRArea>
          <QRCode
            size={64}
            value={"https://dg-cert.uz/certificate/" + params.catid}
          />
        </QRArea>
      </CertificateArea>
      <ShareDownload>
        <Headline>Ma'lumotnoma</Headline>
        <Descritpion>
          Raqamli Avlod oromgohining 4-13-yanvar kunlari o'tkizilgan "
          {user.course}" kursida faol ijtiroki uchun, {user.firstName}{" "}
          {user.secondName} sertifikat bilan taqdirlanadi!
        </Descritpion>
        <ReactToPrint
          trigger={() => (
            <Button
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              variant="contained"
              size="large"
            >
              <Download /> Sertifikatni yuklab olish
            </Button>
          )}
          content={() => componentRef.current}
        />
      </ShareDownload>
    </Container>
  );
};

export default Certificate;
