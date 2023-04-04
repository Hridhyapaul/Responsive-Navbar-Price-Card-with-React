import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div>
            <div className='text-center'>
                {/* <CheckCircleIcon className="h-6 w-6 text-white mx-auto" /> */}
                <h1 className='text-lg my-4 font-medium'>{feature}</h1>
            </div>
            <hr className="h-px bg-gray-300 border-0 w-56 mx-auto"/>
        </div>
    );
};

export default Feature;