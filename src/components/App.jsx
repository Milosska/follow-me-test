import 'modern-normalize';
import { GlobalStyles } from './GlobalStyles';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalLayout from './GlobalLayout/GlobalLayout';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const TweetsPage = lazy(() => import('pages/TweetsPage/TweetsPage'));

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<GlobalLayout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<TweetsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
