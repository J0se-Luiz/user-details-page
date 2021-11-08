import React from 'react';
import * as S from './styles';

interface ButtonSignOutProps {
  onClick(): void;
  children: any;
}

const ButtonSignOut: React.FC<ButtonSignOutProps> = ({ onClick, children }) => {
  return (
    <S.ButtonSignOutStyle onClick={onClick}>
      {children}
    </S.ButtonSignOutStyle>
  );
};

export default ButtonSignOut;