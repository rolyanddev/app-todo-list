import { Link } from 'react-router-dom'
import reactLogo from '@/assets/react.svg'
import styles from './TheHeader.module.css'

interface Links {
  path: string
  linkName: string
}

const links: Links[] = [
  {
    path: '/',
    linkName: 'All todos'
  },
  {
    path: '/create-todo',
    linkName: 'Create todo'
  }
]

export const TheHeader = () => {
  return (
    <header className={styles.theHeader}>
      <Link className={styles.theHeader__link} to="/">
        <img src={reactLogo} alt="react logo" width={50} height={50} />
      </Link>
      <ul className={styles.theHeader__linksItems}>
        {links.map(({ path, linkName }) => (
          <li key={path}>
            <Link className={styles.theHeader__link} to={path}>
              {linkName}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
