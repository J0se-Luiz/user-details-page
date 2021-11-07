import React from 'react';
import * as S from './styles';
import UserListBlock from '../../organisms/UserListBlock';
import UserInforBlock from '../../organisms/UserInforBlock';
import UserActivityBlock from '../../organisms/UserActivityBlock';

interface DetailsUserProps {
  dataListUsers: any,
  props?: any;
}

const DetailsUser: React.FC<DetailsUserProps> = ({ dataListUsers }) => {
  return (
    <S.DetailsUserStyle>
        <UserListBlock dataListUsers={dataListUsers} />
        <UserInforBlock />
        <UserActivityBlock />
    </S.DetailsUserStyle>
  );
};

export default DetailsUser;


