import { useRef } from "react";

const Start = ({ setUsername }) => {
  const inputRef = useRef();
  const handleSubmit = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className="startQuiz">
      <h4>Enter Your Username</h4>
      <form action="">
        <input type="text" ref={inputRef} />
        <div>
          <button type="submit" onClick={handleSubmit}>
            Start
          </button>
        </div>
      </form>
    </div>
  );
};

export default Start;
