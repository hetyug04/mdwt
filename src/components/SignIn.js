import React from 'react'
import firebase from 'firebase/compat/app'
import {auth} from '../firebase.js'
import styled from 'styled-components'
const Wrapper = styled.section`
.signInWrapper{
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}
.signInButton{
  height: 5rem;
  width: 15rem;
  border-radius: 3rem;
  transition: box-shadow .5s;
  border: none;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
}
.signInButton:hover{
  cursor: pointer;
  transition: box-shadow .5s;
  box-shadow: 16px 13px 0px -3px rgba(255,255,255,.25);
}


`
const SignIn = () => {
  const googleSignIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <Wrapper>
      <div className='signInWrapper'>
      <button className='signInButton' onClick={googleSignIn}>Sign In With Google</button>
      </div>
    </Wrapper>
  )
}

export default SignIn