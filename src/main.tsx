import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';
import General from './pages/General.tsx';
import { dummyUser } from './Data/userExample.ts';
import TaskPage from './pages/TaskPage.tsx';
import Tracking from './pages/Tracking.tsx';
import Settings from './pages/Settings.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <General name={dummyUser.name} />,
      },
      {
        path: "task",
        element: <TaskPage />,
      },
      {
        path: "tracking",
        element: <Tracking />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
