import Square from './Square';
import Input from './Input';
import { useState } from 'react';

function App() {
  const[colorPicture, setColorPicture] = useState('')
  const[hexValue, setHexValue] = useState('')
  const[textToggle, setTextToggle] = useState(true)
  return (
    <div className="App">
      <Square 
      colorPicture={colorPicture}
      hexValue={hexValue}
      textToggle={textToggle}/>
      <Input 
      colorPicture={colorPicture}
      setColorPicture={setColorPicture}
      setHexValue={setHexValue}
      textToggle={textToggle}
      setTextToggle={setTextToggle}/>
    </div>
  );
}

export default App;
