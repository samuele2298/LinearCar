"use client"
import CarForm from "@/components/CarForm";
import Car from "@/types/type";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Admin = () => {

    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Stato per gestire l'autenticazione

    /*    const adminUser = process.env.ADMIN_USER;
       const adminPassword = process.env.ADMIN_USER; */

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Esempio di credenziali hardcoded per semplicità
        if (username === '1' && password === '1') {
            setLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    const addCar = async (carData: Omit<Car, 'id'>) => {
        try {
            const response = await fetch('/api/addCar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ car: carData }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Car added successfully:', data);
                // Optionally, redirect or show a success message
            } else {
                const errorData = await response.json();
                console.error('Failed to add car:', errorData.error);
                // Handle error: show alert, redirect, etc.
            }
        } catch (error) {
            console.error('Failed to add car:', error);
            // Handle fetch error
        }
    };


    // Verifica l'autenticazione e reindirizza se non autenticato
    if (!loggedIn) {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }


    return (
        <div className="container  px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Admin Page</h1>
            <p className="text-lg mb-4">Welcome, {username}!</p>
            <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-4"
                onClick={handleLogout}
            >
                Logout
            </button>

            <CarForm onSubmit={addCar} />
        </div>
    );
};

export default Admin;
