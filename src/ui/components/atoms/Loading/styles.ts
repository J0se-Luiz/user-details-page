import styled from "styled-components";
interface TypesLoading {
  loading: boolean;
}

export const LoadingStyle = styled.div<TypesLoading>`
  display: ${(props) => (props.loading ? "block" : "none")};
  z-index: 9999;
  background-color: transparent;
  opacity: 0.2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("${process.env.PUBLIC_URL}/assets/gifs/loading.gif");

    background-position: center;
    background-repeat: no-repeat;

  :hover {
    opacity: 0.7;
    cursor: wait;
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
