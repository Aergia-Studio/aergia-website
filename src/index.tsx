import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/common/layout/MainLayout'
import Home from './pages/Home'
import Games from './pages/Games'
import Animations from './pages/Animations'
import Studio from './pages/Studio'
import Contact from './pages/Contact'
import { Sparkles } from 'lucide-react'

<Sparkles size={32} className="glow" color="var(--color-accent)" />


export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'games', element: <Games /> },
        { path: 'animations', element: <Animations /> },
        { path: 'studio', element: <Studio /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
)
