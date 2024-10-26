import {useLocation} from "react-router-dom";

import Login from "./Login/Login.tsx";
import Register from "./Register/Register.tsx";
import NavLink from "@ui/NavLink/NavLink.tsx";

import styles from "./Auth.module.scss";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === "/login"

    const renderHelpText = () => {
        return isLogin ? (
            <p>
                Don't have an account ? <NavLink link="/register">Sign Up</NavLink>
            </p>
        ) : (
            <p>
                Have an account ? <NavLink link="/login">Sign In</NavLink>
            </p>
        );
    };

    return (
        <main>
            <section className={`section ${styles.auth}`}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.wrapper}>
                        { isLogin ? <Login /> : <Register /> }
                        <div className={styles.helpText}>
                            { renderHelpText() }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Auth;
