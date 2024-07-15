"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Map from '@/components/Map';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react';

const Home: React.FC = () => {

    const router = useRouter();

    const navigateToDoveSiamo = () => {
        router.push('/dove_siamo');
    };

    return (
        <>
            <Header />
            <Link href="/parco_veicoli">
                Parco Veicoli
            </Link>
            <Link href="/azienda">
                Azienda
            </Link>
            <Link href="/dove_siamo">
                Dove_siamo
            </Link>
            <Footer />
        </>
    );
};

export default Home;
