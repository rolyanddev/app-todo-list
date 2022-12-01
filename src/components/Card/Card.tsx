import { Todo } from '@/interfaces/Todos'
import style from './Card.module.css'
import { Switch } from '../Switch'
import { deleteTodo } from '@/services'

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
      <button
        title="Delete todo"
        onClick={() => deleteTodo(id)}
        className={style.card__buttonDelete}
      >
        X
      </button>
    </article>
  )
}
