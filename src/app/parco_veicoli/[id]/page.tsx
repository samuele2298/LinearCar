"use client"
import Footer from '@/components/Footer';
import Car from '@/types/type';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


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
        return (
            <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    }

    return (
        <div>

            <div className="flex  flex-row justify-between max-w-screen-lg mx-auto mt-2 p-4">
                <button onClick={() => window.history.back()}
                    className="flex items-center px-4 py-2 mb-2 lg:mb-0 text-sm text-white bg-secondary-std rounded hover:bg-secondary-hover">
                    {/*                     <img src="/arrow-back.svg" alt="Arrow Back" className="h-2 mr-2" />
 */}                    Torna Indietro
                </button>

                <Link
                    href={`https://api.whatsapp.com/send?text=Check out this car listing: ${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2  mb-2 lg:mb-0 text-sm text-white bg-primary-std rounded hover:bg-primary-hover">
                    <img src="/whatsapp.svg" alt="Whatsapp" className="h-5 mr-2" />
                    Condividi su Whatsapp
                </Link>
            </div>
            <div className="max-w-screen-lg mx-auto mb-8 p-4">


                <h1 className="text-3xl font-bold mb-8">{car.name}</h1>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/4 pr-0 lg:pr-4">
                        <Carousel
                            showArrows={true}
                            selectedItem={selectedImageIndex}
                            showThumbs={false}
                            onClickItem={(index) => handleImageSelect(index)}
                        >
                            {car.images.map((image, index) => (
                                <div key={`${car.id}-${index}`} className="relative rounded-lg overflow-hidden">
                                    <img
                                        src={`../cars/${id}/${image}`} // Adjusted src path
                                        alt={`Car Image ${index}`}
                                        className="w-full h-96 object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </Carousel>
                        <div className="flex mt-4 overflow-x-auto">
                            {car.images.map((image, index) => (
                                <div
                                    key={`${car.id}-${index}`}
                                    className={`cursor-pointer border border-gray-300 rounded-lg p-1 mr-2 mb-2 ${index === selectedImageIndex ? 'border-blue-500' : ''}`}
                                    onClick={() => handleImageSelect(index)}
                                >
                                    <img
                                        src={`../cars/${id}/${image}`} // Adjusted src path
                                        alt={`Car Image ${index}`}
                                        className="w-16 h-10 object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4 pl-0 lg:pl-4 mt-4 lg:mt-0">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold mb-6">Dettagli Auto</h2>
                            <p ><strong>Immatricolazione:</strong> {car.immatricolazione}</p>
                            <hr className="my-4" />
                            <p><strong>Kilometri:</strong> {car.km} km</p>
                            <hr className="my-4" />
                            <p ><strong>Posti:</strong> {car.posti}</p>
                            <hr className="my-4" />
                            <p><strong>Porte:</strong> {car.porte}</p>
                            <hr className="my-4" />
                            <p ><strong>Carburante:</strong> {car.carburante}</p>
                            <hr className="my-4" />
                            <p ><strong>Cambio:</strong> {car.cambio}</p>
                            <hr className="my-4" />
                            <p ><strong>Carrozzeria:</strong> {car.carrozzeria}</p>
                            <hr className="my-4" />
                            <p ><strong>Motore:</strong> {car.motore}</p>
                            <hr className="my-4" />                            <p className="mb-4 mt-4"><strong>Carrozzeria:</strong> {car.carrozzeria}</p>

                            <p ><strong>Garanzia:</strong> 12 mesi</p>
                            <hr className="my-4" />
                            <p ><strong>Classe Emissioni:</strong>{car.classeEmissioni}</p>
                            <hr className="my-4" />
                            <p ><strong>Consumo:</strong>{car.consumo}</p>
                            <hr className="my-4" />
                            <p ><strong>Prezzo: </strong> <span className="text-3xl font-bold text-primary-std"> {car.prezzo} €</span></p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-4  lg:ml-4 p-4">
                <h2 className="text-xl font-semibold mb-2">Descrizione Completa</h2>
                <div className="mt-2 ">
                    {car.descrizioneCompleta.split('-').map((segment, index) => (
                        <p key={index}>{index > 0 ? `-${segment.trim()}` : segment.trim()}</p>
                    ))}
                </div>
            </div>



            {/* CTA */}
            <div className="p-10 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <div className=" ">
                        <a
                            href={`tel:${process.env.PHONE_NUMBER}`}
                            className="flex items-center justify-center rounded bg-emerald-600 px-6 md:px-12 py-3 text-sm md:text-base font-medium text-white transition duration-300 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            <img src="/whatsapp.svg" alt="Whatsapp" className="h-5 md:h-5 mr-2" />
                            <span className="text-sm md:text-lg"> Chiedi se è ancora disponibile!</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}