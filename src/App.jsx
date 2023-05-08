import { HeaderCard, TimeCard } from './components/Card';
import './styles/App.sass';
import userImage from "./assets/image-jeremy.png";
import { useEffect, useRef, useState } from 'react';
import data from "./data.json";

function App() {

  const userName = "Jeremy Robson";

  const state = useState(1);
  const refCards = useRef(null);

  useEffect(() => {
    refCards.current.style.animationName = "fadeIn";
    const timeout = setTimeout(() => refCards.current.style.animationName = "", 600);
    return () => clearTimeout(timeout);
  }, [state])

  return (
    <main>
      <div className='App'>
        <HeaderCard img={userImage} name={userName} state={state} />

        <div ref={refCards} className='App__Cards'>
          {data.map(({title, timeframes}, key) => 
            <TimeCard key={key} title={title} timeframes={timeframes} state={state} />
            )}
        </div>

        <div className="Attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://frontendmentor.io/profile/ianbuen">@ianbuen</a>.
            
        </div>
      </div>
    </main>
  )
}

export default App
