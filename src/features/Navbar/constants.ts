import { PATH_PAGES } from '@/shared'

type TNavbar = {
  id: number
  title: string
  path: string
}

export const NAVBAR_TITLE: TNavbar[] = [
  {
    id: 1,
    title: 'Главная',
    path: `${PATH_PAGES.main}`,
  },
  {
    id: 2,
    title: 'Выбор программы',
    path: `${PATH_PAGES.programSelection}`,
  },
  {
    id: 3,
    title: 'Управление',
    path: `${PATH_PAGES.control}`,
  },
  {
    id: 4,
    title: 'Растворный узел',
    path: `${PATH_PAGES.solutionUnit}`,
  },
  {
    id: 5,
    title: 'Температура',
    path: `${PATH_PAGES.temperature}`,
  },
  {
    id: 6,
    title: 'Освещение',
    path: `${PATH_PAGES.lighting}`,
  },
  {
    id: 7,
    title: 'Влажность и CO2',
    path: `${PATH_PAGES.humidity}`,
  },
]
