import styles from './Loader.module.scss';

import Loading from './images/loader.svg';

import Image from 'next/image';

const Loader = () => {
    return (
        <div className={styles.root}>
            <Image className={styles.root__body} src={Loading} alt='loading' width="40" height="40" />
        </div>
    );
}

export default Loader;