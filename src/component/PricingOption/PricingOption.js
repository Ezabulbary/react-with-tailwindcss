import React from 'react';

const PricingOption = (props) => {
    const {name, price} = props.option;
    return (
        <div className='bg-white p-4 rounded'>
            <p className='bg-indigo-200 rounded font-mono font-bold text-xl p-2'>{name}</p>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='font-bold text-gray-500'>/mo</span>
            </p>
        </div>
    );
};

export default PricingOption;