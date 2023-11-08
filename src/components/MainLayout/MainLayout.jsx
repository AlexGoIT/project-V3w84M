import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <>
      <header></header>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Layout>
      <footer></footer>
    </>
  );
};

export default MainLayout;
