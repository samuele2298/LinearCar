import Car from '@/types/type';
import ItarateUpload from './ItarateUpload';
import React, { useState, ChangeEvent, FormEvent } from "react";



interface CarFormProps {
    onSubmit: (carData: Omit<Car, 'id'>) => void;
}

const CarForm: React.FC<CarFormProps> = ({ onSubmit }) => {
    const [carData, setCarData] = useState<Omit<Car, 'id'>>({
        name: '',
        images: [],
        cambio: '',
        carrozzeria: 'Berlina',
        motore: '',
        colore: 'Bianco',
        garanzia: '',
        prezzo: 0,
        classeEmissioni: 'Euro 4',
        posti: 5,
        km: 0,
        consumo: '',
        descrizioneCompleta: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCarData({ ...carData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(carData);
        resetForm();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const imagesArray: string[] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                // Example: Assuming you want to store images in public/cars/{id}/
                const imagePath = `/cars/${carData.id}/${file.name}`;
                imagesArray.push(imagePath);
                // You may want to upload the file to a server or save locally using File API
                // For demonstration purposes, we're just storing the path in state
            }
            // Append new images to existing images array
            setCarData((prevData) => ({
                ...prevData,
                images: [...prevData.images, ...imagesArray],
            }));
        }
    };

    const resetForm = () => {
        setCarData({
            name: '',
            images: [],
            cambio: '',
            carrozzeria: 'Berlina',
            motore: '',
            colore: 'Bianco',
            garanzia: '',
            prezzo: 0,
            classeEmissioni: 'Euro 4',
            posti: 5,
            km: 0,
            consumo: '',
            descrizioneCompleta: '',
        });
    };

    const [singleFile, setSingleFile] = useState<string[]>([]);

    const uploadSingleFiles = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray: string[] = Array.from(files).map((file) => URL.createObjectURL(file));
            setSingleFile((prevFiles) => [...prevFiles, ...fileArray]);
        }
    };

    const uploadFiles = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(singleFile);
    };

    const removeImage = (index: number) => {
        setSingleFile((prevFiles) =>
            prevFiles.filter((_, fileIndex) => fileIndex !== index)
        );
    };


    return (

        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={carData.name}
                            onChange={handleInputChange}
                            required
                            className="form-input mt-1 block w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <form onSubmit={uploadFiles}>
                            <div className="container">
                                <h1 className="mb-3">Add Image one by one</h1>
                                <div className="form-group multi-preview">
                                    <div className="row">
                                        {singleFile.length !== 0 &&
                                            singleFile.map((url, index) => (
                                                <div key={index} className="col-md-2">
                                                    <div className="img-block bg-gray">
                                                        <img className="img-fluid2" src={url} alt="..." />
                                                        <span
                                                            className="remove_img"
                                                            onClick={() => removeImage(index)}
                                                        >
                                                            X
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        {singleFile.length < 4 && (
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <div className="upload-btn-wrapper">
                                                        <button className="image-btn">+</button>
                                                        <input
                                                            type="file"
                                                            name="myfile"
                                                            multiple
                                                            onChange={uploadSingleFiles}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger btn-block">
                                    Upload
                                </button>
                            </div>
                        </form>

                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Gearbox (Cambio):</label>
                        <input
                            type="text"
                            name="cambio"
                            value={carData.cambio}
                            onChange={handleInputChange}
                            required
                            className="form-input mt-1 block w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Body Type (Carrozzeria):</label>
                        <select
                            name="carrozzeria"
                            value={carData.carrozzeria}
                            onChange={handleInputChange}
                            required
                            className="form-select mt-1 block w-full"
                        >
                            <option value="Berlina">Berlina</option>
                            <option value="Station Wagon">Station Wagon</option>
                            <option value="SUV">SUV</option>
                            <option value="Coupé">Coupé</option>
                            <option value="Altro">Altro</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Engine (Motore):</label>
                        <input
                            type="text"
                            name="motore"
                            value={carData.motore}
                            onChange={handleInputChange}
                            required
                            className="form-input mt-1 block w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Color (Colore):</label>
                        <select
                            name="colore"
                            value={carData.colore}
                            onChange={handleInputChange}
                            required
                            className="form-select mt-1 block w-full"
                        >
                            <option value="Bianco">Bianco</option>
                            <option value="Nero">Nero</option>
                            <option value="Rosso">Rosso</option>
                            <option value="Blu">Blu</option>
                            <option value="Altro">Altro</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Warranty (Garanzia):</label>
                        <input
                            type="text"
                            name="garanzia"
                            value={carData.garanzia}
                            onChange={handleInputChange}
                            required
                            className="form-input mt-1 block w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Price (Prezzo):</label>
                        <input
                            type="number"
                            name="prezzo"
                            value={carData.prezzo}
                            onChange={handleInputChange}
                            required
                            className="form-input mt-1 block w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Emission Class (Classe Emissioni):</label>
                        <select
                            name="classeEmissioni"
                            value={carData.classeEmissioni}
                            onChange={handleInputChange}
                            required
                            className="form-select mt-1 block w-full"
                        >
                            <option value="Euro 4">Euro 4</option>
                            <option value="Euro 5">Euro 5</option>
                            <option value="Euro 6">Euro 6</option>
                            <option value="Altro">Altro</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Seats (Posti):</label>
                        <input
                            type="number"
                            name="posti"
                            value={carData.posti}
                            onChange={handleInputChange}
                            required
                            className="form-input mt-1 block w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Kilometers (Km):</label>
                        <input
                            type="number"
                            name="km"
                            value={carData.km}
                            onChange={handleInputChange}
                            required
                            className="form-input mt-1 block w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700">Fuel Consumption (Consumo):</label>
                        <input
                            type="text"
                            name="consumo"
                            value={carData.consumo}
                            onChange={handleInputChange}
                            required
                            className="form-input mt-1 block w-full"
                        />
                    </div>

                    <div className="col-span-2 mb-4">
                        <label className="text-gray-700 block">Full Description (Descrizione Completa):</label>
                        <textarea
                            name="descrizioneCompleta"
                            value={carData.descrizioneCompleta}
                            onChange={handleInputChange}
                            required
                            className="form-textarea mt-1 block w-full resize-y"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-4 block mx-auto"
                >
                    Add Car
                </button>
            </form>
        </div>
    );
};

export default CarForm;