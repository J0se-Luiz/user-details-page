import React from 'react';
import * as S from './styles';

interface HeaderProps {
  props?: any;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.HeaderStyle>
        <img src={`${process.env.PUBLIC_URL}/assets/img/svg/NewRoots-Logo.svg`} alt="Logo NewRoots"  />
    </S.HeaderStyle>
  );
};

export default Header;