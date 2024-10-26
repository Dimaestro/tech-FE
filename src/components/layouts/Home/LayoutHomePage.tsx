import * as React from "react";
import Footer from "../../common/Footer/Footer.tsx";
// import styles from "./LayoutHomePage.module.scss";

interface ILayoutHomePage {
    children: React.ReactNode;
}

const LayoutHomePage: React.FC<ILayoutHomePage> = ({ children}) => {
    return (
        <>
            <main>
                { children }
            </main>
            <Footer/>
        </>
    );
};

export default LayoutHomePage;
