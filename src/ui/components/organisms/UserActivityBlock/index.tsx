import React from 'react';
import * as S from './styles';

interface UserActivityBlockProps {
  props?: any;
}

const UserActivityBlock: React.FC<UserActivityBlockProps> = () => {
  return (
    <S.UserActivityBlockStyle>

      <S.Title>Activity Feed</S.Title>
      <S.SubTitle>Show Filters</S.SubTitle>


<S.Activitie>
   <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-completed-the-incentive.svg`} />
   <S.ContainerDescription>
     <S.Date>
     Yesterday
     </S.Date>
     <S.Description>
     Received 100 points for completing the Incentive Imperdiet senectus sit.
     </S.Description>
   </S.ContainerDescription>
</S.Activitie>


      {/* <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-completed-the-incentive.svg`} />
       <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-completed-the-module.svg`} />
       <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-promoted-to-tier.svg`} />
       <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-received-points.svg`} />
       <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-received-the-member.svg`} />
       <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-redeemed.svg`} /> */}
    </S.UserActivityBlockStyle>
  );
};

export default UserActivityBlock;