import {useState} from 'react';
import Board from './Board';
import Button from './Button';

function random(n){
  return Math.ceil(Math.random()*n);
}

function App(){
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
    setOtherNum(nextOtherNum);
    setOtherSum(otherSum + nextOtherNum);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };
  
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  };
  
  return (
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        <Board name="나" color="blue" num={num} sum={num} gameHistory={gameHistory} />
        <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
      </div>
    </div>
  );
}

export default App;
