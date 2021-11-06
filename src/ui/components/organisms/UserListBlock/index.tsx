import React from 'react';
import * as S from './styles';

interface UserListBlockProps {
  props?: any;
}

const UserListBlock: React.FC<UserListBlockProps> = () => {
  return (
    <S.UserListBlockStyle>
        <p>UserListBlock</p>
    </S.UserListBlockStyle>
  );
};

export default UserListBlock;