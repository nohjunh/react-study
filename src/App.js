import HandButton from './HandButton'

function App() {
  const handleClick= (value)=>{
    alert(value);
  };

  return ( // props = 컴포넌트에 속성값 넣는 방법.
    <div>
      <HandButton value="rock" onClick={handleClick}/>
      <HandButton value="scissor" onClick={handleClick}/>
      <HandButton value="paper" onClick={handleClick}/>
    </div>
  );
}

export default App;
