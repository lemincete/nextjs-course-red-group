import Layout from "../../layout/Layout";
import CarItem from "../../ui/car/CarItem";

import { CarService } from "@/src/services/car.service";

import styles from './Cars.module.scss';

const Cars = async () => {

    const cars = await CarService.getAll();

    return (
        <Layout>
            {cars.length > 0
                ? <section className={styles.root}>
                    {cars.map(car => <CarItem car={car} key={car.id} />)}
                </section>
                : <p>Cars not found</p>
            }
        </Layout>
    );
}

export default Cars;