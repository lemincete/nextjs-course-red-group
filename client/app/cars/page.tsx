import Cars from "@/src/components/screens/cars/Cars";

import { NextPage } from "next";

import { createMetadata } from "@/src/utils/createMetadata";



export const metadata = createMetadata('Cars', 'Cars');

const CarsPage: NextPage = () => {
    return <Cars />
}

export default CarsPage;