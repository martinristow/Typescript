import {create} from 'zustand'

interface LanguageSwitcherStore {
    language: "mk" | "en"
    setLanguage: (language: "mk" | "en") => void
}


export const useLanguageSwitcherStore = create<LanguageSwitcherStore>((set) => ({
    language: "mk",
    setLanguage: (language) => set(() => ({language})),
}))