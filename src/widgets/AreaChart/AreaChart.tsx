import { TableTemp } from '@/entities'
import { NavLink } from '@mantine/core'
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { useState, type FC } from 'react'
import { Line } from 'react-chartjs-2'
import styles from './AreaChart.module.scss'
import { NAV_LINK, getConfig, options } from './libs/constants'
import { generateData, generateDate } from './libs/utils'
import { SwitchDate } from './libs/types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

type TProps = {
  sensorIndex: number
}

export const AreaChart: FC<TProps> = ({ sensorIndex }) => {
  const [switchDate, setSwitchDate] = useState<SwitchDate>(SwitchDate.Week)
  const [active, setActive] = useState(1)
  const date: string[] = generateDate(switchDate)
  const data = generateData(date, sensorIndex, switchDate)

  return (
    <div className={styles['container']}>
      <div className={styles['wrapper-links']}>
        {NAV_LINK.map((item, i) => (
          <NavLink
            href='#'
            key={item.id}
            active={i === active}
            label={item.title}
            className={styles['links']}
            autoContrast
            color='#005757'
            variant='filled'
            onClick={() => {
              setActive(i)
              setSwitchDate(item.switchDate)
              generateData(date, sensorIndex, switchDate)
            }}></NavLink>
        ))}
      </div>
      <div className={styles['canvas-charts']}>
        <Line options={options} data={getConfig(date)} height={200} width={800} />
      </div>
      <div className={styles['table-container']}>
        <TableTemp data={data} />
      </div>
    </div>
  )
}
