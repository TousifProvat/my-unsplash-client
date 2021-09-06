import './App.scss';
import HomePage from './pages/HomePage';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllImage } from './actions';
import Layout from './components/Layout';
import Button from './components/UI/Button';
import Header from './components/Header';
import Spinner from './components/Spinner';

function App() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllImage());
    // eslint-disable-next-line
  }, []);

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
