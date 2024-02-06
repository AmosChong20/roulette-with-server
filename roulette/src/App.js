import logo from './logo.svg';
import './App.css';
import Roulette from './components/roulette';
import ProductList from './components/productList';
import { useEffect, useState } from 'react';
import Prize from './components/prize';
import FrontPage from './components/front';

function App() {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const timeInterval = setInterval(async () => {
  //     const res = await fetch('http://localhost:8080/api/products')
  //     const data = await res.json()
  //     setProducts(data)
  //   }, 10000)

  //   return () => {
  //     clearInterval(timeInterval)
  //   }
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:8080/api/products')
      const data = await res.json()
      setProducts(data)
    }
    fetchProducts()
  }, []);

  const [prize, setPrize] = useState(null)
  const [front, setFront] = useState(true);
  const [showFront, setShowFront] = useState(true);

  const handleAdd = async (product) => {
    if (product === '') return;
    try {
      const response = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: product })
      });
  
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error in handleAdd:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error in handleAdd:', error);
    }
  }

  const handleEdit = async (id, newName) => {
    if (newName === '') return;
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newName })
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error in handleAdd:', error);
    }
  }

  const handleChosen = (product) => {;
    setPrize(product?.name);
  }

  const handleFront = () => {
    setFront(false);
    if (!showFront) setShowFront(true)
  }

  return (
    front ? 
    <div className='flex items-center justify-center w-screen h-screen' onAnimationEnd={() => {
      if (!front) setShowFront(false)
    }}>
    <FrontPage onClick={handleFront}/> 
    </div> :
    <div className='flex flex-col items-center bg-red-100'>
      <div className='mt-10 mb-5 text-8xl font-bold font-lover text-pink-900'>Birthday Roulette</div>
      <Roulette products={products} onChosen={handleChosen}/>
      <Prize prize={prize}/>
      <ProductList products={products} onAdd={handleAdd} onDelete={handleDelete} onEdit={handleEdit}/>
    </div> 
  );
}

export default App;
