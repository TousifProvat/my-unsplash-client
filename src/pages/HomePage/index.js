import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// style
import './style.scss';

// comps
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import MasonryLayout from './MasonryLayout';

// Ui
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

// actions
import { uploadImage } from '../../actions';

const HomePage = () => {
  
  const upload = useSelector(state => state.upload);
  
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [feedImage, setFeedImage] = useState('');

  const dispatch = useDispatch();


  const handleSubmit = () => {

    if(!feedImage) {
     return alert('Please select a image');
    }
    const form = new FormData()
    form.append('title', title);
    form.append('feedImage', feedImage);
    dispatch(uploadImage(form));
    setTitle('');
    setFeedImage('');
    setShow(false);
  }

  return (
    <div id="home">
      <Layout
      headerRight={<Button text="Add a photo" onClick={() => setShow(true)} />}
    >
      <Modal
        show={show}
        handleModal={setShow}
        title={'Add new image'}
        submitText="Add Image"
        submitBtncolor="#EB5757"
        handleSubmit={handleSubmit}
      >
        <Input type="text" label="name" placeholder="name" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input type="file" label="Picture" required={true} onChange={(e) => setFeedImage(e.target.files[0])} />
      </Modal>
      {upload.loading ? 'loading...':<MasonryLayout data={upload.images}/>}
    </Layout>
    </div>
  );
};

export default HomePage;
