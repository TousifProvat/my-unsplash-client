import { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import Modal from '../../../components/Modal';
import Input from '../../../components/UI/Input';
import './style.scss';

const MasonryLayout = (props) => {
  

  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');

  const handleCard = (image) => {
    setImage(image);
    setShow(true);
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
      >
        <Input type="text" label="Password" placeholder="Enter your password" />
      </Modal>
    </>
  );
};

export default MasonryLayout;
