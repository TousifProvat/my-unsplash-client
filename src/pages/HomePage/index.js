import { useState } from 'react';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import MasonryLayout from './MasonryLayout';
import './style.scss';

const HomePage = () => {
  const [show, setShow] = useState(false);

  return (
    <Layout
      headerRight={<Button text="Add a photo" onClick={() => setShow(true)} />}
    >
      <Modal
        show={show}
        handleModal={setShow}
        title={'Add new image'}
        submitText="Add Image"
        submitBtncolor="#EB5757"
      >
        <Input type="text" label="name" placeholder="name" />
      </Modal>
      {/* masonary layout */}
      <MasonryLayout />
    </Layout>
  );
};

export default HomePage;
