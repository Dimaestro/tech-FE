import React from 'react';
import { NavLink as Link } from "react-router-dom";

import styles from "./NavLink.module.scss";

interface INavLink {
    children: React.ReactNode,
    link: string
}

const NavLink: React.FC<INavLink> = (
    {children, link}
) => {
    return (
        <Link to={link} className={styles.link} viewTransition>
            {({ isActive }) => (
                <span className={isActive ? styles.active : ""}>
                    {children}
                </span>
            )}
        </Link>
    );
};

export default NavLink;
