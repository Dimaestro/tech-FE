import * as React from "react";
import Footer from "../../common/footer/Footer.tsx";
import styles from "./LayoutHomePage.module.scss";

interface ILayoutHomePage {
    children: React.ReactNode;
}

const LayoutHomePage: React.FC<ILayoutHomePage> = ({ children}) => {
    return (
        <>
            <main className={styles.main}>
                { children }
            </main>
            <Footer/>
        </>
    );
};

export default LayoutHomePage;
