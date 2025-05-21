import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/styles/index.css';

import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/Details.jsx';
import Cart from './pages/CartPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { CartProvider } from './context/CartContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/details/:id', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
