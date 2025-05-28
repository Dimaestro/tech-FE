import React, {ReactNode} from 'react';

import styles from './style.module.scss';

interface IHomeHeader {
    children: ReactNode;
}

const HomeHeader: React.FC<IHomeHeader> = ({ children }) => {
    return (
        <header className={styles.header}>
            { children }
        </header>
    );
};

export default HomeHeader;
