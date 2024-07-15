"use client"
import React from 'react';

const Map = () => {
    return (
        <div className="flex justify-center items-center mt-6 mb-6 ">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176.57432849953165!2d11.1043622051004!3d44.919486676152395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f99cdb5493b2f%3A0xff1458583fa9660a!2sRibuoli%20Lidia!5e0!3m2!1sit!2sit!4v1721079700893!5m2!1sit!2sit"
                style={{
                    border: 0,
                    width: '100%',
                    maxWidth: '90vw',
                    height: '90vh',
                    maxHeight: '600px'
                }}
                aria-hidden="false"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="lg:w-90 md:w-40"

            ></iframe>
        </div>
    );
};

export default Map;


