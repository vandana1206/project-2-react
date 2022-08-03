import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = ({ id, title, info, toggleQues, idFalg }) => {
  return (
    <>
      <div className="question" key={id}>
        <header>
          <h3>{title}</h3>
          <button className="btn"
            onClick={() => {
              toggleQues(id);
            }}
          >
            {id === idFalg ? <AiOutlineMinus /> : <AiOutlinePlus />}{" "}
          </button>
        </header>
        <p>{id ===  idFalg && info}</p>
      </div>
    </>
  );
};
export default Questions;
