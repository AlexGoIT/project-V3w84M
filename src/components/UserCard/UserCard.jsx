import {
  UserCardContainer,
  NameContainer,
  UserInscription,
  InformationContainer,
  InformationText,
  CaloriesContainer,
  ActiveDataCalories,
  ActiveDataMinutes,
  ActivityContainer,
  ImageContainer,
  ActivityStaticInfoContainer,
  NoticeContainer,
  UserAvatar,
  LogoutContainer,
} from './UserCard.styled';

import Logout from 'components/Logout/Logout';
import Notice from 'components/Notice';
import sprite from 'assets/images/sprite.svg';

//
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalculate } from 'redux/user/userOperations';
import { selectCalculate } from 'redux/user/userSelectors';
// import { fetchCurrentUser } from 'redux/auth/authOperations';
//

const UserCard = ({ message }) => {
  //
  const dispatch = useDispatch();
  const calculate = useSelector(selectCalculate);

  useEffect(() => {
    // dispatch(fetchCurrentUser());

    dispatch(fetchCalculate());
  }, [dispatch]);
  //

  const dailyActivity = calculate.dailyActivity ? calculate.dailyActivity : 0;
  const bmr = calculate.BMR ? calculate.BMR : 0;

  return (
    <UserCardContainer style={{ color: 'white' }}>
      <UserAvatar>
        <svg width="61" height="62" fill="#efede8">
          <use href={`${sprite}#user`} />
        </svg>
      </UserAvatar>
      <NameContainer>Anna Rybachok</NameContainer>
      <UserInscription>User</UserInscription>
      <InformationContainer>
        <CaloriesContainer>
          <ImageContainer>
            <svg width="20" height="20" fill="#efede8">
              <use href={`${sprite}#food`} />
            </svg>
          </ImageContainer>
          <InformationText>Daily calorie intake</InformationText>
          <ActiveDataCalories>{bmr}</ActiveDataCalories>
        </CaloriesContainer>
        <ActivityContainer>
          <ActivityStaticInfoContainer>
            <ImageContainer>
              <svg width="20" height="20" fill="#efede8">
                <use href={`${sprite}#dumbbell`} />
              </svg>
            </ImageContainer>
            <InformationText>Daily physical activity</InformationText>
          </ActivityStaticInfoContainer>

          <ActiveDataMinutes>{dailyActivity} min</ActiveDataMinutes>
        </ActivityContainer>
      </InformationContainer>

      <NoticeContainer>
        <Notice
          notice={
            'We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.'
          }
        ></Notice>
      </NoticeContainer>
      <LogoutContainer>
        <Logout />
      </LogoutContainer>
    </UserCardContainer>
  );
};

export default UserCard;
