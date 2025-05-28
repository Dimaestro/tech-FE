import {createContext, ReactNode, useContext } from "react";
import {useTranslation} from "react-i18next";

type LanguagesCode = 'en' | 'ru' | 'ua'

interface IAvailableLanguages {
    code: LanguagesCode,
    name: string
}

interface ILanguageContext {
    language: string;
    availableLanguages: Array<IAvailableLanguages>;
    setLanguage: (langCode: string) => void;
}

const availableLanguages: Array<IAvailableLanguages> = [
    {code: 'en', name: 'English'},
    {code: 'ru', name: 'Русский'},
    {code: 'ua', name: 'Українська'},
];

const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage должен использоваться внутри LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({children}: { children: ReactNode }) => {
    const { i18n } = useTranslation();

    const setLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode).then(r => console.log(r));
    }

    return (
        <LanguageContext.Provider value={{language: i18n.language, availableLanguages, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
};
