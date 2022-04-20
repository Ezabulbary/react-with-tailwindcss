import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const options = [
        {id:1, name:'Free', price:0},
        {id:2, name:'Regular', price:9.99},
        {id:3, name:'Premium', price:19.99}
    ]
    return (
        <div className='bg-indigo-200 p-6'>
            <h1 className='text-6xl text-white'>Welcome to my pricing club</h1>
            <div className='grid md:grid-cols-3 gap-4 my-8'>
                {
                    options.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;