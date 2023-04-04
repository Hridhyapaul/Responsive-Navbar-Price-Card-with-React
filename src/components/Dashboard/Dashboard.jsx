import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const class10 = [
        { id: 1, name: "John", phy: 80, chem: 75, math: 90, eng: 85 },
        { id: 2, name: "Sarah", phy: 95, chem: 90, math: 85, eng: 80 },
        { id: 3, name: "Emily", phy: 70, chem: 80, math: 75, eng: 90 },
        { id: 4, name: "Michael", phy: 85, chem: 75, math: 80, eng: 70 },
        { id: 5, name: "Daniel", phy: 90, chem: 80, math: 70, eng: 85 },
        { id: 6, name: "Ava", phy: 80, chem: 90, math: 85, eng: 95 },
        { id: 7, name: "Jacob", phy: 75, chem: 70, math: 80, eng: 75 },
        { id: 8, name: "Olivia", phy: 85, chem: 80, math: 90, eng: 90 },
        { id: 9, name: "Emma", phy: 90, chem: 95, math: 75, eng: 80 },
        { id: 10, name: "William", phy: 75, chem: 85, math: 80, eng: 75 },
        { id: 11, name: "Mia", phy: 80, chem: 75, math: 85, eng: 90 },
        { id: 12, name: "Ethan", phy: 85, chem: 80, math: 90, eng: 80 },
        { id: 13, name: "Sophia", phy: 90, chem: 95, math: 80, eng: 85 },
        { id: 14, name: "Liam", phy: 75, chem: 80, math: 70, eng: 75 },
        { id: 15, name: "Isabella", phy: 85, chem: 80, math: 90, eng: 90 },
    ];

    return (
        <div className='mt-5'>
            <h1 className='text-2xl md:text-5xl font-medium bg-red-300 py-4 mt-5 mx-5 md:mx-9 rounded-md text-center text-red-900'>Awesome Simple Line Chart</h1>
            <div className='mt-5 container mx-auto'>
            
                <LineChart
                    width={1100}
                    height={300}
                    data={class10}
                >
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line dataKey="phy" stroke='#FF6F61'></Line>
                    <Line dataKey="chem" stroke='#6B5B95'></Line>
                    <Line dataKey="math" stroke='#88B04B'></Line>
                    <Line dataKey="eng" stroke='#F7CAC9'></Line>
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;