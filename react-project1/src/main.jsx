import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target= '_blank'>Google</a>
)

const reactElement = React.createElement(
  'a',
  { href:'https://google.com', target:'_blank' },
  'Google Link'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement

)
