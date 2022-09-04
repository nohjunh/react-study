import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';
import './App.css';
import classnames from 'classnames';

const INITIAL_VALUE = 'rock';
let resultMe=''
let resultOther=''
function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0){
    resultMe='승리';
    resultOther='패배';
    return '승리';
  }
  if (comparison < 0){
    resultMe='패배';
    resultOther='승리';
    return '패배';
  }
  resultMe='무승부'
  resultOther='무승부'
  return '무승부';
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <Button className="App-reset" onClick={handleClearClick} />
      <div>
        <div className='App-scores'>
          <div className='Score'>
            <div className='Score-num'>{score}</div>
            <div className='Score-name'>나</div>
          </div>
          <div className='App-versus'>
            :
          </div>
          <div className='Score'>
            <div className='Score-num'>{otherScore}</div>
            <div className='Score-name'>상대</div>
          </div>      
        </div>
      </div>
      <div className={classnames('Box', 'App-box')}>
        <div className='Box-inner'>
          <div className='App-hands'>
            <div className='Hand'>
              <HandIcon className='Hand-icon' result={resultMe} value={hand} />
            </div>
            <div className="App-versus">VS</div>
            <div className='Hand'>
              <HandIcon className='Hand-icon' result={resultOther} value={otherHand} />
            </div>
          </div>
        </div>
      </div>
      <div className='App-bet'>
        <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
      </div>
      <div className='App-history'>
        <p>승부 기록: {gameHistory.join(', ')}</p>
      </div>
      <div>
        <HandButton className='HandButton' value="rock" onClick={handleButtonClick} />
        <HandButton className='HandButton' value="scissor" onClick={handleButtonClick} />
        <HandButton className='HandButton' value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
