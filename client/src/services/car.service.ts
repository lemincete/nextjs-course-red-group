import $api from '../utils/$api';

import { ICar } from '../interfaces/car.interface';

export class CarService {
    static async getAll(): Promise<ICar[]> {
        return $api<ICar[]>('get', '/cars', 60)
    }

    static async getCarById(id: string): Promise<ICar> {
        const data = await $api<ICar[]>('get', '/cars', 60, [{ id }])
        return data[0]
    }
}