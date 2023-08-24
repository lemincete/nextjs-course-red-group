import styles from './Layout.module.scss';

import dynamic from 'next/dynamic';

import { FC, ReactNode } from 'react'

import Header from './header/Header'

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
    ssr: false,
    loading: () => <p>Loading</p>
})

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.root__body}>
                <div className="container">
                    {children}
                </div>
            </main>
            <DynamicFooter />
        </div>
    )
}

export default Layout