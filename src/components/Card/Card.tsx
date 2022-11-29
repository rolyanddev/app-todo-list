import { Todo } from '@/interfaces/Todos'
import style from './Card.module.css'
import { Switch } from '../Switch'

interface Props {
  todo: Todo
}

export const Card = ({ todo: { id, done, title } }: Props) => {
  return (
    <article className={style.card}>
      <h2 className={style.card__title} title={title}>
        {title}
      </h2>
      <Switch id={id} done={done} />
    </article>
  )
}
