import Container from 'components/Container';
import TitlePage from 'components/TitlePage';
import UserCard from './UserCard/UserCard';

//
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { fetchCurrentUser } from 'redux/auth/authOperations';
// import { fetchCalculate } from 'redux/user/userOperations';
//

const Profile = () => {
  //
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCalculate());
    // dispatch(fetchCurrentUser());
  }, [dispatch]);
  //

  return (
    <Container>
      <TitlePage title="Profile Settings" />
      <UserCard></UserCard>
    </Container>
  );
};

export default Profile;
