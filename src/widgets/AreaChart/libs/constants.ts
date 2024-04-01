import { SwitchDate } from './types'

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
} as const

export const getConfig = (date: string[]) => {
  return {
    labels: date,
    datasets: [
      {
        fill: true,
        label: 'Temperature (°C)',
        data: date.map(() => Number((Math.random() * (30 - 18) + 18).toFixed(1))),
        borderColor: 'rgb(119, 229, 195)',
        backgroundColor: 'rgb(73, 151, 125)',
      },
    ],
  }
}

export const NAV_LINK = [
  {
    id: 1,
    title: 'День',
    switchDate: SwitchDate.Day,
  },
  {
    id: 2,
    title: 'Неделя',
    switchDate: SwitchDate.Week,
  },
  {
    id: 3,
    title: 'Месяц',
    switchDate: SwitchDate.Month,
  },
] as const
