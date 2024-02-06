import React from 'react';
import { useState } from 'react';

export default function Product({ id, name, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    const handleSave = (id) => {
        onEdit(id, newName);
        setIsEditing(false);
    }

    return (
        <li className="py-5 flex gap-5 items-center">
            {!isEditing ? <div className="w-2/5 pl-5 text-3xl font-bold mr-60">{name}</div> : 
            <input type="text" value={newName} className="bg-transparent mr-60 border border-pink-800 border-2 text-black text-3xl rounded-lg shadow-md focus:ring-red-500 focus:border-red-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                onChange={(e) => setNewName(e.target.value)}/>}
            <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 flex gap-2 border-b-4 border-red-700 hover:border-red-500 rounded"
            onClick={() => onDelete(id)}>
                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                </svg>
                Delete</button>
            {isEditing ? <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 flex gap-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => handleSave(id)}>
                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 12 4.7 4.5 9.3-9"/>
                </svg>
                Save</button>
            : <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 flex gap-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => setIsEditing(true)}>
                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.8 17.8-6.4 2.1 2.1-6.4m4.3 4.3L19 9a3 3 0 0 0-4-4l-8.4 8.6m4.3 4.3-4.3-4.3m2.1 2.1L15 9.1m-2.1-2 4.2 4.2"/>
                </svg>
                Edit</button>}
        </li>
    );
};

