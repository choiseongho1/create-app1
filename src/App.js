import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] =useState(0);
  const onClick = () => setValue ((prev) => prev +1);
  console.log("i run all the time");
  
  useEffect(() => {

  }, []); // useEffect 를 사용하면 코드가 한번만 render
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick = {onClick}>click me</button>
    </div>
  );
}

export default App;
