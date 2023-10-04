import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#272727')

  return (
    <div className='w-screen h-screen duration-200 '
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-16 shadow-lg  px-3 py-2  bg-gray-200 rounded-3xl'>
          <button onClick={() => setColor('red')} className='px-3 py-2 text-white rounded-3xl' style={{backgroundColor:'red'}}>Red</button>
          <button onClick={() => setColor('green')} className='px-3 py-2 text-white rounded-3xl' style={{backgroundColor:'green'}}>green</button>
          <button onClick={() => setColor('orange')} className='px-3 py-2 text-white rounded-3xl' style={{backgroundColor:'orange'}}>orange</button>
          <button onClick={() => setColor('blue')} className='px-3 py-2 text-white rounded-3xl' style={{backgroundColor:'skyblue'}}>skyblue</button>
          <button onClick={() => setColor('lavender')} className='px-3 py-2 text-white rounded-3xl' style={{backgroundColor:'purple'}}>purple</button>
          <button onClick={() => setColor('olive')} className='px-3 py-2 text-white rounded-3xl' style={{backgroundColor:'olive'}}>olive</button>
        </div>
      </div>
    </div>
  )
}

export default App