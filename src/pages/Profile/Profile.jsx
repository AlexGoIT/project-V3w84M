import { WrapperContent, WrapperForm } from './Profile.styled';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';
import { ContainerWrapper } from 'components/Container/Container.styled';
import TitlePage from 'components/TitlePage';

const Profile = () => {
  return (
    <ContainerWrapper>
      <TitlePage title="ProfileSettings" />
      <WrapperContent>
        <UserCard />
        <WrapperForm>
          <UserForm />
        </WrapperForm>
      </WrapperContent>
    </ContainerWrapper>
  );
};
export default Profile;
