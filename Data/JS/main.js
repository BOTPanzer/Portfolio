 /*$      /$$           /$$
| $$$    /$$$          |__/
| $$$$  /$$$$  /$$$$$$  /$$ /$$$$$$$
| $$ $$/$$ $$ |____  $$| $$| $$__  $$
| $$  $$$| $$  /$$$$$$$| $$| $$  \ $$
| $$\  $ | $$ /$$__  $$| $$| $$  | $$
| $$ \/  | $$|  $$$$$$$| $$| $$  | $$
|__/     |__/ \_______/|__/|__/  |_*/

//Localization
let loc = Locales.en

//Appear animation manager
const animator = new AppearAnimation()

//Sidebar
class Sidebar {

    //Elements
    #elements = {
        //Sidebar
        sidebar: document.getElementById('sidebar'),
        //Buttons
        home: document.getElementById('sidebar-home'),
        about: document.getElementById('sidebar-about'),
        skills: document.getElementById('sidebar-skills'),
        projects: document.getElementById('sidebar-projects'),
        contact: document.getElementById('sidebar-contact'),
        curriculum: document.getElementById('sidebar-curriculum'),
        localization: document.getElementById('sidebar-localization'),
        theme: document.getElementById('sidebar-theme'),
        achievements: document.getElementById('sidebar-achievements')
    }

    //Sidebar
    toggle = (toggle) => {
        //Fix toggle
        if (typeof toggle !== 'boolean') toggle = !this.#elements.sidebar.hasAttribute('open')

        //Toggle sidebar
        if (toggle) {
            this.#elements.sidebar.setAttribute('open', '')
            document.body.setAttribute('sidebar', '')
        } else {
            this.#elements.sidebar.removeAttribute('open')
            document.body.removeAttribute('sidebar', '')
        }
    }

    localize = () => {
        //Get locale
        const locale = loc.sidebar

        //Localize
        this.#elements.home.innerText = locale.home
        this.#elements.about.innerText = locale.about
        this.#elements.skills.innerText = locale.skills
        this.#elements.projects.innerText = locale.projects
        this.#elements.contact.innerText = locale.contact
        this.#elements.curriculum.innerText = locale.curriculum
        this.#elements.localization.innerText = locale.localization
        this.#elements.theme.innerText = locale.theme
        this.#elements.achievements.innerText = locale.achievements
    }

}

const sidebar = new Sidebar()

//Navigation
new CurrentPageIndicator(['home', 'about', 'skills', 'projects', 'contact'])

function goTo(id) {
    //Scroll to element
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })

    //Close sidebar
    sidebar.toggle(false)
}

//Page title
function changeTitle() {
    const emojis = ['🦝', '🦎', '🦖', '🎷🐛', '😸']
    document.title = `${loc.title} ${Util.randomArray(emojis)}`
}

addFocusListener(changeTitle)

changeTitle()



 /*$   /$$
| $$  | $$
| $$  | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$
| $$$$$$$$ /$$__  $$| $$_  $$_  $$ /$$__  $$
| $$__  $$| $$  \ $$| $$ \ $$ \ $$| $$$$$$$$
| $$  | $$| $$  | $$| $$ | $$ | $$| $$_____/
| $$  | $$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
|__/  |__/ \______/ |__/ |__/ |__/ \______*/

//Text animation
class HomeText {

    //Variables
    timer = undefined
    baseL = ''
    baseR = ''
    role = ''
    text = ''
    censorIds = []
    roleId = -1
    textElement = document.getElementById('homeText3')

    //Delay
    static DELAY_FULL = 2500
    static DELAY_CHARACTER = 30

    //State
    state
    static STATE_CENSOR = 1
    static STATE_RESIZE = 2
    static STATE_UNCENSOR = 3


    //Constructor
    constructor() {
        this.reset()
    }

    reset = () => {
        //Stop timer
        clearTimeout(this.timer)

        //Get base parts
        const parts = loc.home.text3.split('###')
        this.baseL = parts[0]
        this.baseR = parts[1]

        //Select first role
        this.roleId = -1
        this.selectNextRole()
        this.text = this.role

        //Update text
        this.updateText()
        
        //Wait for delay to finish
        this.waitNext(HomeText.DELAY_FULL, HomeText.STATE_CENSOR)
    }

    updateText = () => {
        this.textElement.innerText = this.baseL + this.text + this.baseR
    }

    selectNextRole = () => {
        //Get next id
        this.roleId++
        if (this.roleId >= loc.home.roles.length) this.roleId = 0

        //Update role
        this.role = loc.home.roles[this.roleId]

        //Reset ids list
        this.resetCensorIds()
    }

    resetCensorIds = () => {
        this.censorIds = []
        for (let i = 0; i < this.role.length; i++) this.censorIds.push(i)
    }

    getCharacter = () => {
        return Util.randomArray(['#', '$', '€', '%', '&', '?', '!', '@', '^', '-', '~', '>', '<'])
    }

    waitNext = (duration, newState) => {
        if (newState) this.state = newState
        this.timer = setTimeout(() => { this.next() }, duration)
    }

    next = () => {
        switch (this.state) {
            //Censor text
            case HomeText.STATE_CENSOR: {
                //Censor character
                const idx = Util.randomArray(this.censorIds, true)
                this.text = Util.setCharAt(this.text, idx, this.getCharacter())
                this.updateText()

                //Check if finished censoring
                if (this.censorIds.length == 0) {
                    //Finished -> Get next role
                    this.selectNextRole()

                    //Check next state
                    if (this.text.length != this.role.length) {
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
                if (this.text.length < this.role.length) {
                    //Add
                    this.text += this.getCharacter()
                } else {
                    //Remove
                    this.text = this.text.substring(0, this.text.length - 1)
                }
                this.updateText()

                //Check if finished
                if (this.text.length == this.role.length) {
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
                const idx = Util.randomArray(this.censorIds, true)
                this.text = Util.setCharAt(this.text, idx, this.role[idx])
                this.updateText()

                //Check next state
                if (this.censorIds.length == 0) {
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
        text1: document.getElementById('homeText1'),
        text2: document.getElementById('homeText2')
    }

    //Animations
    #textAnimation = new HomeText()

    get textAnimation() { return this.#textAnimation }

    //Page
    localize = () => {
        //Get locale
        const locale = loc.home

        //Localize
        this.#elements.text1.innerText = locale.text1
        this.#elements.text2.innerText = locale.text2
        this.textAnimation.reset()
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

//Page
class AboutPage {

    //Elements
    #elements = {
        //Page
        page: document.getElementById('about'),
        //Info
        title: document.getElementById('aboutTitle'),
        description1: document.getElementById('aboutDescription1'),
        description2: document.getElementById('aboutDescription2'),
        description3: document.getElementById('aboutDescription3'),
        contact: document.getElementById('aboutContact'),
        //Carousel
        image: document.getElementById('aboutImg'),
        imageName: document.getElementById('aboutImgName'),
        imageNext: document.getElementById('aboutImgNext'),
        //Career
        career: document.getElementById('aboutCareer')
    }

    //Carousel
    #isLoading = false
    #currentIndex = -1
    #imageOrder = []
    #images = [
        'me1.webp',
        'me2.webp',
        'me3.webp',
        'almuñécar.webp',
        'amsterdam.webp',
        'canary.webp',
        'cat.webp',
        'flower.webp',
        'mallorca.webp',
        'otivar.webp',
        'artyom.webp'
    ]

    next = () => {
        //Is loading
        if (this.#isLoading) return
        this.#isLoading = true

        //Hide click me text
        if (this.#currentIndex >= 0) this.#elements.image.setAttribute('clicked', '')

        //Get next image index
        let nextIndex = this.#currentIndex + 1
        if (nextIndex >= this.#images.length) nextIndex = 0

        //Load animation
        this.#elements.image.setAttribute('loading', '')
        setTimeout(() => {
            //Update
            this.#currentIndex = nextIndex
            this.#elements.image.src = `Data/Images/About/${this.#images[this.#imageOrder[this.#currentIndex]]}`
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

    createCareerItem = (key, info) => {
        //Get locale for key
        const locale = loc.about.career.items[key]

        //Get start date
        const startMonthIndex = (info.startMonth ? info.startMonth - 1 : -1)
        const startDate = (startMonthIndex >= 0 ? `${loc.about.career.months[startMonthIndex]} ${info.startYear}` : loc.about.career.present)
        const endMonthIndex = (info.endMonth ? info.endMonth - 1 : -1)
        const endDate = (endMonthIndex >= 0 ? `${loc.about.career.months[endMonthIndex]} ${info.endYear}` : loc.about.career.present)
        const date = endDate ? `${startDate} - ${endDate}` : startDate

        //Create HTML item
        return `
            <div class="careerItem">
                <!-- Icon & line -->
                <div class="careerItemLeft">
                    <img src="Data/Images/Icons/${info.icon}">
                    <line></line>
                </div>

                <!-- Text -->
                <div class="careerItemRight">
                    <div>${locale.title}</div>
                    <div>${locale.content}</div>
                    <div>${date}</div>
                </div>
            </div>
        `
    }

    //Page
    localize = () => {
        //Get locale
        const locale = loc.about

        //Info
        this.#elements.title.innerText = locale.info.title
        this.#elements.description1.innerText = locale.info.desc1.replace('###', Math.abs(new Date(Date.now() - new Date("2004-01-23")).getUTCFullYear() - 1970)) //Replace ### with age
        this.#elements.description2.innerText = locale.info.desc2
        this.#elements.description3.innerText = locale.info.desc3
        this.#elements.contact.innerText = locale.info.contact

        //Carousel
        this.#elements.imageName.innerText = locale.carousel.names[this.#imageOrder[Math.max(this.#currentIndex, 0)]]
        this.#elements.imageNext.innerText = locale.carousel.next

        //Career
        this.createCareerTimeline()
    }

    constructor() {
        //Animate appear
        animator.animate(this.#elements.page)

        //Image load listener
        this.#elements.image.onload = () => {
            //Update text
            this.#elements.imageName.innerText = loc.about.carousel.names[this.#imageOrder[this.#currentIndex]]

            //Loading
            if (this.#isLoading) {
                //Stop animation
                this.#elements.image.removeAttribute('loading')

                //Artyom (last image) -> Give achievement
                if (this.#currentIndex == this.#images.length - 1) achievements.give(Achievement.artyom)

                //Finish
                setTimeout(() => { this.#isLoading = false }, 400)
            }
        }

        //Add images (excluding 'me1' and 'artyom') % shuffle them
        for (let i = 1; i < this.#images.length - 1; i++) this.#imageOrder.push(i)
        Util.shuffleArray(this.#imageOrder)

        //Add 'me1' first & 'artyom' last
        this.#imageOrder.splice(0, 0, 0)                //Add 'me1' first
        this.#imageOrder.push(this.#images.length - 1)  //Add 'artyom' last

        //Select first image (index starts at -1)
        this.next()
    }

}

const about = new AboutPage()



  /*$$$$$  /$$       /$$ /$$ /$$
 /$$__  $$| $$      |__/| $$| $$
| $$  \__/| $$   /$$ /$$| $$| $$  /$$$$$$$
|  $$$$$$ | $$  /$$/| $$| $$| $$ /$$_____/
 \____  $$| $$$$$$/ | $$| $$| $$|  $$$$$$
 /$$  \ $$| $$_  $$ | $$| $$| $$ \____  $$
|  $$$$$$/| $$ \  $$| $$| $$| $$ /$$$$$$$/
 \______/ |__/  \__/|__/|__/|__/|______*/

//Page
class SkillsPage {

    //Elements
    #elements = {
        title: document.getElementById('skillsTitle'),
        description: document.getElementById('skillsDescription'),
        noteTitle: document.getElementById('skillsNoteTitle'),
        noteText: document.getElementById('skillsNoteText')
    }

    //Page
    localize = () => {
        //Get locale
        const locale = loc.skills

        //Title & description
        this.#elements.title.innerText = locale.title
        this.#elements.description.innerText = locale.desc

        //Skills
        for (const key of Object.keys(Skill)) {
            const skill = Skill[key]
            document.getElementById(`${skill.id}Title`).innerText = locale[key]
            document.getElementById(`${skill.id}Pro`).innerText = `${skill.experience}${locale.years}`
        }

        //Note
        this.#elements.noteTitle.innerText = locale.note.title
        this.#elements.noteText.innerText = locale.note.text
    }

    constructor() {
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
            const element = document.getElementById(skill.id)
            element.style.setProperty('--skillExperience', skill.experience)
            observer.observe(element)

            //Compare max experience
            maxExperience = Math.max(maxExperience, skill.experience)
        }

        //Update max experience
        document.getElementById('skills').style.setProperty('--skillsMax', maxExperience)
    }

}

const skills = new SkillsPage()



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

//Page
class ProjectsPage {

    //Elements
    #elements = {
        //Page
        title: document.getElementById('projectsTitle'),
        list: document.getElementById('projectsList'),
        more: document.getElementById('projectsMore'),
        //Actions
        fullscreen: document.getElementById('projectsFullscreen'),
        fullscreenImage: document.getElementById('projectsFullscreenImage'),
        //Filters (page)
        filtersTitle: document.getElementById('projectsFiltersTitle'),
        filtersCategory: document.getElementById('projectsCategory'),
        filtersCategoryBy: document.getElementById('projectsCategoryBy'),
        filtersTags: document.getElementById('projectsTags'),
        filtersTagsBy: document.getElementById('projectsTagsBy'),
        filtersSort: document.getElementById('projectsSort'),
        filtersSortBy: document.getElementById('projectsSortBy'),
        //Filters (menu)
        filterMenu: document.getElementById('filterMenu'),
        filterMenuTitle: document.getElementById('filterMenuTitle'),
        filterMenuList: document.getElementById('filterMenuTags')
    }

    //Info
    #info = {
        //Created projects
        isLoaded: false,
        createdCount: 0,

        //Filter
        category: Category.all,
        tag: Tag.all,
        sort: Sort.favs,

        //Projects
        projects: []
    }

    getCategoryName = (category) => { return loc.projects.category[category in Category ? category : Category.all] }

    getTagName = (tag) => { return tag in loc.projects.tags ? loc.projects.tags[tag] : tag }
    
    getSortName = (sort) => { return loc.projects.sort[sort in Sort ? sort : Sort.favs] }

    //Manage projects
    addProjects = (category, filter, sort) => {
        //Fix options
        if (typeof category !== 'string') category = this.#info.category
        if (typeof filter !== 'string') filter = this.#info.tag
        if (typeof sort !== 'string') sort = this.#info.sort

        //Check if is refresh & save filters if not refreshing
        const isRefresh = (this.#info.category == category) && (this.#info.tag == filter) && (this.#info.sort == sort) && (this.#info.isLoaded)
        if (!isRefresh) {
            this.#info.category = category
            this.#info.tag = filter
            this.#info.sort = sort
        }

        //Update category, filter & sorting names
        this.#elements.filtersCategoryBy.innerText = this.getCategoryName(category)
        this.#elements.filtersTagsBy.innerText = this.getTagName(filter)
        this.#elements.filtersSortBy.innerText = this.getSortName(sort)

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
        if (filter != Tag.all) {
            for (let i = this.#info.projects.length - 1; i >= 0; i--) {
                //Get project
                const project = this.#info.projects[i]

                //Remove project if missing tag
                if (!project.tags.includes(filter)) this.#info.projects.splice(i, 1)
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

        //Get options before emptying this.#info.created
        const animate = (!isRefresh) && (this.#info.createdCount == 0)
        const length = (isRefresh ? Math.max(this.#info.createdCount, 4) : 4)

        //Clear
        this.clearProjects()

        //Add projects
        for (let i = 0; i < length; i++) this.addProject(animate, filter)

        //No projects -> Show no projects text
        if (this.#info.createdCount == 0) this.#elements.list.innerHTML += `<div class="projectsNone"><div>🥲</div><div>${loc.projects.none}</div></div>`

        //Mark as loaded
        this.#info.isLoaded = true
    }

    addProject = (animate) => {
        //Fix animate bool
        if (typeof animate != 'boolean') animate = true

        //No more space
        if (this.#info.createdCount >= this.#info.projects.length) return

        //Get basic info
        const id = `project${this.#info.createdCount}`
        const project = this.#info.projects[this.#info.createdCount]
        const locales = loc.projects.items[project.key]

        //Get scope
        let scopeHTML = ''
        if (Array.isArray(project.scope)) {
            for (let i = 0; i < project.scope.length; i++) {
                //Get scope
                const scope = project.scope[i]

                //Add scope
                scopeHTML += (i != 0 ? '<br>' : '') + loc.projects.scope[scope]
            }
        }

        //Get tags
        let tagsHTML = ''
        if (Array.isArray(project.tags)) {
            for (const tag of project.tags) {
                //Add tag
                tagsHTML += `<span class="glassHover projectTag" onclick="projects.addProjects(null, '${tag}', null)">${this.getTagName(tag)}</span>`
            }
        }

        //Get date
        const dateStart = project.dateStart
        const dateEnd = (project.dateEnd == Infinity ? loc.projects.date.present : project.dateEnd)

        //Get buttons
        let buttonsHTML = ''
        const buttons = project.buttons
        if (Array.isArray(buttons)) {
            for (let i = 0; i < buttons.length; i++) {
                //Get button text
                const buttonText = locales['b' + (i + 1)]

                //Add button
                buttonsHTML += `<a id="${id}B${i}" class="button" small target="_blank" href="${buttons[i]}" onmousedown="projects.onProjectOpened()">${buttonText ? buttonText : locales.tit}</a>`
            }
        }

        //Video button (youtube link id)
        const vid = project.vid

        //Create project HTML base
        const element = document.createElement('div')
        element.id = id
        element.classList.add('project')

        //Animation & reverse
        if (animate) element.classList.add('appear')
        if (this.#info.createdCount % 2 != 0) element.setAttribute('reverse', '')

        //Add project HTML content
        element.innerHTML = `
            <!-- Media (content, scope & actions) -->
            <div id="${id}-media" class="projectMedia" ${typeof vid === 'string' ? 'hasvideo' : ''}>
                <!-- Content -->
                <div class="projectMediaContent" style="--glitchImg: url('../Images/Projects/${project.key}.webp');">
                    <!-- Image -->
                    <img src="Data/Images/Projects/${project.key}.webp">
                    <!-- Video -->
                    <iframe id="${id}-video" allow="fullscreen"></iframe>
                </div>
                <!-- Scope -->
                <span class="glass projectScope" ${scopeHTML != '' ? '' : 'hidden'}>${scopeHTML}</span>
                <!-- Actions -->
                <div class="projectActions">
                    <!-- Video button -->
                    <div class="glass projectActionButton projectVideoButton" onclick="projects.toggleVideo(${this.#info.createdCount}, 'https://www.youtube.com/embed/${vid}')">
                        <img src="Data/Images/Icons/play.webp">
                        <span>${locales.vid}</span>
                    </div>
                    <!-- Fullscreen button -->
                    <div class="glass projectActionButton" hidevideo onclick="projects.fullscreenImage('Data/Images/Projects/${project.key}.webp')">
                        <img src="Data/Images/Icons/maximize.webp">
                    </div>
                </div>
            </div>
            <!-- Info (tags, title, description & buttons) -->
            <div class="projectInfo">
                <!-- Tags -->
                <div class="projectTags">${tagsHTML}</div>
                <!-- Title & description -->
                <div class="glass projectInfoContent">
                    <div>
                        <span>${locales.tit}</span>
                        <span class="projectDate">${dateStart == dateEnd ? dateEnd : dateStart + ' - ' + dateEnd}</span>
                    </div>
                    <span>${locales.con}</span>
                </div>
                <!-- Buttons -->
                <div class="projectButtons">${buttonsHTML}</div>
            </div>
        `
        this.#elements.list.appendChild(element)

        //Animate
        if (animate) animator.animate(element)

        //Done
        this.#info.createdCount++

        //Update load more button
        document.getElementById('projectsMore').style.visibility = (this.#info.createdCount >= this.#info.projects.length ? 'hidden' : 'visible')
    }

    clearProjects = () => {
        //Clear projects
        this.#info.createdCount = 0
        this.#elements.list.innerHTML = ''
        this.#elements.more.style.display = ((this.#info.createdCount >= this.#info.projects.length) ? 'none' : 'flex')
    }

    refreshProjects = () => {
        //Add projects with current info
        this.addProjects(this.#info.category, this.#info.tag, this.#info.sort)
    }

    //Actions (fullscreen pic & toggle video)
    fullscreenImage = (url) => {
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

    toggleVideo = (index, url) => {
        //Get project elements
        const media = document.getElementById(`project${index}-media`)
        const video = document.getElementById(`project${index}-video`)

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

    //Filters menu
    toggleFilterMenu = (type) => {
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
                this.#elements.filterMenuTitle.innerText = loc.projects.category.title

                //Get categories
                const tags = []
                for (const key of Object.keys(Category)) tags.push(Category[key])

                //Add categories
                for (const tag of tags) this.#elements.filterMenuList.innerHTML += `<span class="glassHover projectTag" onclick="projects.addProjects('${tag}', null, null); projects.toggleFilterMenu();">${this.getCategoryName(tag)}</span>`
                break
            }

            //Sort
            case 'sort': {
                //Change menu title
                this.#elements.filterMenuTitle.innerText = loc.projects.sort.title

                //Get sort options
                const tags = []
                for (const key of Object.keys(Sort)) tags.push(Sort[key])

                //Add categories
                for (const tag of tags) this.#elements.filterMenuList.innerHTML += `<span class="glassHover projectTag" onclick="projects.addProjects(null, null, '${tag}'); projects.toggleFilterMenu();">${this.getSortName(tag)}</span>`
                break
            }

            //Tags
            default: {
                //Change menu title
                this.#elements.filterMenuTitle.innerText = loc.projects.tags.title

                //Get tags (only the ones used in projects)
                const usedTags = []
                for (const project of SelectedProjects) {
                    for (const tag of project.tags) {
                        if (usedTags.includes(tag)) continue
                        usedTags.push(tag)
                    }
                }

                //Get tags (ordered and with all first)
                const tags = [Tag.all]
                for (const key of Object.keys(Tag)) {
                    const tag = Tag[key]
                    if (usedTags.includes(tag)) continue
                    tags.push(tag)
                }
                
                //Add tags
                for (const tag of tags) this.#elements.filterMenuList.innerHTML += `<span class="glassHover projectTag" onclick="projects.addProjects(null, '${tag}', null); projects.toggleFilterMenu();">${this.getTagName(tag)}</span>`
                break
            }
        }

        //Open
        this.#elements.filterMenu.showModal()
        Util.toggleScroll(false)
    }

    //Page
    localize = () => {
        //Get locale
        const locale = loc.projects

        //Title
        this.#elements.title.innerText = locale.title

        //Filters
        this.#elements.filtersTitle.innerText = locale.filtersTitle
        this.#elements.filtersCategory.innerText = `${locale.category.title}:`
        this.#elements.filtersTags.innerText = `${locale.tags.title}:`
        this.#elements.filtersSort.innerText = `${locale.sort.title}:`

        //Projects
        this.refreshProjects()
        this.#elements.more.innerText = locale.more
    }

    constructor() {
        //Close menu listener
        Util.onDialogBackdropClick(this.#elements.filterMenu, this.toggleFilterMenu)
    }

}

const projects = new ProjectsPage()



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
        //Quotes
        quoteText: document.getElementById('footerQuoteText'),
        quoteAuthor: document.getElementById('footerQuoteAuthor')
    }

    //Contact
    copyMail = () => {
        createSnackbar(loc.footer.contact.mail, false)
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
        this.#elements.quoteText.innerText = `"${this.#quotes[this.#currentQuoteIndex]}"`
        this.#elements.quoteAuthor.innerText = this.#authors[this.#currentQuoteIndex]
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
    localize = () => {
        //Get locale
        const locale = loc.footer

        //Localize
        document.getElementById('footerContactTitle').innerText = locale.contact.title
        document.getElementById('footerCredits').innerHTML = locale.credits
    }

    constructor() {
        //Select random quote
        this.#currentQuoteIndex = Math.floor(Math.random() * this.#quotes.length)
        this.updateQuote()
    }

}

const footer = new FooterPage()



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
        menu: document.getElementById('curriculumMenu'),
        title: document.getElementById('curriculumMenuTitle')
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

    localize = () => {
        //Get locale
        const locale = loc.curriculum

        //Localize
        this.#elements.title.innerText = locale.title
    }

    constructor() {
        //Close menu listener
        Util.onDialogBackdropClick(this.#elements.menu, this.toggleMenu)
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
    #animationFrame = undefined
    #updateInterval = undefined
    #context = undefined
    #inputQueue = []
    #delta = 1000 / 9 //9 fps

    //Game
    #size = new Vec2()
    #grid = 15 //Cell size

    #isDead = true
    #points = 0
    #best = DB.get('snake.best', 0, DB.NUMBER)

    #apple = new Vec2(0)
    #snake = {
        pos: new Vec2(150),
        dir: new Vec2(1, 0),
        cells: [],
        length: 4,
    }

    //UI
    #infoPoints = document.getElementById('snakeInfoPoints')
    #infoBest = document.getElementById('snakeInfoBest')
    #infoState = document.getElementById('snakeInfoState')


    //Constructor
    constructor(canvas) {
        //Get context
        this.#context = canvas.getContext('2d')

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
                this.#infoPoints.innerText = this.#points
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
                    this.#infoBest.innerText = this.#best
                }

                //Die
                this.#isDead = true
                this.#infoState.innerText = loc.snake.death
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
        this.#infoPoints.innerText = this.#points
        this.#infoBest.innerText = this.#best
        this.#infoState.innerText = ''

        //Start drawing
        this.resume()
    }

    //Helpers
    drawBox = (pos, color) => {
        this.#context.fillStyle = color
        this.#context.fillRect(pos.x, pos.y, this.#grid - 1, this.#grid - 1)
    }

    getRandomPoint = () => {
        return new Vec2(
            Util.getRandomInt(0, this.#size.x / this.#grid - 1) * this.#grid, 
            Util.getRandomInt(0, this.#size.y / this.#grid - 1) * this.#grid
        )
    }

    keyPress = (key) => {
        this.#inputQueue.unshift(key)
    }

}

//Easteregg & menu
class SnakeEasteregg {

    //Elements
    #elements = {
        //Easteregg
        sidebarButton: document.getElementById('goTo-snake'),
        messageAFK: document.getElementById('snakeAFK'),
        messageAFKText: document.getElementById('snakeAFKText'),
        //Menu
        menu: document.getElementById('snakeMenu'),
        points: document.getElementById('snakeInfoPointsText'),
        restart: document.getElementById('snakeRestart')
    }

    //Game
    #game = new SnakeGame(document.getElementById('snakeCanvas'))

    get game() { return this.#game }

    //Easteregg
    #enabled = DB.get('snake', false, DB.BOOLEAN)

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
    #codesNextIndex = 0
    #codes = [
        ['s','n','a','k','e'],
        ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a']
    ]

    onCodeKey = (key) => {
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
    #afkDuration = 25000 //25 seconds
    #afkTimer = undefined
    
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
        if (snakeMenu.open) {
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

    //Easteregg
    localize = () => {
        //Get locale
        const locale = loc.snake

        //Localize
        this.#elements.points.innerText = locale.points
        this.#elements.restart.innerText = locale.restart
        this.#elements.messageAFKText.innerHTML = locale.afk
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

        window.addEventListener('scroll', this.onInputAFK)

        window.addEventListener('click', this.onInputAFK)

        //Close menu listener
        Util.onDialogBackdropClick(this.#elements.menu, this.toggleMenu)
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
        menu: document.getElementById('achievementsMenu'),
        title: document.getElementById('achievementsTitle'),
        description: document.getElementById('achievementsDescription'),
        list: document.getElementById('achievementsList'),
        //Dots
        dot1: document.getElementById('achievementsDot1'),
        dot2: document.getElementById('achievementsDot2')
    }

    //Current achievements
    #current = {}

    //Give, reset & show achievements
    #addFromKey = (key) => {
        DB.set(`achievement-${key}`, true)
        this.#current[key] = true
    }

    #resetFromKey = (key) => {
        DB.set(`achievement-${key}`, false)
        this.#current[key] = false
    }

    give = (key) => {
        //Achievement does not exist
        if (!Achievement[key]) return

        //Already has achievement
        if (this.#current[key]) return

        //Show snackbar
        createSnackbar(`🏆 ${loc.achievements[key].title}`, true)
        
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
                    <img src="Data/Images/Achievements/${key}.webp">
                    <div>
                        <div>${loc.achievements[key].title}</div>
                        <div>${loc.achievements[key].description}</div>
                    </div>
                    <span>${loc.achievements.hidden}</span>
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
    localize = () => {
        this.#elements.title.innerText = loc.achievements.title
        this.#elements.description.innerText = loc.achievements.description
    }

    constructor() {
        //Load achievements
        for (const key of Object.keys(Achievement)) {
            //Check if user has achievement
            if (!DB.get(`achievement-${Achievement[key]}`, false, DB.BOOLEAN)) continue

            //User has achievement -> Add it
            this.#addFromKey(key)
        }

        //Close menu listener
        Util.onDialogBackdropClick(this.#elements.menu, this.toggleMenu)
    }

}

const achievements = new AchievementsSystem()



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
        //Page
        title: document.getElementById('loadingTitle'),
        //Progress
        loading: document.getElementById('loading'),
        loadingBar: document.getElementById('loadingBar'),
        loadingProgress: document.getElementById('loadingProgress')
    }

    //Progress
    #progress = 0

    nextProgress = () => {
        //Next percent
        this.#progress = Math.min(100, this.#progress + Math.floor(Math.random() * 2) + 1)
        this.#elements.loadingBar.style.setProperty('--fill', `${this.#progress}%`)
        this.#elements.loadingProgress.innerText = `${this.#progress}%`

        //Check if finished
        if (this.#progress >= 100) {
            //Loaded -> Hide loading page, reset home typing animation & enable scrolling
            this.#elements.loading.setAttribute('loaded', '')
            home.textAnimation.reset()
            Util.toggleScroll(true)
        } else {
            //Didn't finish -> Next progress
            setTimeout(this.nextProgress, 10)
        }
    }

    //Page
    localize = () => {
        this.#elements.title.innerText = loc.loading.title
    }

    constructor() {
        //Disable scrolling
        Util.toggleScroll(false)

        //Start counting progress
        this.nextProgress()
    }

}

const loading = new LoadingAnimation()



 /*$                                     /$$ /$$                       /$$     /$$
| $$                                    | $$|__/                      | $$    |__/
| $$        /$$$$$$   /$$$$$$$  /$$$$$$ | $$ /$$ /$$$$$$$$  /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$
| $$       /$$__  $$ /$$_____/ |____  $$| $$| $$|____ /$$/ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
| $$      | $$  \ $$| $$        /$$$$$$$| $$| $$   /$$$$/   /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
| $$      | $$  | $$| $$       /$$__  $$| $$| $$  /$$__/   /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
| $$$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$| $$ /$$$$$$$$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
|________/ \______/  \_______/ \_______/|__/|__/|________/ \_______/   \___/  |__/ \______/ |__/  |_*/

//Recover saved locale & load it
switch (DB.get('locale', 'none', DB.STRING)) {
    //Nothing saved
    case 'none':
        //Check device language
        const deviceLanguage = navigator.language

        //Device is not in spanish
        if (deviceLanguage.startsWith('es')) loc = Locales.es

        //Save locale
        DB.set('locale', loc.key)
        break

    //English saved
    case 'en':
        loc = Locales.en
        break

    //Spanish saved
    case 'es':
        loc = Locales.es
        break
}

//Localization functions
function swapLocale() {
    //Get new locale key
    const newKey = (loc.key == 'es' ? 'en' : 'es')

    //Load new locale
    DB.set('locale', newKey)
    loc = Locales[newKey]

    //Hide sidebar & localize page
    sidebar.toggle(false)
    localize()
}

function localize() {
    //General (loading animation & sidebar)
    loading.localize()
    sidebar.localize()

    //Menus (curriculum, snake & achievements)
    curriculum.localize()
    snake.localize()
    achievements.localize()

    //Pages (home, about, skills, projects & footer)
    home.localize()
    about.localize()
    skills.localize()
    projects.localize()
    footer.localize()
}

localize()



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

    //Close sidebar
    sidebar.toggle()

    //Give chievement
    if (theme.dark) achievements.give(Achievement.theme)
}

function loadTheme() {
    //Load theme
    if (theme.dark) {
        //Enable light
        DB.set('theme', 'dark', DB.STRING)
        document.documentElement.removeAttribute('light')
    } else {
        //Enable dark
        DB.set('theme', 'light', DB.STRING)
        document.documentElement.setAttribute('light', '')
    }
}

loadTheme()