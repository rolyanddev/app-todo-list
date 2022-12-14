import { useState } from 'react'
import { Todo } from '@/interfaces/Todos'
import style from './Switch.module.css'
import { updateTodo } from '@/services'

type Props = Pick<Todo, 'id' | 'done'>

export const Switch = ({ id, done }: Props) => {
  const [isChecked, setIsChecked] = useState(done)

  const toggleChecked = () => {
    updateTodo(id, { done: !isChecked })
    setIsChecked(!isChecked)
  }

  return (
    <div className={style.switch__wrapper}>
      <label className={style.switch} htmlFor={`switch-${id}`}>
        <input
          id={`switch-${id}`}
          type="checkbox"
          checked={isChecked}
          onChange={toggleChecked}
          className={style.switch__input}
        />
        <div className={`${style.switch__slider} ${style.switch__round}`}></div>
      </label>
      <label className={style.switch__status} htmlFor={`switch-${id}`}>
        {isChecked ? 'Complete' : 'Pending'}
      </label>
    </div>
  )
}
