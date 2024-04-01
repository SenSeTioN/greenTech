import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import { Footer, Main } from '@/widgets'

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  )
}

export default MainLayout
