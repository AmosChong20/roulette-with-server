import React from 'react';
import { useState } from 'react';
import Product from './product';

export default function ProductList({ products, onAdd, onDelete, onEdit }) {
    const [newProduct, setNewProductName] = useState('');
    const [addNew, setAddNew] = useState(false);
    const handleAdd = () => {
        if (newProduct === '') {
            return;
        }
        onAdd(newProduct);
        setNewProductName('');
        setAddNew(false);
    }

    return (
        <div className='my-10 w-1/2 font-evermore'>
            <div className="font-bold py-5 text-5xl">Product List</div>
                {!addNew ? <button onClick={() => {
                    setAddNew(true);
                }} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add New Item</button>
                : <div className='flex gap-5'>
                    <input class="bg-gray-50 max-w-52 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={newProduct} onChange={(e) => setNewProductName(e.target.value)} placeholder='Add new item here'></input>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 flex gap-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={handleAdd}>
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                    </svg>
                    Add</button>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 flex gap-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => setAddNew(false)}>
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"/>
                    </svg>
                    Cancel</button>
                </div>}
            <ul className="list-none">
                {products.map((product) => (
                    <Product key={product.id} id={product.id} name={product.name} onDelete={onDelete}
                        onEdit={onEdit}/>
                ))}
            </ul>
        </div>
    );
};
