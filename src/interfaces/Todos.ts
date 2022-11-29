export type Todos = Todo[]
export type IdTodo = number | string

export interface Todo {
  id: IdTodo
  done: boolean
  title: string
}
