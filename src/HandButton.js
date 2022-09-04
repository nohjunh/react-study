import HandIcon from "./HandIcon";

// 여기서의 onClick함수는 상위컴포넌트 App의 handleButtonClick함수
function HandButton({value, onClick}){
  // 3. handleClick 함수에서는 onClick함수를 value값으로실행합니다.
  // 즉, 다시말해서 onClick(value)===handleButtonClick(value)가 실행되는 것입니다
  // 여기서 value 값(아규먼트)은 handleButtonClick 함수 안에서는 nextHand 파라미터로 전달된다.
  const handleClick = () => onClick(value);
  return (
    <button onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;