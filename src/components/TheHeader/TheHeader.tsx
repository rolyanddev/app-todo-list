import { Link } from 'react-router-dom'

import styles from './TheHeader.module.css'
import reactLogo from '@/assets/react.svg'

export const TheHeader = () => {
  return (
    <header className={styles.theHeader}>
      <img src={reactLogo} alt="react logo" width={50} height={50} />
      <ul className={styles.linksItems}>
        <li className={styles.linkItem}>
          <Link className={styles.link} to="/">
            All todos
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link className={styles.link} to="/">
            Create Todo
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link className={styles.link} to="/about">
            About
          </Link>
        </li>
      </ul>
    </header>
  )
}
