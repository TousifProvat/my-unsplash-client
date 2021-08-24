import { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import Modal from '../../../components/Modal';
import Input from '../../../components/UI/Input';
import './style.scss';

const MasonryLayout = (props) => {
  const data = [
    {
      _id: 1,
      title: 'White robot human features',
      imageLink:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      _id: 2,
      title: 'iPhone 8',
      imageLink:
        'https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
    },
    {
      _id: 3,
      title: 'Orb of power',
      imageLink:
        'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      _id: 4,
      title: 'Workplace',
      imageLink:
        'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    },
    {
      _id: 5,
      title: 'Mac',
      imageLink:
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    },
    {
      _id: 6,
      title: 'Mini',
      imageLink:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');

  const handleCard = (image) => {
    setImage(image);
    setShow(true);
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <>
      <div className="masonaryContainer">
        {data.map((image, index) => (
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
