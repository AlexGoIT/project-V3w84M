import { ProfilerWrapper, WrapperContent, WrapperForm } from './Profile.styled';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';
import Container from 'components/Container';
import TitlePage from 'components/TitlePage';

const Profile = () => {
  return (
    <Container>
      <ProfilerWrapper>
        <TitlePage title="ProfileSettings" />
        <WrapperContent>
          <UserCard />
          <WrapperForm>
            <UserForm />
          </WrapperForm>
        </WrapperContent>
      </ProfilerWrapper>
    </Container>
  );
};
export default Profile;
