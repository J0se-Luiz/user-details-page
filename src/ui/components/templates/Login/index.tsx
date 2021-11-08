import React from 'react';
import * as S from './styles';
import ButtonSignIn from '../../atoms/ButtonSignIn';

interface LoginProps {
  onClick(): void;
}

const Login: React.FC<LoginProps> = ({ onClick }) => {
  return (
    <S.LoginStyle>
      <S.UserListBlockStyle>
        <S.Hello> Hello!</S.Hello>
        <S.Description> click on the login button, and see the users details page</S.Description>

        <ButtonSignIn onClick={onClick}>
          Sign in
        </ButtonSignIn>
      </S.UserListBlockStyle>
    </S.LoginStyle>
  );
};

export default Login;