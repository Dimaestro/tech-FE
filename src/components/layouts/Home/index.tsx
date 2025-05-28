import * as React from "react";

import HomeHeader from "@common/HomeHeader";
import HomeFooter from "@common/HomeFooter";
import ToggleTheme from "@common/ToggleTheme";
import LanguageSelect from "@common/LanguageSelect";

import { Outlet } from "react-router-dom";

const LayoutHomePage: React.FC = () => {

    return (
        <>
            <HomeHeader>
                <ToggleTheme/>
                <LanguageSelect/>
            </HomeHeader>
            <main>
                <Outlet />
            </main>
            <HomeFooter>
                Footer
            </HomeFooter>
        </>
    );
};

export default LayoutHomePage;
