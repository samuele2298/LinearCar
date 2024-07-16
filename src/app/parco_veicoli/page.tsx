"use client"
import CarCard from '@/components/CarCard';
import Footer from '@/components/Footer';
import SearchBox from '@/components/SearchBox';
import Car from '@/types/type';
import React, { useEffect, useState } from 'react';

const page = 1;
const limit = 5;

const ParcoVeicoli: React.FC = () => {

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


    const handleSearch = (filteredCars: Car[]) => {
        // Handle filtered cars here, e.g., update state, pass to another component, etc.
        console.log('Filtered cars:', filteredCars);
        // Example: Set filtered cars to state
        // setFilteredCars(filteredCars);
    };



    return (
        <div>
            <div className="flex">
                {/* Left Section: Search Filters */}
                <SearchBox cars={cars} onSearch={handleSearch} />
                {/* Right Section: Vertically Stacked Recipes List */}
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="max-w-5xl mx-auto">
                        {/* Recipes List */}
                        <div className="space-y-4">
                            {/* {searchResults.map(recipe => (
                                <div key={recipe.id}>
                                    <RecipeSearchCard recipe={recipe} />
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Recipes List */}
                    <div className="space-y-4">
                        {cars.map(car => (
                            <div key={car.id}>
                                <CarCard car={car} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />

        </div>

    );
};



export default ParcoVeicoli;
