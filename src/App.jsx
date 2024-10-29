import { useState } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Navbar/>
      <Home/>

      
    </>
  );
}

export default App;

