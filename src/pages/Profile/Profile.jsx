import {
  Container,
  WrapperContent,
  WrapperForm,
} from './Profile.styled';
import TitlePage from 'components/TitlePage';

import UserForm from 'components/UserForm';


import UserCard from './UserCard/UserCard';


const Profile = () => {
  return (
    <Container>
      <TitlePage title="Profile Settings" />
      <WrapperContent>
  <div>
    <UserCard/>
  </div>
  <WrapperForm>
    <UserForm />
  </WrapperForm>
</WrapperContent>
</Container> 
  );
  };
export default Profile;