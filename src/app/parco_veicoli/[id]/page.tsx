"use client"
import Footer from '@/components/Footer';
import Car from '@/types/type';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function DetailsPage({ params: { id }, }: { params: { id: string; } }) {

    // Assuming you fetch cars from an API or some source
    const [car, setCar] = useState<Car>();

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);


    useEffect(() => {
        // Fetch cars from your API or source
        // Example: Fetching cars from a mock API
        fetch(`/api/cars/${id}`)
            .then(response => response.json())
            .then(data => setCar(data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    console.log(car?.images.length);
    console.log(car?.images[0]);
    console.log(car?.images[1]);


    const handleImageSelect = (index: number) => {
        setSelectedImageIndex(index);
    };

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="max-w-screen-lg mx-auto mt-4 mb-8 p-4">
                <button onClick={() => window.history.back()} className="flex items-center mb-4 px-4 py-2 text-sm text-white bg-primary-std rounded hover:bg-primary-hover">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1 0 1.414l4 4a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 0-1.414z" />
                    </svg>

                </button>
                <h1 className="text-2xl font-bold mb-4">{car.name}</h1>
                <div className="flex">
                    <div className="w-full lg:w-1/2 pr-4">
                        <Carousel
                            showArrows={true}
                            selectedItem={selectedImageIndex}
                            showThumbs={false}
                            onClickItem={(index) => handleImageSelect(index)}
                        >
                            {car.images.map((image, index) => (
                                <div key={`${car.id}-${index}`} className="relative rounded-lg overflow-hidden">
                                    <img
                                        src={`..//cars/${id}/${image}`} // Adjusted src path
                                        alt={`Car Image ${index}`}
                                        className="w-full h-96 object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </Carousel>
                        <div className="flex mt-4">
                            {car.images.map((image, index) => (
                                <div
                                    key={`${car.id}-${index}`}
                                    className={`cursor-pointer border border-gray-300 rounded-lg p-1 mr-2 mb-2 ${index === selectedImageIndex ? 'border-blue-500' : ''}`}
                                    onClick={() => handleImageSelect(index)}
                                >
                                    <img
                                        src={`../cars/${id}/${image}`} // Adjusted src path
                                        alt={`Car Image ${index}`}
                                        className="w-20 h-12 object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 pl-4">
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Dettagli Auto</h2>
                            <p><strong>Immatricolazione:</strong> {car.immatricolazione}</p>
                            <p><strong>Prezzo:</strong> {car.prezzo} €</p>
                            <p><strong>Kilometri:</strong> {car.km} km</p>
                            <p><strong>Posti:</strong> {car.posti}</p>
                            <p><strong>Porte:</strong> {car.porte}</p>
                            <p><strong>Carburante:</strong> {car.carburante}</p>
                        </div>

                    </div>

                </div>
                <div className="mt-12 mb-6">
                    <h2 className="text-xl font-semibold mb-2">Descrizione Completa</h2>
                    <p className="mt-4">{car.descrizioneCompleta}</p>
                </div>

            </div>
            <Footer />
        </div>

    );
}