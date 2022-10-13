import React from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../feautre/User'

function Login() {
    const dispatch = useDispatch()
    console.log(dispatch)
  return (
    <div>
        <button 
            onClick={()=>dispatch(login({ name:"shakkeer", age:23 , email : "muhammadshakkeer3@gmail.com" }))}
        >
            login
        </button>
        
    </div>
  )
}

export default Login