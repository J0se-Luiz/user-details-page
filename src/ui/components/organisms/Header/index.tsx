import React from 'react';
import * as S from './styles';
import ButtonSignOut from '../../atoms/ButtonSignOut';
interface HeaderProps {
  onClick(): void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <S.HeaderStyle>
        <img src={`${process.env.PUBLIC_URL}/assets/img/svg/NewRoots-Logo.svg`} alt="Logo NewRoots"  />
        <ButtonSignOut onClick={onClick}> Sign out</ButtonSignOut>
    </S.HeaderStyle>
  );
};

export default Header;