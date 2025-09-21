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
        pages.reverse();

        //Default to home
        const visiblePages = { 'home': true };
        let currentPage = 'home';

        //Update current
        function updateCurrentPage() {
            //Get new current
            let newCurrentPage = null;

            for (const id of pages) {
                if (!visiblePages[id]) continue;
                newCurrentPage = id;
                break;
            }

            //Check new current
            if (newCurrentPage == currentPage) return;
            
            //Update current page
            if (currentPage != null) document.getElementById('goTo-' + currentPage).removeAttribute('selected');
            currentPage = newCurrentPage;
            if (currentPage != null) document.getElementById('goTo-' + currentPage).setAttribute('selected', '');
        }

        //Add observer to update current pages
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) visiblePages[entry.target.id] = entry.isIntersecting;
            updateCurrentPage();
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
const onResize = [];

window.onresize = () => onResize.forEach(f => f());

function addResizeListener(f) {
    //Not a function
    if (typeof f != 'function') return;

    //Add to list
    onResize.push(f);
}

//On page focus
const onFocus = [];

window.onfocus = () => {
    for (let i = onFocus.length - 1; i >= 0; i--) {
        //Run function
        const result = onFocus[i]();

        //Remove function if result is true
        if (typeof result === 'boolean' && result) onFocus.splice(i, 1); 
    }
}

function addFocusListener(f) {
    //Not a function
    if (typeof f != 'function') return;

    //Add to list
    onFocus.push(f);
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



 /*$    /$$                      /$$                        
| $$   | $$                     | $$                        
| $$   | $$ /$$$$$$   /$$$$$$$ /$$$$$$    /$$$$$$   /$$$$$$ 
|  $$ / $$//$$__  $$ /$$_____/|_  $$_/   /$$__  $$ /$$__  $$
 \  $$ $$/| $$$$$$$$| $$        | $$    | $$  \ $$| $$  \__/
  \  $$$/ | $$_____/| $$        | $$ /$$| $$  | $$| $$      
   \  $/  |  $$$$$$$|  $$$$$$$  |  $$$$/|  $$$$$$/| $$      
    \_/    \_______/ \_______/   \___/   \______/ |_*/      

class Vec2 {

    //Values
    x = 0
    y = 0

    //Constructor
    constructor(x, y) {
        if (typeof x === 'object') {
            //Init from another Vec2
            this.x = x.x
            this.y = x.y
        } else {
            //Init from numbers
            if (typeof x == 'number') 
                this.x = x
            if (typeof y == 'number') 
                this.y = y
            else
                this.y = this.x //Copy x if no y
        }

    }

    //Functions
    equals(v) {
        return (this.x == v.x && this.y == v.y)
    }

    add(v) {
        return new Vec2(this.x + v.x, this.y + v.y)
    }

    subtract(v) {
        return new Vec2(this.x - v.x, this.y - v.y)
    }

    multiply(n) { 
        return new Vec2(this.x * n, this.y * n)
    }

    divide(n) { 
        return new Vec2(this.x / n, this.y / n)
    }

    magnitude() { 
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    clampMagnitude(max) {
        const magnitude = this.magnitude()
        if (magnitude > max)
            return this.divide(magnitude).multiply(max)
        else
            return new Vec2(this)
    }

    normalized() { 
        return this.divide(this.magnitude())
    }

    moveTowards(towards, delta) {
        const dir = towards.subtract(this)
        if (dir.magnitude() > delta)
            return this.add(dir.normalized().multiply(delta))
        else
            return towards
    }

    toString() {
        return `(${this.x}, ${this.y})`;
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

class DB {

    static BOOLEAN = 'boolean'
    static NUMBER = 'number'
    static OBJECT = 'object'
    static STRING = 'string'

    static get(key, fallback, type) {
        //Check args
        if (typeof key !== 'string') return
        if (typeof type !== 'string') type = ''

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

    static set(key, value) {
        //Check args
        if (typeof key !== 'string') return

        //Update key value
        localStorage.setItem(key, typeof value == DB.OBJECT ? JSON.stringify(value) : value)
    }

    static has(key) {
        //Check args
        if (typeof key !== 'string') return false

        //Check if key exists
        return (localStorage.getItem(key) != null)
    }

    static remove(key) {
        //Check args
        if (typeof key !== 'string') return

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

class Util {

    static clamp(x, min, max) {
        return Math.min(Math.max(x, min), max)
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
    }

    static randomArray(array, remove) {
        //Fix remove
        if (typeof remove != 'boolean') remove = false;

        //Get index
        const idx = Math.floor(Math.random() * array.length);
        const value = array[idx];
        if (remove) array.splice(idx, 1);
        return value;
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

    static toggleScroll(scroll) {
        //Fix args
        if (typeof scroll !== 'boolean') !document.body.hasAttribute('noscroll');

        //Toggle scroll
        if (scroll)
            document.body.removeAttribute('noscroll');
        else
            document.body.setAttribute('noscroll', '');
    }

}