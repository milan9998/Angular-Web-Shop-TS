export interface Clothes {
    id: number;
    picture: string;
    name: string;
    type: string;
    manufacturer: string;
    rating: string;
    size: string;
    price: number;
    date?: string;
    status?: 'pristiglo' | 'u toku' | 'otkazano' | null;
    amount?: number;
    newPrice?: number;
}