import React from 'react';
import { DashboardLayout } from '../../layout/DashboardLayout';
import { Outlet } from 'react-router-dom';

export const UserScreen = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
