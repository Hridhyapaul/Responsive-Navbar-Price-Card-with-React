import React from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About Us", path: "/about" },
        { id: 3, name: "Contact Us", path: "/contact" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Services", path: "/services" },
    ];
    return (
        <div className='bg-purple-500 py-3 md:py-0 md:mx-0'>
            <div onClick={() => setOpen(!open)}>
                <span>{open === true ? <XMarkIcon className="first-letter:first-line:h-8 w-8 text-white md:hidden ms-5 z-10" /> : <Bars3Icon className="h-8 w-8 text-white md:hidden ms-5 " />}</span>
            </div>

            <ul className={`md:flex bg-purple-600 md:bg-purple-500 pt-0 pb-2 md:py-6 container md:mx-auto text-center absolute duration-500 md:sticky z-10 ${open ? 'top-14' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;