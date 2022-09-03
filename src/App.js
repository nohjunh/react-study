import Dice from './Dice'

function App() {
  return ( // props = 컴포넌트에 속성값 넣는 방법.
    <div>
      <Dice color="red" num={2} />  
    </div>
  );
}

export default App;
