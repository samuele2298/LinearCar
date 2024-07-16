// components/Header.tsx
import Azienda from '@/components/Azienda';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Map from '@/components/Map';

import React from 'react';

const Dove_siamo: React.FC = () => {
    return (
        <>
            <Azienda />
            <Map />
            <Footer />

        </>
    );
};

export default Dove_siamo;
