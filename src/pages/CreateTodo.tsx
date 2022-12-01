import { FormEvent, useState } from 'react'
import style from './CreateTodo.module.css'
import { useNavigate } from 'react-router-dom'
import { createNewTodo } from '@/services'

export const CreateTodo = () => {
  const [valueTitle, setValueTitle] = useState('')
  const navigate = useNavigate()

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setValueTitle(value)
  }

  const createTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createNewTodo({ title: valueTitle, done: false })
    navigate('/')
  }

  return (
    <>
      <h1 className={style.createTodo__title}>Create todo!</h1>
      <form className={style.createTodo__form} onSubmit={createTodo}>
        <input
          type="text"
          name="title"
          onInput={handleInput}
          className={style.createTodo__input}
          placeholder="Write the title of the task"
        />
        <button className={style.createTodo__button} type="submit">
          Add todo
        </button>
      </form>
    </>
  )
}
