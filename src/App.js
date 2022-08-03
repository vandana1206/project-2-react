import "./App.css";
import { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [que, setQue] = useState(data);
  const [idFalg, setQueIdFalg] = useState(null);
  const toggleQues = (id) => {
    setQueIdFalg(id);
  };
  return (
    <div className="container">
      <h2 className="header">Project 2</h2>
      <section>
        {que.map((que) => {
          return (
            <SingleQuestion
              key={que.id}
              {...que}
              toggleQues={toggleQues}
              idFalg={idFalg}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
