type LanguagesCode = 'en' | 'ru' | 'ua'

interface IAvailableLanguages {
    code: LanguagesCode,
    name: string
}

export const AVAILABLE_LANGUAGES: Array<IAvailableLanguages> = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'ua', name: 'Украинский' },
]
