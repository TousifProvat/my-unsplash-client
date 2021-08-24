import Button from '../UI/Button';
import './style.scss';

const Modal = ({
  submitText = 'submit',
  title,
  show,
  children,
  handleModal,
  handleSubmit,
  submitBtnColor,
}) => {
  return (
    <>
      <div
        onClick={() => handleModal(false)}
        style={{ display: `${show ? 'flex' : 'none'}` }}
        className="overlay"
      ></div>
      <div className="modal" style={{ display: `${show ? 'flex' : 'none'}` }}>
        {title && <h2 className="modalTitle">{title}</h2>}
        {children}
        <div className="btnContainer">
          <Button
            text="cancel"
            bgColor="white"
            color="grey"
            shadow="none"
            onClick={() => handleModal(false)}
          />
          <Button text={submitText} bgColor={submitBtnColor} />
        </div>
      </div>
    </>
  );
};

export default Modal;
