import { Outlet } from 'react-router-dom';
import { Navbar } from '@src/layouts/Navbar/Navbar';

export const FrontendLayout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
