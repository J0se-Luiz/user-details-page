import styled from "styled-components";

export const DetailsUserStyle = styled.main`
  background-image: url("https://cdn.nufarm.com/wp-content/uploads/sites/23/2018/07/31112542/Soja-1024x603.jpg");
  background-size: cover;
  background-position: center top;
  align-items: center;
  justify-content: center;
  padding: 80px 5%;
  width: 100%;
  height: auto;
  display: flex;

  @media(max-width: 999px){
      flex-direction: column;
  }
`;
