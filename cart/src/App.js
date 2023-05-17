import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Category from './Components/Category/Category';
import {ProductList} from './Components/Data'



function App() {
  const [data, setData] = useState([])
  const [filter,setFilter]=useState('laptop')

  return (
    <>
        <Navbar data={data} setData={setData}/>
        <Category {...{filter,setFilter}}/>
        <Products data={data} Product={ProductList.filter(e=>e.category === filter)} setData={setData}/> 
    </>
  );
}

export default App;
