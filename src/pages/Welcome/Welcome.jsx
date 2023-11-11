import Container from 'components/Container';
import Logo from 'components/Logo';
import Slogan from 'components/Slogan';
import WelcomeNavigation from 'components/WelcomeNavigation';

import { WelcomeWrapper } from './Welcome.styled';
import WelcomeStatistics from 'components/StatisticsInfo';

// Temporary
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import {
  // fetchCategories,
  // fetchExercises,
  // fetchFilters,
  fetchProducts,
} from 'redux/api/apiOperations';
//

const Welcome = () => {
  console.log('WelcomePage:', 'render');
  // Temporary
  const dispatch = useDispatch();
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }

    console.log('WelcomePage:', 'useEffect 2 render');

    // Categories
    // dispatch(fetchCategories());

    // params - bodypart, muscles,  equipment | pagination - page, limit (default {page: 1, limit: 20})
    // dispatch(fetchExercises());

    // Filters
    // dispatch(fetchFilters()); // Повертає всі фільтри
    // dispatch(fetchFilters({ filter: 'Body parts' })); // Повертає список фільтрів за полем filter
    // dispatch(fetchFilters({ name: 'Back' })); // Повертає список фільтрів за полем name
    // dispatch(fetchFilters({ filter: 'Body parts', name: 'Back' })); // Повертає список фільтрів за полем filter і name

    // Products
    // params - title, category, recomended | pagination - page, limit (default {page: 1, limit: 20})
    dispatch(fetchProducts());
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
