import React, { useRef, useState } from 'react'

function Update() {
   const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   console.log(name,setEmail)
  return (
    <div>
        <h1>Login</h1>

        <input 
        value={name}
        type="text" placeholder='Username'
        onChange={(e)=>setName(e.target.value)} />
        <input 
        value={email}
        type="text" placeholder='Email'
        onChange={(e)=>setEmail(e.target.value)}/>
        <button >Update</button>
    </div>
  )
}

export default Update