import { NextPage } from 'next';

import { createMetadata } from '@/src/utils/createMetadata';

import Car from '@/src/components/screens/car/Car';

import { CarService } from '@/src/services/car.service';


type TCarParameter = {
    id: string
}

interface CarPageProps {
    params: TCarParameter
}


export const generateMetadata = async ({ params }: CarPageProps) => {
    const car = await CarService.getCarById(params.id);
    return createMetadata(car.name, car.name);
}


const CarPage: NextPage<CarPageProps> = async ({ params }) => {
    return <Car id={params.id} />
}

export default CarPage;