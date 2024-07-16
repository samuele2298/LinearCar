"use client"
import Footer from '@/components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useEffect, useState } from 'react';
import Car from '@/types/type';
import Link from 'next/link';

const page = 1;
const limit = 5;

const Home: React.FC = () => {


    // Assuming you fetch cars from an API or some source
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        // Fetch cars from your API or source
        // Example: Fetching cars from a mock API
        fetch(`/api/cars?_page=${page}&_limit=${limit}`)
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    const handleSlideChange = (index: number) => {
        console.log('Slide changed to index:', index);
    };



    return (
        <>
            {/* banner */}

            <div className="bg-primary-std px-4 py-3 text-white">
                <p className="text-center text-sm font-medium">
                    Nuova Opel Corsa in offerta!
                    <a href="/parco_veicoli" className="inline-block underline"> Vai a vederla!</a>
                </p>
            </div>


            {cars.length > 0 && (
                <>

                    <div className="mt-8 mb-8 mr-4 ml-4   relative">
                        <Carousel
                            showArrows={true}
                            selectedItem={0}
                            onChange={handleSlideChange}
                            showThumbs={false}
                            showIndicators={false}
                        >
                            {cars.map((car) => (
                                <div key={car.id} className="relative rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        src={`cars/${car.id}/${car.images[0]}`}
                                        alt={`Car Image ${car.id}`}
                                        className="w-full h-auto rounded-lg object-cover"
                                        style={{ maxHeight: '600px' }} // Example size adjustment
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-70 text-white">
                                        <h3 className="text-sm font-bold">{car.name}</h3>
                                        <p className="text-sm font-bold">Prezzo: {car.prezzo} €</p>
                                        <p className="text-sm font-semibold">KM: {car.km} km</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>



                </>
            )}

            {/* Stats */}
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">

                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-xl font-medium text-gray-500">Anni di esperienza</dt>

                        <dd className="text-6xl font-extrabold text-primary-std md:text-5xl">24</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-xl font-medium text-gray-500">Mesi garanzia</dt>

                        <dd className="text-6xl font-extrabold text-primary-std md:text-5xl">12</dd>
                    </div>


                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-xl font-medium text-gray-500">Clienti</dt>

                        <dd className="text-6xl font-extrabold text-primary-std md:text-5xl">846</dd>
                    </div>
                </dl>

            </div>


            {/* get started */}
            <section className="overflow-hidden bg-white sm:grid sm:grid-cols-2">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Venienici a trovare a Mirandola!                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            Scopri il nostro parco veicoli.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <Link href="/parco_veicoli"
                                className="inline-block rounded bg-primary-std px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Inizia a cercare
                            </Link>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src="bg/2.jpg"
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section>




            {/* Testimonials */}
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Leggi le recensioni dei nostri clienti
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="size-14 rounded-full object-cover"
                            />

                            <div>
                                <div className="flex justify-center gap-0.5 text-primary-std">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                </div>

                                <p className="mt-0.5 text-lg font-medium text-gray-900">Mario Rossi</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            Ho recentemente acquistato una Honda Civic del 2018 da questo sito e non potrei essere più soddisfatto della mia decisione. L'auto era in condizioni eccellenti, proprio come descritto nell'annuncio. Il servizio clienti è stato impeccabile e mi hanno aiutato in ogni fase del processo. Consigliatissimo!
                        </p>
                    </blockquote>

                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="size-14 rounded-full object-cover"
                            />

                            <div>
                                <div className="flex justify-center gap-0.5 text-primary-std">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                </div>

                                <p className="mt-0.5 text-lg font-medium text-gray-900">Luca Bianchi</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            Comprare un'auto online può essere scoraggiante, ma questo sito ha reso il processo così semplice e senza problemi. Ho comprato una Toyota Camry del 2016 ed è perfetta. Le descrizioni dettagliate e le foto erano molto accurate. Comprerei sicuramente di nuovo da qui!
                        </p>
                    </blockquote>

                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="size-14 rounded-full object-cover"
                            />

                            <div>
                                <div className="flex justify-center gap-0.5 text-primary-std">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                </div>

                                <p className="mt-0.5 text-lg font-medium text-gray-900">Giulia Verdi</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            Ero un po' scettica sull'acquisto di un'auto usata online, ma questo sito ha superato le mie aspettative. Ho trovato un'ottima offerta per una Ford Escape del 2017. L'auto era in ottime condizioni e perfetta per le mie esigenze. Il personale è stato cordiale e molto disponibile. Esperienza fantastica!
                        </p>
                    </blockquote>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default Home;
