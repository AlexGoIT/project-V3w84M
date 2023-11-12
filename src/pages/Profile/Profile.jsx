import Container from 'components/Container';
import TitlePage from 'components/TitlePage';
import UserCard from './UserCard/UserCard';

const Profile = () => {
  return (
    <Container>
      <TitlePage title="Profile Settings" />
      <UserCard></UserCard>
    </Container>
  );
};

export default Profile;
