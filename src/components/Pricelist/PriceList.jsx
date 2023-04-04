import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl md:text-5xl font-medium bg-red-300 py-4 mt-5 mx-5 md:mx-9 rounded-md text-center text-red-900'>Awesome Affordable Prices</h1>
            <div className='grid md:grid-cols-3 gap-8 md:container md:mx-auto mt-5 mx-5'>
                {
                    prices.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;