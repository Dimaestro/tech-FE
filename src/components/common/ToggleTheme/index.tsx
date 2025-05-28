import { useTheme } from "@/context/ThemeContext.tsx";
import { IconButton } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import clsx from 'clsx';

import styles from "./style.module.scss";

const ToggleTheme = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <IconButton
            aria-label="toogle theme"
            onClick={toggleTheme}
            className={clsx(styles.buttonTheme, theme === 'dark' && styles.buttonTheme__dark)}
        >
            {theme === 'dark' ? (
                <NightlightRoundIcon
                    className={styles.dark}
                />
            ) : <WbSunnyIcon className={styles.light}/>}
        </IconButton>
    );
};

export default ToggleTheme;
