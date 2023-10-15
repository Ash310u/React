import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div className='bg-gray-700 flex  flex-col justify-center items-center m-8 p-4   rounded-xl'>
            <h2 className="text-gray-100 text-3xl justify-center">Login</h2>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-2 m-5 "/>
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 m-2"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login