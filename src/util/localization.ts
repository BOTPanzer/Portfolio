import { Locales } from '../data'
import { DB } from './util'



 /*$                                     /$$ /$$                       /$$     /$$
| $$                                    | $$|__/                      | $$    |__/
| $$        /$$$$$$   /$$$$$$$  /$$$$$$ | $$ /$$ /$$$$$$$$  /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$
| $$       /$$__  $$ /$$_____/ |____  $$| $$| $$|____ /$$/ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
| $$      | $$  \ $$| $$        /$$$$$$$| $$| $$   /$$$$/   /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
| $$      | $$  | $$| $$       /$$__  $$| $$| $$  /$$__/   /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
| $$$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$| $$ /$$$$$$$$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
|________/ \______/  \_______/ \_______/|__/|__/|________/ \_______/   \___/  |__/ \______/ |__/  |_*/

export class Localization {

    //State
    static #isInitialized = false
    static get isInitialized() { return this.#isInitialized }

    //Localization
    static key: string = ''
    static locales: any = {}

    //Events
    static events: Set<Function> = new Set()


    //Localization
    static init(key: string | null = null) {
        //Check if already loaded
        if (this.locales.key === key) return

        //Determine locale key
        key = (key || localStorage.getItem('locale') || navigator.language.slice(0, 2) || 'en')
        if (!['en', 'es'].includes(key)) key = 'en'

        //Save locale
        this.locales = Locales[key]

        //Mark as initialized
        this.#isInitialized = true
    }

    static swap() {
        //Not initialized
        if (!this.isInitialized) return

        //Determine locale key
        const key = (this.locales.key == 'es' ? 'en' : 'es')
        DB.set('locale', key)

        //Save locale & localize
        this.locales = Locales[key]
        this.localizeElement(document.body)
        this.invokeEvents()
    }

    static localizeElement(element: HTMLElement) {
        //Not initialized
        if (!this.isInitialized) return

        //Localize text
        for (const child of element.querySelectorAll('[localize-text]')) {
            //Get text
            const text = this.localize(child.getAttribute('localize-text'))
            if (typeof text !== 'string') continue

            //Update text
            if (child.hasAttribute('placeholder'))
                child.setAttribute('placeholder', text)
            else
                child.textContent = text
        }

        //Localize HTML
        for (const child of element.querySelectorAll('[localize-html]')) {
            //Get HTML
            const html = this.localize(child.getAttribute('localize-html'))
            if (typeof html !== 'string') continue

            //Update text
            child.innerHTML = html
        }
    }

    //Events
    static registerOnLocalizedEvent(event: Function) {
        //Add event
        this.events.add(event)
    }

    static unregisterOnLocalizedEvent(event: Function) {
        //Remove event
        this.events.delete(event)
    }

    static invokeEvents() {
        //Invoke events
        for (const event of this.events) event()
    }

    //Helpers
    static localizeAs<T>(key: string | null): T | null {
        //Invalid key
        if (!key) return null

        //Get text
        const text: T = key.split('.').reduce((obj: any, i) => obj?.[i], this.locales)
        return text
    }

    static localize(key: string | null): string | null {
        return this.localizeAs<string>(key)
    }

    static getLocale(): string {
        return this.locales.key
    }

}

export interface LocalePair {
    key: string | null
    text: string
}