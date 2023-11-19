import { ProfilerWrapper, WrapperContent, WrapperForm } from './Profile.styled';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';
import Container from 'components/Container';
import TitlePage from 'components/TitlePage';

const Profile = () => {
  return (    
    <ProfilerWrapper>
      <Container>
      <TitlePage title="ProfileSettings" />
      <WrapperContent>
        <UserCard />
        <WrapperForm>
          <UserForm />
        </WrapperForm>
      </WrapperContent>
    </Container>
    </ProfilerWrapper>
  );
};
export default Profile;
