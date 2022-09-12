import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DeleteProductModal from './DeleteProductModal';

export const ManageTools = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setTools(data)
            })
    }, [tools]);

    return (
        <div className='w-full px-10 my-10 h-full'>
            <h1 className='text-3xl mb-2 text-neutral'>Manage Tools</h1>
            <span className='w-52 h-1 bg-secondary block mb-16'></span>
            {tools.length > 0 ? <table className="table w-full">
                <thead className='text-center text-neutral rounded-lg bg-info border border-secondary' >
                    <tr className=''>
                        <th className='bg-info'>No</th>
                        <th className='bg-info'>Name</th>
                        <th className='bg-info'>Price</th>
                        <th className='bg-info'>Description</th>
                        <th className='bg-info'>Available Qty</th>
                        <th className='bg-info'>Min. Qty</th>
                        <th className='bg-info'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center text-neutral rounded-lg bg-info border border-secondary'>
                    {tools.map(tool => <tr key={tool?._id}>
                        <td className='bg-info'>{tools.indexOf(tool) + 1}</td>
                        <td className='bg-info'>
                            <div class="flex items-center text-left space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src={tool?.image} alt="Product Image" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">{tool?.name}</div>
                                    <div class="text-sm opacity-50">ID: {tool?._id}</div>
                                </div>
                            </div>
                        </td>
                        <td className='bg-info'>${tool?.price}</td>
                        <td className='bg-info'>
                            <p>{tool?.description.slice(0, 50) + '...'}</p>
                        </td>
                        <td className='bg-info'>{tool?.availableQty}</td>
                        <td className='bg-info'>{tool?.minQty}</td>
                        <th className='bg-info'>
                            <label onClick={() => setDeleteProduct(tool)} htmlFor="delete-product-modal" className="btn h-1 modal-button w-24 rounded-lg btn-error">Delete</label>
                        </th>
                    </tr>)
                    }
                </tbody>
            </table> : <p className='text-2xl text-neutral'>Sorry 😞, You don't have any tools</p>}
            {deleteProduct && <DeleteProductModal path="items" deleteProduct={deleteProduct}></DeleteProductModal>}
        </div>
    );
};