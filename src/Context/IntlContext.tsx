import React from "react";
import { IntlProvider } from 'react-intl';
import de from "../../lang/de.json";
import en from "../../lang/en.json";

export const Context = React.createContext((_locale: string) => { });
const languages: { [locale: string]: {} } = {
    "en": en,
    "de": de,
}

export default function IntlContext(props: React.PropsWithChildren<{}>) {
    const [locale, setLocale] = React.useState("en");
    const [messages, setMessages] = React.useState(languages[locale]);

    const switchLocale = (locale: string) => {
        setLocale(locale);
        setMessages(languages[locale])
    }

    return (
        <Context.Provider value={switchLocale}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider >
    );
}
