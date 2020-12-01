
import React from 'react'
import './App.css';
import Background from './Background'
import Navbar from './Navbar'
import MainPage from './MainPage'

function App() {
  const mouse = React.useRef([0, 0])
  const onMouseMove = React.useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  return (
    <div className="container" onMouseMove={onMouseMove}>
    <Navbar/>
    <MainPage/>
     <Background mouse={mouse}/> 

</div>
  );
}

export default App;
