import Container from 'components/Container';
import TitlePage from 'components/TitlePage';
import { ExercisesCategories } from 'components/ExercisesCategories/ExercisesCategories';
//import { ExerciseCardItem } from 'components/ExercisesItem/ExercisesItem';
import { ExercisesSubcategoriesList } from 'components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';

import {
  ExercisesWrapper,
  ContentDiv,
  WrapperTitleCategoriesDiv,
} from './Exercises.styled';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, selectIsLoading } from 'redux/api/apiSelectors';
import { useEffect } from 'react';
import { fetchFilters } from 'redux/api/apiOperations';
import Loader from 'components/Loader';
import ExercisesList from 'components/ExercisesList';
// import Back from 'components/exercises/Back/Back';

const exercisesCategories = {
  bodyparts: 'Body parts',
  muscles: 'Muscles',
  equipment: 'Equipment',
};

const Exercises = () => {
  const { pathname } = useLocation();
  // const isExercisesList = pathname.split('/').pop() === 'list';
  const page = pathname.split('/')[2];
  const categoryName = exercisesCategories[page];
  const dispatch = useDispatch();
  const filterResult = useSelector(selectFilters).result;
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  if (pathname === '/exercises') {
    navigate('/exercises/bodyparts');
  }

  useEffect(() => {
    dispatch(fetchFilters({ filter: categoryName }));
  }, [categoryName, dispatch]);

  return (
    <ExercisesWrapper>
      <Container>
        {isLoading && <Loader />}
        {/* {isExercisesList && <Back />} */}
        <ContentDiv>
          <WrapperTitleCategoriesDiv>
            <TitlePage title="Exercises" />
            <ExercisesCategories />
          </WrapperTitleCategoriesDiv>

          <ExercisesSubcategoriesList />
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {filterResult &&
              filterResult.map(el => {
                return (
                  <li key={el._id}>
                    <Link to={page + '/' + el.name}>
                      <img
                        src={el.imgURL}
                        alt={el.name}
                        style={{ width: '250px' }}
                      />
                    </Link>
                  </li>
                );
              })}
          </ul>
          <ExercisesList />
        </ContentDiv>
      </Container>
    </ExercisesWrapper>
  );
};

export default Exercises;
