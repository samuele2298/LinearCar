"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu(): void {
        setMenuOpen(!menuOpen);
    }


    return (
        <header className="bg-white mt-2 sticky top-0 shadow-md z-10">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-2">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-primary-600" href="#">
                            <span className="sr-only">Home</span>
                            <img src="/logo.png" alt="Logo" className="h-24" />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link href="/" className="text-gray-500 transition hover:text-gray-500/75">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/parco_veicoli" className="text-gray-500 transition hover:text-gray-500/75">
                                        Parco Veicoli
                                    </Link>
                                </li>



                                <li>
                                    <Link href="/dove_siamo" className="text-gray-500 transition hover:text-gray-500/75">
                                        Dove Siamo
                                    </Link>
                                </li>


                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                href={`https://wa.me/${process.env.PHONE_NUMBER}`}
                                className="flex items-center rounded-md bg-primary-std px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover shadow-md"
                            >
                                <img src="/whatsapp.svg" alt="Whatsapp" className="h-3  mr-2" />
                                Whatsapp
                            </a>



                            <a
                                href={`tel:${process.env.PHONE_NUMBER}`}
                                className="hidden md:flex items-center rounded-md bg-secondary-std px-5 py-2.5 text-sm font-medium text-white hover:bg-secondary-hover shadow-md"
                            >
                                <img src="/phone.svg" alt="Whatsapp" className="h-3  mr-2" />
                                Phone
                            </a>
                        </div>

                        <div className="block md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Curtain Menu */}
                    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                        <div className="flex items-center justify-center h-full">
                            <div className="flex flex-col items-center justify-center text-white text-center">

                                <Link
                                    href="/"
                                    className="rounded-md px-5 py-2.5 text-sm font-medium mb-4 hover:bg-gray-600"
                                    style={{ fontSize: '1.8rem' }} >

                                    Home
                                </Link>
                                <Link
                                    href="/parco_veicoli"
                                    className="rounded-md px-5 py-2.5 text-sm font-medium mb-4 hover:bg-gray-600"
                                    style={{ fontSize: '1.8rem' }} >

                                    Parco Veicoli
                                </Link>


                                <Link
                                    href="/dove_siamo"
                                    className="rounded-md px-5 py-2.5 text-sm font-medium mb-4 hover:bg-gray-600"
                                    style={{ fontSize: '1.8rem' }} >

                                    Dove Ci Trovi

                                </Link>

                                <div className="flex items-center gap-4 mt-4">
                                    <a
                                        href={`https://wa.me/${process.env.PHONE_NUMBER}`}
                                        className="rounded-md bg-primary-std px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover"
                                        style={{ fontSize: '1rem' }}
                                    >
                                        <img src="/whatsapp.svg" alt="Whatsapp" className="h-6" />
                                    </a>
                                    <a
                                        href={`tel:${process.env.PHONE_NUMBER}`}
                                        className="rounded-md bg-secondary-std px-5 py-2.5 text-sm font-medium text-white hover:bg-secondary-hover"
                                        style={{ fontSize: '1rem' }}
                                    >
                                        <img src="/phone.svg" alt="Phone" className="h-6" style={{ fill: 'white' }} />

                                    </a>
                                </div>
                                <button
                                    onClick={toggleMenu}
                                    className="text-white rounded-lg p-2 m-4 hover:bg-gray-600"
                                    style={{ fontSize: '2rem' }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}
export default Header;

