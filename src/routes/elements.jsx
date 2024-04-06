import { Suspense, lazy } from 'react';
import LoadingScreen from '../components/LoadingScreen';
// components
// import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));
export const MyTask = Loadable(lazy(() => import('../pages/MyTask')));