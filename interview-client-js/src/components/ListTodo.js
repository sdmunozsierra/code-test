import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo'

const ListTodo = () => {
  const [todos, setTodos] = useState([])

  //
  // const deleteTodo = async (id) => {
  //   try {
  //     const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
  //       method: 'DELETE',
  //     });
  //     console.log(deleteTodo);
  //     setTodos(todos.filter((todo) => todo.todo_id !== id));
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };
  //
  const getTodos = async () => {
    axios
      .get('http://localhost:6000/todo', {
        headers: {
          Accept: '*',
          'Content-Type': 'application/json',
          'Accept-Control-Allow-Remote': '*',
        },
      })
      .then(
        (result) => {
          setTodos(result.data)
        },
        (error) => {
          console.error(error)
        }
      )
  }

  useEffect(() => {
    getTodos()
  }, [])

  //
  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.content}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                {/* <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListTodo
