import { ReactComponent as Loader } from '../../assets/spinner.svg';

import './style.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <Loader />
    </div>
  );
};

export default Spinner;
