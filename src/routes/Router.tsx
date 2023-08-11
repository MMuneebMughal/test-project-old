import { Routes, Route } from 'react-router-dom';
// LAYOUT
import { FrontendLayout } from '@src/layouts/FrontendLayout';
// PAGES
import { Home } from '@src/pages/Home';
import { Shop } from '@src/pages/Shop';
import { Contact } from '@src/pages/Contact';
import { SingleProduct } from '@src/pages/SingleProduct';
import { Login } from '@src/pages/Login';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<FrontendLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='login' element={<Login />} />
        <Route path='shop/product/:productId' element={<SingleProduct />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};
