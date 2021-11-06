import React from 'react';
import * as S from './styles';

interface UserInforBlockProps {
  props?: any;
}

const UserInforBlock: React.FC<UserInforBlockProps> = () => {
  return (
    <S.UserInforBlockStyle>
        <p>infooooooo</p>
    </S.UserInforBlockStyle>
  );
};

export default UserInforBlock;