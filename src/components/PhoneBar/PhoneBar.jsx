import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data
                console.log(loadedData)
                const phonesData = loadedData.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1])
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })
                console.log(phonesData)
                setPhones(phonesData)
            })
    }, [])
    return (
        <div>
            <h1 className='text-2xl md:text-5xl font-medium bg-red-300 py-4 mt-5 mx-5 md:mx-9 rounded-md text-center text-red-900'>Awesome Tiny Bar Chart</h1>
            <div>
                    <BarChart width={1500} height={500} data={phones}>
                        <XAxis dataKey='name'></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Cell></Cell>
                        <Bar dataKey="price" fill="#8884d8" />
                    </BarChart>

            </div>
        </div>
    );
};

export default PhoneBar;