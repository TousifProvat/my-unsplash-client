import './App.scss';
import HomePage from './pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllImage } from './actions';
import Layout from './components/Layout';
import Button from './components/UI/Button';
import Header from './components/Header';

function App() {
  const upload = useSelector((state) => state.upload);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllImage());
  },[]);

  return (
    <Layout>
      <Header
        headerRight={
          <Button text="Add a photo" onClick={() => setShow(true)} />
        }
      />
      <HomePage show={show} setShow={setShow} />
    </Layout>
  );
}

export default App;
