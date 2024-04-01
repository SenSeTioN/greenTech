import classnames from 'classnames'
import { FC, ReactNode } from 'react'
import styles from './Wrapper.module.scss'

interface TWrapperProps {
  children?: ReactNode
  size?: 'm' | 'l'
  className?: string
}

export const Wrapper: FC<TWrapperProps> = ({ children, size = 'm', className }) => {
  return (
    <div className={classnames(className, styles.wrapper, styles[`wrapper_${size}`])}>
      {children}
    </div>
  )
}
