import * as React from "react";
import Footer from "../../common/Footer/Footer.tsx";
import HomeHeader from "@/components/common/HomeHeader/HomeHeader.tsx";
import ToggleTheme from "@/components/common/ToggleTheme/ToggleTheme.tsx";
import { Outlet } from "react-router-dom";

const LayoutPage: React.FC = () => {

    return (
        <>
            <HomeHeader>
                <ToggleTheme/>
            </HomeHeader>
            <main>
                <Outlet />
            </main>
            <Footer>
                Footer
            </Footer>
        </>
    );
};

export default LayoutPage;
