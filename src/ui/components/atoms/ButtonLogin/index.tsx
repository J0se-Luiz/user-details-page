import React from 'react';
import * as S from './styles';

interface ButtonLoginProps {
  onClick(): void;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ onClick }) => {
  return (
    <S.ButtonLoginStyle onClick={onClick}>
      Login
    </S.ButtonLoginStyle>
  );
};

export default ButtonLogin;