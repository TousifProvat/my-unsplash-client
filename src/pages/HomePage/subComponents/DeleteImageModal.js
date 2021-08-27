import { useState } from 'react';
import { useDispatch } from 'react-redux';

// action
import { deleteImage } from '../../../actions';

// comps
import Modal from '../../../components/Modal';

//UI
import Input from '../../../components/UI/Input';

const DeleteImageModal = ({ show, setShow, imageId }) => {
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const image = { imageId, password };
    dispatch(deleteImage(image));
    setShow(false);
  };

  return (
    <Modal
      show={show}
      handleModal={setShow}
      title={'Are you sure?'}
      submitText="Delete"
      submitBtnColor="#EB5757"
      handleSubmit={handleSubmit}
    >
      <Input
        type="text"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Modal>
  );
};

export default DeleteImageModal;
