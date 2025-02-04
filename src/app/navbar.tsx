"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Navbar() { 
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
        setIsVisible(false);
        } else {
        setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
        window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);
    
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-black text-white shadow-md p-4 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
            
            <div className="container p-10  mx-auto flex justify-between items-center">
                <Link href="/" className="text-4xl font-bold">
                    Daniel A F.
                </Link>
                <ul className="flex gap-6 ">
                <li>
                    <Link href="#about" className="relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        <p className='text-2xl'>About</p>
                    </Link>
                </li>
                <li>
                    <Link href="#projects" className="relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        <p className='text-2xl'>Projects</p>
                    </Link>
                </li>
                <li>
                        <Link href="#contact" className="relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                            <p className='text-2xl'>Contact</p>
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}