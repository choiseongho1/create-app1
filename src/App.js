import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("create");
    return () => console.log("bye");
  }, []);
  //cleanUp function
  //cleanUp을 사용하게 되면 컴포넌트가 언제 create되었고, destoryed되었는지 시점 확인 가능
  //컴포넌트가 파괴될 때 hiFn이 return한 byeFn을 실행

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}

export default App;
