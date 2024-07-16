import Car from '@/types/type';
import { NextRequest } from 'next/server';

const db = require('@/../db.json');


// GET Handler to fetch specific recipe 
export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
    try {
        const { id } = params;

        if (!id || id === undefined || id < 0) {
            return new Response(JSON.stringify({ error: 'Car ID is required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }
        const car = db.cars.find((car: Car) => car.id == id);

        if (!car) {
            return new Response(JSON.stringify({ error: 'Car not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify(car), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error fetching recipe:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}


