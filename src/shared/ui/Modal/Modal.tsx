import classNames from 'classnames'
import { FC, ReactElement, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Wrapper } from '..'
import styles from './Modal.module.scss'

interface IModal {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  children: ReactElement
  className?: string
  position?: 'center' | 'free'
}

export const Modal: FC<IModal> = ({
  isOpen,
  setIsOpen,
  children,
  className,
  position = 'center',
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as HTMLDivElement)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick)
      }
    }
  }, [modalRef, isOpen])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress)
      return () => {
        document.removeEventListener('keydown', handleKeyPress)
      }
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div
      className={classNames(styles.backdrop, {
        [styles[`backdrop_${position}`]]: position,
      })}>
      <Wrapper size='l'>
        <div className={styles.relativeContainer}>
          <div
            ref={modalRef}
            className={classNames(styles.modal, {
              [styles[`modal_${position}`]]: position,
              [className as string]: className,
            })}>
            {children}
          </div>
        </div>
      </Wrapper>
    </div>,
    document.querySelector('#modal-root' || 'body')!
  )
}

Modal.displayName = 'Modal'
