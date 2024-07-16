import { NextRequest, NextResponse } from 'next/server';

import Car from '@/types/type';
import fs from 'fs';
import path from 'path';

const db = require('@/../db.json');

// Function to write to db.json
const writeToDB = (data: Car[]) => {
    fs.writeFileSync(path.resolve('./public/db.json'), JSON.stringify(data, null, 2));
};

// Function to generate a new unique ID for comments as string
const generateNewCarId = (cars: Car[]): string => {
    // Sort comments by ID in descending order to get the latest ID
    const sortedCar = cars.slice().sort((a, b) => b.id - a.id);
    const lastCar = sortedCar[0]; // Get the comment with the highest ID

    const lastId = lastCar ? lastCar.id : '0'; // Default to '0' if no comments
    const newId = String(Number(lastId) + 1); // Convert the sum to string
    return newId;
};

// GET Handler to fetch adn filter recipes
export async function GET(req: NextRequest) {
    try {

        // Extract query parameters from the request URL
        const searchParams = new URL(req.nextUrl).searchParams;

        // Extract individual query parameters
        const _page = searchParams.get('_page');
        const _limit = searchParams.get('_limit');
        const q = searchParams.get('q');
        const maxKM = searchParams.get('maxKM');
        const minKM = searchParams.get('minKM');
        const maxPrice = searchParams.get('maxPrice');
        const minPrice = searchParams.get('minPrice');
        const _expand = searchParams.getAll('_expand');

        // Convert _page and _limit to numbers, with defaults if not provided
        const page = _page ? parseInt(_page as string, 10) : 1;
        const limit = _limit ? parseInt(_limit as string, 10) : 10;

        // Filter recipes based on query parameters
        var filteredCars: Car[] = [...db.cars];

        if (q) {
            // Perform full text search filtering (assuming 'q' filters by recipe name or similar)
            const query = q.toString().toLowerCase();
            filteredCars = filteredCars.filter(car =>
                car.name.toLowerCase().includes(query)
            );
        }

        if (maxKM) {
            // Filter recipes by cuisineId
            filteredCars = filteredCars.filter(car =>
                car.km < Number(maxKM)
            );
        }

        if (minKM) {
            // Filter recipes by dietId
            filteredCars = filteredCars.filter(car =>
                car.km > Number(minKM)
            );
        }

        if (maxPrice) {
            // Filter recipes by difficultyId
            filteredCars = filteredCars.filter(car =>
                car.prezzo > Number(maxPrice)
            );
        }

        if (minPrice) {
            // Filter recipes by difficultyId
            filteredCars = filteredCars.filter(car =>
                car.prezzo > Number(minPrice)
            );
        }



        // Paginate the filtered recipes
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedCars = filteredCars.slice(startIndex, endIndex);

        return NextResponse.json(paginatedCars, { status: 200 });
    } catch (error) {
        console.error('Error fetching cars:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// POST Handler to add a new recipe 
export async function POST(req: NextRequest) {
    try {

        const newRecipe = await req.json();
        newRecipe.id = generateNewCarId(db.cars);

        // Add the new comment to the comments array
        db.recipes.push(newRecipe);

        // Write updated data back to db.json
        writeToDB(db);

        return NextResponse.json(newRecipe, { status: 201 });
    } catch (error) {
        console.error('Error adding recipe:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}