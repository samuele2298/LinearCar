"use client"
import React from 'react';

const Map = () => {
    return (
        <div className="flex justify-center items-center mt-6 mb-6 ">


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89547.27762957105!2d9.095160786104868!3d45.46270410452954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilano%20MI!5e0!3m2!1sit!2sit!4v1722246536806!5m2!1sit!2sit"

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
                className="lg:w-90 md:w-40">

            </iframe>
        </div>
    );
};

export default Map;


