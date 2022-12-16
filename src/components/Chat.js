import React, {useEffect, useState} from 'react'
import {db, auth} from '../firebase.js'
import styled from 'styled-components'
import SignOut from './SignOut.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import SendMessage from './SendMessage.js'
const Wrapper = styled.section`
.messages{
 height: 100vh;
 width: 100vw;
 background-color: black;
 display: flex;
 justify-content: center;
 flex-direction: column;
}
.msgs{
    margin: 2rem 20vw;
    height: 100%;
    width: auto;
    background-color: beige;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Mono', monospace;
 }
 .pfp{
    width: 3rem;
    border-radius: 3rem;
 }
 .text{
    padding: 1rem;
    max-width: 20rem;
    width: fit-content;
    background-color: white;
    margin: 0 3rem;
    display: flex;
 }
 .item{
    margin : 0 2rem;
    display: flex;
    flex-direction: column;
 }
 .selfMsg{
    align-items: flex-end;
 }
 .messageContainer{
    overflow: auto;
 }

`
const Chat = () => {
    const [messages, setMessages] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
  return (
    <Wrapper>
        <div className='messages'>
        <div className='msgs'>
            <SignOut className='signOut'/>
            <div className='messageContainer'>
            {messages.map(({ id, text, photoURL, uid})=>(   
                <div className={user.uid==uid ? 'item selfMsg' : 'item'} key={id}>
                    <div className="text "><p>{text}</p></div>
                    <img src={photoURL} className='pfp' alt='' referrerPolicy='no-referrer'/>
                </div>
            ))}
            </div>       
            <SendMessage/>
        </div>
        </div>   
    </Wrapper>
  )
}


export default Chat