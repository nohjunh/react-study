// Button 컴포넌트를 정의하는 함수의 첫번째 파라미터로 Props 전달
// destructuring으로 객체요소를 바로 빼서 사용한다.
// props는 묶여서 객체로 전달되기 때문

import './Button.css';

function Button({ className='', color='blue', children, onClick }) {
  const classNames= `Button ${color} ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
