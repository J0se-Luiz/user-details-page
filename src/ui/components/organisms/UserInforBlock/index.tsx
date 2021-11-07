import React from 'react';
import * as S from './styles';
import LevelTierGold from '../../molecules/LevelTierGold';

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
            <S.IconArrow src={`${process.env.PUBLIC_URL}/assets/img/svg/icon-arrow.svg`} />
          </S.IconAndDescriptionUser>
        </S.ContainerDescription>
      </S.HeaderUserInfor>

      <S.BodyUserInfor>
        <S.ContainerStep>
          <S.ContainerIconStep>
            <S.IconPoints src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-points.svg`} />
            <S.Number>
              1540
            </S.Number>
          </S.ContainerIconStep>
          <S.DescriptionPoints>Points</S.DescriptionPoints>
        </S.ContainerStep>

        <S.ContainerStep>
          <S.ContainerIconStep>
            <S.Number>
              10450
            </S.Number>
          </S.ContainerIconStep>
          <S.DescriptionPoints>Miles</S.DescriptionPoints>
        </S.ContainerStep>

        <S.ContainerStep>
          <S.ContainerIconStep>
          <S.Cipher>$</S.Cipher>
            <S.Number>
              350
            </S.Number>
          </S.ContainerIconStep>
          <S.DescriptionPoints>Currency</S.DescriptionPoints>
        </S.ContainerStep>
      </S.BodyUserInfor>

      <S.FooterUserInfor>


        {/* <S.ContainerLevel>
        <S.DescriptionLevel>
          Gold
        </S.DescriptionLevel>
        <S.ContainerNextLevel>
          <S.NextTier>Next Tier</S.NextTier>
          <S.LevelNext>Platinum</S.LevelNext>
          <S.IconPoints src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-next-tier.svg`} />

        </S.ContainerNextLevel>
        </S.ContainerLevel> */}
<LevelTierGold />

      </S.FooterUserInfor>
    </S.UserInforBlockStyle>
  );
};

export default UserInforBlock;