'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-black text-white shadow-md p-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container p-10 mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold">
          <span className="text-green-500">{'{'}</span> Daniel A. F. <span className="text-green-500">{'}'}</span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="#about" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            <p className='text-2xl'>About</p>
          </Link>
          <Link href="#projects" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full">
            <p className='text-2xl'>Projects</p>
          </Link>
          <Link href="#contact" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            <p className='text-2xl'>Contact</p>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="#about" className="block px-4 py-2 text-2xl">About</Link>
          <Link href="#projects" className="block px-4 py-2 text-2xl">Projects</Link>
          <Link href="#contact" className="block px-4 py-2 text-2xl">Contact</Link>
        </div>
      )}
    </nav>
  );
}