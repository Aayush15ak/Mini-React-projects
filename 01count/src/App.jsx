import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () =>{
    setCount(count - 1);
  }

  return (
    <>
      <h1>This is my first React app</h1>
      <h3>Counter: {count}</h3>

      <button onClick={increase}>Tap to increase</button>
      <br /><br />
      <button onClick={decrease}>Tap to decrease</button>
    </>
  );
}

export default App;
