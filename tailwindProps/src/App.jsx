import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let MyObj = {
    userName:'Ashu',
    age:19
  }
  let MyAry = [1,2,3]

  return (
    <>
      <h1 className='text-blue-400 font-bold p-4 bg-slate-100 rounded-xl mb-4'>Tailwind test</h1>
      <Card whatever='nothing' someObj={MyObj} someAry={MyAry}/>
    </>
  )
}

export default App
