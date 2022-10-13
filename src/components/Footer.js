import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
    const name = useSelector(state=> state.user.name)
    const email = useSelector(state=>state.user.email)
  return (
    <div style={{position:"absolute", bottom:'0px', width:"100%" ,backgroundColor:"lightcyan"}}>
        <p>Your footer name is {name} </p>
        <p>Your footer email is {email} </p>
    </div>
  )
}

export default Footer