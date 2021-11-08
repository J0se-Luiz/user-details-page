import styled from "styled-components";

export const ButtonSignInStyle = styled.button`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: normal;
  font-weight: 500;
  font-size: 23px;
  color: #ffffff;
  width: 120px;
  height: 80px;
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

  :focus {
    cursor: wait;
  }
`;
