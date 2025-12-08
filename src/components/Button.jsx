const Button = (props) => {
  return (
    <button className="bg-indigo-600 rounded p-2 text-white font-mono cursor-pointer hover:bg-indigo-700 ">
      {props.text}
    </button>
  );
};

export default Button;
