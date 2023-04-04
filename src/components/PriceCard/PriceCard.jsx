import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-red-400 pb-14 rounded text-center flex flex-col'>
            <div className='space-y-5 bg-red-500 py-14 rounded-b-[160px] rounded-t-[4px] text-white'>
                <h1 className='text-2xl text-center font-medium'>{price.name}</h1>
                <h1 className='text-center'>
                    <span className=' text-5xl font-bold'>${price.price}</span>
                    <span className='text-2xl'>/mon</span>
                </h1>
            </div>
            <ul className='px-16 my-10'>
                {
                    price.features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </ul>
            <button className='bg-red-500 hover:bg-red-600 py-3 px-4 rounded font-medium text-white mt-auto mx-10'>Buy Now</button>
        </div>
    );
};

export default PriceCard;