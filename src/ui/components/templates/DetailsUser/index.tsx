import React, { useState } from 'react';
import * as S from './styles';
import UserListBlock from '../../organisms/UserListBlock';
import UserInforBlock from '../../organisms/UserInforBlock';
import UserActivityBlock from '../../organisms/UserActivityBlock';

interface DetailsUserProps {
  dataLogin: any
}

const DetailsUser: React.FC<DetailsUserProps> = ({ dataLogin }) => {
  const [dataUserInfor, setDataUserInfor] = useState(undefined);

  // console.log("............... data user", dataUserInfor)

  return (
    <S.DetailsUserStyle>
      <UserListBlock dataLogin={dataLogin} dataUserInfor={dataUserInfor} setDataUserInfor={setDataUserInfor} />
      {dataUserInfor &&
        <>
          <UserInforBlock dataUserInfor={dataUserInfor}/>
          <UserActivityBlock dataUserInfor={dataUserInfor} />
        </>}
    </S.DetailsUserStyle>
  );
};

export default DetailsUser;


