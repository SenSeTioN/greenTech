import classNames from 'classnames'
import { FC } from 'react'
import styles from './Preloader.module.scss'

interface IProps {
  className?: string
}

export const Preloader: FC<IProps> = ({ className }) => {
  return (
    <div className={classNames(styles['preloader-container'], className)}>
      <div className={styles['preloader']} />
    </div>
  )
}
