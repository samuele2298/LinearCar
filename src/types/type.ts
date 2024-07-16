// Definizione dei tipi
interface Car {
    id: number;
    name: string;
    images: string[];
    cambio: string;
    immatricolazione: string;
    carrozzeria: Carrozzeria | 'Altro';
    carburante: string
    motore: string;
    colore: string;
    garanzia: string;
    prezzo: number;
    classeEmissioni: string;
    posti: number;
    porte: number;
    km: number;
    consumo: string;
    descrizioneCompleta: string;
}

export default Car;


export enum Carrozzeria {
    Berlina = 'Berlina',
    Station_Wagon = 'Station Wagon',
    SUV = 'SUV',
    Coupé = 'Coupé',
    Altro = 'Altro',
}



