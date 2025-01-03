import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';
import General from './pages/General.tsx';
import { dummyUser } from './data/userExample.ts';
import TaskPage from './pages/TaskPage.tsx';
import Tracking from './pages/Tracking.tsx';
import Settings from './pages/Settings.tsx';
import ChildofTaskPage from './components/ChildOfTaskPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <Navigate to="/general" replace/>
      },
      {
        path: "/general",
        element: <General name={dummyUser.name} />,
      },
      {
        path: "/task",
        element: <TaskPage />,
      },
      {
        path: "/tracking",
        element: <Tracking />,
        children: [
          {
            path: "/tracking/:id",
            element: <ChildofTaskPage />,
          },
        ],
      },
      {
        path: "/settings",
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
