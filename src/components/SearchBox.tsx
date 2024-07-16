"use client"
import React, { useState, ChangeEvent } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import Car, { Carrozzeria } from '@/types/type'; // Adjust the import path as per your project structure

interface Filters {
    keyword: string;
    kmRange: string;
    priceRange: string;
    carrozzeria: string;
    carburante: string;
}

interface SearchBoxProps {
    cars: Car[];
    onSearch: (filteredCars: Car[]) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ cars, onSearch }) => {
    const [filters, setFilters] = useState<Filters>({
        keyword: '',
        kmRange: '0-100000',
        priceRange: '0-100000',
        carrozzeria: 'Altro',
        carburante: 'Altro',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
        filterCars({ ...filters, [name]: value });
    };

    const handleReset = () => {
        setFilters({
            keyword: '',
            kmRange: '0-100000',
            priceRange: '0-100000',
            carrozzeria: 'Altro',
            carburante: 'Altro',
        });
        onSearch(cars); // Reset to show all cars
    };

    const filterCars = (filters: Filters) => {
        // Implement your filtering logic here and call onSearch with filtered cars
        const filteredCars = cars.filter((car) => {
            // Example: Filter by keyword
            if (filters.keyword && !car.name.toLowerCase().includes(filters.keyword.toLowerCase())) {
                return false;
            }
            // Example: Filter by kmRange
            const [kmMin, kmMax] = filters.kmRange.split('-').map(Number);
            if (car.km < kmMin || car.km > kmMax) {
                return false;
            }
            // Example: Filter by priceRange
            const [priceMin, priceMax] = filters.priceRange.split('-').map(Number);
            if (car.prezzo < priceMin || car.prezzo > priceMax) {
                return false;
            }
            // Example: Filter by carrozzeria
            if (filters.carrozzeria !== 'Altro' && car.carrozzeria !== filters.carrozzeria) {
                return false;
            }
            // Example: Filter by carburante
            if (filters.carburante !== 'Altro' && car.carburante !== filters.carburante) {
                return false;
            }
            return true;
        });
        onSearch(filteredCars);
    };


    return (
        <div className="w-80 p-4 border rounded-md">
            <div className="flex items-center mb-4">
                <h2 className="text-lg font-semibold mr-2">Cerca</h2>
                <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center px-3 py-1 text-sm text-gray-700  focus:outline-none"
                >
                    <FaSyncAlt className="mr-1 text-sm text-black" />

                </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input
                    type="text"
                    name="keyword"
                    value={filters.keyword}
                    onChange={handleInputChange}
                    placeholder="Cerca per nome..."
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />

                <div className="flex space-x-4">
                    {/* Kilometers Range Slider */}
                    <div className="flex-1 space-y-2">
                        <label className="block text-sm font-semibold">Range KM</label>
                        <select
                            name="kmRange"
                            value={filters.kmRange}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        >
                            <option value="0-50000">0 - 50k</option>
                            <option value="50000-100000">50k - 100k</option>
                            <option value="100000-200000">100k - 200k</option>
                            <option value="200000-300000">200k - 300k</option>

                        </select>
                    </div>

                    {/* Price Range Slider */}
                    <div className="flex-1 space-y-2">
                        <label className="block text-sm font-semibold">Range Prezzo</label>
                        <select
                            name="priceRange"
                            value={filters.priceRange}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        >
                            <option value="0-1000">0 € - 1k €</option>
                            <option value="1000-2000">1k € - 2k€</option>
                            <option value="2000-4000">2k € - 4k€</option>
                            <option value="4000-8000">4k € - 8k €</option>
                            <option value="8000-10000">8k € - 10k €</option>
                            <option value="10000-30000">10k € - 30k€</option>
                        </select>
                    </div>
                </div>


                {/* Carrozzeria (Body Style) */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold">Carrozzeria</label>
                    <select className="select w-full max-w-xs">
                        <option disabled selected>Pick your favorite Simpson</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default SearchBox;
