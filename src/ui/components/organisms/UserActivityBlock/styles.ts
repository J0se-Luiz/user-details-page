import styled from "styled-components";

export const UserActivityBlockStyle = styled.section`
  margin: 1%;
  width: 300px;
  height: 364px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #16325c;
`;

export const SubTitle = styled.p`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: #8a94a6;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Activitie = styled.div`
  padding: 14px 5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #D7DBE7;
`;

export const ContainerDescription = styled.div`
margin-left: 10px;
`;

export const Date = styled(SubTitle)`
  font-size: 12px;
`;

export const Description = styled(SubTitle)`
  color: #16325c;
  font-weight: 500;
`;
