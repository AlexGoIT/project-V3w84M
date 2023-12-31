import {
  UserCardContainer,
  NameContainer,
  UserInscription,
  InformationContainer,
  InformationText,
  NoticeContainer,
  UserAvatar,
  LogoutContainer,
  AddAvatarButton,
  InformationCard,
  InformationCounter,
} from './UserCard.styled';

import Logout from 'components/Logout/Logout';
import Notice from 'components/Notice';
import sprite from 'assets/images/sprite.svg';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalculate } from 'redux/api/apiOperations';
import { selectCalculate } from 'redux/api/apiSelectors';
import { selectUser } from 'redux/auth/authSelectors';
import { Notify } from 'notiflix';
import { updateAvatar } from 'redux/auth/usersOperations';

const UserCard = () => {
  const dispatch = useDispatch();
  const calculate = useSelector(selectCalculate);
  const user = useSelector(selectUser);
  const fileInput = useRef(null);

  useEffect(() => {
    dispatch(fetchCalculate());
  }, [dispatch]);

  const uploadAvatar = e => {
    const file = e.target.files[0];

    if (file) {
      const validFileExtension = ['jpg', 'jpeg'].some(
        ext => ext === file.name.split('.')[1]
      );

      if (!validFileExtension) {
        Notify.failure(
          "Invalid file extension. Only '.jpeg' and '.jpg' files are allowed."
        );
        return;
      }

      const formData = new FormData();
      formData.append('avatar', file, file.name);

      dispatch(updateAvatar(formData));
    }
  };

  const handleClick = () => {
    fileInput.current.click();
  };

  const dailyActivity = calculate.dailyActivity ? calculate.dailyActivity : 0;
  const bmr = calculate.BMR ? calculate.BMR : 0;

  return (
    <UserCardContainer>
      <UserAvatar>
        {user.avatarURL ? (
          <img src={user.avatarURL} alt="avatar" />
        ) : (
          <svg width="61" height="62" fill="#efede8">
            <use href={`${sprite}#user`} />
          </svg>
        )}

        <label>
          <input
            type="file"
            hidden
            onChange={uploadAvatar}
            ref={fileInput}
            accept=".jpg, .jpeg"
          />
        </label>
        <AddAvatarButton onClick={handleClick}>
          <svg>
            <use href={`${sprite}#add`} />
          </svg>
        </AddAvatarButton>
      </UserAvatar>
      <NameContainer>{user.name}</NameContainer>
      <UserInscription>{user.email}</UserInscription>
      <InformationContainer>
        <InformationCard>
          <InformationText>
            <svg width="20" height="20" fill="#efede8">
              <use href={`${sprite}#food`} />
            </svg>
            Daily calorie intake
          </InformationText>
          <InformationCounter>{bmr}</InformationCounter>
        </InformationCard>
        <InformationCard>
          <InformationText>
            <svg width="20" height="20" fill="#efede8">
              <use href={`${sprite}#dumbbell`} />
            </svg>
            Daily physical activity
          </InformationText>
          <InformationCounter>{dailyActivity} min</InformationCounter>
        </InformationCard>
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
