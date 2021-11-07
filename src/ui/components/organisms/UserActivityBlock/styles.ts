import styled from "styled-components";

export const UserActivityBlockStyle = styled.section`
  margin: 1%;
  width: 300px;
  height: 364px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 8px;
  border-radius: 8px;
  overflow: auto;
`;

export const ListActivitie = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  overflow: auto;
  padding: 0px 4px;

  ::-webkit-scrollbar {
    width: 6px;
    margin-right: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #fafbfd;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #d7dbe7;
    border-radius: 8px;
    height: 10px;
  }
`;

export const Title = styled.h2`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #16325c;
  padding: 14px 14px 0px 14px;
`;

export const SubTitle = styled.p`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: #8a94a6;
  padding-left: 14px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Activitie = styled.li`
  padding: 14px 5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d7dbe7;
`;

export const ContainerDescription = styled.div`
  margin-left: 10px;
`;

export const Date = styled(SubTitle)`
  font-size: 12px;
  padding-left: 0px;
`;

export const Description = styled(SubTitle)`
  color: #16325c;
  font-weight: 500;
  padding-left: 0px;
`;
