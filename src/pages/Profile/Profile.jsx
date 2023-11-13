import { Container, WrapperContent, WrapperForm } from './Profile.styled';
import TitlePage from 'components/TitlePage';
import UserCard from '../../components/UserCard/UserCard';

import UserForm from 'components/UserForm';

const Profile = () => {
  return (
    <Container>
      <TitlePage title="Profile Settings" />
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
