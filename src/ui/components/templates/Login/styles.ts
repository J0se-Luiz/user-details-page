import styled from "styled-components";

export const LoginStyle = styled.main`
  background-image: url("https://th.bing.com/th/id/R.8d2b6844b6b617bd976371b2a64bb9ba?rik=0yVIyNgH1fFy5A&riu=http%3a%2f%2fbackgroundcheckall.com%2fwp-content%2fuploads%2f2017%2f12%2fadmin-login-background-images-8.jpg&ehk=zat%2b4lbymuNFuhbC07UZ%2bxEDneaeoRryI8oq17AhD%2bo%3d&risl=&pid=ImgRaw&r=0");
  background-size: cover;
  background-position: center top;
  align-items: center;
  justify-content: center;
  padding: 80px 5%;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;

  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export const UserListBlockStyle = styled.section`
  margin: 1%;
  width: 300px;
  height: 364px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
  justify-content: space-evenly;
`;

export const Hello = styled.h2`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  align-items: center;
  text-align: center;
  color: #16325c;
`;

export const Description = styled.p`
  font-family: Segoe UI italic;
  font-style: normal;
  font-weight: 600;
  font-weight: 500;
  font-size: 32px;
  align-items: center;
  color: #8a94a6;
  text-align: center;
`;

