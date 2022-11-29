import { Todo } from '@/interfaces/Todos'
import style from './Card.module.css'
import { Switch } from '../Switch'

interface Props {
  todo: Todo
}

export const Card = ({ todo }: Props) => {
  return (
    <article className={style.card}>
      <h2 className={style.card__title} title={todo.title}>
        {todo.title}
      </h2>
      <Switch id={todo.id} done={todo.done} />
    </article>
  )
}
