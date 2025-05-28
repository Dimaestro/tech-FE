import React, { ReactNode } from "react";
import styles from './style.module.scss';

interface IFooter {
    children: ReactNode;
}
const HomeFooter: React.FC<IFooter> = ({ children }) => {

    return (
        <footer className={styles.footer}>
            { children }
        </footer>
    );
};

export default HomeFooter;
