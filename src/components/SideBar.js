import React from 'react'
import { useSelector } from 'react-redux'

function SideBar() {
    const name = useSelector(state=>state.user.name)
    const email = useSelector(state=> state.user.email)
  return ( 
    <div style={{ backgroundColor:"yellow"}}>
        <h1>Your Name is {name}</h1>
        <h3>{email} email Successfully added</h3>
    </div>
  )
}

export default SideBar