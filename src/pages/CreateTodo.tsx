import style from './CreateTodo.module.css'
import { todos } from '@/data'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const CreateTodo = () => {
  const navigate = useNavigate()

  const createTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { title } = Object.fromEntries(formData) as { title: string }
    const idFake = new Date().getTime().toString()
    todos.push({ id: idFake, title, done: false })
    e.currentTarget.reset()
    navigate('/')
  }

  return (
    <>
      <h1 className={style.createTodo__title}>Create todo!</h1>
      <form className={style.createTodo__form} onSubmit={createTodo}>
        <input
          type="text"
          name="title"
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
