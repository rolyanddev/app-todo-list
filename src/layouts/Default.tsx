import { Outlet } from 'react-router-dom'
import { TheHeader } from '@/components/TheHeader'
import styles from './Default.module.css'

export const DefaultLayout = () => {
  return (
    <>
      <TheHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
