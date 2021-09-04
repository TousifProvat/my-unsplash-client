import { useState } from 'react';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';

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

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    769: 2,
    545: 1,
  };

  return (
    <div id="home">
      <AddImageModal show={show} setShow={setShow} />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        style={{ display: 'flex' }}
        columnClassName="my-masonry-grid_column"
      >
        {upload.images.map((image, index) => (
          <Card
            key={index}
            onClick={handleCard}
            imageSrc={image.imageLink}
            id={image._id}
            title={image.title}
            public_id={image.public_id}
          />
        ))}
      </Masonry>
      <DeleteImageModal
        show={deleteModalShow}
        setShow={setDeleteModalShow}
        imageId={imageId}
      />
    </div>
  );
};

export default HomePage;
