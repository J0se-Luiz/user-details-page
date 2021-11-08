import styled from "styled-components";

export const ButtonSignOutStyle = styled.button`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  width: 80px;
  height: 40px;
  background: #4bca8d;
  border-radius: 8px;
  cursor: pointer;
  border: none;

  :hover {
    opacity: 0.7;

    transform: scale(1.2);
    transition: all 0.5s;
  }

  :active {
    cursor: wait;
  }
`;
