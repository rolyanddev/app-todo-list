import { useEffect, useState } from 'react'
import { todos } from '@/data'
import { Card } from '@/components/Card'
import { Todos } from '@/interfaces/Todos'
import style from './Home.module.css'

export const Home = () => {
  const [allTodos, setAllTodos] = useState<Todos>([])

  useEffect(() => {
    setAllTodos(todos)
  }, [])

  return (
    <>
      <h1 className={style.home__title}>All todos!</h1>

      <section className={style.home__cards}>
        {allTodos.map(todo => (
          <Card key={todo.id} todo={todo} />
        ))}
      </section>
    </>
  )
}
