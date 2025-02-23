import React from 'react';
import AuthLink from "@ui/AuthLink/AuthLink.tsx";

import styles from "./AuthHelpText.module.scss";

interface IAuthHelpText {
    isLogin: boolean
}

const AuthHelpText: React.FC<IAuthHelpText> = ({ isLogin }) => {
    return (
        <div className={styles.help}>
            {isLogin ? <p>Don't have an account ? <AuthLink link="/register">Sign Up</AuthLink></p> :
                <p>Have an account ? <AuthLink link="/login">Sign In</AuthLink></p>}
        </div>
    );
};

export default AuthHelpText;
