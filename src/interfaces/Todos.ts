export type Todos = Todo[]

export interface Todo {
  readonly id: string
  done: boolean
  title: string
}

export type InputCreateTodo = Omit<Todo, 'id'>
export type InputUpdateTodo = Partial<Omit<Todo, 'id'>>
