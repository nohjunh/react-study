function handleClick(value){
  console.log(value);
}

const handleClick2= () => handleClick("2");
handleClick2();


const test= (value)=> console.log(value);
test("!21")

function random(n) {
  console.log("~~"+Math.floor(Math.random() * n));
}

const HANDS = ['rock', 'scissor', 'paper'];
function generateRandomHand() {
  const idx = random(HANDS.length);
  return HANDS[idx];
}
console.log(HANDS.length)
console.log(generateRandomHand())