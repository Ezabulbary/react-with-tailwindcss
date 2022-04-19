import React, { useState } from 'react';
import Link from './Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Nav = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id:1, name:'Home', link:'./home'},
        {id:2, name:'About', link:'./about'},
        {id:3, name:'Shop', link:'./shop'},
        {id:4, name:'Member', link:'./member'},
        {id:5, name:'Contact', link:'./contact'}
    ]
    return (
        <nav className='bg-black text-white md:grid grid-cols-2 justify-between items-center'>
            <p className='text-4xl md:text-left md:ml-32'>
                Blue Birds
            </p>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 mt-3 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center  ${open ? 'top-14' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}
                        ></Link> )
                }
            </ul>
        </nav>
    );
};

export default Nav;