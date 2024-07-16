"use client"
import CarCard from '@/components/CarCard';
import Footer from '@/components/Footer';
import Car from '@/types/type';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';

const page = 1;
const limit = 5;


// Enum for Carburante (Fuel Type)
enum Carburante {
    Gpl = 'Gpl',
    Benzina = 'Benzina',
    Diesel = 'Diesel',
    Metano = 'Metano',
    Altro = 'Altro',

}

// Enum for Carburante (Fuel Type)
enum Carrozzeria {
    Utilitaria = 'Utilitaria',
    Altro = 'Altro',

}



interface Filters {
    keyword: string;
    minKm: number;
    maxKm: number;
    minPrice: number;
    maxPrice: number;
    carrozzeria: Carrozzeria | '';
    carburante: Carburante | '';
}



const ParcoVeicoli: React.FC = () => {

    // Assuming you fetch cars from an API or some source
    const [cars, setCars] = useState<Car[]>([]);



    const [filters, setFilters] = useState<Filters>({
        keyword: '',
        minKm: 0,
        maxKm: 500000,
        minPrice: 0,
        maxPrice: 100000,
        carrozzeria: '',
        carburante: '',
    });

    const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

    useEffect(() => {
        // Fetch cars from your API or source
        fetch(`/api/cars?_page=${page}&_limit=${limit}`)
            .then((response) => response.json())
            .then((data) => {
                setCars(data);
                setFilteredCars(data); // Initialize filteredCars with all cars
            })
            .catch((error) => console.error('Error fetching cars:', error));
    }, []); // Empty dependency array ensures this runs only once on mount



    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
        filterCars({ ...filters, [name]: value });
    };

    const handleReset = () => {
        setFilters({
            keyword: '',
            minKm: 0,
            maxKm: 500000,
            minPrice: 0,
            maxPrice: 100000,
            carrozzeria: '',
            carburante: '',
        });
        setFilteredCars(cars); // Reset filtered cars to all cars
    };

    const filterCars = (filters: Filters) => {
        // Implement your filtering logic here and update filteredCars state
        let updatedCars = cars.filter((car) => {
            // Filter by keyword
            if (filters.keyword && !car.name.toLowerCase().includes(filters.keyword.toLowerCase())) {
                return false;
            }
            // Filter by km range
            if (car.km < filters.minKm || car.km > filters.maxKm) {
                return false;
            }
            // Filter by price range
            if (car.prezzo < filters.minPrice || car.prezzo > filters.maxPrice) {
                return false;
            }
            // Filter by carrozzeria
            if (filters.carrozzeria && car.carrozzeria !== filters.carrozzeria) {
                return false;
            }
            // Filter by carburante
            if (filters.carburante && car.carburante !== filters.carburante) {
                return false;
            }
            return true;
        });

        setFilteredCars(updatedCars); // Update filteredCars state with filtered results
    };


    return (
        <>
            <div className="flex flex-col lg:flex-row">
                {/* Left Section: Search Filters */}
                <div className="lg:w-1/3 p-4">
                    <div className="w-80 p-4 border rounded-md">
                        <div className="flex items-center mb-4">
                            <h2 className="text-lg font-semibold mr-2">Cerca</h2>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="flex items-center px-3 py-1 text-sm text-gray-700 focus:outline-none"
                            >
                                <FaSyncAlt className="mr-1 text-sm text-black" />
                                Reset
                            </button>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            {/* Keyword Search */}
                            <input
                                type="text"
                                name="keyword"
                                value={filters.keyword}
                                onChange={handleInputChange}
                                placeholder="Cerca per nome..."
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            />

                            {/* Price Range */}
                            <div className="flex space-x-4">
                                <div className="flex-1 space-y-2">
                                    <label className="block text-sm font-semibold">Min Prezzo (€)</label>
                                    <select
                                        name="minPrice"
                                        value={filters.minPrice}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                                    >
                                        <option value="0">0</option>
                                        <option value="5000">5000</option>
                                        <option value="10000">10000</option>
                                        <option value="15000">15000</option>
                                        <option value="20000">20000</option>
                                    </select>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <label className="block text-sm font-semibold">Max Prezzo (€)</label>
                                    <select
                                        name="maxPrice"
                                        value={filters.maxPrice}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                                    >
                                        <option value="30000">30000</option>
                                        <option value="50000">50000</option>
                                        <option value="100000">100000</option>
                                        <option value="200000">200000</option>
                                    </select>
                                </div>
                            </div>

                            {/* Km Range */}
                            <div className="flex space-x-4">
                                <div className="flex-1 space-y-2">
                                    <label className="block text-sm font-semibold">Min Km</label>
                                    <select
                                        name="minKm"
                                        value={filters.minKm}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                                    >
                                        <option value="0">0</option>
                                        <option value="50000">50000</option>
                                        <option value="100000">100000</option>
                                        <option value="200000">200000</option>
                                    </select>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <label className="block text-sm font-semibold">Max Km</label>
                                    <select
                                        name="maxKm"
                                        value={filters.maxKm}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                                    >
                                        <option value="200000">200000</option>
                                        <option value="300000">300000</option>
                                        <option value="500000">500000</option>
                                    </select>
                                </div>
                            </div>

                            {/* Carburante (Fuel Type) */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold">Carburante</label>
                                <select
                                    name="carburante"
                                    value={filters.carburante}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">-</option>
                                    {Object.values(Carburante).map((carburante) => (
                                        <option key={carburante} value={carburante}>
                                            {carburante}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Carrozzeria (Body Style) */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold">Carrozzeria</label>
                                <select
                                    name="carrozzeria"
                                    value={filters.carrozzeria}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">-</option>
                                    {Object.values(Carrozzeria).map((carrozzeria) => (
                                        <option key={carrozzeria} value={carrozzeria}>
                                            {carrozzeria}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Section: Car Cards */}
                <div className="lg:w-2/3 p-4 overflow-y-auto">
                    <div className="max-w-5xl mx-auto">
                        {/* Car Cards List */}
                        <div className="space-y-4">
                            {filteredCars.map((car) => (
                                <div key={car.id}>
                                    <CarCard car={car} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};



export default ParcoVeicoli;
