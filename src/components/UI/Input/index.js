import './style.scss';

const Input = (props) => {
  return (
    <div className="inputContainer" style={props.style}>
      {props.label && <label>{props.label}</label>}
      <input
        className="customInput"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
      />
    </div>
  );
};

export default Input;
