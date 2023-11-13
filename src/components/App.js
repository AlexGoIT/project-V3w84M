import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import MainLayout from 'components/MainLayout';
import { PrivateRoute, PublicRoute } from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { currentUser } from 'redux/auth/authOperations';

const WelcomePage = lazy(() => import('pages/Welcome'));
const SignUpPage = lazy(() => import('pages/SignUp'));
const SignInPage = lazy(() => import('pages/SignIn'));
const ProfilePage = lazy(() => import('pages/Profile'));
const DiaryPage = lazy(() => import('pages/Diary'));
const ProductsPage = lazy(() => import('pages/Products'));
const ExercisesPage = lazy(() => import('pages/Exercises'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const redirectLink = user.profileDataFill ? '/diary' : '/profile';

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/welcome" />} />

          <Route
            path="welcome"
            element={
              <PublicRoute redirectTo={redirectLink} restricted>
                <WelcomePage />
              </PublicRoute>
            }
          />

          <Route
            path="signup"
            element={
              <PublicRoute redirectTo={redirectLink} restricted>
                <SignUpPage />
              </PublicRoute>
            }
          />

          <Route
            path="signin"
            element={
              <PublicRoute redirectTo={redirectLink} restricted>
                <SignInPage />
              </PublicRoute>
            }
          />

          <Route
            path="profile"
            element={
              <PrivateRoute redirectTo="/welcome">
                <ProfilePage />
              </PrivateRoute>
            }
          />

          <Route
            path="diary"
            element={
              <PrivateRoute redirectTo="/welcome">
                <DiaryPage />
              </PrivateRoute>
            }
          />

          <Route
            path="products"
            element={
              <PrivateRoute redirectTo="/welcome">
                <ProductsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="exercises"
            element={
              <PrivateRoute redirectTo="/welcome">
                <ExercisesPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};

export default App;
