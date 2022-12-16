import './App.css';
import SignIn from './components/SignIn.js';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase.js'
import Chat from './components/Chat.js';
function App() {
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <>
    {user ? <Chat/> : <SignIn/>}
    </>
  );
}

export default App;
