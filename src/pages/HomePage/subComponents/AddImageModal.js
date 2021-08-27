import { useState } from 'react';
import { useDispatch } from 'react-redux';
// actions
import { uploadImage } from '../../../actions';

// comps
import Modal from '../../../components/Modal';
import Input from '../../../components/UI/Input';

const AddImageModal = ({ show, setShow }) => {
  const [title, setTitle] = useState('');
  const [feedImage, setFeedImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!feedImage) {
      return alert('Please select a image');
    }
    const form = new FormData();
    form.append('title', title);
    form.append('feedImage', feedImage);
    dispatch(uploadImage(form));
    setTitle('');
    setFeedImage('');
    setShow(false);
  };

  return (
    <Modal
      show={show}
      handleModal={setShow}
      title={'Add new image'}
      submitText="Add Image"
      submitBtncolor="#EB5757"
      handleSubmit={handleSubmit}
    >
      <Input
        type="text"
        label="name"
        placeholder="name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="file"
        label="Picture"
        required={true}
        onChange={(e) => setFeedImage(e.target.files[0])}
      />
    </Modal>
  );
};

export default AddImageModal;
