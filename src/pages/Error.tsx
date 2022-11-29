import { Link, useLocation } from 'react-router-dom'
import style from './Error.module.css'

export const Error = () => {
  const { pathname } = useLocation()
  return (
    <section className={style.error}>
      <h1 className={style.error__title}>
        Error, the page with path:({pathname}) not found
      </h1>
      <Link className={style.error__button} to="/">
        Go to home
      </Link>
    </section>
  )
}
