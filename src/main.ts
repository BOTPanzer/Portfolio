import { Photos, Career, Skill, Category, Tag, Sort, SelectedProjects, Achievement } from './data'
import { CurrentPageIndicator, addFocusListener, createSnackbar, AppearAnimation, Vec2, DB, Util } from './util/util'
import { Localization, type LocalePair } from './util/localization'



  /*$$$$$                                                   /$$
 /$$__  $$                                                 | $$
| $$  \__/  /$$$$$$  /$$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$ | $$
| $$ /$$$$ /$$__  $$| $$__  $$ /$$__  $$ /$$__  $$|____  $$| $$
| $$|_  $$| $$$$$$$$| $$  \ $$| $$$$$$$$| $$  \__/ /$$$$$$$| $$
| $$  \ $$| $$_____/| $$  | $$| $$_____/| $$      /$$__  $$| $$
|  $$$$$$/|  $$$$$$$| $$  | $$|  $$$$$$$| $$     |  $$$$$$$| $$
 \______/  \_______/|__/  |__/ \_______/|__/      \_______/|_*/

//Init localization
Localization.init()

//Create appear animation manager
const animator = new AppearAnimation()

//Navigation
function goTo(id: string) {
    //Scroll to element
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

    //Close sidebar
    sidebar.toggle(false)
}

//Page title
function changeTitle() {
    const emojis = ['🦝', '🦎', '🦖', '🎷🐛', '😸']
    document.title = `${Localization.localize('title')} ${Util.randomFromList(emojis)}`
}

addFocusListener(changeTitle)

changeTitle()



 /*$$$$$$$ /$$
|__  $$__/| $$
   | $$   | $$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$
   | $$   | $$__  $$ /$$__  $$| $$_  $$_  $$ /$$__  $$
   | $$   | $$  \ $$| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$
   | $$   | $$  | $$| $$_____/| $$ | $$ | $$| $$_____/
   | $$   | $$  | $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$
   |__/   |__/  |__/ \_______/|__/ |__/ |__/ \______*/

const theme = {
    dark: (DB.get('theme', 'dark', DB.STRING) == 'dark')
}

function toggleTheme() {
    //Toggle theme
    theme.dark = !theme.dark
    loadTheme()

    //Give chievement
    if (theme.dark) achievements.give(Achievement.theme)
}

function loadTheme() {
    //Load theme
    if (theme.dark) {
        //Enable light
        DB.set('theme', 'dark')
        document.documentElement.removeAttribute('light')
    } else {
        //Enable dark
        DB.set('theme', 'light')
        document.documentElement.setAttribute('light', '')
    }
}

loadTheme()



  /*$$$$$                                /$$                     /$$
 /$$__  $$                              |__/                    | $$
| $$  \__/ /$$   /$$  /$$$$$$   /$$$$$$  /$$  /$$$$$$$ /$$   /$$| $$ /$$   /$$ /$$$$$$/$$$$
| $$      | $$  | $$ /$$__  $$ /$$__  $$| $$ /$$_____/| $$  | $$| $$| $$  | $$| $$_  $$_  $$
| $$      | $$  | $$| $$  \__/| $$  \__/| $$| $$      | $$  | $$| $$| $$  | $$| $$ \ $$ \ $$
| $$    $$| $$  | $$| $$      | $$      | $$| $$      | $$  | $$| $$| $$  | $$| $$ | $$ | $$
|  $$$$$$/|  $$$$$$/| $$      | $$      | $$|  $$$$$$$|  $$$$$$/| $$|  $$$$$$/| $$ | $$ | $$
 \______/  \______/ |__/      |__/      |__/ \_______/ \______/ |__/ \______/ |__/ |__/ |_*/

//Menu
class CurriculumMenu {

    //Elements
    #elements = {
        //Menu
        menu: document.getElementById('curriculum-menu') as HTMLDialogElement,
        close: document.getElementById('curriculum-close') as HTMLElement,
        //Buttons
        english: document.getElementById('curriculum-english') as HTMLElement,
        spanish: document.getElementById('curriculum-spanish') as HTMLElement
    }

    //Menu
    toggleMenu = () => {
        //Toggle menu
        if (this.#elements.menu.open) {
            //Close
            this.#elements.menu.close()
            Util.toggleScroll(true)
        } else {
            //Open
            this.#elements.menu.showModal()
            Util.toggleScroll(false)
        }
    }

    constructor() {
        //Register events
        Util.onDialogBackdropClick(this.#elements.menu, this.toggleMenu)
        this.#elements.close.onclick = this.toggleMenu
        this.#elements.english.onclick = this.toggleMenu
        this.#elements.spanish.onclick = this.toggleMenu
    }

}

const curriculum = new CurriculumMenu()



  /*$$$$$                      /$$
 /$$__  $$                    | $$
| $$  \__/ /$$$$$$$   /$$$$$$ | $$   /$$  /$$$$$$
|  $$$$$$ | $$__  $$ |____  $$| $$  /$$/ /$$__  $$
 \____  $$| $$  \ $$  /$$$$$$$| $$$$$$/ | $$$$$$$$
 /$$  \ $$| $$  | $$ /$$__  $$| $$_  $$ | $$_____/
|  $$$$$$/| $$  | $$|  $$$$$$$| $$ \  $$|  $$$$$$$
 \______/ |__/  |__/ \_______/|__/  \__/ \______*/

//Game
class SnakeGame {

    //Technical
    #animationFrame: number = -1
    #updateInterval: number = -1
    #context: CanvasRenderingContext2D
    #inputQueue: string[] = []
    #delta: number = 1000 / 9 //9 fps

    //Game
    #size: Vec2 = new Vec2()
    #grid: number = 15 //Cell size

    #isDead: boolean = true
    #points: number = 0
    #best: number = DB.get('snake.best', 0, DB.NUMBER)

    #apple: Vec2 = new Vec2()
    #snake = {
        pos: new Vec2(150),
        dir: new Vec2(1, 0),
        cells: [] as Vec2[],
        length: 4,
    }

    //UI
    #infoPoints: HTMLElement = document.getElementById('snake-info-points')!
    #infoBest: HTMLElement = document.getElementById('snake-info-best')!
    #infoDeath: HTMLElement = document.getElementById('snake-info-death')!


    //Constructor
    constructor(canvas: HTMLCanvasElement) {
        //Get context
        this.#context = canvas.getContext('2d')!

        //Init game info
        this.#size = new Vec2(canvas.width, canvas.height)
    }

    //Update & render
    update = () => {
        //Dead -> Don't update
        if (this.#isDead) return
        
        //Check keys from input queue
        for (let i = this.#inputQueue.length - 1; i >= 0; i--) {
            //Get key & remove it from queue
            const key = this.#inputQueue.pop()

            //Check if key is valid
            let valid = false
            switch (key) {
                //Up
                case 'w':
                case 'arrowup':
                    if (this.#snake.dir.y !== 0) break
                    this.#snake.dir = new Vec2(0, -1)
                    valid = true
                    break
                //Right
                case 'd':
                case 'arrowright':
                    if (this.#snake.dir.x !== 0) break
                    this.#snake.dir = new Vec2(1, 0)
                    valid = true
                    break
                //Down
                case 's':
                case 'arrowdown':
                    if (this.#snake.dir.y !== 0) break
                    this.#snake.dir = new Vec2(0, 1)
                    valid = true
                    break
                //Left
                case 'a':
                case 'arrowleft':
                    if (this.#snake.dir.x !== 0) break
                    this.#snake.dir = new Vec2(-1, 0)
                    valid = true
                    break
            }

            //Check if key was valid
            if (valid) break
        }

        //Move snake
        this.#snake.pos.x += this.#snake.dir.x * this.#grid
        this.#snake.pos.y += this.#snake.dir.y * this.#grid

        //Wrap on screen edges
        if (this.#snake.pos.x < 0) {
            //Appear on the right
            this.#snake.pos.x = this.#size.x - this.#grid
        } else if (this.#snake.pos.x >= this.#size.x) {
            //Appear on the left
            this.#snake.pos.x = 0
        }

        if (this.#snake.pos.y < 0) {
            //Appear at the bottom
            this.#snake.pos.y = this.#size.y - this.#grid
        } else if (this.#snake.pos.y >= this.#size.y) {
            //Appear at the top
            this.#snake.pos.y = 0
        }

        //Keep track of where snake has been (front of the array is always the head)
        this.#snake.cells.unshift(new Vec2(this.#snake.pos))

        //Remove cells as we move away from them
        if (this.#snake.cells.length > this.#snake.length) this.#snake.cells.pop()

        //Check snake cells
        this.#snake.cells.forEach((cell, index) => {
            //Snake ate apple
            if (cell.x === this.#apple.x && cell.y === this.#apple.y) {
                this.#snake.length++
                this.#points++
                this.#apple = this.getRandomPoint()
                
                //UI
                this.#infoPoints.textContent = `${this.#points}`
            }

            // check collision with all cells after this one (modified bubble sort)
            for (var i = index + 1; i < this.#snake.cells.length; i++) {
                //Snake occupies same space as a body part -> reset game
                if (cell.x != this.#snake.cells[i].x || cell.y !== this.#snake.cells[i].y) continue

                //Highscore
                if (this.#points > this.#best) {
                    this.#best = this.#points
                    DB.set('snake.best', this.#best)

                    //Highscore!
                    createSnackbar('🕹️ Highscore!', true)
                    
                    //UI
                    this.#infoBest.textContent = `${this.#best}`
                }

                //Die
                this.#isDead = true
                this.#infoDeath.style.visibility = 'visible'
            }
        })
    }

    draw = () => {
        //Dead -> Don't draw
        if (this.#isDead) return
        
        //Clear canvas
        this.#context.clearRect(0, 0, this.#size.x, this.#size.y)
        
        //Draw apple
        this.drawBox(this.#apple, '#eb3734')

        //Draw snake one cell at a time
        for (const cell of this.#snake.cells) {
            //Drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
            this.drawBox(cell, '#34eb5b')
        } 

        //Request next frame
        this.#animationFrame = requestAnimationFrame(this.draw)
    }

    //State
    resume = () => {
        //Pause just in case
        this.pause()

        //Resume
        this.#animationFrame = requestAnimationFrame(this.draw)
        this.#updateInterval = setInterval(this.update, this.#delta)
    }

    pause = () => {
        //Pause
        cancelAnimationFrame(this.#animationFrame)
        clearInterval(this.#updateInterval)
    }

    stop = () => {
        this.#isDead = true
        this.pause()
    }

    restart = () => {
        //Reset game info
        this.#inputQueue = []
        this.#isDead = false
        this.#points = 0
        this.#snake.pos = new Vec2(150)
        this.#snake.dir = new Vec2(1, 0)
        this.#snake.cells = []
        this.#snake.length = 4
        this.#apple = this.getRandomPoint()

        //UI
        this.#infoPoints.textContent = `${this.#points}`
        this.#infoBest.textContent = `${this.#best}`
        this.#infoDeath.style.visibility = 'hidden'

        //Start drawing
        this.resume()
    }

    //Helpers
    drawBox = (pos: Vec2, color: string) => {
        this.#context.fillStyle = color
        this.#context.fillRect(pos.x, pos.y, this.#grid - 1, this.#grid - 1)
    }

    getRandomPoint = () => {
        return new Vec2(
            Util.randomInt(0, this.#size.x / this.#grid - 1) * this.#grid, 
            Util.randomInt(0, this.#size.y / this.#grid - 1) * this.#grid
        )
    }

    keyPress = (key: string) => {
        this.#inputQueue.unshift(key)
    }

}

//Easteregg & menu
class SnakeEasteregg {

    //Elements
    #elements = {
        //Easteregg
        sidebarButton: document.getElementById('sidebar-snake') as HTMLElement,
        messageAFK: document.getElementById('snake-afk') as HTMLElement,
        //Menu
        menu: document.getElementById('snake-menu') as HTMLDialogElement,
        close: document.getElementById('snake-close') as HTMLElement,
        restart: document.getElementById('snake-restart') as HTMLElement,
        //Arrows
        up: document.getElementById('snake-arrow-up') as HTMLElement,
        down: document.getElementById('snake-arrow-down') as HTMLElement,
        left: document.getElementById('snake-arrow-left') as HTMLElement,
        right: document.getElementById('snake-arrow-right') as HTMLElement
    }

    //Game
    #game = new SnakeGame(document.getElementById('snake-canvas') as HTMLCanvasElement)

    get game() { return this.#game }

    //Easteregg
    #enabled: boolean = DB.get('snake', false, DB.BOOLEAN)

    enable() {
        DB.set('snake', true)
        this.#enabled = true
        this.#elements.sidebarButton.removeAttribute('hidden')
    }

    disable() {
        DB.set('snake', false)
        this.#enabled = false
        this.#elements.sidebarButton.setAttribute('hidden', '')
        this.onInputAFK()
    }

    //Toggle easteregg (code)
    #codesNextIndex: number = 0
    #codes = [
        ['s','n','a','k','e'],
        ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a']
    ]

    onCodeKey = (key: string) => {
        //Get next index
        const index = this.#codesNextIndex

        //States of key validity
        const INVALID = 0
        const VALID = 1
        const FINISHED = 2

        //Check if key is valid
        let state = INVALID
        for (const code of this.#codes) {
            //Code is smaller than next position
            if (code.length <= index) continue

            //Key does not match in code
            if (code[index] != key) continue

            //Valid key -> Check if finished code
            if (code.length == index + 1) {
                //Finished -> Mark as finished & stop looking
                state = FINISHED
                break
            }
            
            //Not finished -> Mark as valid key
            state = VALID
        }

        //Check state
        switch (state) {
            case INVALID:
                //Invalid -> Reset next index
                this.#codesNextIndex = 0
                break
            case VALID:
                //Valid -> Add key to current combination
                this.#codesNextIndex++
                break
            case FINISHED:
                //Finished -> Reset next index & open snake
                this.#codesNextIndex = 0
                this.toggleMenu()
                break
        }
    }

    //Toggle easteregg (AFK timer)
    #afkDuration: number = 25000 //25 seconds
    #afkTimer: number = -1
    
    onAFK = () => {
        //Already enabled or message/menu is open
        if (this.#enabled || this.#elements.messageAFK.hasAttribute('show') || this.#elements.menu.open) return

        //Show popup
        this.#elements.messageAFK.setAttribute('show', '')
    }

    onInputAFK = () => {
        //Clear popup timer & start counting again if easteregg not enabled
        clearTimeout(this.#afkTimer)
        if (!this.#enabled) this.#afkTimer = setTimeout(this.onAFK, this.#afkDuration)
    }

    //Menu
    toggleMenu = () => {
        //Toggle menu
        if (this.#elements.menu.open) {
            //Close
            this.#elements.menu.close()
            Util.toggleScroll(true)
            
            //Stop game
            this.game.stop()
        } else {
            //Open
            this.#elements.menu.showModal()
            Util.toggleScroll(false)

            //Mark easteregg as enabled
            this.enable()

            //Start game
            this.game.restart()
        }

        //Close sidebar
        sidebar.toggle(false)
    }

    constructor() {
        //Toggle easteregg
        window.addEventListener('blur', () => clearTimeout(this.#afkTimer))
        window.addEventListener('focus', this.onInputAFK)

        if (this.#enabled) {
            //Enabled -> Show sidebar button
            this.#elements.sidebarButton.removeAttribute('hidden')
        } else {
            //Disabled -> Start counting for AFK message
            this.onInputAFK()
        }

        //Input (game & toggle easteregg)
        window.addEventListener('scroll', this.onInputAFK)
        window.addEventListener('click', this.onInputAFK)
        window.addEventListener('keydown', event => {
            //AFK check
            this.onInputAFK()

            //Get pressed key
            const key = event.key.toLowerCase()

            //Check if game is open
            if (this.#elements.menu.open) {
                //Open -> Add key to input queue & check later on game loop
                this.game.keyPress(key)
            } else {
                //Closed -> Check input to toggle easteregg by code
                this.onCodeKey(key)
            }
        })

        //Register events
        Util.onDialogBackdropClick(this.#elements.menu, this.toggleMenu)
        this.#elements.close.onclick = this.toggleMenu
        this.#elements.restart.onclick = this.game.restart
        this.#elements.up.onclick = () => this.game.keyPress('w')
        this.#elements.down.onclick = () => this.game.keyPress('s')
        this.#elements.left.onclick = () => this.game.keyPress('a')
        this.#elements.right.onclick = () => this.game.keyPress('d')
        this.#elements.messageAFK.onclick = () => {
            this.#elements.messageAFK.removeAttribute('show')
            this.toggleMenu()
        }
    }

}

const snake = new SnakeEasteregg()



  /*$$$$$            /$$       /$$                                                                   /$$
 /$$__  $$          | $$      |__/                                                                  | $$
| $$  \ $$  /$$$$$$$| $$$$$$$  /$$  /$$$$$$  /$$    /$$ /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
| $$$$$$$$ /$$_____/| $$__  $$| $$ /$$__  $$|  $$  /$$//$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
| $$__  $$| $$      | $$  \ $$| $$| $$$$$$$$ \  $$/$$/| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
| $$  | $$| $$      | $$  | $$| $$| $$_____/  \  $$$/ | $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
| $$  | $$|  $$$$$$$| $$  | $$| $$|  $$$$$$$   \  $/  |  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
|__/  |__/ \_______/|__/  |__/|__/ \_______/    \_/    \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |______*/

//System & menu
class AchievementsSystem {

    //Elements
    #elements = {
        //Menu
        menu: document.getElementById('achievements-menu') as HTMLDialogElement,
        close: document.getElementById('achievements-close') as HTMLElement,
        list: document.getElementById('achievements-list') as HTMLElement,
        //Dots
        dot1: document.getElementById('achievements-dot1') as HTMLElement,
        dot2: document.getElementById('achievements-dot2') as HTMLElement
    }

    //Current achievements
    #current: any = {}

    //Give, reset & show achievements
    #addFromKey = (key: string) => {
        DB.set(`achievement-${key}`, true)
        this.#current[key] = true
    }

    #resetFromKey = (key: string) => {
        DB.set(`achievement-${key}`, false)
        this.#current[key] = false
    }

    give = (key: string) => {
        //Achievement does not exist
        if (!Achievement[key]) return

        //Already has achievement
        if (this.#current[key]) return

        //Show snackbar
        createSnackbar(`🏆 ${Localization.localize(`achievements.${key}.title`)}`, true)
        
        //Add achievement
        this.#addFromKey(key)

        //Show achievement indicator dots
        this.#elements.dot1.setAttribute('active', '')
        this.#elements.dot2.setAttribute('active', '')
    }

    giveAll = () => {
        //Give all achievements
        for (const key of Object.keys(Achievement)) achievements.give(Achievement[key])
    }

    resetAll = () => {
        //Reset all achievements
        for (const key of Object.keys(this.#current)) this.#resetFromKey(key)
    }

    //Menu
    toggleMenu = () => {
        //Hide achievement indicator dots
        this.#elements.dot1.removeAttribute('active')
        this.#elements.dot2.removeAttribute('active')

        //Close sidebar
        sidebar.toggle(false)

        //Toggle menu
        if (this.#elements.menu.open) {
            //Close
            this.#elements.menu.close()
            Util.toggleScroll(true)
        } else {
            //Clear achievements list
            this.#elements.list.innerHTML = ''

            //Load achievements in list
            for (const key of Object.keys(Achievement)) {
                //Create achievement element
                const element = document.createElement('div')
                element.classList.add('achievement')

                //Hide element if user does not have the achievement
                if (!this.#current[key]) element.setAttribute('hidden', '')

                //Fill element content
                element.innerHTML = `
                    <img src="/assets/images/achievements/${key}.webp">
                    <div>
                        <div>${Localization.localize(`achievements.${key}.title`)}</div>
                        <div>${Localization.localize(`achievements.${key}.description`)}</div>
                    </div>
                    <span>${Localization.localize(`achievements.hidden`)}</span>
                `

                //Add element to list
                this.#elements.list.appendChild(element)
            }

            //Open
            this.#elements.menu.showModal()
            Util.toggleScroll(false)
        }
    }

    //System
    constructor() {
        //Load achievements
        for (const key of Object.keys(Achievement)) {
            //Check if user has achievement
            if (!DB.get(`achievement-${Achievement[key]}`, false, DB.BOOLEAN)) continue

            //User has achievement -> Add it
            this.#addFromKey(key)
        }

        //Register events
        Util.onDialogBackdropClick(this.#elements.menu, this.toggleMenu)
        this.#elements.close.onclick = this.toggleMenu
    }

}

const achievements = new AchievementsSystem()

;(window as any).achievements = achievements


  /*$$$$$  /$$       /$$           /$$
 /$$__  $$|__/      | $$          | $$
| $$  \__/ /$$  /$$$$$$$  /$$$$$$ | $$$$$$$   /$$$$$$   /$$$$$$
|  $$$$$$ | $$ /$$__  $$ /$$__  $$| $$__  $$ |____  $$ /$$__  $$
 \____  $$| $$| $$  | $$| $$$$$$$$| $$  \ $$  /$$$$$$$| $$  \__/
 /$$  \ $$| $$| $$  | $$| $$_____/| $$  | $$ /$$__  $$| $$
|  $$$$$$/| $$|  $$$$$$$|  $$$$$$$| $$$$$$$/|  $$$$$$$| $$
 \______/ |__/ \_______/ \_______/|_______/  \_______/|_*/

//Navigation
new CurrentPageIndicator(['home', 'about', 'skills', 'projects', 'contact'])

//Sidebar
class Sidebar {

    //Elements
    #elements = {
        //Sidebar
        sidebar: document.getElementById('sidebar') as HTMLElement,
        sidebarMobile: document.getElementById('sidebar-mobile') as HTMLElement,
        //Buttons
        home: document.getElementById('sidebar-home') as HTMLElement,
        about: document.getElementById('sidebar-about') as HTMLElement,
        skills: document.getElementById('sidebar-skills') as HTMLElement,
        projects: document.getElementById('sidebar-projects') as HTMLElement,
        contact: document.getElementById('sidebar-contact') as HTMLElement,
        curriculum: document.getElementById('sidebar-curriculum') as HTMLElement,
        localization: document.getElementById('sidebar-localization') as HTMLElement,
        theme: document.getElementById('sidebar-theme') as HTMLElement,
        snake: document.getElementById('sidebar-snake') as HTMLElement,
        achievements: document.getElementById('sidebar-achievements') as HTMLElement
    }

    //Sidebar
    toggle = (toggle: boolean | null = null) => {
        //Fix toggle
        if (typeof toggle !== 'boolean') toggle = !this.#elements.sidebar.hasAttribute('open')

        //Toggle sidebar
        if (toggle) {
            this.#elements.sidebar.setAttribute('open', '')
            document.body.setAttribute('sidebar', '')
        } else {
            this.#elements.sidebar.removeAttribute('open')
            document.body.removeAttribute('sidebar')
        }
    }

    constructor() {
        //Register events (toggle)
        this.#elements.sidebar.onclick = () => this.toggle()
        this.#elements.sidebarMobile.onclick = () => this.toggle()

        //Register events (buttons)
        this.#elements.home.onclick = () => goTo('home')
        this.#elements.about.onclick = () => goTo('about')
        this.#elements.skills.onclick = () => goTo('skills')
        this.#elements.projects.onclick = () => goTo('projects')
        this.#elements.contact.onclick = () => goTo('contact')
        this.#elements.curriculum.onclick = curriculum.toggleMenu
        this.#elements.localization.onclick = () => {
            //Localize
            Localization.swap()

            //Close sidebar
            sidebar.toggle()
        }
        this.#elements.theme.onclick = toggleTheme
        this.#elements.snake.onclick = snake.toggleMenu
        this.#elements.achievements.onclick = achievements.toggleMenu
    }

}

const sidebar = new Sidebar()



 /*$   /$$
| $$  | $$
| $$  | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$
| $$$$$$$$ /$$__  $$| $$_  $$_  $$ /$$__  $$
| $$__  $$| $$  \ $$| $$ \ $$ \ $$| $$$$$$$$
| $$  | $$| $$  | $$| $$ | $$ | $$| $$_____/
| $$  | $$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
|__/  |__/ \______/ |__/ |__/ |__/ \______*/

//Text animation
type HomeTextState = 1 | 2 | 3

class HomeText {

    //Elements
    #elements = {
        text: document.getElementById('home-text3') as HTMLElement
    }

    //Variables
    #timer: number | undefined = undefined
    #baseL: string = ''
    #baseR: string = ''
    #role: string = ''
    #text: string = ''
    #censorIds: number[] = []
    #roleId: number = -1

    //Delay
    static DELAY_FULL: number = 2500
    static DELAY_CHARACTER: number = 30

    //State
    #state: HomeTextState = 1
    static STATE_CENSOR: HomeTextState = 1
    static STATE_RESIZE: HomeTextState = 2
    static STATE_UNCENSOR: HomeTextState = 3


    //Constructor
    constructor() {
        this.reset()
    }

    reset = () => {
        //Stop timer
        clearTimeout(this.#timer)

        //Get base parts
        const parts = Localization.localize(`home.text3`)!.split('###')
        this.#baseL = parts[0]
        this.#baseR = parts[1]

        //Select first role
        this.#roleId = -1
        this.selectNextRole()
        this.#text = this.#role

        //Update text
        this.updateText()
        
        //Wait for delay to finish
        this.waitNext(HomeText.DELAY_FULL, HomeText.STATE_CENSOR)
    }

    updateText = () => {
        this.#elements.text.textContent = this.#baseL + this.#text + this.#baseR
    }

    selectNextRole = () => {
        //Get roles
        const roles = Localization.localizeAs<string[]>('home.roles')!

        //Get next id
        this.#roleId++
        if (this.#roleId >= roles.length) this.#roleId = 0

        //Update role
        this.#role = roles[this.#roleId]

        //Reset ids list
        this.resetCensorIds()
    }

    resetCensorIds = () => {
        this.#censorIds = []
        for (let i = 0; i < this.#role.length; i++) this.#censorIds.push(i)
    }

    getCharacter = () => {
        return Util.randomFromList(['#', '$', '€', '%', '&', '?', '!', '@', '^', '-', '~', '>', '<'])
    }

    waitNext = (duration: number, newState: HomeTextState | null = null) => {
        if (newState) this.#state = newState
        this.#timer = setTimeout(() => { this.next() }, duration)
    }

    next = () => {
        switch (this.#state) {
            //Censor text
            case HomeText.STATE_CENSOR: {
                //Censor character
                const idx = Util.randomFromList(this.#censorIds, true)
                this.#text = Util.setCharAt(this.#text, idx, this.getCharacter())
                this.updateText()

                //Check if finished censoring
                if (this.#censorIds.length == 0) {
                    //Finished -> Get next role
                    this.selectNextRole()

                    //Check next state
                    if (this.#text.length != this.#role.length) {
                        //Different size -> Resize text
                        this.waitNext(HomeText.DELAY_CHARACTER, HomeText.STATE_RESIZE)
                        break
                    } else {
                        //Same size -> Uncensor it
                        this.waitNext(HomeText.DELAY_CHARACTER, HomeText.STATE_UNCENSOR)
                        break
                    }
                }

                //Wait for next step
                this.waitNext(HomeText.DELAY_CHARACTER)
            }
            break
            
            //Resize text
            case HomeText.STATE_RESIZE: {
                //Check if add or remove character
                if (this.#text.length < this.#role.length) {
                    //Add
                    this.#text += this.getCharacter()
                } else {
                    //Remove
                    this.#text = this.#text.substring(0, this.#text.length - 1)
                }
                this.updateText()

                //Check if finished
                if (this.#text.length == this.#role.length) {
                    //Same size -> Uncensor it
                    this.waitNext(HomeText.DELAY_CHARACTER, HomeText.STATE_UNCENSOR)
                } else {
                    //Different size -> Resize next
                    this.waitNext(HomeText.DELAY_CHARACTER)
                }
            }
            break

            //Uncensor text
            case HomeText.STATE_UNCENSOR: {
                //Uncensor character    
                const idx = Util.randomFromList(this.#censorIds, true)
                this.#text = Util.setCharAt(this.#text, idx, this.#role[idx])
                this.updateText()

                //Check next state
                if (this.#censorIds.length == 0) {
                    //Finished -> Censor it
                    this.resetCensorIds()
                    this.waitNext(HomeText.DELAY_FULL, HomeText.STATE_CENSOR)
                } else {
                    //Not finished -> Uncensor next character
                    this.waitNext(HomeText.DELAY_CHARACTER)
                }
            }
            break
        }
    }

}

//Page
class HomePage {

    //Elements
    #elements = {
        //Arrow
        arrow: document.getElementById('home-arrow') as HTMLElement
    }

    //Animations
    #textAnimation = new HomeText()

    get textAnimation() { return this.#textAnimation }

    //Page
    localize = () => {
        this.textAnimation.reset()
    }

    constructor() {
        //Register localization
        Localization.registerOnLocalizedEvent(this.localize)

        //Register events
        this.#elements.arrow.onclick = () => goTo('about')
    }

}

const home = new HomePage()



  /*$$$$$  /$$                             /$$
 /$$__  $$| $$                            | $$
| $$  \ $$| $$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$
| $$$$$$$$| $$__  $$ /$$__  $$| $$  | $$|_  $$_/
| $$__  $$| $$  \ $$| $$  \ $$| $$  | $$  | $$
| $$  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$
| $$  | $$| $$$$$$$/|  $$$$$$/|  $$$$$$/  |  $$$$/
|__/  |__/|_______/  \______/  \______/    \__*/

class AboutPage {

    //Elements
    #elements = {
        //Page
        page: document.getElementById('about') as HTMLElement,
        //Info
        description1: document.getElementById('about-description1') as HTMLElement,
        contact: document.getElementById('about-contact') as HTMLElement,
        //Carousel
        imageBox: document.getElementById('about-img-box') as HTMLElement,
        image: document.getElementById('about-img') as HTMLImageElement,
        imageName: document.getElementById('about-img-name') as HTMLElement,
        imageNext: document.getElementById('about-img-next') as HTMLElement,
        //Career
        career: document.getElementById('about-career') as HTMLElement,
        //Arrow
        arrow: document.getElementById('about-arrow') as HTMLElement
    }

    //Carousel
    #isLoading: boolean = false
    #currentIndex: number = -1
    #imageOrder: number[] = []

    next = () => {
        //Is loading
        if (this.#isLoading) return
        this.#isLoading = true

        //Hide click me text
        if (this.#currentIndex >= 0) this.#elements.image.setAttribute('clicked', '')

        //Get next image index
        let nextIndex = this.#currentIndex + 1
        if (nextIndex >= Photos.length) nextIndex = 0

        //Load animation
        this.#elements.image.setAttribute('loading', '')
        setTimeout(() => {
            //Update
            this.#currentIndex = nextIndex
            this.#elements.image.src = `/assets/images/about/${Photos[this.#imageOrder[this.#currentIndex]]}`
        }, 400)
    }

    //Career
    createCareerTimeline = () => {
        //Clear career
        this.#elements.career.innerHTML = ''

        //Add items
        for (const key of Object.keys(Career)) {
            const info = Career[key]
            this.#elements.career.innerHTML += this.createCareerItem(key, info)
        }
    }

    createCareerItem = (key: string, info: any) => {
        //Get locale for key
        const localeKey = 'about.career.items.' + key

        //Get start date
        const startMonthIndex = (info.startMonth ? info.startMonth - 1 : -1)
        const startDate = (startMonthIndex >= 0 ? `<span localize-text="about.career.months.${startMonthIndex}"></span> ${info.startYear}` : '<span localize-text="about.career.present"></span>')

        //Get end date
        const endMonthIndex = (info.endMonth ? info.endMonth - 1 : -1)
        const endDate = (endMonthIndex >= 0 ? `<span localize-text="about.career.months.${endMonthIndex}"></span> ${info.endYear}` : '<span localize-text="about.career.present"></span>')

        //Get date
        const date = (endDate ? `${startDate} - ${endDate}` : startDate)

        //Create HTML item
        return `
            <div class="career-item">
                <!-- Icon & line -->
                <div class="career-item-left">
                    <img src="/assets/images/icons/${info.icon}">
                    <line></line>
                </div>

                <!-- Text -->
                <div class="career-item-right">
                    <div localize-text="${localeKey}.title"></div>
                    <div localize-text="${localeKey}.content"></div>
                    <div>${date}</div>
                </div>
            </div>
        `
    }

    //Page
    localize = () => {
        //Info
        this.#elements.description1.textContent = Localization.localize('about.info.desc1')!.replace('###', `${Math.abs(new Date(Date.now() - new Date("2004-01-23").getTime()).getUTCFullYear() - 1970)}`) //Replace ### with age
    }

    constructor() {
        //Register localization
        Localization.registerOnLocalizedEvent(this.localize)

        //Register events
        this.#elements.contact.onclick = () => goTo('contact')
        this.#elements.imageBox.onclick = this.next
        this.#elements.arrow.onclick = () => goTo('skills')

        //Animate appear
        animator.animate(this.#elements.page)

        //Image load listener
        this.#elements.image.onload = () => {
            //Update image name
            const nameKey = `about.carousel.names.${this.#imageOrder[this.#currentIndex]}`
            this.#elements.imageName.setAttribute('localize-text', nameKey)
            this.#elements.imageName.textContent = Localization.localize(nameKey)!

            //Loading
            if (this.#isLoading) {
                //Stop animation
                this.#elements.image.removeAttribute('loading')

                //Artyom (last image) -> Give achievement
                if (this.#currentIndex == Photos.length - 1) achievements.give(Achievement.artyom)

                //Finish
                setTimeout(() => { this.#isLoading = false }, 400)
            }
        }

        //Add images (excluding myself and artyom) & shuffle them
        for (let i = 1; i < Photos.length - 1; i++) this.#imageOrder.push(i)
        Util.shuffleList(this.#imageOrder)

        //Add myself first & artyom last
        this.#imageOrder.splice(0, 0, 0)            //Add myself first
        this.#imageOrder.push(Photos.length - 1)    //Add artyom last

        //Select first image (index starts at -1)
        this.next()

        //Create career
        this.createCareerTimeline()
    }

}

new AboutPage()



  /*$$$$$  /$$       /$$ /$$ /$$
 /$$__  $$| $$      |__/| $$| $$
| $$  \__/| $$   /$$ /$$| $$| $$  /$$$$$$$
|  $$$$$$ | $$  /$$/| $$| $$| $$ /$$_____/
 \____  $$| $$$$$$/ | $$| $$| $$|  $$$$$$
 /$$  \ $$| $$_  $$ | $$| $$| $$ \____  $$
|  $$$$$$/| $$ \  $$| $$| $$| $$ /$$$$$$$/
 \______/ |__/  \__/|__/|__/|__/|______*/

class SkillsPage {

    //Elements
    #elements = {
        arrow: document.getElementById('skills-arrow') as HTMLElement
    }

    //Page
    constructor() {
        //Register events
        this.#elements.arrow.onclick = () => goTo('projects')

        //Create observer to update skills visibility
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                //Not intersecting
                if (!entry.isIntersecting) continue

                //Show experience
                entry.target.setAttribute('visible', '')
                observer.unobserve(entry.target)
            }
        }, {
            threshold: 0
        })

        //Create max experience var
        let maxExperience = 0

        //Assign experience & observer to skills
        for (const key of Object.keys(Skill)) {
            const skill = Skill[key]
            const element = document.getElementById(`${skill.id}-bar`)!
            element.style.setProperty('--skillExperience', skill.experience)
            observer.observe(element)

            //Compare max experience
            maxExperience = Math.max(maxExperience, skill.experience)
        }

        //Update max experience
        document.getElementById('skills')!.style.setProperty('--skillsMax', `${maxExperience}`)

        //Update skills years
        for (const key of Object.keys(Skill)) {
            const skill = Skill[key]
            document.getElementById(`${skill.id}-years`)!.textContent = `${skill.experience}`
        }
    }

}

new SkillsPage()



 /*$$$$$$                                               /$$
| $$__  $$                                             | $$
| $$  \ $$ /$$$$$$   /$$$$$$  /$$  /$$$$$$   /$$$$$$$ /$$$$$$   /$$$$$$$
| $$$$$$$//$$__  $$ /$$__  $$|__/ /$$__  $$ /$$_____/|_  $$_/  /$$_____/
| $$____/| $$  \__/| $$  \ $$ /$$| $$$$$$$$| $$        | $$   |  $$$$$$
| $$     | $$      | $$  | $$| $$| $$_____/| $$        | $$ /$$\____  $$
| $$     | $$      |  $$$$$$/| $$|  $$$$$$$|  $$$$$$$  |  $$$$//$$$$$$$/
|__/     |__/       \______/ | $$ \_______/ \_______/   \___/ |_______/
                        /$$  | $$
                       |  $$$$$$/
                        \_____*/

class ProjectsPage {

    //Elements
    #elements = {
        //Page
        list: document.getElementById('projects-list') as HTMLElement,
        more: document.getElementById('projects-more') as HTMLElement,
        //Fullscreen
        fullscreen: document.getElementById('project-fullscreen') as HTMLElement,
        fullscreenClose: document.getElementById('project-fullscreen-close') as HTMLElement,
        fullscreenImage: document.getElementById('project-fullscreen-image') as HTMLImageElement,
        //Filters (page)
        filtersCategoryBy: document.getElementById('projects-category-by') as HTMLElement,
        filtersTagsBy: document.getElementById('projects-tags-by') as HTMLElement,
        filtersSortBy: document.getElementById('projects-sort-by') as HTMLElement,
        //Filters (menu)
        filterMenu: document.getElementById('filter-menu') as HTMLDialogElement,
        filterMenuTitle: document.getElementById('filter-menu-title') as HTMLElement,
        filterMenuClose: document.getElementById('filter-menu-close') as HTMLElement,
        filterMenuList: document.getElementById('filter-menu-list') as HTMLElement
    }

    //Info
    #info = {
        //Created projects
        isLoaded: false,
        createdCount: 0,

        //Filter
        category: Category.all as string,
        tag: Tag.all as string,
        sort: Sort.favs as string,

        //Projects
        projects: [] as any[]
    }


    //Tags
    createTagElement = (pair: LocalePair, onclick: Function): HTMLElement => {
        const element = document.createElement('span')
        element.classList.add('glass-hover', 'project-tag')
        if (pair.key) element.setAttribute('localize-text', pair.key)
        element.textContent = pair.text
        element.onclick = () => onclick()
        return element
    }

    localizeCategory = (category: string): LocalePair => {
        const key = `projects.category.${category in Category ? category : Category.all}`
        const text = Localization.localize(key)!
        return { key, text }
    }

    localizeTag = (tag: string): LocalePair => {
        const key = `projects.tags.${tag}`
        const text = Localization.localize(`projects.tags.${tag}`)
        return { 
            key: text ? key : null, 
            text: text || tag
        }
    }

    localizeSort = (sort: string): LocalePair => {
        const key = `projects.sort.${sort in Sort ? sort : Sort.favs}`
        const text = Localization.localize(key)!
        return { key, text }
    }

    //Manage projects
    addProjects = (category: string | null, tag: string | null, sort: string | null) => {
        //Fix options
        if (typeof category !== 'string') category = this.#info.category
        if (typeof tag !== 'string') tag = this.#info.tag
        if (typeof sort !== 'string') sort = this.#info.sort

        //Check if is refresh & save filters if not refreshing
        const isRefresh = (this.#info.category == category) && (this.#info.tag == tag) && (this.#info.sort == sort) && (this.#info.isLoaded)
        if (!isRefresh) {
            this.#info.category = category
            this.#info.tag = tag
            this.#info.sort = sort
            this.updateFiltersInfo()
        }

        //Copy projects list
        this.#info.projects = []
        for (const project of SelectedProjects) this.#info.projects.push(project)

        //Remove projects of different categories
        if (category != Category.all) {
            for (let i = this.#info.projects.length - 1; i >= 0; i--) {
                //Get project
                const project = this.#info.projects[i]

                //Remove project if of different category
                if (project.category != category) this.#info.projects.splice(i, 1)
            }
        }

        //Filter projects
        if (tag != Tag.all) {
            for (let i = this.#info.projects.length - 1; i >= 0; i--) {
                //Get project
                const project = this.#info.projects[i]

                //Remove project if missing tag
                if (!project.tags.includes(tag)) this.#info.projects.splice(i, 1)
            }
        }

        //Sort list (by date)
        switch (sort) {
            case Sort.date:
                this.#info.projects.sort((a, b) => Math.max(b.dateStart, b.dateEnd) - Math.max(a.dateStart, a.dateEnd))
                break
            case Sort.favs:
                this.#info.projects.sort((a, b) => b.favPoints - a.favPoints)
                break
        }

        //Scroll to projects if not refresh (changed some filter)
        if (!isRefresh && this.#info.isLoaded) goTo('projects')

        //Get info before emptying this.#info.created
        const animate = (!isRefresh) && (this.#info.createdCount == 0)
        const length = (isRefresh ? Math.max(this.#info.createdCount, 4) : 4)

        //Clear
        this.clearProjects()

        //Add projects
        for (let i = 0; i < length; i++) this.addProject(animate)

        //No projects -> Show no projects text
        if (this.#info.createdCount == 0) this.#elements.list.innerHTML = `
            <div class="project-none">
                <div>🥲</div>
                <div localize-html="projects.none">${Localization.localize('projects.none')}</div>
            </div>
        `

        //Mark as loaded
        this.#info.isLoaded = true
    }

    addProject = (animate: boolean = true) => {
        //Get index
        const index = this.#info.createdCount

        //Check if project exists
        if (index >= this.#info.projects.length) return

        //Get project info
        const id = `project${index}`
        const project = this.#info.projects[index]

        //Get date
        const dateStart = project.dateStart
        const dateEnd = (project.dateEnd == Infinity ? Localization.localize('projects.date.present')! : project.dateEnd)

        //Create project element
        const element = document.createElement('div')
        element.id = id
        element.classList.add('project')
        if (index % 2 != 0) element.setAttribute('reverse', '')
        if (animate) animator.animate(element)

        //Media
        const elementMedia = document.createElement('div')
        elementMedia.id = `${id}-media`
        elementMedia.classList.add('project-media')
        if (typeof project.vid === 'string') elementMedia.setAttribute('hasvideo', '')
        element.appendChild(elementMedia)
    
        //Media > Content
        const elementMediaContent = document.createElement('div')
        elementMediaContent.classList.add('project-media-content')
        elementMediaContent.style.setProperty('--glitchImg', `url('/assets/images/projects/${project.key}.webp')`)
        elementMedia.appendChild(elementMediaContent)

        const elementMediaContentImage = document.createElement('img')
        elementMediaContentImage.src = `/assets/images/projects/${project.key}.webp`
        elementMediaContent.appendChild(elementMediaContentImage)

        const elementMediaContentVideo = document.createElement('iframe')
        elementMediaContentVideo.id = `${id}-video`
        elementMediaContentVideo.allow = 'fullscreen'
        elementMediaContent.appendChild(elementMediaContentVideo)

        //Media > Scope
        const elementMediaScope = document.createElement('span')
        elementMediaScope.classList.add('glass', 'project-scope')
        elementMedia.appendChild(elementMediaScope)
        this.#elements.list.appendChild(element)

        if (Array.isArray(project.scope)) {
            for (const [i, key] of project.scope.entries()) {
                //New line
                if (i != 0) elementMediaScope.appendChild(document.createElement('br'))

                //Scope
                const item = document.createElement('span')
                item.setAttribute('localize-text', `projects.scope.${key}`)
                elementMediaScope.appendChild(item)
            }
        }

        //Media > Actions
        const elementMediaActions = document.createElement('div')
        elementMediaActions.classList.add('project-actions')
        elementMedia.appendChild(elementMediaActions)

        const elementMediaActionsVideo = document.createElement('div')
        elementMediaActionsVideo.classList.add('glass', 'project-action-button', 'project-video-button')
        elementMediaActionsVideo.innerHTML = `
            <img src="/assets/images/icons/play.webp">
            <span localize-text="projects.items.${project.key}.vid"></span>
        `
        elementMediaActionsVideo.onclick = () => this.actionToggleVideo(index, `https://www.youtube.com/embed/${project.vid}`)
        elementMediaActions.appendChild(elementMediaActionsVideo)

        const elementMediaActionsFullscreen = document.createElement('div')
        elementMediaActionsFullscreen.classList.add('glass', 'project-action-button')
        elementMediaActionsFullscreen.innerHTML = `<img src="/assets/images/icons/maximize.webp">`
        elementMediaActionsFullscreen.setAttribute('hidevideo', '')
        elementMediaActionsFullscreen.onclick = () => this.actionFullscreenImage(`/assets/images/projects/${project.key}.webp`)
        elementMediaActions.appendChild(elementMediaActionsFullscreen)

        //Info
        const elementInfo = document.createElement('div')
        elementInfo.classList.add('project-info')
        element.appendChild(elementInfo)

        //Info > Tags
        const elementInfoTags = document.createElement('div')
        elementInfoTags.classList.add('project-tags')
        elementInfo.appendChild(elementInfoTags)

        if (Array.isArray(project.tags)) {
            for (const tag of project.tags) {
                const item = this.createTagElement(this.localizeTag(tag), () => this.addProjects(null, tag, null))
                elementInfoTags.appendChild(item)
            }
        }

        //Info > Content
        const elementInfoContent = document.createElement('div')
        elementInfoContent.classList.add('glass', 'project-info-content')
        elementInfo.appendChild(elementInfoContent)

        const elementInfoContentTop = document.createElement('div')
        elementInfoContent.appendChild(elementInfoContentTop)

        const elementInfoContentTopTitle = document.createElement('span')
        elementInfoContentTopTitle.setAttribute('localize-text', `projects.items.${project.key}.tit`)
        elementInfoContentTop.appendChild(elementInfoContentTopTitle)

        const elementInfoContentTopDate = document.createElement('span')
        elementInfoContentTopDate.classList.add('projectDate')
        elementInfoContentTopDate.textContent = (dateStart == dateEnd ? dateEnd : dateStart + ' - ' + dateEnd)
        elementInfoContentTop.appendChild(elementInfoContentTopDate)

        const elementInfoContentDescription = document.createElement('span')
        elementInfoContentDescription.setAttribute('localize-html', `projects.items.${project.key}.con`)
        elementInfoContent.appendChild(elementInfoContentDescription)

        //Info > Buttons
        const elementInfoButtons = document.createElement('div')
        elementInfoButtons.classList.add('project-buttons')
        elementInfo.appendChild(elementInfoButtons)

        if (Array.isArray(project.buttons)) {
            for (const [i, link] of project.buttons.entries()) {
                const button = document.createElement('a')
                button.classList.add('button')
                button.target = '_blank'
                button.href = link
                button.setAttribute('small', '')
                button.setAttribute('localize-html', `projects.items.${project.key}.b${i + 1}`)
                button.onmousedown = this.onProjectOpened
                elementInfoButtons.appendChild(button)
            }
        }

        //Localize
        Localization.localizeElement(element)

        //Mark as done
        this.#info.createdCount++

        //Update load more button
        this.#elements.more.style.visibility = (this.#info.createdCount >= this.#info.projects.length ? 'hidden' : 'visible')
    }

    clearProjects = () => {
        //Clear projects
        this.#info.createdCount = 0
        this.#elements.list.innerHTML = ''
        this.#elements.more.style.visibility = (this.#info.createdCount >= this.#info.projects.length ? 'hidden' : 'visible')
    }

    refreshProjects = () => {
        //Add projects with current info
        this.addProjects(this.#info.category, this.#info.tag, this.#info.sort)
    }

    //Actions
    actionFullscreenImage = (url: string | null = null) => {
        if (typeof url === 'string') {
            //Show
            this.#elements.fullscreenImage.src = url
            this.#elements.fullscreen.setAttribute('show', '')
            Util.toggleScroll(false)
        } else {
            //Hide
            this.#elements.fullscreen.removeAttribute('show')
            Util.toggleScroll(true)
        }
    }

    actionToggleVideo = (index: number, url: string) => {
        //Get project elements
        const media = document.getElementById(`project${index}-media`) as HTMLElement
        const video = document.getElementById(`project${index}-video`) as HTMLIFrameElement

        //Toggle video
        if (media.hasAttribute('video')) {
            //Close
            media.removeAttribute('video')
            video.src = ''
        } else {
            //Open
            media.setAttribute('video', '')
            video.src = url
        }
    }

    onProjectOpened = () => {
        //Add achievement on resume
        addFocusListener(() => {
            achievements.give(Achievement.project)
            return true
        })
    }

    //Filters
    updateFiltersInfo = () => {
        //Category
        const categoryLocale = this.localizeCategory(this.#info.category)
        if (categoryLocale.key) this.#elements.filtersCategoryBy.setAttribute('localize-text', categoryLocale.key)
        this.#elements.filtersCategoryBy.textContent = categoryLocale.text

        //Tag
        const tagLocale = this.localizeTag(this.#info.tag)
        if (tagLocale.key) this.#elements.filtersTagsBy.setAttribute('localize-text', tagLocale.key)
        this.#elements.filtersTagsBy.textContent = tagLocale.text

        //Sort
        const sortLocale = this.localizeSort(this.#info.sort)
        if (sortLocale.key) this.#elements.filtersSortBy.setAttribute('localize-text', sortLocale.key)
        this.#elements.filtersSortBy.textContent = sortLocale.text
    }

    toggleFilterMenu = (type: 'category' | 'tags' | 'sort' = 'tags') => {
        //Close menu if open
        if (this.#elements.filterMenu.open) {
            this.#elements.filterMenu.close()
            Util.toggleScroll(true)
            return
        }

        //Clear list
        this.#elements.filterMenuList.innerHTML = ''

        //Execute menu logic
        switch (type) {
            //Category
            case 'category': {
                //Change menu title
                this.#elements.filterMenuTitle.textContent = Localization.localize('projects.category.title')

                //Get used categories
                const used: string[] = []
                for (const project of SelectedProjects) {
                    const category = project.category
                    if (!used.includes(category)) used.push(category)
                }

                //Get categories
                const categories = [Category.all]
                for (const key of Object.keys(Category)) {
                    const category = Category[key]
                    if (used.includes(category)) categories.push(category)
                }

                //Add categories
                for (const category of categories) {
                    const element = this.createTagElement(
                        this.localizeCategory(category), 
                        () => {
                            this.addProjects(category, null, null)
                            this.toggleFilterMenu()
                        }
                    )
                    this.#elements.filterMenuList.appendChild(element)
                }
                break
            }

            //Tags
            case 'tags': {
                //Change menu title
                this.#elements.filterMenuTitle.textContent = Localization.localize('projects.tags.title')

                //Get tags
                const used: string[] = []
                for (const project of SelectedProjects) {
                    for (const tag of project.tags) {
                        if (!used.includes(tag)) used.push(tag)
                    }
                }

                //Get tags
                const tags = [Tag.all]
                for (const key of Object.keys(Tag)) {
                    const tag = Tag[key]
                    if (used.includes(tag)) tags.push(tag)
                }

                //Add tags
                for (const tag of tags) {
                    const element = this.createTagElement(
                        this.localizeTag(tag), 
                        () => {
                            this.addProjects(null, tag, null)
                            this.toggleFilterMenu()
                        }
                    )
                    this.#elements.filterMenuList.appendChild(element)
                }
                break
            }

            //Sort
            case 'sort': {
                //Change menu title
                this.#elements.filterMenuTitle.textContent = Localization.localize('projects.sort.title')

                //Get sort options
                const options = []
                for (const key of Object.keys(Sort)) options.push(Sort[key])

                //Add categories
                for (const option of options) {
                    const element = this.createTagElement(
                        this.localizeSort(option), 
                        () => {
                            this.addProjects(null, null, option)
                            this.toggleFilterMenu()
                        }
                    )
                    this.#elements.filterMenuList.appendChild(element)
                }
                break
            }
        }

        //Open
        this.#elements.filterMenu.showModal()
        Util.toggleScroll(false)
    }

    //Page
    constructor() {
        //Register events (filter options)
        this.#elements.filtersCategoryBy.onclick = () => this.toggleFilterMenu('category')
        this.#elements.filtersTagsBy.onclick = () => this.toggleFilterMenu('tags')
        this.#elements.filtersSortBy.onclick = () => this.toggleFilterMenu('sort')

        //Register events (filter menu)
        Util.onDialogBackdropClick(this.#elements.filterMenu, this.toggleFilterMenu)
        this.#elements.filterMenuClose.onclick = () => this.toggleFilterMenu()

        //Register events (show more)
        this.#elements.more.onclick = () => {
            this.addProject() 
            this.addProject()
        }

        //Register events (fullscreen overlay)
        this.#elements.fullscreenClose.onclick = () => this.actionFullscreenImage()

        //Create projects
        this.refreshProjects()
    }

}

new ProjectsPage()



 /*$$$$$$$                    /$$
| $$_____/                   | $$
| $$     /$$$$$$   /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$
| $$$$$ /$$__  $$ /$$__  $$|_  $$_/   /$$__  $$ /$$__  $$
| $$__/| $$  \ $$| $$  \ $$  | $$    | $$$$$$$$| $$  \__/
| $$   | $$  | $$| $$  | $$  | $$ /$$| $$_____/| $$
| $$   |  $$$$$$/|  $$$$$$/  |  $$$$/|  $$$$$$$| $$
|__/    \______/  \______/    \___/   \_______/|_*/

//Page
class FooterPage {

    //Elements
    #elements = {
        //Contact
        contactEmail: document.getElementById('footer-contact-email') as HTMLElement,
        contactLinkedin: document.getElementById('footer-contact-linkedin') as HTMLElement,
        contactItchio: document.getElementById('footer-contact-itchio') as HTMLElement,
        contactGithub: document.getElementById('footer-contact-github') as HTMLElement,
        contactReddit: document.getElementById('footer-contact-reddit') as HTMLElement,
        contactYoutube: document.getElementById('footer-contact-youtube') as HTMLElement,
        contactTiktok: document.getElementById('footer-contact-tiktok') as HTMLElement,
        //Quotes
        quoteText: document.getElementById('footer-quote-text') as HTMLElement,
        quoteAuthor: document.getElementById('footer-quote-author') as HTMLElement,
        //Arrows
        arrowPrev: document.getElementById('footer-arrow-prev') as HTMLElement,
        arrowNext: document.getElementById('footer-arrow-next') as HTMLElement
    }

    //Contact
    copyMail = () => {
        createSnackbar(Localization.localize('footer.contact.mail')!, false)
        navigator.clipboard.writeText('alex.paniagua.moreno@gmail.com')
    }

    onContactOpened = () => {
        //Add achievement on resume
        addFocusListener(() => {
            achievements.give(Achievement.contact)
            return true
        })
    }

    //Quotes
    #currentQuoteIndex = 0
    #quotes = [
        'See you in the major leagues, Jack',
        "Before it all goes dark... for one last second, I'll know I wasn't alone",
        "What is better, I wonder: a life built on a lie, or a death born out of truth?",
        'In the end, all that we are... all that we have... is memories',
        'War, war never changes',
        'Truth is, the game was rigged grom the start',
        "Oh, it's you. It's been a looong time",
        "There's a monster inside all of us",
        'Link, this is a huge discovery!',
        "Relax. I've already thought of everything",
        'Oh my stars she is just so handsome',
        'Your brother needs you',
        "I can't believe we did that!",
        "It's only been a week, but it feels like a year",
        'No matter what, you keep finding something to fight for',
        "I don't think I can ever forgive you for that. But I would like to try",
        'The body is naught but a vessel for the soul',
        "I'm always succeeding, even when I'm not",
        'Any adventure you can fly away from',
        "We'll see... about that",
    ]
    #authors = [
        'V - Cyberpunk 2077',
        'So Mi - Cyberpunk 2077',
        'Anna - Metro Exodus',
        'Pavel - Metro: Last Light',
        'Narrator - Fallout',
        'Benny - Fallout: New Vegas',
        'Glados - Portal 2',
        'Silco - Arcane',
        'Zelda - Zelda: Tears of the Kingdom',
        'Killjoy - Valorant',
        'Parvati - The Outer Worlds',
        'HER - Ruiner',
        'Madeline - Celeste',
        'Zero - Katana Zero',
        'Joel - The Last of Us: Part 1',
        'Ellie - The Last of Us: Part 2',
        'Hannya - Ghostwire: Tokyo',
        'Colt - Deathloop',
        'Vasco - Starfield',
        'G-Man - Half Life: Alyx',
    ]

    updateQuote = () => {
        this.#elements.quoteText.textContent = `"${this.#quotes[this.#currentQuoteIndex]}"`
        this.#elements.quoteAuthor.textContent = this.#authors[this.#currentQuoteIndex]
    }

    prevQuote = () => {
        this.#currentQuoteIndex--
        if (this.#currentQuoteIndex < 0) this.#currentQuoteIndex = this.#quotes.length - 1
        this.updateQuote()
    }

    nextQuote = () => {
        this.#currentQuoteIndex++
        if (this.#currentQuoteIndex >= this.#quotes.length) this.#currentQuoteIndex = 0
        this.updateQuote()
    }

    //Page
    constructor() {
        //Register events
        this.#elements.contactEmail.onclick = this.copyMail
        this.#elements.contactLinkedin.onmousedown = this.onContactOpened
        this.#elements.contactItchio.onmousedown = this.onContactOpened
        this.#elements.contactGithub.onmousedown = this.onContactOpened
        this.#elements.contactReddit.onmousedown = this.onContactOpened
        this.#elements.contactYoutube.onmousedown = this.onContactOpened
        this.#elements.contactTiktok.onmousedown = this.onContactOpened
        this.#elements.arrowPrev.onclick = this.prevQuote
        this.#elements.arrowNext.onclick = this.nextQuote

        //Select random quote
        this.#currentQuoteIndex = Math.floor(Math.random() * this.#quotes.length)
        this.updateQuote()
    }

}

new FooterPage()



 /*$                                 /$$ /$$
| $$                                | $$|__/
| $$        /$$$$$$   /$$$$$$   /$$$$$$$ /$$ /$$$$$$$   /$$$$$$
| $$       /$$__  $$ |____  $$ /$$__  $$| $$| $$__  $$ /$$__  $$
| $$      | $$  \ $$  /$$$$$$$| $$  | $$| $$| $$  \ $$| $$  \ $$
| $$      | $$  | $$ /$$__  $$| $$  | $$| $$| $$  | $$| $$  | $$
| $$$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$| $$  | $$|  $$$$$$$
|________/ \______/  \_______/ \_______/|__/|__/  |__/ \____  $$
                                                       /$$  \ $$
                                                      |  $$$$$$/
                                                       \_____*/

//Animation
class LoadingAnimation {

    //Elements
    #elements = {
        //Progress
        menu: document.getElementById('loading') as HTMLElement,
        bar: document.getElementById('loading-bar') as HTMLElement,
        progress: document.getElementById('loading-progress') as HTMLElement
    }

    //Progress
    #progress: number = 0

    nextProgress = () => {
        //Next percent
        this.#progress = Math.min(100, this.#progress + Math.floor(Math.random() * 2) + 1)
        this.#elements.bar.style.setProperty('--fill', `${this.#progress}%`)
        this.#elements.progress.textContent = `${this.#progress}%`

        //Check if finished
        if (this.#progress >= 100) {
            //Loaded -> Hide loading page, reset home typing animation & enable scrolling
            this.#elements.menu.setAttribute('loaded', '')
            home.textAnimation.reset()
            Util.toggleScroll(true)
        } else {
            //Didn't finish -> Next progress
            setTimeout(this.nextProgress, 10)
        }
    }

    //Page
    constructor() {
        //Disable scrolling
        Util.toggleScroll(false)

        //Start counting progress
        this.nextProgress()
    }

}

new LoadingAnimation()



 /*$                                     /$$ /$$                       /$$     /$$
| $$                                    | $$|__/                      | $$    |__/
| $$        /$$$$$$   /$$$$$$$  /$$$$$$ | $$ /$$ /$$$$$$$$  /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$
| $$       /$$__  $$ /$$_____/ |____  $$| $$| $$|____ /$$/ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
| $$      | $$  \ $$| $$        /$$$$$$$| $$| $$   /$$$$/   /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
| $$      | $$  | $$| $$       /$$__  $$| $$| $$  /$$__/   /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
| $$$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$| $$ /$$$$$$$$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
|________/ \______/  \_______/ \_______/|__/|__/|________/ \_______/   \___/  |__/ \______/ |__/  |_*/

//Localize
Localization.localizeElement(document.body)
Localization.invokeEvents()