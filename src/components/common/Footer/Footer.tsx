import React, { ReactNode } from "react";
import styles from './Footer.module.scss';

interface IFooter {
    children: ReactNode;
}
const Footer: React.FC<IFooter> = ({ children }) => {

    return (
        <footer className={styles.footer}>
            { children }
        </footer>
    );
};

export default Footer;
