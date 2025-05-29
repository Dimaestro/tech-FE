import * as React from 'react';

import HomeHeader from '@common/HomeHeader';
import HomeFooter from '@common/HomeFooter';
import ToggleTheme from '@common/ToggleTheme';
import LanguageSelect from '@common/LanguageSelect';

import { Outlet } from 'react-router';
import LanguageSelectPopover from '@common/LanguageSelectPopover';

const LayoutHomePage: React.FC = () => {
  return (
    <>
      <HomeHeader>
        <ToggleTheme />
        <LanguageSelect />
        <LanguageSelectPopover />
      </HomeHeader>
      <main>
        <Outlet />
      </main>
      <HomeFooter>Footer</HomeFooter>
    </>
  );
};

export default LayoutHomePage;
