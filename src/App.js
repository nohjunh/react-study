import Button from './Button';
import Dice from './Dice';
import {useState} from 'react';

function random(n){
  return Math.ceil(Math.random()*n)
}

function App(){
 const [num, setNum] = useState(1);

 const handleClearClick= () =>{
  setNum(1);
 }

 const handleRollClick= () => {
  const nextNum = random(6);
  setNum(nextNum);
 }

 return (
  <div>
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
    </div>
    <Dice color='red' num={num} />
  </div>
 );
}

export default App;