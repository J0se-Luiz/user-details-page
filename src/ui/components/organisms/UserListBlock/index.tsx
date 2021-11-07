import React from 'react';
import * as S from './styles';

interface UserListBlockProps {
  dataListUsers: any;
}

const UserListBlock: React.FC<UserListBlockProps> = ({ dataListUsers }) => {

  dataListUsers.sort((a: { balance: { points: number; }; }, b: { balance: { points: number; }; }) => {
    if (a.balance.points > b.balance.points) {
      return -1
    } else {
      return true
    }
  })

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

        {dataListUsers && dataListUsers.map((user: any, index: number) => user && (
          <S.LiListUser key={index} onClick={()=>{
            alert(`a muleke.... ${user.name} ...posição ${index += 1} `)
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