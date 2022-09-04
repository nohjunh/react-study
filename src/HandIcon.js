import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({value}){
  const src= IMAGES[value];
  return (
    <img src={src} alt={value} />
  );
}

export default HandIcon;