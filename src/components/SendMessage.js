import React, {useState} from 'react'
import firebase from 'firebase/compat/app';
import { Button, Input } from '@mui/material'
import {db, auth} from '../firebase.js'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const Wrapper = styled.section`
form{
    display: flex;
    margin-top: 3rem;
    flex-direction: row;
}
.inputField{
    width: 80%;
    margin-left: 5rem;
    height: 5rem;
    border : none;
    text-align: center;
    font-size: 2rem;
}
.sendButton{
    border: none;
    background-color: transparent;
    justify-content: center;
    width: 20%;
}
`
const SendMessage = () => {
    const [msg, setMsg] = useState('')
    const sendMessage = async(e) =>{
        e.preventDefault()
        if(msg.length>0){
            const {uid, photoURL} = auth.currentUser
            await db.collection('messages').add({
                text: msg,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setMsg('')
        }
       
    }
  return (
    <Wrapper>
        <form onSubmit={sendMessage}>
            <input  className='inputField' placeholder="Message.." onChange={(e)=> setMsg(e.target.value) }/>
            <button className='sendButton' type='submit'><FontAwesomeIcon fontSize='2rem' style={{color: 'black'}}icon={faPaperPlane} /></button>
        </form>
    </Wrapper>
  )
}

export default SendMessage