import styles from './Car.module.scss';

import Layout from '../../layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { CarService } from "@/src/services/car.service";

interface CarProps {
    id: string
}

const Car: FC<CarProps> = async ({ id }) => {

    const car = await CarService.getCarById(id);

    return (
        <Layout>
            <section className={styles.root}>
                <div className={styles.root__body}>
                    <Image src={car.image} alt={car.name} width={400} height={400} />
                    <div className={styles.root__car__body}>
                        <h3 className={styles.root__car__body__title}>{car.name}</h3>
                        <small className={styles.root__car__body__price}>{car.price}<abbr>$</abbr></small>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Car;