import React from 'react';
import * as S from './styles';

interface UserActivityBlockProps {
  props?: any;
}

const UserActivityBlock: React.FC<UserActivityBlockProps> = () => {
  return (
    <S.UserActivityBlockStyle>
        <p> UserActivityBlock</p>
    </S.UserActivityBlockStyle>
  );
};

export default UserActivityBlock;