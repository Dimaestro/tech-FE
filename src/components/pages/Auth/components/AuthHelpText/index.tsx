import React from 'react';
import AuthLink from "@ui/AuthLink";

import styles from "./style.module.scss";

interface IAuthHelpText {
    isSignIn: boolean
}

const AuthHelpText: React.FC<IAuthHelpText> = ({ isSignIn }) => {
    return (
        <div className={styles.help}>
            {isSignIn ?
                <p>
                    Don't have an account ? <AuthLink link="/signup">Sign Up</AuthLink>
                </p>
                :
                <p>
                    Have an account ? <AuthLink link="/signin">Sign In</AuthLink>
                </p>
            }
        </div>
    );
};

export default AuthHelpText;
