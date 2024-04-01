import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { PATH_PAGES, Preloader } from '@/shared'
import {
  ControlPage,
  HomePage,
  HumidityPage,
  LightingPage,
  MainLayout,
  ProgramSelection,
  SolutionUnitPage,
  TemperaturePage,
} from './routes'

export const appRouter = () =>
  createBrowserRouter([
    {
      element: (
        <Suspense fallback={<Preloader />}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          path: PATH_PAGES.main,
          element: <HomePage />,
        },
        {
          path: PATH_PAGES.temperature,
          element: <TemperaturePage />,
        },
        {
          path: PATH_PAGES.control,
          element: <ControlPage />,
        },
        {
          path: PATH_PAGES.humidity,
          element: <HumidityPage />,
        },
        {
          path: PATH_PAGES.lighting,
          element: <LightingPage />,
        },
        {
          path: PATH_PAGES.programSelection,
          element: <ProgramSelection />,
        },
        {
          path: PATH_PAGES.solutionUnit,
          element: <SolutionUnitPage />,
        },
      ],
    },
  ])
