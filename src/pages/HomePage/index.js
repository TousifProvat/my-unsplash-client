import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// style
import './style.scss';

// comps
import Card from '../../components/Card';
import AddImageModal from './subComponents/AddImageModal';
import DeleteImageModal from './subComponents/DeleteImageModal';
import MasonryLayout from '../../components/Layout/MasonryLayout';

const HomePage = ({ show, setShow }) => {
  const upload = useSelector((state) => state.upload);

  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [imageId, setImageId] = useState('');

  const handleCard = (image) => {
    setImageId(image);
    setDeleteModalShow(true);
  };

  const setColumn = () => {
    if (window.innerWidth < 545) {
      return 1;
    } else if (window.innerWidth < 769 && window.innerWidth > 545) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div id="home">
      <AddImageModal show={show} setShow={setShow} />
      <MasonryLayout columns={setColumn()} gap={16}>
        {upload.images.map((image, index) => (
          <Card
            key={index}
            onClick={handleCard}
            imageSrc={image.imageLink}
            id={image._id}
            title={image.title}
          />
        ))}
      </MasonryLayout>

      <DeleteImageModal
        show={deleteModalShow}
        setShow={setDeleteModalShow}
        imageId={imageId}
      />
    </div>
  );
};

export default HomePage;
