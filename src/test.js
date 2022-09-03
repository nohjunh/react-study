function handleClick(value){
  console.log(value);
}

const handleClick2= () => handleClick("2");
handleClick2();


const test= (value)=> console.log(value);
test("!21")