import { Sensors } from '@/features'
import { Modal } from '@/shared'
import { AreaChart } from '@/widgets'
import { useState } from 'react'
import styles from './TemperaturePage.module.scss'
import bgImage from '../../shared/assets/img/bg-tempPage.png'

const TemperaturePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [clickedSensor, setClickedSensor] = useState<number>(1)

  const handleClick = (sensorIndex: number) => {
    setIsOpen(true)
    setClickedSensor(sensorIndex)
  }

  return (
    <main className={styles['main']}>
      <div className={styles['wrapper']}>
        <Sensors onClick={handleClick} />
      </div>
      <img src={`${bgImage}`} alt='bg-tempPage' className={styles['body-img']} />

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <AreaChart sensorIndex={clickedSensor} />
      </Modal>
    </main>
  )
}

export default TemperaturePage
