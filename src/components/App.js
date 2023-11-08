import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';

const WelcomePage = lazy(() => import('pages/Welcome'));
const SignUpPage = lazy(() => import('pages/SignUp'));
const SignInPage = lazy(() => import('pages/SignIn'));
const ProfilePage = lazy(() => import('pages/Profile'));
const DiaryPage = lazy(() => import('pages/Diary'));
const ProductsPage = lazy(() => import('pages/Products'));
const ExercisesPage = lazy(() => import('pages/Exercises'));
// const NotFoundPage = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/welcome" />} />
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="exercises" element={<ExercisesPage />} />
          {/* <Route path="notfound" element={<NotFoundPage />} /> */}
        </Route>
        {/* <Route path="*" element={<Navigate to="/notfound" />} /> */}
      </Routes>
    </>
  );
};

export default App;
