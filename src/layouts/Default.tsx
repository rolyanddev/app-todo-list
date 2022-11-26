import { Outlet } from 'react-router-dom'
import { TheHeader } from '@/components/TheHeader'

export const DefaultLayout = () => {
  return (
    <>
      <TheHeader />
      <Outlet />
    </>
  )
}
