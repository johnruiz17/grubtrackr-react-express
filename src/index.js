import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GoogleMap, { } from './components/GoogleMap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div id="map"><GoogleMap /></div>,
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
