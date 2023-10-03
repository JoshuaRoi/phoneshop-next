import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

    const links = [{
        name: 'Brands',
        link: '/brands',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Contact',
        link: '/contact',
    }]

    return (
        <nav className='h-50 bg-black flex p-3 w-full justify-around'>
            <div className='w-1/12 min-h-fullspace-x-5' >
                <Link href='/' className='flex p-1 space-x-2 items-center'>
                    <Image
                        src="/images/Icon.png"
                        width={70}
                        height={70}
                        alt="Icon"
                    />
                    <div className='flex flex-col'>
                        <div className='text-white font-bold text-3xl tracking-widest'>
                            PHONE
                        </div>
                        <div className='text-white font-bold text-3xl tracking-widest'>
                            SHOP
                        </div>
                    </div>
                </Link>
            </div>
            <div className='w-8/12'>
                <ul className='flex flex-row h-full text-white font-bold items-stretch'>
                    {links.map(l => (
                        <Link href={l.link} key={l.name} className='flex items-center w-40 justify-center'>
                            <li >
                                {l.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className='w-2/12'>
                <ul className='flex flex-row h-full items-center justify-end gap-10 px-2 text-white font-bold'>
                    <li>
                        <Link href='/' className='flex p-1 space-x-2 items-center'>
                            <Image
                                src="/images/Search.png"
                                width={30}
                                height={30}
                                alt="Search"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href='/' className='flex p-1 space-x-2 items-center'>
                            <Image
                                src="/images/ShoppingCart.png"
                                width={30}
                                height={30}
                                alt="Icon"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href='/' className='flex p-1 space-x-2 items-center'>
                            <Image
                                src="/images/User.png"
                                width={30}
                                height={30}
                                alt="Icon"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}
