import { todos } from '@/data'
import { Todo, InputCreateTodo, InputUpdateTodo } from '@/interfaces/Todos'

export const getTodos = () => {
  return todos
}

export const getTodo = (id: Todo['id']) => {
  return todos.find(todo => todo.id === id)
}

export const createNewTodo = (payload: InputCreateTodo) => {
  const id = new Date().getTime().toString()
  const todoCreated = {
    id,
    ...payload
  }
  todos.push(todoCreated)
  return todoCreated
}

export const updateTodo = (id: Todo['id'], payload: InputUpdateTodo) => {
  const index = todos.findIndex(todo => todo.id === id)
  const todoUpdated: Todo = {
    id,
    done: payload.done ?? todos[index].done,
    title: payload.title ?? todos[index].title
  }
  todos[index] = todoUpdated
  return todoUpdated
}

export const deleteTodo = (id: Todo['id']) => {
  const index = todos.findIndex(todo => todo.id === id)
  const todoDeleted = { ...todos[index] }
  todos.splice(index, 1)
  return todoDeleted
}
