import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-4xl text-center">Hello React!</h1>
    </div>
  );
}

export default App;
