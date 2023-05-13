import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';


function App() {
  const [data, setData] = useState([])
  return (
    <>
        <Navbar data={data}/>
        <Products data={data} setData={setData}/>
    </>
  );
}

export default App;
