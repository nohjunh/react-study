import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './App.css';
import classNames from 'classnames';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({className, result, value}){
  const src= IMAGES[value];
  if (result==='승리'){
    return (
      <div className={classNames('Hand', 'winner')}>
        <img className= {classNames(className)} src={src} alt={value} />     
      </div>
    );
  }else{
    return (
        <img className= {className} src={src} alt={value} />
    );
  }
}

export default HandIcon;