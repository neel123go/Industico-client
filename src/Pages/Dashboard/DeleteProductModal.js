import React from 'react';
import toast from 'react-hot-toast';
import AlertImg from '../../assets/11132.jpg';

const DeleteProductModal = ({ deleteProduct }) => {
    const { _id } = deleteProduct;
    const handleCancelOrder = (id) => {
        fetch(`http://localhost:5000/items/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast('Product deleted successfully',
                        {
                            icon: '✅',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        });
                } else {
                    toast('Something went wrong! Please try again',
                        {
                            icon: '❌',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        }
                    );
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-product-modal" className="modal-toggle" />
            <div className="modal bg-transparent">
                <div className="modal-box bg-base-100">
                    <label htmlFor="delete-product-modal" className='bg-slate-200 rounded-full p-2 top-3 right-3 absolute cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </label>
                    <div className="avatar">
                        <div className="w-2/3 mx-auto rounded">
                            <img src={AlertImg} alt="" />
                        </div>
                    </div>
                    <h3 className="text-2xl text-primary text-center">Are You sure to delete this product</h3>
                    <div className="modal-action">
                        <label onClick={() => handleCancelOrder(_id)} htmlFor="delete-product-modal" className="btn btn-sm bg-slate-200 text-primary">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;