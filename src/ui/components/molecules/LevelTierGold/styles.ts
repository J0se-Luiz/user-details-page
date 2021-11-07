import styled from "styled-components";

export const ContainerLevel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerNextLevel = styled.div`
  display: flex;
  align-items: center;
`;

export const NextTier = styled.p`
  font-family: Segoe UI italic;
  font-style: normal;
  /* font-weight: 600; */
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  max-width: 127px;
  align-items: center;
  color: #8a94a6;
`;

export const DescriptionLevel = styled(NextTier)`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #16325c;
`;

export const LevelNext = styled(DescriptionLevel)`
  font-size: 12px;
  margin: 0 4px;
`;

export const IconTier = styled.img`
  width: 17px;
  height: 17px;
  /* margin-right: 4px; */
`;

export const ContainerSteps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 6px 0px;
`;

export const IconStep = styled.img``;

export const IconBarStep = styled.img``;
