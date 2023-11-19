import {
  Container,
  ProfileTitle,
  WrapperContent,
  WrapperForm,
} from './Profile.styled';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';

const Profile = () => {
  return (
    <Container>
      <ProfileTitle>Profile Settings</ProfileTitle>
      <WrapperContent>
        <div>
          <UserCard />
        </div>
        <WrapperForm>
          <UserForm />
        </WrapperForm>
      </WrapperContent>
    </Container>
  );
};
export default Profile;
