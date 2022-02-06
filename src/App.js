import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChnage = (e) => setKeyword(e.target.value);

  useEffect(() => {
    console.log("I run only once");
  }, []); // 배열에 값이 없기 때문에 화면 로드시 한번만 render

  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]); // keyword가 변화할때마다 render

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]); // counter 변화할때마다 render

  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]); // keyword & counter 변화할때마다 render
  return (
    <div>
      <input
        value={keyword}
        onChange={onChnage}
        type="text"
        placeholder="Search here "
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
