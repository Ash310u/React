import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {

  return (
    <UserContextProvider>
      <div className='bg-gray-700 flex  flex-col justify-center items-center m-8 p-4 text-white  rounded-xl'>
        <h1>Context API</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
