import React from "react";
import * as S from "./styles";

interface GoToGitHubProps {
  props?: string;
}

const GoToGitHub: React.FC<GoToGitHubProps> = () => {
  return (
      <S.LinkToGitHub href="https://github.com/J0se-Luiz/user-details-page" target="_blank" rel="noopener">
    <S.GoToGitHubStyle>
        <S.ImgGit
          src={`${process.env.PUBLIC_URL}/assets/Go-To-Img/go-to-GitHub.png`}
          alt="Go to GitHub"
        />
        <S.TextGitHub>Go to GitHub</S.TextGitHub>
    </S.GoToGitHubStyle>
      </S.LinkToGitHub>
  );
};

export default GoToGitHub;
