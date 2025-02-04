'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      <div className="container p-10 mx-auto flex flex-col md:flex-row justify-between items-center ">
        <Link href="/" className="text-4xl font-bold text-nowrap">
          <span className="text-green-500">{'{'}</span> Daniel A. F. <span className="text-green-500">{'}'}</span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="#about" className="relative group">
            <span className="text-2xl">About</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm p-1 rounded">About</span>
          </Link>
          <Link href="#projects" className="relative group">
            <span className="text-2xl">Projects</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm p-1 rounded">Projects</span>
          </Link>
          <Link href="#contact" className="relative group">
            <span className="text-2xl">Contact</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm p-1 rounded">Contact</span>
          </Link>
        </div>
        <div className="flex absolute top-2/3 md:hidden gap-6 mt-4">
          <Link href="#about" className=" relative group">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm p-1 rounded">About</span>
          </Link>
          <Link href="#projects" className=" group">
            <FontAwesomeIcon icon={faProjectDiagram} className="text-2xl" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm p-1 rounded">Projects</span>
          </Link>
          <Link href="#contact" className=" group">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm p-1 rounded">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}