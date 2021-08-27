import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// style
import './style.scss';

// comps
import Card from '../../components/Card';
import AddImageModal from './subComponents/AddImageModal';
import DeleteImageModal from './subComponents/DeleteImageModal';

const HomePage = ({ show, setShow }) => {
  const upload = useSelector((state) => state.upload);

  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [imageId, setImageId] = useState('');

  const handleCard = (image) => {
    setImageId(image);
    setDeleteModalShow(true);
  };

  return (
    <div id="home">
      <AddImageModal show={show} setShow={setShow} />
      <div className="masonaryContainer">
        {upload.images.map((image, index) => (
          <Card
            key={index}
            onClick={handleCard}
            imageSrc={image.imageLink}
            id={image._id}
            title={image.title}
          />
        ))}
      </div>
      <DeleteImageModal
        show={deleteModalShow}
        setShow={setDeleteModalShow}
        imageId={imageId}
      />
    </div>
  );
};

export default HomePage;
