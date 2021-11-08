import React from 'react';
import * as S from './styles';
import ButtonLogin from '../../atoms/ButtonLogin';

interface LoginProps {
  onClick(): void;
}

const Login: React.FC<LoginProps> = ({ onClick }) => {
  return (
    <S.LoginStyle>
      <S.UserListBlockStyle>
<S.Hello> Hello!</S.Hello>
<S.Description> Click on the login button, enter see all user details</S.Description>

        <ButtonLogin onClick={onClick}>
          Login
        </ButtonLogin>
      </S.UserListBlockStyle>
    </S.LoginStyle>
  );
};

export default Login;