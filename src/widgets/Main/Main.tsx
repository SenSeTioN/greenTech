import { FC, ReactNode } from 'react'
import { Wrapper } from '../../shared'
import styles from './Main.module.scss'

type TMainProps = {
  children: ReactNode
}

export const Main: FC<TMainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Wrapper size='l'>{children}</Wrapper>
    </main>
  )
}
