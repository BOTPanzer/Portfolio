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

class CurrentPageIndicator {

    constructor(pages) {
        //Reverse pages to give priority to the ones after
        pages.reverse()

        //Default to home
        const visiblePages = { 'home': true }
        let currentPage = 'home'

        //Update current
        function updateCurrentPage() {
            //Get new current
            let newCurrentPage = null

            for (const id of pages) {
                if (!visiblePages[id]) continue
                newCurrentPage = id;
                break
            }

            //Check new current
            if (newCurrentPage == currentPage) return
            
            //Update current page
            if (currentPage != null) document.getElementById('goTo-' + currentPage).removeAttribute('selected')
            currentPage = newCurrentPage
            if (currentPage != null) document.getElementById('goTo-' + currentPage).setAttribute('selected', '')
        }

        //Add observer to update current pages
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) visiblePages[entry.target.id] = entry.isIntersecting;
            updateCurrentPage()
        }, {
            threshold: 0.2
        });
        for (const id of pages) observer.observe(document.getElementById(id));
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
const onResize = []

window.onresize = () => onResize.forEach(f => f())

function addResizeListener(f) {
    //Not a function
    if (typeof f != 'function') return

    //Add to list
    onResize.push(f)
}

//On page focus
const onFocus = []

window.onfocus = () => {
    for (let i = onFocus.length - 1; i >= 0; i--) {
        //Run function
        const result = onFocus[i]()

        //Remove function if result is true
        if (typeof result === 'boolean' && result) onFocus.splice(i, 1); 
    }
}

function addFocusListener(f) {
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
 
//Snackbar & Confetti 🎊
const snacks = []

function createSnackbar(text, confetti) {
    //Check args
    if (typeof text !== 'string') return
    if (typeof confetti !== 'boolean') confetti = false

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
    const snack = document.getElementById('snackbar')

    //Show snackbar
    if (!snack.classList.contains('snackbar') && snacks.length > 0) {
        //Data
        snack.innerHTML = snacks[0].text
        snack.classList.add('snackbar')
        if (snacks[0].confetti) createConfetti()
        snacks.shift()

        //Wait to disappear
        setTimeout(() => {
            //Disappear
            snack.innerHTML = ''
            snack.classList.remove('snackbar')

            //Wait to show text
            setTimeout(() => { snackbarController() }, 50)
        }, 3000)
    }
}

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

class AppearAnimation {

    observer

    constructor() {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue
                entry.target.setAttribute('appeared', '')
                observer.unobserve(entry.target)
            }
        }, {
            threshold: 0.1
        });
        this.observer = observer
    }

    animate(element) {
        if (!element) return
        if (!element.classList.contains('appear')) element.classList.add('appear')
        this.observer.observe(element)
    }

}

class ParticlesAnimation {

    //Variables
    animationFrameId
    particles
    
    //Constructor
    constructor(canvasID) {
        //Get elements & canvas context
        const canvas = document.getElementById(canvasID)
        const ctx = canvas.getContext("2d")

        //Resize canvas
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height

        //Particles
        class Particle {
            
            //Variables
            x
            y
            size
            speedX
            speedY
            color

            //Constructor
            constructor(color) {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 0.1
                this.speedX = Math.random() * 2 - 1
                this.speedY = Math.random() * 2 - 1
                this.color = color ? color : 'rgba(255, 255, 255, 0.5)'
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.x > canvas.width) this.x = 0
                if (this.x < 0) this.x = canvas.width
                if (this.y > canvas.height) this.y = 0
                if (this.y < 0) this.y = canvas.height
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        this.particles = []
        for (let i = 0; i < 50; i++) this.particles.push(new Particle())

        //Animate
        let isDrawing = true

        const animate = () => {
            if (!ctx) return

            if (isDrawing) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                for (const particle of this.particles) {
                    particle.update()
                    particle.draw()
                }
            }

            this.animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        //Check to resize canvas
        addResizeListener(() => {
            const rect = canvas.getBoundingClientRect()
            canvas.width = rect.width
            canvas.height = rect.height
        })

        //Stop drawing if outisde of frame
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    //Resume drawing
                    if (!isDrawing) {
                        isDrawing = true
                        animate()
                    }
                } else {
                    //Pause drawing
                    isDrawing = false
                    cancelAnimationFrame(this.animationFrameId)
                }
            }
        }, {
            threshold: 0.01
        })
        observer.observe(canvas)
    }

    changeColor(color) {
        for (let i = 0; i < this.particles.length; i++) this.particles[i].color = color
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

class Util {

    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
    }

    static randomArray(array, remove) {
        //Fix remove
        if (typeof remove != 'boolean') remove = false

        //Get index
        const idx = Math.floor(Math.random() * array.length)
        const value = array[idx]
        if (remove) array.splice(idx, 1)
        return value
    }

    static setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }

    static onDialogBackdropClick(dialog, onClick) {
        //Add on click event
        dialog.onclick = (event) => {
            const rect = dialog.getBoundingClientRect()
            const clickedBackdrop = !(rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width)
            if (clickedBackdrop && dialog.open) onClick()
        }
    }

}