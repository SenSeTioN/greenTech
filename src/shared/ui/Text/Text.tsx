import classNames from 'classnames'
import { createElement, FC, ReactNode } from 'react'
import styles from './Text.module.scss'

interface ITextProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: ReactNode
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'ml' | 'xss' | 'sxs'
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'
  className?: string
}

export const Text: FC<ITextProps> = ({ tag, children, weight, className, size }) => {
  const Text = ({ ...props }) => createElement(tag, { ...props }, children)

  return (
    <Text
      className={classNames(styles.text, styles[`text_${tag}`], {
        [styles[`text_${weight}`]]: weight,
        [styles[`text_${size}`]]: size,
        [className as string]: className,
      })}>
      {children}
    </Text>
  )
}
