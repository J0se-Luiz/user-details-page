import React from 'react';
import * as S from './styles';
import LevelTierBronze from '../../molecules/LevelTierBronze';
import LevelTierSilver from '../../molecules/LevelTierSilver';
import LevelTierGold from '../../molecules/LevelTierGold';

interface UserInforBlockProps {
  dataUserInfor: any;
}

const UserInforBlock: React.FC<UserInforBlockProps> = ({ dataUserInfor }) => {

  return (
    <S.UserInforBlockStyle>
      <S.HeaderUserInfor>
        <S.ImgUser src={dataUserInfor.userInfor.user.image ? dataUserInfor.userInfor.user.image : `${process.env.PUBLIC_URL}/assets/img/jpg/sem-foto.jpg`} />
        <S.ContainerDescription>
          <S.NameUser>
            {dataUserInfor.userInfor.user.name}
          </S.NameUser>
          <S.IconAndDescriptionUser>
            <S.DescriptionUser>
              {dataUserInfor.userInfor.userProgram.name}
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
              {dataUserInfor.userInfor.user.balance.points}
            </S.Number>
          </S.ContainerIconStep>
          <S.DescriptionPoints>Points</S.DescriptionPoints>
        </S.ContainerStep>

        <S.ContainerStep>
          <S.ContainerIconStep>
            <S.Number>
              {dataUserInfor.userInfor.user.balance.miles}
            </S.Number>
          </S.ContainerIconStep>
          <S.DescriptionPoints>Miles</S.DescriptionPoints>
        </S.ContainerStep>

        <S.ContainerStep>
          <S.ContainerIconStep>
            <S.Cipher>$</S.Cipher>
            <S.Number>
              {Math.round(dataUserInfor.userInfor.user.balance.currency)}
            </S.Number>
          </S.ContainerIconStep>
          <S.DescriptionPoints>Currency</S.DescriptionPoints>
        </S.ContainerStep>
      </S.BodyUserInfor>

      <S.FooterUserInfor>

        {/*  A API TA RETORNANDO ERRADO, TA INVERTIDA, QUEM É GOLD TA VINDO BRONZE E VICE VERSA */}
        {/* {dataUserInfor.userInfor.userLevel.name === "Bronze" && <LevelTierBronze />}
        {dataUserInfor.userInfor.userLevel.name === "Silver" && <LevelTierSilver />}
        {dataUserInfor.userInfor.userLevel.name === "Gold" && <LevelTierGold />} */}


        {/* PARA QUE FIQUE COM OS STEPS CERTOS, VERIFIQUEI PELOS PONTOS DE CADA USER... COM BASE NAS REGRAS DA API, ATE 100 PONTOS É BRONZE, DE 101 A 300 É SILVER, A CIMA DE 300 É GOLD. */}
        {dataUserInfor.userInfor.user.balance.points <= 100 && <LevelTierBronze />}
        {dataUserInfor.userInfor.user.balance.points > 100 && dataUserInfor.userInfor.user.balance.points <= 300 && <LevelTierSilver />}
        {dataUserInfor.userInfor.user.balance.points > 300 && <LevelTierGold />}

      </S.FooterUserInfor>
    </S.UserInforBlockStyle>
  );
};

export default UserInforBlock;