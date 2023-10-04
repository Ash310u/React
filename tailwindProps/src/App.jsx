import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-blue-400 font-bold p-4 bg-slate-100 rounded-xl mb-4'>Tailwind test</h1>
      <Card username='Saima' btntext='Visit my profile' />
      <Card username='Riya' />
    </>
  )
}

export default App