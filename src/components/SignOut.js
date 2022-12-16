import React from 'react'
import {auth} from "../firebase.js"
import {Button} from "@mui/material"
import styled from 'styled-components'
import LogoutIcon from '@mui/icons-material/Logout';
const Wrapper = styled.section`
button{
  border: none;
  background-color: none;
}
`
const SignOut = () => {
  return (
    <Wrapper>
        <button onClick={()=>auth.signOut()}><LogoutIcon fontSize='large' style={{backgroundColor: "beige"}}/></button>
    </Wrapper>
  )
}

export default SignOut