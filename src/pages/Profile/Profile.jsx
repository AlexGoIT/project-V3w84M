import {
  Container,
  Wrapper,
  WrapperContent,
  WrapperForm,
} from './Profile.styled';
import TitlePage from 'components/TitlePage';
<<<<<<< Updated upstream
=======

import UserCard from './UserCard/UserCard';
>>>>>>> Stashed changes

import UserForm from 'components/UserForm';


const Profile = () => {
  return (
    <Container>
      <TitlePage title="Profile Settings" />
<<<<<<< Updated upstream
    </Container>
=======
      <WrapperContent>
  <div>
    <Wrapper>
    </Wrapper>
    <UserCard/>
  </div>
  <WrapperForm>
    <UserForm />
  </WrapperForm>
</WrapperContent>
</Container> 
>>>>>>> Stashed changes
  );
  };
export default Profile;