import Container from 'components/Container';
import Logo from 'components/Logo';
import Slogan from 'components/Slogan';
import WelcomeNavigation from 'components/WelcomeNavigation';

import { WelcomeWrapper } from './Welcome.styled';
import WelcomeStatistics from 'components/WelcomeStatistics';

// Temporary
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchExercises } from 'redux/exercises/exercisesOperations';
import { fetchCategories } from 'redux/categories/categoriesOperation';
//

const Welcome = () => {
  // Temporary
  const dispatch = useDispatch();
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }

    dispatch(fetchCategories());
    dispatch(fetchExercises());
  }, [dispatch]);
  //

  return (
    <Container>
      <Logo iconColor="#e6533c" />
      <WelcomeWrapper>
        <Slogan />
        <WelcomeNavigation />
      </WelcomeWrapper>
      <WelcomeStatistics />
    </Container>
  );
};

export default Welcome;
