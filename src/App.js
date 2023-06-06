import React, { useState } from 'react'

const App = () => {
  const [work, setWork] = useState('')
  console.log(work);

  return (
    <div className="flex items-center justify-center h-screen gap-8">
      <input 
        type="text"
        className='outline-none border border-blue-600 px-4 py-2 w-80'
        value={work}
        onChange={e => setWork(e.target.value)}
      />

      <button
        type="button"
        className='outline-none px-4 py-2 bg-blue-500 rounded-md text-white'
      >
        ADD
      </button>
    </div>
  )
}

export default App