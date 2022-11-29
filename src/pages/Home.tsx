import style from './Home.module.css'
import { Cards } from '@/components/Cards'

export const Home = () => {
  return (
    <>
      <h1 className={style.home__title}>All todos!</h1>
      <Cards />
    </>
  )
}
