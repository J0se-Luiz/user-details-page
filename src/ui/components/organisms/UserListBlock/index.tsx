import React from 'react';
import * as S from './styles';
import { getInforUser } from '../../../helpers/api'

interface UserListBlockProps {
  dataLogin: any,
  dataUserInfor: any,
  setDataUserInfor: any
}

const UserListBlock: React.FC<UserListBlockProps> = ({ dataLogin, dataUserInfor, setDataUserInfor }) => {

  return (
    <S.UserListBlockStyle>
      <S.ContainerDescription>
        <S.DescriptionPos>Pos. </S.DescriptionPos>
        <S.SpaceDescription>
          <S.DescriptionMember>Member</S.DescriptionMember>
          <S.DescriptioPoints>Points</S.DescriptioPoints>
        </S.SpaceDescription>
      </S.ContainerDescription>

      <S.ContainerList>

        {dataLogin.dataListUsers && dataLogin.dataListUsers.map((user: any, index: number) => user && (
          <S.LiListUser key={index} onClick={() => {
            getInforUser(
              dataLogin.login.token,
              user.id,
              dataUserInfor,
              setDataUserInfor
            )
          }}>
            <S.NumberPosition>
              {index += 1}
            </S.NumberPosition>
            <S.ContainerMember>
              <S.ImgMember src={user.image ? user.image : `${process.env.PUBLIC_URL}/assets/img/jpg/sem-foto.jpg`} />
              <S.NameMember>
                {user.name}
              </S.NameMember>
            </S.ContainerMember>
            <S.Points>
              {user.balance.points}
            </S.Points>
          </S.LiListUser>
        ))}
      </S.ContainerList>
    </S.UserListBlockStyle>
  );
};

export default UserListBlock;