import { Link } from 'react-router-dom'

import styles from './TheHeader.module.css'
import reactLogo from '@/assets/react.svg'

export const TheHeader = () => {
  return (
    <header className={styles.theHeader}>
      <Link className={styles.theHeader__link} to="/">
        <img src={reactLogo} alt="react logo" width={50} height={50} />
      </Link>
      <ul className={styles.theHeader__linksItems}>
        <li>
          <Link className={styles.theHeader__link} to="/">
            All todos
          </Link>
        </li>
        <li>
          <Link className={styles.theHeader__link} to="/create-todo">
            Create todo
          </Link>
        </li>
      </ul>
    </header>
  )
}
