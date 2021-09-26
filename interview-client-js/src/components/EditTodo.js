import React, { useState } from 'react'
import axios from 'axios'

const EditTodo = ({ todo }) => {
    // console.log({ todo });
  const [description, setDescription] = useState(todo.content)

  const updateDescription = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:6000/todo/${todo.id}`,
      	{ content: description },
	{ headers: { 'Accept': '*',
	'Content-Type': 'application/json',
	'Accept-Control-Allow-Remote': '*', }
	})
      console.log(response)
      window.location = '/'
    } catch (err) {
      console.error(err.message)
    }
  }
  //
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${todo.id}`}
        onClick={() => setDescription(todo.content)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo Content</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.content)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.content)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditTodo