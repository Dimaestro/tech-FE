import * as React from "react";
import styles from "./Section.module.scss";
import Container from "../container/Container.tsx";

interface ISection {
    title: string;
    isHiddenTitle?: boolean;
    children: React.ReactNode;
}

const Section: React.FC<ISection> = (
    {title, isHiddenTitle = false, children}
) => {
    return (
        <section>
            <Container>
                <h1 className={ isHiddenTitle ? styles.titleHidden : styles.title }>
                    { title }
                </h1>
                { children }
            </Container>
        </section>
    );
};

export default Section;
