import React from 'react';
import NavLink from "@ui/NavLink/NavLink.tsx";

import styles from "./AuthHelpText.module.scss";

interface IAuthHelpText {
    isLogin: boolean
}

const AuthHelpText: React.FC<IAuthHelpText> = ({ isLogin }) => {
    return (
        <div className={styles.help}>
            {isLogin ? <p>Don't have an account ? <NavLink link="/register">Sign Up</NavLink></p> :
                <p>Have an account ? <NavLink link="/login">Sign In</NavLink></p>}
        </div>
    );
};

export default AuthHelpText;
