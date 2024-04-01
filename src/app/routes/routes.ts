import { lazy } from 'react'

export const MainLayout = lazy(() => import('../layout/MainLayout'))
export const TemperaturePage = lazy(() => import('../../pages/TemperaturePage/TemperaturePage'))
export const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
export const ControlPage = lazy(() => import('../../pages/ControlPage/ControlPage'))
export const HumidityPage = lazy(() => import('../../pages/HumidityPage/HumidityPage'))
export const LightingPage = lazy(() => import('../../pages/LightingPage/LightingPage'))
export const ProgramSelection = lazy(() => import('../../pages/ProgramSelection/ProgramSelection'))
export const SolutionUnitPage = lazy(() => import('../../pages/SolutionUnitPage/SolutionUnitPage'))
