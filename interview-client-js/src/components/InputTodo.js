import React, { useState } from 'react'
import axios from 'axios'

const InputTodo = () => {
  const [description, setDescription] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:6000/todo', 
      	{ content: description },
	{ headers: { 'Accept': '*',
	'Content-Type': 'application/json',
	'Accept-Control-Allow-Remote': '*', }
	})
      console.log(response);
      window.location = '/'
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <>
      <h1 className="text-center mt-5">Add a Todo to the List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          className="form-control"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">ADD</button>
      </form>
    </>
  )
}

export default InputTodo