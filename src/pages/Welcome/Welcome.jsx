import Container from 'components/Container';
import Logo from 'components/Logo';
import Slogan from 'components/Slogan';
import WelcomeNavigation from 'components/WelcomeNavigation';

import { WelcomeWrapper } from './Welcome.styled';

//
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchCategories } from 'redux/categories/categoriesOperation';
import { selectCategories } from 'redux/categories/categoriesSelectors';
//
const Welcome = () => {
  //
  const ref = useRef(true);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  console.log('Welcome', categories);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }

    dispatch(fetchCategories());
  }, [dispatch]);
  //

  return (
    <Container>
      <Logo iconColor="#e6533c" />
      <WelcomeWrapper>
        <Slogan />
        <WelcomeNavigation />
      </WelcomeWrapper>
    </Container>
  );
};

export default Welcome;
