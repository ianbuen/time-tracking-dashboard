import { HeaderCard } from './components/Card';
import './styles/App.sass';
import userImage from "./assets/image-jeremy.png";
import { useState } from 'react';

function App() {

  const userName = "Jeremy Robson";

  const state = useState(0);

  return (
    <div className='App'>
      <HeaderCard img={userImage} name={userName} state={state} />
    </div>
  )
}

export default App
