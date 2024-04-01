import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

export const generateDate = (props: string): string[] => {
  switch (props) {
    case 'week':
      return Array.from({ length: 7 }, (_, i) =>
        moment()
          .subtract(i + 1, 'days')
          .format('DD.MM.YYYY')
      ).reverse()

    case 'month':
      return Array.from({ length: 16 }, (_, i) =>
        moment()
          .subtract(i === 0 ? 1 : i * 2, 'days')
          .format('DD.MM')
      ).reverse()

    default:
      return Array.from({ length: 2 }, (_, i) =>
        moment().subtract(i, 'days').format('DD.MM.YYYY')
      ).reverse()
  }
}

const randomTemp = () => {
  const maxTemp = 30
  const minTemp = 18
  return Number((Math.random() * (maxTemp - minTemp) + minTemp).toFixed(1))
}

const randomDeviation = (sensorIndex: number) => {
  const targetTemp = 23
  const randomTemperature = randomTemp()

  return {
    id: uuidv4(),
    sensorNumber: `Датчик ${sensorIndex}`,
    target: targetTemp,
    temperature: randomTemperature,
    deviation: Number(Math.abs(randomTemperature - targetTemp).toFixed(1)),
  }
}

export const generateData = (date: string[] | string, sensorIndex: number, switchDate: string) => {
  let count = -1

  if (switchDate === 'day') {
    return Array.from({ length: 144 }, (_, i) => {
      const minutes = ((i % 6) * 10).toString().padStart(2, '0')
      if (i % 6 === 0) count++

      return {
        date: date[0],
        time: `${count < 10 ? `0${count}` : count}:${minutes}`,
        ...randomDeviation(sensorIndex),
      }
    })
  }

  if (switchDate === 'week') {
    return Array.from({ length: 168 }, (_, i) => {
      const hours = (i % 24).toString().padStart(2, '0')
      if (i % 24 === 0) count++

      return {
        date: date[count],
        time: `${hours}:00`,
        ...randomDeviation(sensorIndex),
      }
    })
  }

  if (switchDate === 'month') {
    const dayMonth = Array.from({ length: 31 }, (_, i) =>
      moment().subtract(i, 'days').format('DD.MM.YYYY')
    ).reverse()

    return Array.from({ length: 120 }, (_, i) => {
      const hours = ((i % 4) * 6).toString().padStart(2, '0')
      if (i % 4 === 0) {
        count++
      }

      return {
        date: dayMonth[count],
        time: `${hours}:00`,
        ...randomDeviation(sensorIndex),
      }
    })
  }

  return []
}
