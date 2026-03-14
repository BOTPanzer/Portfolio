  /*$$$$$                                                      /$$           /$$$$$$$
 /$$__  $$                                                    | $$          | $$__  $$
| $$  \__/ /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$        | $$  \ $$ /$$$$$$   /$$$$$$   /$$$$$$
| $$      | $$  | $$ /$$__  $$ /$$__  $$ /$$__  $$| $$__  $$|_  $$_/        | $$$$$$$/|____  $$ /$$__  $$ /$$__  $$
| $$      | $$  | $$| $$  \__/| $$  \__/| $$$$$$$$| $$  \ $$  | $$          | $$____/  /$$$$$$$| $$  \ $$| $$$$$$$$
| $$    $$| $$  | $$| $$      | $$      | $$_____/| $$  | $$  | $$ /$$      | $$      /$$__  $$| $$  | $$| $$_____/
|  $$$$$$/|  $$$$$$/| $$      | $$      |  $$$$$$$| $$  | $$  |  $$$$/      | $$     |  $$$$$$$|  $$$$$$$|  $$$$$$$
 \______/  \______/ |__/      |__/       \_______/|__/  |__/   \___/        |__/      \_______/ \____  $$ \_______/
                                                                                                /$$  \ $$
                                                                                               |  $$$$$$/
                                                                                                \_____*/

export class CurrentPageIndicator {

    constructor(pages: string[]) {
        //Reverse pages to give priority to the ones after
        pages.reverse()

        //Default to home
        const visiblePages: any = { 'home': true }
        let currentPage = 'home'

        //Update current
        function updateCurrentPage() {
            //Get new current
            let newCurrentPage = null

            for (const id of pages) {
                if (!visiblePages[id]) continue
                newCurrentPage = id
                break
            }

            //Check new current
            if (newCurrentPage == currentPage) return

            //Update current page
            if (currentPage != null) document.getElementById(`sidebar-${currentPage}`)?.removeAttribute('selected')
            currentPage = newCurrentPage!
            if (currentPage != null) document.getElementById(`sidebar-${currentPage}`)?.setAttribute('selected', '')
        }

        //Add observer to update current pages
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) visiblePages[entry.target.id] = entry.isIntersecting
            updateCurrentPage()
        }, {
            threshold: 0.01
        })
        for (const id of pages) observer.observe(document.getElementById(id)!)
    }

}



 /*$       /$$             /$$
| $$      |__/            | $$
| $$       /$$  /$$$$$$$ /$$$$$$    /$$$$$$  /$$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$
| $$      | $$ /$$_____/|_  $$_/   /$$__  $$| $$__  $$ /$$__  $$ /$$__  $$ /$$_____/
| $$      | $$|  $$$$$$   | $$    | $$$$$$$$| $$  \ $$| $$$$$$$$| $$  \__/|  $$$$$$
| $$      | $$ \____  $$  | $$ /$$| $$_____/| $$  | $$| $$_____/| $$       \____  $$
| $$$$$$$$| $$ /$$$$$$$/  |  $$$$/|  $$$$$$$| $$  | $$|  $$$$$$$| $$       /$$$$$$$/
|________/|__/|_______/    \___/   \_______/|__/  |__/ \_______/|__/      |______*/

//On page resize
const onResize: Function[] = []

window.onresize = () => onResize.forEach(fun => fun())

export function addResizeListener(f: Function) {
    //Not a function
    if (typeof f != 'function') return

    //Add to list
    onResize.push(f)
}

//On page focus
const onFocus: Function[] = []

window.onfocus = () => {
    for (let i = onFocus.length - 1; i >= 0; i--) {
        //Run function
        const result = onFocus[i]()

        //Remove function if result is true
        if (typeof result === 'boolean' && result) onFocus.splice(i, 1)
    }
}

export function addFocusListener(f: Function) {
    //Not a function
    if (typeof f != 'function') return

    //Add to list
    onFocus.push(f)
}



  /*$$$$$                                /$$       /$$
 /$$__  $$                              | $$      | $$
| $$  \__/ /$$$$$$$   /$$$$$$   /$$$$$$$| $$   /$$| $$$$$$$   /$$$$$$   /$$$$$$
|  $$$$$$ | $$__  $$ |____  $$ /$$_____/| $$  /$$/| $$__  $$ |____  $$ /$$__  $$
 \____  $$| $$  \ $$  /$$$$$$$| $$      | $$$$$$/ | $$  \ $$  /$$$$$$$| $$  \__/
 /$$  \ $$| $$  | $$ /$$__  $$| $$      | $$_  $$ | $$  | $$ /$$__  $$| $$
|  $$$$$$/| $$  | $$|  $$$$$$$|  $$$$$$$| $$ \  $$| $$$$$$$/|  $$$$$$$| $$
 \______/ |__/  |__/ \_______/ \_______/|__/  \__/|_______/  \_______/|_*/
 
//Snackbar
interface SnackItem {
    text: string,
    confetti: boolean
}

const snacks: SnackItem[] = []

export function createSnackbar(text: string, confetti: boolean = false) {
    //Add snack to list
    snacks.push({
        text: text,
        confetti: confetti
    })

    //Notify snackbar controller
    snackbarController()
}

function snackbarController() {
    //Get snackbar
    const snack = document.getElementById('snackbar') as HTMLDialogElement

    //Show snackbar
    if (!snack.open && snacks.length > 0) {
        //Data
        snack.innerHTML = snacks[0].text
        snack.show()
        
        if (snacks[0].confetti) createConfetti()
        snacks.shift()

        //Wait to disappear
        setTimeout(() => {
            //Disappear
            snack.innerHTML = ''
            snack.close()

            //Wait to show text
            setTimeout(() => { snackbarController() }, 50)
        }, 3000)
    }
}

//Confetti 🎊
declare var confetti: any

function createConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 1 }
    })
}



  /*$$$$$            /$$                           /$$     /$$
 /$$__  $$          |__/                          | $$    |__/
| $$  \ $$ /$$$$$$$  /$$ /$$$$$$/$$$$   /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$   /$$$$$$$
| $$$$$$$$| $$__  $$| $$| $$_  $$_  $$ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$ /$$_____/
| $$__  $$| $$  \ $$| $$| $$ \ $$ \ $$  /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$|  $$$$$$
| $$  | $$| $$  | $$| $$| $$ | $$ | $$ /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$ \____  $$
| $$  | $$| $$  | $$| $$| $$ | $$ | $$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$ /$$$$$$$/
|__/  |__/|__/  |__/|__/|__/ |__/ |__/ \_______/   \___/  |__/ \______/ |__/  |__/|______*/

export class AppearAnimation {

    #observer: IntersectionObserver

    constructor() {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue
                entry.target.setAttribute('appeared', '')
                observer.unobserve(entry.target)
            }
        }, {
            threshold: 0.1
        })
        this.#observer = observer
    }

    animate(element: HTMLElement) {
        if (!element.classList.contains('appear')) element.classList.add('appear')
        this.#observer.observe(element)
    }

}



 /*$    /$$                      /$$
| $$   | $$                     | $$
| $$   | $$ /$$$$$$   /$$$$$$$ /$$$$$$    /$$$$$$   /$$$$$$
|  $$ / $$//$$__  $$ /$$_____/|_  $$_/   /$$__  $$ /$$__  $$
 \  $$ $$/| $$$$$$$$| $$        | $$    | $$  \ $$| $$  \__/
  \  $$$/ | $$_____/| $$        | $$ /$$| $$  | $$| $$
   \  $/  |  $$$$$$$|  $$$$$$$  |  $$$$/|  $$$$$$/| $$
    \_/    \_______/ \_______/   \___/   \______/ |_*/

export class Vec2 {

    //Values
    x = 0
    y = 0

    //Constructor
    constructor(x: number | Vec2 = 0, y: number | null = null) {
        if (typeof x === 'number') {
            //Init from numbers
            this.x = x
            this.y = (typeof y == 'number' ? y : x)
        } else {
            //Init from another Vec2
            this.x = x.x
            this.y = x.y
        }
    }

    //Functions
    equals(v: Vec2) {
        return (this.x == v.x && this.y == v.y)
    }

    add(v: Vec2) {
        return new Vec2(this.x + v.x, this.y + v.y)
    }

    subtract(v: Vec2) {
        return new Vec2(this.x - v.x, this.y - v.y)
    }

    multiply(n: number) { 
        return new Vec2(this.x * n, this.y * n)
    }

    divide(n: number) { 
        return new Vec2(this.x / n, this.y / n)
    }

    magnitude() { 
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    clampMagnitude(max: number) {
        const magnitude = this.magnitude()
        if (magnitude > max)
            return this.divide(magnitude).multiply(max)
        else
            return new Vec2(this)
    }

    normalized() { 
        return this.divide(this.magnitude())
    }

    moveTowards(towards: Vec2, delta: number) {
        const dir = towards.subtract(this)
        if (dir.magnitude() > delta)
            return this.add(dir.normalized().multiply(delta))
        else
            return towards
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }
    
}



  /*$$$$$   /$$
 /$$__  $$ | $$
| $$  \__//$$$$$$    /$$$$$$   /$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$
|  $$$$$$|_  $$_/   /$$__  $$ /$$__  $$|____  $$ /$$__  $$ /$$__  $$
 \____  $$ | $$    | $$  \ $$| $$  \__/ /$$$$$$$| $$  \ $$| $$$$$$$$
 /$$  \ $$ | $$ /$$| $$  | $$| $$      /$$__  $$| $$  | $$| $$_____/
|  $$$$$$/ |  $$$$/|  $$$$$$/| $$     |  $$$$$$$|  $$$$$$$|  $$$$$$$
 \______/   \___/   \______/ |__/      \_______/ \____  $$ \_______/
                                                 /$$  \ $$
                                                |  $$$$$$/
                                                 \_____*/

type TypeDB = 'boolean' | 'number' | 'object' | 'string'

export class DB {

    static BOOLEAN: TypeDB = 'boolean'
    static NUMBER: TypeDB = 'number'
    static OBJECT: TypeDB = 'object'
    static STRING: TypeDB = 'string'

    static get(key: string, fallback: any, type: TypeDB) {
        //Get key value
        const value = localStorage.getItem(key)
        if (value == null) return fallback

        //Check type
        switch (type) {
            //Boolean
            case DB.BOOLEAN:
                return value == 'true'
            //Number
            case DB.NUMBER:
                return Number(value)
            //Object
            case DB.OBJECT:
                return JSON.parse(value)
            //String & other (localStorage returns strings by default)
            case DB.STRING:
            default:
                return value
        }
    }

    static set(key: string, value: any) {
        //Update key value
        localStorage.setItem(key, (typeof value == DB.OBJECT ? JSON.stringify(value) : value))
    }

    static has(key: string) {
        //Check if key exists
        return (localStorage.getItem(key) != null)
    }

    static remove(key: string) {
        //Remove key
        localStorage.removeItem(key)
    }

}



 /*$   /$$   /$$     /$$ /$$
| $$  | $$  | $$    |__/| $$
| $$  | $$ /$$$$$$   /$$| $$
| $$  | $$|_  $$_/  | $$| $$
| $$  | $$  | $$    | $$| $$
| $$  | $$  | $$ /$$| $$| $$
|  $$$$$$/  |  $$$$/| $$| $$
 \______/    \___/  |__/|_*/

export class Util {

    //Math
    static clamp(x: number, min: number, max: number) {
        //Clamp x between min and max
        return Math.min(Math.max(x, min), max)
    }

    static randomInt(min: number, max: number) {
        //Get a random int between min and max
        return Math.floor(Math.random() * (max - min)) + min
    }

    //Lists
    static shuffleList<T>(list: T[]) {
        for (let i = list.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1))
            ;[list[i], list[randomIndex]] = [list[randomIndex], list[i]] //Don't remove ";" or it bugs out
        }
    }

    static randomFromList<T>(list: T[], remove: boolean = false) {
        const idx = Math.floor(Math.random() * list.length)
        const value = list[idx]
        if (remove) list.splice(idx, 1)
        return value
    }

    //Events
    static onDialogBackdropClick(dialog: HTMLDialogElement, onClick: Function) {
        //Add on click event
        dialog.onclick = (event) => {
            const rect = dialog.getBoundingClientRect()
            const clickedBackdrop = !(rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width)
            if (clickedBackdrop && dialog.open) onClick()
        }
    }

    //Scroll
    static toggleScroll(scroll: Boolean | undefined) {
        //Fix args
        if (typeof scroll !== 'boolean') !document.body.hasAttribute('noscroll')

        //Toggle scroll
        if (scroll)
            document.body.removeAttribute('noscroll')
        else
            document.body.setAttribute('noscroll', '')
    }

    //Text
    static setCharAt(str: string, index: number, chr: string) {
        if (index > str.length - 1) return str
        return str.substring(0, index) + chr + str.substring(index + 1)
    }

    static clearTextSelection() {
        //Unfocus active element
        (document.activeElement as HTMLElement)?.blur()

        //Empty selection
        window.getSelection()?.empty()
    }

    static resetCursorBlink() {
        //Get active element
        const element = document.activeElement as HTMLElement
        if (!element) return

        //Save cursor color
        const originalColor = window.getComputedStyle(element).caretColor
        
        //Set it to transparent, then back to original
        element.style.caretColor = 'transparent'
        requestAnimationFrame(() => {
            element.style.caretColor = originalColor
            element.style.removeProperty('caret-color')
        })
    }

    static escapeText(text: string): string {
        return text
            .replaceAll(/&/g, '&amp;')
            .replaceAll(/</g, '&lt;')
            .replaceAll(/>/g, '&gt;')
            .replaceAll(/"/g, '&quot;')
            .replaceAll(/'/g, '&#039;')
            .replaceAll(/  /g, ' &nbsp;')
    }

    //Fetch
    static async fetchJSON(url: string, options: object = {}): Promise<any> {
        //Fetch
        const response = await fetch(url, options)

        //Check if valid
        const valid = response.ok

        //Return value
        if (valid)
            return response.json()
        else
            return null
    }

    static async fetchText(url: string, options: object = {}, type: string | null = null): Promise<string | null> {
        //Fetch
        const response = await fetch(url, options)

        //Check if valid
        const valid = response.ok && (type ? (response.headers.get('content-type') || '').startsWith(type) : true)

        //Return value
        if (valid)
            return response.text()
        else
            return null
    }

}