import React from 'react';
import { NavLink } from "react-router-dom";

import styles from "./style.module.scss";

interface IAuthLink {
    children: React.ReactNode,
    link: string
}

const AuthLink: React.FC<IAuthLink> = (
    {children, link}
) => {
    return (
        <NavLink to={link} className={styles.link} viewTransition>
            {({ isActive }) => (
                <span className={isActive ? styles.active : ""}>
                    {children}
                </span>
            )}
        </NavLink>
    );
};

export default AuthLink;
