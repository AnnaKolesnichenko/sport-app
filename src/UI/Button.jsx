import './Button.scss';

const Button = ({ text, color, backgroundColor }) => {
  return (
    <button style={{ color: color, backgroundColor: backgroundColor }}>
      {text}
    </button>
  );
};

export default Button;
