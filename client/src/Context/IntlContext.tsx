import React from "react";
import { IntlProvider } from "react-intl";
import de from "../../lang/de.json";
import en from "../../lang/en.json";
import useLocalStorage from "../Hooks/UseLocalStorage";

type IntlContext = {
    switchLocale(locale: string): void
    getLocale(): string;
}

export const Context = React.createContext({} as IntlContext);
const languages: Record<string, Record<string, string>> = {
    "en": en,
    "de": de,
}

export default function IntlContext(props: React.PropsWithChildren<unknown>) {
    const [locale, setLocale] = useLocalStorage("locale", "en");
    const messages = React.useMemo(() => languages[locale], [locale]);

    const value = {
        switchLocale(locale: string) {
            setLocale(locale);
        },
        getLocale() {
            return locale;
        }
    }

    return (
        <Context.Provider value={value}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider >
    );
}
