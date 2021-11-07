import styled from "styled-components";

export const UserInforBlockStyle = styled.section`
  margin: 1%;
  width: 300px;
  height: 364px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  border-radius: 8px;
`;

export const HeaderUserInfor = styled.div`
  width: 100%;
  /* margin: 0 auto; */
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
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  /* display: flex; */
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
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  max-width: 127px;

  /* display: flex; */
  align-items: center;
  color: #8a94a6;
`;

export const IconArrow = styled.img`
  width: 7px;
  height: 5px;
  position: relative;
    left: 20px;
`;
