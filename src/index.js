import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App.js';
import ErrorPage from './components/ErrorPage.js';
import DisplayHero from './components/DisplayHero';
import './assets/index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'hero/:heroId',
                element: <DisplayHero />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);