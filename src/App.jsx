import { HeaderCard } from './components/Card';
import './styles/App.sass';
import userImage from "./assets/image-jeremy.png";

function App() {

  const userName = "Jeremy Robson";

  return (
    <div className='App'>
      <HeaderCard img={userImage} name={userName} />
    </div>
  )
}

export default App
