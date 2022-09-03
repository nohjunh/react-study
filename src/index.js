import ReactDOM from 'react-dom';

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

function handleClick() {
  alert('가위바위보!');
}

const me = 'rock';
const other = 'scissor';

let value= getResult(me,other);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>가위바위보</h1>
    <h2>{value}</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
  </>
);