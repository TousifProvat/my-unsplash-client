import './App.scss';
import HomePage from './pages/HomePage';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getAllImage } from './actions';


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllImage())
  },[])

  return (
    <HomePage/>
  );
}

export default App;
