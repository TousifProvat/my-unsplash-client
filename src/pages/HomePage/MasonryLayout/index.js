import { useEffect, useState } from 'react';
import axios from '../../../helper/axios';
import Card from '../../../components/Card';
import Modal from '../../../components/Modal';
import Input from '../../../components/UI/Input';
import './style.scss';

const MasonryLayout = (props) => {
  const [show, setShow] = useState(false);
  const [imageId, setImageId] = useState('');
  const [password, setPassword] = useState('');

  const handleCard = (image) => {
    setImageId(image);
    setShow(true);
  };

  const handleSubmit = async () => {
    const image = { imageId, password };
    axios.post('/images/delete', image);
    setShow(false);
  };

  return (
    <>
      <div className="masonaryContainer">
        {props.data.map((image, index) => (
          <Card
            key={index}
            onClick={handleCard}
            imageSrc={image.imageLink}
            id={image._id}
            title={image.title}
          />
        ))}
      </div>
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
    </>
  );
};

export default MasonryLayout;
