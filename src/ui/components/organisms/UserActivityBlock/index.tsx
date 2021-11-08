import React from 'react';
import * as S from './styles';

interface UserActivityBlockProps {
  dataUserInfor: any;
}

const UserActivityBlock: React.FC<UserActivityBlockProps> = ({ dataUserInfor }) => {
  const calcDate = (date: any) => {
    const date1 = new Date(date);
    const date2 = new Date();
    const nDays = (Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
      Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / 86400000;

    if (nDays === 0 || isNaN(nDays)) {
      return date
    } else {
      return nDays === 1 ? `to ${nDays} day` : `to ${nDays} days`;
    }};

  return (
    <S.UserActivityBlockStyle>

      <S.Title>Activity Feed</S.Title>
      <S.SubTitle>Show Filters</S.SubTitle>

      <S.ListActivitie>

        {dataUserInfor.userActivities && dataUserInfor.userActivities.map((activitie: any, index: number) => activitie && (

          <S.Activitie key={index}>

            {activitie.description.substr(0, 8) === "Received" && <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-received-points.svg`} />}

            {activitie.description.substr(0, 20) === "Completed the Inceti" && <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-completed-the-incentive.svg`} />}

            {activitie.description.substr(0, 20) === "Completed the module" && <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-completed-the-module.svg`} />}

            {activitie.description.substr(0, 8) === "Redeemed" && <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-redeemed.svg`} />}

            {activitie.description.substr(0, 16) === "Promoted to Tier" && <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-promoted-to-tier.svg`} />}

            {activitie.description.substr(0, 19) === "Received the Member" && <S.Icon src={`${process.env.PUBLIC_URL}/assets/img/svg/Icon-received-the-member.svg`} />}


            <S.ContainerDescription>
              <S.Date>
                {calcDate(activitie.date)}
              </S.Date>
              <S.Description>
                {activitie.description}
              </S.Description>
            </S.ContainerDescription>
          </S.Activitie>
        ))}
      </S.ListActivitie>
    </S.UserActivityBlockStyle>
  );
};

export default UserActivityBlock;