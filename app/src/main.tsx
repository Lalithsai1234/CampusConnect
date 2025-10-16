import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import HomePage from './pages/HomePage.tsx'
import EventsPage from './pages/EventsPage.tsx'
import CollegesPage from './pages/CollegesPage.tsx'
import CollegeProfilePage from './pages/CollegeProfilePage.tsx'
import DashboardPage from './pages/DashboardPage.tsx'
import AuthHubPage from './pages/AuthHubPage.tsx'
import StudentLoginPage from './pages/auth/StudentLoginPage.tsx'
import StudentSignupPage from './pages/auth/StudentSignupPage.tsx'
import OrganizerLoginPage from './pages/auth/OrganizerLoginPage.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'colleges', element: <CollegesPage /> },
      { path: 'college/:collegeId', element: <CollegeProfilePage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'auth', element: <AuthHubPage /> },
      { path: 'auth/student/login', element: <StudentLoginPage /> },
      { path: 'auth/student/signup', element: <StudentSignupPage /> },
      { path: 'auth/organizer/login', element: <OrganizerLoginPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
