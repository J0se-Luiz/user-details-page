import styled from "styled-components";

export const UserInforBlockStyle = styled.section`
  margin: 10px;
  width: 300px;
  height: 364px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border-radius: 8px;

`;

export const HeaderUserInfor = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImgUser = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 40px;
`;

export const ContainerDescription = styled.div``;

export const NameUser = styled.h2`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  align-items: center;
  min-width: 133px;

  color: #16325c;
`;

export const IconAndDescriptionUser = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DescriptionUser = styled.p`
  font-family: Segoe UI italic;
  font-style: normal;
  /* font-weight: 600; */
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  max-width: 127px;
  align-items: center;
  color: #8a94a6;
`;

export const IconArrow = styled.img`
  width: 7px;
  height: 5px;
  position: relative;
  left: 20px;
`;

export const BodyUserInfor = styled.div`
  border: 1px solid #d7dbe7;
  border-left: none;
  border-right: none;
  width: 100%;
  margin: 10px 0px;
  padding: 30px;

  display: flex;
  justify-content: space-around;
`;

export const ContainerStep = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerIconStep = styled.div`
  display: flex;
  align-items: center;
`;

export const IconPoints = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 4px;
`;

export const Number = styled(DescriptionUser)`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #16325c;
`;

export const DescriptionPoints = styled(DescriptionUser)``;

export const Cipher = styled(DescriptionUser)`
  font-weight: bold;
  font-size: 13px;
  line-height: 17px;
  margin-right: 2px;
`;

export const FooterUserInfor = styled.div`
  border-bottom: 1px solid #d7dbe7;
  width: 100%;
  padding: 20px 0px;
`;
