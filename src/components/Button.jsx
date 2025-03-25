

// eslint-disable-next-line react/prop-types
const Button = ({ text, className }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;