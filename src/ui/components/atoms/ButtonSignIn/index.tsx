import React from 'react';
import * as S from './styles';

interface ButtonSignInProps {
  onClick(): void;
  children: any
}

const ButtonSignIn: React.FC<ButtonSignInProps> = ({ onClick, children }) => {
  return (
    <S.ButtonSignInStyle onClick={onClick}>
      {children}
    </S.ButtonSignInStyle>
  );
};

export default ButtonSignIn;