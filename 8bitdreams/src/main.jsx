import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/styles/index.css';

import App from './App.jsx';
import NotFound from '../src/pages/NotFound.jsx';
import ProductDetails from '../src/pages/Details.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/details/:id', element: <ProductDetails /> },
  { path: '*', element: <NotFound /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
