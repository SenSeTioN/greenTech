import { Sensor } from '@/entities'
import { Button, Text } from '@/shared'
import { Loader } from '@mantine/core'
import { useEffect, useState, type FC } from 'react'
import styles from './Sensors.module.scss'
import { SENSORS } from './constants'

type TSensorsProps = {
  onClick: (sensorIndex: number) => void
}

export const Sensors: FC<TSensorsProps> = ({ onClick }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSensorIndex = Math.floor(Math.random() * SENSORS.length)
      setIsButtonDisabled((prevState) => ({ ...prevState, [randomSensorIndex]: true }))
      setTimeout(() => {
        setIsButtonDisabled((prevState) => ({ ...prevState, [randomSensorIndex]: false }))
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {SENSORS.map((sensor, i) => (
        <div key={sensor.id}>
          <Button
            onClick={() => onClick(sensor.id)}
            disabled={isButtonDisabled[i]}
            className={styles.btn}>
            {isButtonDisabled[i] ? (
              <Loader color='blue' type='dots' />
            ) : (
              <>
                <Text tag='p'>{sensor.title}</Text>
                <Sensor />
              </>
            )}
          </Button>
        </div>
      ))}
    </>
  )
}
