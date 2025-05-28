import React from 'react';
import {useLanguage} from "@/context/LanguageContext.tsx";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import styles from "./style.module.scss";

const LanguageSelect: React.FC = () => {
    const {language, availableLanguages, setLanguage} = useLanguage();

    const handleChange = (event: SelectChangeEvent<string>) => {
        setLanguage(event.target.value);
    };

    return (
        <Select
            className={styles.languageSelect}
            value={language.slice(0, 2)}
            variant="filled"
            disableUnderline={true}
            onChange={handleChange}
            renderValue={(selected) => (
            <div className={styles.renderValue}>
                <LanguageIcon/>
                {selected}
            </div>
            )}
            >
            {availableLanguages.map(({code, name}) => (
                <MenuItem key={code} value={code}>
                    {name}
                </MenuItem>
            ))}
        </Select>
    );
};

export default LanguageSelect;