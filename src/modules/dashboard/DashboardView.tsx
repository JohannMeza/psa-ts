import { Route, Routes } from 'react-router-dom';
import { CajaView } from './caja/CajaView';
import { FC, PropsWithChildren } from 'react';
import { Layout } from '@src/shared/layout/layout/Layout';
import { Adminview } from './admin/AdminView';
import { HomeView } from './home/HomeAuth';
// import { useValidateToken } from './dashboard-hooks';
import { DeliveryView } from './delivery/DeliveryView';

export const DashboardView: FC<PropsWithChildren> = () => {
  console.log();
  // useValidateToken();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/caja" element={<CajaView />} />
        <Route path="/delivery" element={<DeliveryView />} />
        <Route path="/admin" element={<Adminview />} />
      </Routes>
    </Layout>
  );
};
