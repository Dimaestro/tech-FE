import { useLocation } from "react-router-dom";

import Login from "@/components/common/Auth/Login/Login.tsx";
import Register from "@/components/common/Auth/Register/Register.tsx";
import AuthHelpText from "@/components/common/Auth/AuthHelpText/AuthHelpText.tsx";

import styles from "./Auth.module.scss";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === "/login"

    return (
        <main>
            <section className={`section ${styles.auth}`}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.wrapper}>
                        { isLogin ? <Login /> : <Register /> }
                        <AuthHelpText isLogin={isLogin}/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Auth;
