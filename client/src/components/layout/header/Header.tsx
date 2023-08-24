'use client'

import { usePathname } from 'next/navigation';

import styles from './Header.module.scss';

import Link from 'next/link';

import { headerLinksArr } from './Header.data';

const Header = () => {

    const pathname = usePathname();

    return (
        <header className={styles.root}>
            <div className='container'>
                <div className={styles.root__body}>
                    <nav className={styles.root__link__body}>
                        {headerLinksArr.map(link =>
                            <Link key={link.value} className={pathname === link.value ? styles.root__link_active : ''} href={link.value}>{link.label}</Link>
                        )}
                        <Link className={pathname === '/' ? styles.root__link_active : ''} href="/">Home</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;