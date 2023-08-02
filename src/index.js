import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Map, { } from './components/Map';
import App from './containers/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Map />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
