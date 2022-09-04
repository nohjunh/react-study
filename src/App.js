import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';

const INITIAL_VALUE = 'rock';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  // 배열을 통해 승부를 기록하는 기능을 구현
  const [gameHistory, setGameHistory] = useState([]);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    // gameHistory에 nextHistoryItem 을 추가해주세요.
    // 배열은 참조형이기에 push로 값이 추가된다해도 주소값은 그대로이다.
    // 따라서 gameHistory 자체의 값이 바뀐게 아니기에 useState로도 자동으로 렌더링이 되지 않는다. 
    // 즉, gameHistory 는 참조형이니까, setGameHistory 함수로 값을 변경할 때는 매번 새로운 값을 만들어 주어야 합니다.
    setGameHistory([...gameHistory, nextHistoryItem]);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    // gameHistory를 비워주세요
    setGameHistory([]);
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <p>승부 기록: {gameHistory.join(', ')}</p>
      <div>
        {/* 1. 사용자가 버튼을 클릭함*/}
        {/* 2. HandButton 컴포넌트의 handleClick이 실행됨: handleClick(e) 이렇게 이벤트 객체가 전달되면서 실행이 될겁니다*/}
        {/* 2. 상위 컴포넌트인 App에서 onClick함수인 handleButtonClick을 HandButton 컴포넌트에게 Prop으로 내려준다. */}
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
