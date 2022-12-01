import { useEffect, useState } from 'react'
import { Todos } from '@/interfaces/Todos'
import { Card } from '@/components/Card'
import style from './Cards.module.css'
import { getTodos } from '@/services'

export const Cards = () => {
  const [allTodos, setAllTodos] = useState<Todos>([])

  useEffect(() => {
    setAllTodos(getTodos())
  }, [])

  return (
    <section className={style.cards}>
      {allTodos.map(todo => (
        <Card key={todo.id} todo={todo} />
      ))}
    </section>
  )
}
