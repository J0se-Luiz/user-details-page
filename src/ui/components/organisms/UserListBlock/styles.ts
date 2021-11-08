import styled from "styled-components";

export const UserListBlockStyle = styled.section`
  margin: 10px;
  width: 300px;
  height: 364px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  border-radius: 8px;

`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  width: 100%;
`;

export const DescriptionPos = styled.p`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;

  color: #8a94a6;
  flex: none;
  order: 0;
  flex-grow: 0;
  /* margin: 0px 8px; */
`;

export const SpaceDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DescriptionMember = styled(DescriptionPos)`
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
`;

export const DescriptioPoints = styled(DescriptionPos)`
  order: 1;
  flex-grow: 0;
  margin-right: 5px;
`;

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
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

export const LiListUser = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  margin: 4px 0;
  cursor: pointer;

  :hover {
    opacity: 0.6;

    transform: scale(0.92);
    transition: all 0.5s;
  }

`;

export const NumberPosition = styled.p`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #16325c;
`;

export const ContainerMember = styled.div`
  display: flex;
  width: 190px;
`;

export const ImgMember = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 20px;
`;

export const NameMember = styled(NumberPosition)`
  margin-left: 8px;
`;

export const Points = styled(NumberPosition)``;
