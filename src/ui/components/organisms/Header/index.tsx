import React from 'react';
import * as S from './styles';
import ButtonSignOut from '../../atoms/ButtonSignOut';
interface HeaderProps {
  onClick(): void;
  auth: boolean
}

const Header: React.FC<HeaderProps> = ({ onClick, auth }) => {
  return (
    <S.HeaderStyle>
        <img src={`${process.env.PUBLIC_URL}/assets/img/svg/NewRoots-Logo.svg`} alt="Logo NewRoots"  />
       {auth && <ButtonSignOut onClick={onClick}> Sign out</ButtonSignOut>}
    </S.HeaderStyle>
  );
};

export default Header;