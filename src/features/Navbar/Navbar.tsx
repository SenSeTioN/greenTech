import { Text } from '@/shared'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { NAVBAR_TITLE } from './constants'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {NAVBAR_TITLE.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) => (isActive ? `${styles['active-link']}` : '')}>
          <Text tag='h3' weight='regular' className={styles.title}>
            {item.title}
          </Text>
        </NavLink>
      ))}
    </nav>
  )
}
