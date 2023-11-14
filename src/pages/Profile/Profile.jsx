import { Container, WrapperContent, WrapperForm } from './Profile.styled';
import TitlePage from 'components/TitlePage';
import UserCard from '../../components/UserCard/UserCard';

import UserForm from 'components/UserForm';
import { useState } from 'react';
import UserForm from '../../components/UserForm/UserForm';

const Profile = () => {
  const [avatar, setAvatar] = useState(null);

  const changeAvatar = file => {
    setAvatar(file);
  };

  return (
    <Container>
      <TitlePage title="Profile Settings" />
      <WrapperContent>
        <div>
          <UserCard changeAvatar={changeAvatar} />
        </div>
        <WrapperForm>
          <UserForm avatar={avatar} />
        </WrapperForm>
      </WrapperContent>
    </Container>
  );
};
export default Profile;
