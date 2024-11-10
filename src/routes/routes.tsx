import { type FC, type PropsWithChildren } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthView } from '../modules/auth/AuthView';
import { DashboardView } from '@src/modules/dashboard/DashboardView';

export const IndexRouter: FC<PropsWithChildren> = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AuthView />} />
      <Route path="/dashboard/*" element={<DashboardView />} />
    </Routes>
  </Router>
);
