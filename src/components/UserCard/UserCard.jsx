import {
  UserCardContainer,
  AvatarInput,
  AvatarLabel,
  NameContainer,
  UserInscription,
  InformationContainer,
  InformationText,
  CaloriesContainer,
  ActiveDataCalories,
  ActiveDataMinutes,
  ActivityContainer,
  ImageContainer,
  // CaloriesStaticInfoContainer,
  ActivityStaticInfoContainer,
  NoticeContainer,
  UserAvatar,
  LogoutContainer,
  AddAvatarButton,
} from './UserCard.styled';

import Logout from 'components/Logout/Logout';
import Notice from 'components/Notice';
import sprite from 'assets/images/sprite.svg';

//
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalculate } from 'redux/api/apiOperations';
import { selectCalculate } from 'redux/api/apiSelectors';
import { selectUser } from 'redux/auth/authSelectors';
//

const UserCard = ({ message, changeAvatar }) => {
  //
  const dispatch = useDispatch();
  const calculate = useSelector(selectCalculate);
  const user = useSelector(selectUser);
  const fileInput = useRef(null);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    dispatch(fetchCalculate());
  }, [dispatch]);
  //

  const uploadAvatar = e => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImageSrc(fileReader.result);
      };
      fileReader.readAsDataURL(file);
      changeAvatar(file);
    }
  };

  const handleClick = () => {
    fileInput.current.click();
  };

  const dailyActivity = calculate.dailyActivity ? calculate.dailyActivity : 0;
  const bmr = calculate.BMR ? calculate.BMR : 0;

  return (
    <UserCardContainer style={{ color: 'white' }}>
      <UserAvatar>
        {imageSrc ? (
          <img src={imageSrc} alt="avatar" />
        ) : (
          <svg width="61" height="62" fill="#efede8">
            <use href={`${sprite}#user`} />
          </svg>
        )}
        <AvatarLabel>
          <AvatarInput
            type="file"
            hidden
            onChange={uploadAvatar}
            ref={fileInput}
            accept=".jpg, .jpeg"
          />
        </AvatarLabel>
        <AddAvatarButton onClick={handleClick}>
          <svg width="32" height="32" fill="#efede8">
            <use href={`${sprite}#add`} />
          </svg>
        </AddAvatarButton>
      </UserAvatar>
      <NameContainer>{user.name}</NameContainer>
      <UserInscription>User</UserInscription>
      <InformationContainer>
        <CaloriesContainer>
          {/* <CaloriesStaticInfoContainer> */}
          <ImageContainer>
            <svg width="20" height="20" fill="#efede8">
              <use href={`${sprite}#food`} />
            </svg>
          </ImageContainer>
          <InformationText>Daily calorie intake</InformationText>
          <ActiveDataCalories>{bmr}</ActiveDataCalories>
          {/* </CaloriesStaticInfoContainer> */}
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
