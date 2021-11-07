import React from 'react';
import * as S from './styles';

interface UserInforBlockProps {
  props?: any;
}

const UserInforBlock: React.FC<UserInforBlockProps> = () => {
  return (
    <S.UserInforBlockStyle>
      <S.HeaderUserInfor>
        <S.ImgUser src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/7.jpg" />
        <S.ContainerDescription>
        <S.NameUser>
        Cameron Williamson
        </S.NameUser>
        <S.IconAndDescriptionUser>
        <S.DescriptionUser>
        Sales Incentive Program Contributor
        </S.DescriptionUser>
       <S.IconArrow src={`${process.env.PUBLIC_URL}/assets/img/svg/icon-arrow.svg`}/>
       </S.IconAndDescriptionUser>
        </S.ContainerDescription>
      </S.HeaderUserInfor>
    </S.UserInforBlockStyle>
  );
};

export default UserInforBlock;