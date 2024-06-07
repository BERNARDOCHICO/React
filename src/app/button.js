const Button = ({ onClick }) => {
    return (
      <button
        className="m-4 bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-t-lg rounded-r-lg rounded-b-lg  transition duration-300 hover:opacity-30"
        onClick={onClick}
      >
        Ver mais
      </button>
    );
  };
  
  export default Button;