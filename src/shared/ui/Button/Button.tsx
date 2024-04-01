import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface IButton {
  onClick?: () => void
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export const Button: FC<IButton> = ({
  onClick,
  className,
  children,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(styles.btn, className)}
      onClick={onClick}>
      {children}
    </button>
  )
}
