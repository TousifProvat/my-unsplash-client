import './style.scss';

const Button = (props) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        boxShadow: props.shadow,
        borderRadius: props.radius,
        borderColor: props.borderColor,
      }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
