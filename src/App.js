import React, { useState, useRef, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [inputWork, setInputWork] = useState('')
  const [todos, setTodos] = useState([])

  const inputRef = useRef()

  const handleAdd = () => {
    setTodos(prev => [...prev, inputWork])
    setInputWork('')
    toast.success('Add todo ...')
  }

  const handleDelete = (item) => {
    const deleteTodo = todos.filter(todo => todo !== item)
    setTodos(() => deleteTodo)
    toast.error('Remove todo ...')
  }

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <div className="flex gap-8 flex-col items-center justify-center h-screen">
        <div className='flex gap-8'>
          <input
            type="text"
            className='outline-none border border-blue-600 px-4 py-2 w-80'
            value={inputWork}
            onChange={e => setInputWork(e.target.value)}
            ref={inputRef}
          />

          <button
            type="button"
            className='outline-none px-4 py-2 bg-blue-500 rounded-md text-white'
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>

        <div>
          <h3 className='font-bold text-xl'>Content</h3>
          <ul>
            {todos.map((item, index) => (
              <li key={index} className='flex items-center justify-center gap-8'>
                {item}
                <button
                  className='border w-5 h-5 flex items-center justify-center'
                  onClick={() => handleDelete(item)}
                >&times;</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App