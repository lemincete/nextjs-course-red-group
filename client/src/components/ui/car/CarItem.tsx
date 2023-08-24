import { ICar } from '@/src/interfaces/car.interface'

import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react'
import styles from './CarItem.module.scss';


interface CarItemProps {
    car: ICar
}

const CarItem: FC<CarItemProps> = ({ car }) => {

    return (
        <article className={styles.root}>
            <div className={styles.root__image__body}>
                <Image className={styles.root__image} src={car.image} alt='car' width={400} height={400} />
            </div>
            <div className={styles.root__body}>
                <h3 className={styles.root__body__title}>{car.name}</h3>
                <Link className={styles.root__body__more__link} href={`cars/${car.id}`}>Read more...</Link>
            </div>
        </article>
    )
}

export default CarItem