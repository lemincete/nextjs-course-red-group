import styles from './404.module.scss';

const NotFound = () => {
    return (
        <>
            <div className={styles.root}>
                <div className={styles.root__body}>404</div>
            </div>
        </>

    );
}

export default NotFound;