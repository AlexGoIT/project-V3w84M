import Container from 'components/Container';
import TitlePage from 'components/TitlePage';
import { ExercisesCategories } from 'components/ExercisesCategories/ExercisesCategories';
import ExercisesSubcategoriesList from 'components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import sprite from '../../assets/images/sprite.svg';

import {
  ExercisesWrapper,
  ContentDiv,
  WrapperTitleCategoriesDiv,
  BackButton,
} from './Exercises.styled';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, selectIsLoading } from 'redux/api/apiSelectors';
import { useEffect, useState } from 'react';
import { fetchExercises, fetchFilters } from 'redux/api/apiOperations';
import Loader from 'components/Loader';
import ExercisesList from 'components/ExercisesList';

const exercisesCategories = {
  bodyparts: 'Body parts',
  muscles: 'Muscles',
  equipment: 'Equipment',
};

const exercisesFilter = {
  bodyparts: 'bodypart',
  muscles: 'muscles',
  equipment: 'equipment',
};

const Exercises = () => {
  const { pathname } = useLocation();
  const page = pathname.split('/')[2];
  const categoryName = exercisesCategories[page];
  const [category, setCategory] = useState(
    localStorage.getItem('category') ?? 'Body parts'
  );
  const [toggleList, setToggleList] = useState(false);
  const [subCategory, setSubcategory] = useState('');
  const dispatch = useDispatch();
  const filterResult = useSelector(selectFilters).result;
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/exercises') {
      navigate('/exercises/bodyparts');
    }
  }, [navigate, pathname]);

  useEffect(() => {
    localStorage.setItem('category', category);
    setCategory(categoryName);
  }, [category, categoryName]);

  useEffect(() => {
    dispatch(fetchFilters({ filter: category }));
  }, [category, dispatch]);

  const handleCategoryClick = name => {
    setSubcategory(name);
    dispatch(fetchExercises({ [exercisesFilter[page]]: name }));
    setToggleList(true);
  };

  const capitalizeString = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ExercisesWrapper>
      <Container>
        {isLoading && <Loader />}
        <ContentDiv>
          {toggleList && (
            <BackButton
              type="button"
              onClick={() => setToggleList(prev => !prev)}
            >
              <svg>
                <use href={`${sprite}#arrow_gray`}></use>
              </svg>
              Back
            </BackButton>
          )}
          <WrapperTitleCategoriesDiv>
            <TitlePage
              title={toggleList ? capitalizeString(subCategory) : 'Exercises'}
            />
            <ExercisesCategories />
          </WrapperTitleCategoriesDiv>
          {filterResult && !toggleList && (
            <ExercisesSubcategoriesList handleClick={handleCategoryClick} />
          )}
          {toggleList && <ExercisesList />}
        </ContentDiv>
      </Container>
    </ExercisesWrapper>
  );
};

export default Exercises;
