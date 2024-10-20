import {useLocation} from "react-router-dom";

import Section from "../../common/section/Section.tsx";
import Login from "./login/Login.tsx";
import Register from "./register/Register.tsx";

import './Auth.module.scss';

const Auth = () => {
    const location = useLocation();

    return (
        <main>
            <Section title="Auth" isHiddenTitle={true}>
                { location.pathname === "/login" ? <Login /> : <Register /> }
            </Section>
        </main>
    );
};

export default Auth;
