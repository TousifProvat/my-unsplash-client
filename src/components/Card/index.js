import { Image, Transformation } from 'cloudinary-react';

import './style.scss';

// ui
import Button from '../UI/Button';

const Card = ({ onClick, imageSrc, id, title, public_id }) => {
  return (
    <div className="Card">
      <Image cloudName="imageuploader-tap" secure="true" publicId={public_id}>
        <Transformation quality="auto:eco" />
        <Transformation fetchFormat="auto" />
        <Transformation dpr="auto" />
      </Image>
      {/* <img src={imageSrc} alt={title} /> */}
      <div className="details">
        <Button
          text="delete"
          bgColor="transparent"
          shadow="none"
          radius="38px"
          borderColor="#EB5757"
          color="#EB5757"
          onClick={() => onClick(id)}
        />
        <p className="image-title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
