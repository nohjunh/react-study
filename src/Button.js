// Button 컴포넌트를 정의하는 함수의 첫번째 파라미터로 Props 전달
// destructuring으로 객체요소를 바로 빼서 사용한다.
// props는 묶여서 객체로 전달되기 때문

import icResetImg from './assets/ic-reset.svg';

function Button({ className='', color='blue', onClick }) {
  const classNames= `Button ${color} ${className}`;
  return (
    <button className={classNames} onClick={onClick}><img src={icResetImg} alt="초기화" />
    </button>
  );
}

export default Button;
