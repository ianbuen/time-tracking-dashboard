import { HeaderCard, TimeCard } from './components/Card';
import './styles/App.sass';
import userImage from "./assets/image-jeremy.png";
import { useState } from 'react';
import data from "./data.json";

function App() {

  const userName = "Jeremy Robson";

  const state = useState(1);

  return (
    <div className='App'>
      <HeaderCard img={userImage} name={userName} state={state} />

      {data.map(({title, timeframes}, key) => 
        <TimeCard key={key} title={title} timeframes={timeframes} state={state} />
      )}
    </div>
  )
}

export default App
