import React from 'react';
import * as S from './styles';

interface LevelTierGoldProps {
  props?: any;
}

const LevelTierGold: React.FC<LevelTierGoldProps> = () => {
  return (
    <>
      <S.ContainerLevel>
        <S.DescriptionLevel>
          Gold
        </S.DescriptionLevel>
        <S.ContainerNextLevel>
          <S.NextTier>Next Tier</S.NextTier>
          <S.LevelNext>Platinum</S.LevelNext>
          <S.IconTier src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-next-tier.svg`} />
        </S.ContainerNextLevel>

      </S.ContainerLevel>
      <S.ContainerSteps>
        <S.IconStep src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-tier-empty.svg`} />
        <S.IconBarStep src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-tier-bar.svg`} />
        <S.IconStep src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-tier-empty.svg`} />
        <S.IconBarStep src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-tier-bar.svg`} />
        <S.IconStep src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-tier-current.svg`} />       
        <S.IconBarStep src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-tier-bar.svg`} />
        <S.IconStep src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-tier-empty.svg`} />
      </S.ContainerSteps>
    </>

  );
};

export default LevelTierGold;