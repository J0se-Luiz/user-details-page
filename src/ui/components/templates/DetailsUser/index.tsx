import React from 'react';
import * as S from './styles';
import UserListBlock from '../../organisms/UserListBlock';
import UserInforBlock from '../../organisms/UserInforBlock';
import UserActivityBlock from '../../organisms/UserActivityBlock';

interface DetailsUserProps {
  props?: any;
}

const DetailsUser: React.FC<DetailsUserProps> = () => {
  return (
    <S.DetailsUserStyle>
        <UserListBlock />
        <UserInforBlock />
        <UserActivityBlock />
    </S.DetailsUserStyle>
  );
};

export default DetailsUser;


