import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { WrapperLayout } from './Layout.styled';

export const Layout = () => {
  return (
    <WrapperLayout>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3700} position="top-center" />
    </WrapperLayout>
  );
};
