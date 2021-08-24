import './style.scss';

// ui
import Button from '../UI/Button';

const Card = ({ onClick, imageSrc, id, title }) => {
  return (
    <div className="Card">
      <img src={imageSrc} />
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
