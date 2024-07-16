import React from 'react';
import Car from '@/types/type';

interface CarCardProps {
    car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    const firstImage = car.images.length > 0 ? car.images[0] : null;

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 flex flex-col md:flex-row">
            {/* Image Container */}
            <div className="w-80 md:w-100 md:h-auto mr-4 mb-4 md:mb-0">
                {firstImage && (
                    <img
                        src={`cars/${car.id}/${firstImage}`}
                        alt={'Car Image 1'}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                )}
            </div>

            {/* Details Container */}
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{car.name}</h2>

                <div className="md:flex md:space-x-4">
                    {/* Left Column */}
                    <div className="flex-1">
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Carrozzeria:</span>
                                <span className="text-gray-800">{car.carrozzeria}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Carburante:</span>
                                <span className="text-gray-800">{car.carburante}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Immatricolazione:</span>
                                <span className="text-gray-800">{car.immatricolazione} €</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Prezzo:</span>
                                <span className="text-gray-800">{car.prezzo} €</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1">
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Chilometraggio:</span>
                                <span className="text-gray-800">{car.km} km</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Posti:</span>
                                <span className="text-gray-800">{car.posti}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Porte:</span>
                                <span className="text-gray-800">{car.porte}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Classe Emissioni:</span>
                                <span className="text-gray-800">{car.classeEmissioni}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
