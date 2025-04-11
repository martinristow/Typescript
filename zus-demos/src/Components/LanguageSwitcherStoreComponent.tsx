import { useLanguageSwitcherStore } from "../Stores/languageSwitcherStore.ts";

const LanguageSwitcherStoreComponent = () => {

    const { language, setLanguage } = useLanguageSwitcherStore();

    return (
        <div>
            <h1>Language: {language}</h1>
            <button onClick={() => setLanguage(language === "mk" ? "en" : "mk")}>
                Change Language
            </button>
        </div>
    );
}

export default LanguageSwitcherStoreComponent;
