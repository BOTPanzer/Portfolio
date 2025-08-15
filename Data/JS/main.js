  /*$$$$$  /$$           /$$                 /$$
 /$$__  $$| $$          | $$                | $$
| $$  \__/| $$  /$$$$$$ | $$$$$$$   /$$$$$$ | $$
| $$ /$$$$| $$ /$$__  $$| $$__  $$ |____  $$| $$
| $$|_  $$| $$| $$  \ $$| $$  \ $$  /$$$$$$$| $$
| $$  \ $$| $$| $$  | $$| $$  | $$ /$$__  $$| $$
|  $$$$$$/| $$|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$
 \______/ |__/ \______/ |_______/  \_______/|_*/

//Locales
const locales = {
    en: {
        //Locale
        key: 'en',
        //Page
        title: "Alex's Portfolio",
        //Loading
        loading: {
            title: 'LOADING_PORTFOLIO'
        },
        //Sidebar
        sidebar: {
            home: 'Home',
            about: 'About Me',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            resume: 'Resume',
            localization: 'English',
            theme: 'Theme',
            achievements: 'Achievements',
        },
        //Resume
        resume: {
            title: 'Resume',
        },
        //Achievements
        achievements: {
            title: 'Achievements',
            description: 'Find new achievements by interacting with things around the page',
            locked: 'Hidden',
            theme: {
                title: 'Alergic to Light',
                description: 'Try light theme and go back to dark'
            },
            artyom: {
                title: 'Best Friends',
                description: `Find Artyom's photo (my first gecko)`
            },
            project: {
                title: 'Good Boy',
                description: 'Open one of my projects links'
            },
            contact: {
                title: 'Interested Fellow',
                description: 'Open one of my contact links'
            },
        },
        //Snake
        snake: {
            points: 'Points: ',
            restart: 'Restart',
            death: 'You died!',
            afk: 'Seems a bit quiet here...<br>Wanna play a game?',
        },
        //Home
        home: {
            text1: `Howdy, i'm`,
            text2: 'Alejandro Paniagua',
            text3: 'A spanish ###',
            roles: [
                'indie game developer',
                'web designer',
                'app developer',
            ]
        },
        //About
        about: {
            title: 'About Me',
            desc1: "Howdy! My name is Alejandro, but you call me Alex. I'm a spanish developer who likes spending time creating games and apps.",
            desc2: "I started making games in 2015, at the age of 11. Then, in 2019, I took a break to learn web and app development and, since 2022, I've been doing all of them.",
            desc3: "I'm a well-organized, independent person who loves giving things his own touch. Some of my interests are playing, programming and designing, but I also enjoy 3D printing and DIY projects.",
            contact: 'Get in touch!',
            next: 'Click me!',
            names: [
                'Me',
                'Me',
                'Me',
                'Me',
                'Me',
                'Canary Islands',
                'Sleeping Cat',
                'Finisterre',
                'Mallorca',
                'Otivar',
                'River Flower',
                'Lennon Wall',
                'Artyom',
            ]
        },
        //Skills
        skills: {
            title: 'My Skills',
            desc: "I've been interested in the world of technology since I was little. Thanks to that, I've learnt a large number of skills related to different topics:",
            videogames: 'Videogame Development',
            apps: 'App Development',
            web: 'Web Development',
            ui: 'UI/UX Design',
            d3: '3D Modeling/Printing &  CAD',
            art: 'Art & Media',
            basic: 'Basic',
            medium: 'Medium',
            high: 'High',
            advanced: 'Advanced',
            expert: 'Expert',
        },
        //Projects
        projects: {
            title: 'My Projects',
            filtersTitle: 'Filters',
            category: {
                title: 'Category',
                all: '---',
                games: 'Games',
                apps: 'Apps',
                other: 'Other'
            },
            tags: {
                title: 'Tags',
                all: '---',
                uiux: 'UI/UX Design',
                discordapi: 'Discord API',
                '3dmodel': '3D Modeling',
                '3dprint': '3D Printing',
                sketching: 'Sketching',
                diy: 'DIY',
                electronics: 'Electronics',
            },
            sort: {
                title: 'Sort by',
                date: 'Date',
                favs: 'Favourites',
            },
            date: {
                present: 'Present',
                paused: 'Paused',
            },
            scope: {
                solo: 'Solo Project',
                team: 'Team Project',
                personal: 'Personal Project',
                jam: 'Jam Game',
            },
            projects: {
                mapPinner: {
                    tit: "Map Pinner",
                    con: `Map Pinner is a free web tool designed to help you plan and organize your trips.
                        <br><br>
                        With Map Pinner you can easily select a map image, place pins on your map & customize each one with custom colors, categories, names, links, and descriptions.`,
                    b1: "Try&nbsp<i>Map Pinner</i>",
                },
                hardcoreKitty: {
                    tit: "Hardcore Kitty",
                    con: `Third place in the 6º edition of the <a href="https://itch.io/jam/6-edicin-game-jam-game-scholars" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Hardcore Kitty, you play as a cat working for a delivery company.
                        <br><br>
                        Your goal is to find pickup points, collect food, and deliver it to the drop-off points, performing tricks and flips on your skateboard along the way.`,
                    b1: "Download&nbsp<i>Hardcore Kitty</i>",
                    vid: 'Gameplay Video'
                },
                stealer: {
                    tit: "Turbo Stealer",
                    con: `For educational purposes only, Turbo Stealer is a command line application programmed in python that is able to steal information from the computer running it.
                        <br><br>
                        Currently, it is capable of stealing emails, usernames and passwords from saved credentials in browsers.`,
                    b1: "Download&nbsp<i>Turbo Stealer</i>",
                },
                stardewpets: {
                    tit: "Stardew Pets",
                    con: `Stardew Pets is a VS Code extension that lets you have Stardew Valley pets accompanying you while you code.
                        <br><br>
                        Right now you can have cats, dogs, dinos, turtles, raccoons, goats, sheeps, ostrichs, pigs, rabbits, chicken, cows and junimos as a pet, each with different variants.`,
                    b1: "Install&nbsp<i>Stardew Pets</i>",
                },
                spyw4re: {
                    tit: "Spyw4re",
                    con: `Second place out of 25 in the 5º edition of the <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Spyw4re, you are a CCTV operator in an asylum. The building is falling down and a pacient is still inside, so you'll need to help him get out.
                        <br><br>
                        In order to leave, you'll need to solve some puzzles and defeat some enemies, but don't think it will be that easy, someone doesn't want you to help him...`,
                    b1: "Download&nbsp<i>Spyw4re</i>",
                    vid: 'Gameplay Video'
                },
                hackoon: {
                    tit: "Hackoon",
                    con: `Hackoon is an in development puzzle game about a game developer raccoon that needs to fix his game before release.
                        <br><br>
                        In order to achieve this, he will go inside of his own game. There, with the help of a little robot, you will be able to modify the code that controls the objects of each level to complete ingenious puzzles.`,
                    b1: "Follow the development!"
                },
                hightime: {
                    tit: "High on Time",
                    con: `Developed for the 4º edition of the <a href="https://itch.io/jam/gamescholars-4-edition" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        High on Time is a frenetic shooter in which, thanks to a drug, you are capable of controling time at the cost of your life.
                        <br><br>
                        You will have to survive 3 waves of enemies with different weapons to complete the game, sliding and slowing time at your will in a building in construction.
                        <br><br>
                        Optionaly, an endless mode with infinite waves is also available.`,
                    b1: "Download&nbsp<i>High on Time</i>",
                    vid: 'Gameplay Video'
                },
                fresquita: {
                    tit: "The lost Fresquita",
                    con: `One of the awarded games of the <a href="https://itch.io/jam/la-illojam" target="_blank">IlloJam</a>, a gamejam organized for <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>.
                        <br><br>
                        In The lost Fresquita you will play the role of Juan in a day at night. 
                        You celebrated a party in the forest the previous day and forgot some beers there but, since that's irresponsible, you came back for them. 
                        <br><br>
                        Your mission will be to find the 3 forgotten beers and take them back home safe and sound. 
                        What do I mean by safe? 
                        Lets say some of your friends wont make it easy...`,
                    b1: "Download&nbsp<i>The lost Fresquita</i>",
                    vid: 'IlloJuan Playing on Stream'
                },
                raccoon: {
                    tit: "Esto AÚN no es un Juego",
                    con: `Winner of the 3º edition of the <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Esto AÚN no es un juego you will help a programer raccoon finish his game before his gamejam ends.
                        <br><br>
                        Due to the little time he has left, to achieve this you will have to go inside the game and fix bugs from there.
                        <br><br>
                        Your mission will be to change how things work, so that you are able to get to each level's ending and continue to the next.`,
                    b1: "Download&nbsp<i>Esto AÚN no es un Juego</i>",
                    vid: 'Gameplay Video'
                },
                lmdshow: {
                    tit: "Escape From LMDShow",
                    con: `Thank you <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a> for playing!
                        <br><br>
                        Escape from LMDShow is a escape room like game in which Juan Alberto, a really cool guy, is kidnapped by LMDShow and attempts to escape the house he was locked in.
                        <br><br>
                        To escape you will have to solve different puzzles with objects and codes that you will find exploring the rooms.`,
                    b1: "Download&nbsp<i>Escape From LMDShow</i>",
                    vid: 'IlloJuan Playing on Stream'
                },
                memory: {
                    tit: "Memory Shift",
                    con: `Memory Shift is a 2D action-platformer featuring fast-paced gameplay and a hacking system.
                        <br><br>
                        Inspired by games like Katana ZERO and Cyberpunk 2077, run, kill, hack, slide and discover what happened to you before losing your memories.
                        <br><br>
                        Enjoy a story driven adventure with handcrafted levels and mechanics such as throwing items or exploding enemies from afar.`,
                    b1: "Download&nbsp<i>Memory Shift</i>"
                },
                spirits: {
                    tit: "Twin Spirits",
                    con: `Finalist in the 2º edition of the <a href="https://itch.io/jam/gamescholars-2nd-edition" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        Twin Spirits is an indie local coop game in which two spirits go on an adventure in search of a scepter capable of bringing them back to life.  
                        <br><br>
                        On the way you will find puzzles in which you will have to cooperate in order to continue.`,
                    b1: "Download&nbsp<i>Twin Spirits</i>",
                    vid: 'Trailer Video'
                },
                papa: {
                    tit: "Cooking Papa",
                    con: `Cooking Papa is an indie game where you will have to prepare recipes with ingredients you don't have.
                        <br><br>
                        The game goes against the clock and you will have to check the cooking book to replace the ingredients that are missing.`,
                    b1: "Download&nbsp<i>Cooking Papa</i>"
                },
                vaporcade: {
                    tit: "Vaporcade",
                    con: `Vaporcade is a vaporwave themed arcade indie game in which you control a spaceship and score points by shooting. 
                        <br><br>
                        Vaporcade is divided by waves. In each wave you'll find new enemies and, every two waves, a boss you will have to defeat.`,
                    b1: "Download&nbsp<i>Vaporcade</i>"
                },
                otters: {
                    tit: "Otter's Odyssey",
                    con: `Otter's Odyssey was presented to the 2022 URJC GameJam with a medieval theme and received an honorific mention to the best 3D esthetic.
                        <br><br>
                        It is an isometric role playing game in which you control an otter that goes into an adventure to save its brother.`,
                    b1: "Download&nbsp<i>Otter's Odyssey</i>"
                },
                assPC: {
                    tit: 'Oriøn Assistant (Windows)',
                    con: `Oriøn Assistant for Windows is an app launcher with support for custom themes and HTML/JS apps called modules.
                        <br><br>
                        I like to carry my apps on a USB but plugging drives in different computers changes their letter and shortcuts break, so I had to come up with a solution.
                        The first iteration of the assistant was a command line app that replaced path letters with "?:\\", which would use the drive it was installed on.
                        <br><br>
                        After that I wanted to go further with a UI, so I started a new version called Oriøn Launcher using Electron.js. 
                        Some updates later I renamed it to Oriøn Assistant to match the Android app and added compatibility between them.`,
                    b1: 'Oriøn Assistant',
                    b2: 'Batch Launcher'
                },
                assAn: {
                    tit: 'Oriøn Assistant (Android)',
                    con: `Oriøn Assistant for Android is an app full of useful smaller apps such as a music player or a QR scanner.
                        <br><br>
                        At first, the idea started as a simple web browser that detected commands and helped with gaming tasks.
                        After forgetting it for some time, I decided to rename it and give it a modern design with Android Studio. 
                        At the moment it has music and video players, a photo vault, notes, a QR scanner and an app to send data to the Windows version of the app.`,
                    b1: 'Download APK'
                },
                frame: {
                    tit: 'Oriøn Framework',
                    con: `Oriøn Framework is an HTML, CSS & JS based framework made with personalization in mind. 
                        This project got separated from the PC version of Oriøn Assistant in an attempt to make it available for everyone.
                        <br><br>
                        Here you can find new simple and easy to use HTML elements like buttons, inputs, switches, checkboxes, radio buttons and various loading animations and effects.`,
                    b1: 'See documentation'
                },
                disbots: {
                    tit: 'Discord Bots',
                    con: `I've created two discord bots. The first one, Syrup, is a simple bot capable of moderating a server and providing simple games for people to enjoy.
                        <br><br>
                        After Syrup came Coscu, a more advanced bot capable of the same and more. This new version could jump into a call with people and play custom sounds and music.`,
                    b1: 'Syrup Repository'
                },
                mod: {
                    tit: 'PC Modding',
                    con: `Ever since I got into the PC world I started to get interested in modding, so I decided to make my own modded PC.
                        <br><br>
                        I began by extracting 3D models from some of my favorite games since I couldn't find them online.
                        I printed a deathclaw figure and made a large rock model to place inside the case.
                        Then I continued sketching the exterior pieces, which are Cyberpunk 2077 inspired, to later 3D model and print them.
                        <br><br>
                        After printing them, I painted and placed them on my PC.`
                },
                t45: {
                    tit: 'T45 Helmet',
                    con: `Fallout is one of my favorite videogame series and, in its universe, people use technologically advanced full-body suits called power armors.
                        <br><br>
                        As I found a helmet 3D model I decided to print it in small pieces to make my own. 
                        After gluing all the parts, I painted it and added a vacuum cleaner tube in order to make it look a bit more realistic.`
                },
                usb: {
                    tit: 'GTX USB',
                    con: `Carrying apps and games on a USB isn't a bad idea, but the memory's speed can cause problems.
                        To fix this I had the idea of adding a cooler, so I started designing a case which ended up having the shape of an Nvidia GTX graphics card.
                        <br><br>
                        After adding the holes for the ventilation, I printed the case and placed a small fan that gets powered from a little connector on the side.
                        Finally, I put a thermal pad and an aluminium plate, which was later painted, to dissipate heat from the memory.`
                },
                hoodie: {
                    tit: 'Futuristic Hoodie',
                    con: `One day I came across a streetwear hoodie, a new style of clothing I had never seen, and I got inspired to create my own.
                        It isn't exactly streetwear but it's indeed a futuristic hoodie design.
                        I started by sketching some designs in my notebook which were then digitalized using Adobe Illustrator.
                        Then I made a preview in Photoshop of how the hoodie would look like if it was real.`
                },
            },
            none: 'No projects where found...<br>Try changing the selected filters.',
            more: 'Show more projects!',
        },
        //Footer
        footer: {
            contactTitle: 'Contact',
            mail: 'Email copied to clipboard',
        },
    }, 
    es: {
        //Locale
        key: 'es',
        //Page
        title: 'Portfolio de Alex',
        //Loading
        loading: {
            title: 'CARGANDO_PORTFOLIO'
        },
        //Sidebar
        sidebar: {
            home: 'Inicio',
            about: 'Sobre Mi',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto',
            resume: 'Curriculum',
            localization: 'Español',
            theme: 'Tema',
            achievements: 'Logros',
        },
        //Resume
        resume: {
            title: 'Curriculum',
        },
        //Achievements
        achievements: {
            title: 'Logros',
            description: 'Encuentra nuevos logros interactuando con cosas por la página',
            locked: 'Escondido',
            theme: {
                title: 'Alergico a la Luz',
                description: 'Prueba el tema claro y vuelve al oscuro'
            },
            artyom: {
                title: 'Mejores Amigos',
                description: 'Encuentra la foto de Artyom (mi primer gecko)'
            },
            project: {
                title: 'Buen Chico',
                description: 'Abre uno de los links de mis proyectos'
            },
            contact: {
                title: 'Chavalin Interesado',
                description: 'Abre uno de mis links de contacto'
            },
        },
        //Snake
        snake: {
            points: 'Puntos: ',
            restart: 'Reiniciar',
            death: '¡Has muerto!',
            afk: 'Hay un poco de silencio...<br>¿Quieres jugar un juego?',
        },
        //Home
        home: {
            text1: 'Hola, soy',
            text2: 'Alejandro Paniagua',
            text3: 'Un ### español',
            roles: [
                'desarrollador de juegos indie',
                'diseñador de paginas web',
                'desarrollador de aplicaciones',
            ]
        },
        //About
        about: {
            title: 'Sobre Mi',
            desc1: "¡Hey! Me llamo Alejandro, pero me puedes llamar Alex. Soy un desarrollador español al que le gusta pasar el tiempo creando juegos y aplicaciones.",
            desc2: "Comencé a hacer juegos en 2015, con 11 años. Más tarde, en 2019, me tome un descanso para aprender desarrollo web y de aplicaciones y, desde 2022, he estado haciendo todos ellos.",
            desc3: "Soy una persona bien organizada e independiente a la que le encanta dar su propio toque. Algunos de mis intereses son jugar, programar y diseñar, pero también me gusta la impresión 3D y las manualidades.",
            contact: '¡Ponte en contacto!',
            next: '¡Hazme click!',
            names: [
                'Yo',
                'Yo',
                'Yo',
                'Yo',
                'Yo',
                'Islas Canarias',
                'Gato Durmiendo',
                'Finisterre',
                'Mallorca',
                'Otivar',
                'Flor en Rio',
                'Muro Lennon',
                'Artyom',
            ]
        },
        //Skills
        skills: {
            title: 'Mis Habilidades',
            desc: "He estado interesado en el mundo de la tecnología desde pequeño. Debido a eso, he aprendido una gran cantidad de habilidades relacionadas con diferentes temas:",
            videogames: 'Desarrollo de Videojuegos',
            apps: 'Desarrollo de Aplicaciones',
            web: 'Desarrollo Web',
            ui: 'Diseño de UI/UX',
            d3: 'Modelado/Impresión 3D & CAD',
            art: 'Arte & Media',
            basic: 'Basico',
            medium: 'Medio',
            high: 'Alto',
            advanced: 'Avanzado',
            expert: 'Experto',
        },
        //Projects
        projects: {
            title: 'Mis Proyectos',
            filtersTitle: 'Filtros',
            category: {
                title: 'Categoría',
                all: '---',
                games: 'Juegos',
                apps: 'Apps',
                other: 'Otros'
            },
            tags: {
                title: 'Tags',
                all: '---',
                uiux: 'Diseño UI/UX',
                discordapi: 'API de Discord',
                '3dmodel': 'Modelado 3D',
                '3dprint': 'Impresión 3D',
                sketching: 'Dibujo',
                diy: 'Manualidades',
                electronics: 'Electrónica',
            },
            sort: {
                title: 'Ordenar por',
                date: 'Fecha',
                favs: 'Favoritos',
            },
            date: {
                present: 'Presente',
                paused: 'En Pausa',
            },
            scope: {
                solo: 'Proyecto Solitario',
                team: 'Proyecto de Equipo',
                personal: 'Proyecto Personal',
                jam: 'Juego de Jam',
            },
            projects: {
                mapPinner: {
                    tit: "Map Pinner",
                    con: `Map Pinner es una herramienta web gratuita diseñada para ayudarte a planificar y organizar tus viajes.
                        <br><br>
                        Con Map Pinner puedes seleccionar una imagen como mapa, colocar pins y personalizar cada una con colores, categorías, nombres, links y descripciones personalizadas.`,
                    b1: "Probar&nbsp<i>Map Pinner</i>",
                },
                hardcoreKitty: {
                    tit: "Hardcore Kitty",
                    con: `Tercer puesto en la 6º edicion de la <a href="https://itch.io/jam/6-edicin-game-jam-game-scholars" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Hardcore Kitty tomarás el rol de un gato que trabaja en una empresa de reparto.
                        <br><br>
                        Tu objetivo es encontrar puntos de recogida, coger la comida y llevarla hasta los puntos de entrega haciendo trucos y piruetas con el skate por el camino.`,
                    b1: "Descargar&nbsp<i>Hardcore Kitty</i>",
                    vid: 'Ver Gameplay'
                },
                stealer: {
                    tit: "Turbo Stealer",
                    con: `Solo por motivos educacionales, Turbo Stealer es una aplicación de línea de comandos programada en Python capaz de robar información del ordenador en que se ejecuta.
                        <br><br>
                        Actualmente, es capaz de robar correos electrónicos, nombres de usuario y contraseñas de credenciales guardadas en los navegadores.`,
                    b1: "Descargar&nbsp<i>Turbo Stealer</i>",
                },
                stardewpets: {
                    tit: "Stardew Pets",
                    con: `Stardew Pets es una extensión para VS Code que te permite tener mascotas de Stardew Valley acompañandote mientras programas.
                        <br><br>
                        Actualmente puedes tener como mascota a gatos, perros, dinos, tortugas, mapaches, cabras, ovejas, avestruces, cerdos, conejos, pollos, vacas y junimos, cada uno con diferentes variantes.`,
                    b1: "Instalar&nbsp<i>Stardew Pets</i>",
                },
                spyw4re: {
                    tit: "Spyw4re",
                    con: `Segundo puesto de 25 en la 5º edicion de la <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Spyw4re, eres un operador de CCTV en un asilo. El edificio se está derrumbando y un paciente todavía está dentro, por lo que tendrás que ayudarlo a salir.
                        <br><br>
                        Para lograrlo, tendrás que resolver algunos acertijos y derrotar a algunos enemigos, pero no creas que será tan fácil, alguien no quiere que lo ayudes...`,
                    b1: "Descargar&nbsp<i>Spyw4re</i>",
                    vid: 'Ver Gameplay'
                },
                hackoon: {
                    tit: "Hackoon",
                    con: `Hackoon es un juego de puzles en desarrollo sobre un mapache desarrollador de videojuegos que necesita arreglar su juego antes de publicarlo.
                        <br><br>
                        Para conseguirlo, tendrá que meterse dentro de su propio juego. Ahí, con la ayuda de un pequeño robot, podrás modificar el codigo que controla los objetos de cada nivel para completar ingeniosos puzles.`,
                    b1: "¡Sigue el desarrollo!"
                },
                hightime: {
                    tit: "High on Time",
                    con: `Des para la 4º edicion de la <a href="https://itch.io/jam/gamescholars-4-edition" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        High on Time es un shooter frenetico en el que, debido a una droga, eres capaz de controlar el tiempo a costo de tu vida.
                        <br><br>
                        Tendras que sobrevivir a 3 oleadas de enemigos con armas diferentes para completar el juego, deslizandote y realentizando el tiempo a tu antojo en un edificio en construcción.
                        <br><br>
                        Opcionalmente, un modo endless con oleadas infinitas tambien está disponible.`,
                    b1: "Descargar&nbsp<i>High on Time</i>",
                    vid: 'Ver Gameplay'
                },
                fresquita: {
                    tit: "The lost Fresquita",
                    con: `Uno de los juegos premiados de la <a href="https://itch.io/jam/la-illojam" target="_blank">IlloJam</a>, una gamejam organizada para <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>.
                        <br><br>
                        En The lost Fresquita encarnaras el rol de Juan en un día por la noche. 
                        El día anterior celebrasteis una fiesta en el bosque y se te olvidó recoger unas cervezas pero, como eso es irresponsable, has vuelto a por ellas. 
                        <br><br>
                        Tu misión será encontrar las 3 cervezas olvidadas y volver a casa a salvo. 
                        ¿Que a qué me refiero con a salvo? 
                        Digamos que algunos de tus amigos no te harán la vida facil...`,
                    b1: "Descargar&nbsp<i>The lost Fresquita</i>",
                    vid: 'IlloJuan Jugando en Stream'
                },
                raccoon: {
                    tit: "Esto AÚN no es un Juego",
                    con: `Ganador de la 3º edicion de la <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Esto AÚN no es un juego ayudarás a un mapache programador a terminar su juego antes de que acabe su gamejam.
                        <br><br>
                        Debido al poco tiempo que le queda, para conseguirlo tendrás que meterte dentro de este y arreglar los bugs desde su interior.
                        <br><br>
                        Desde allí tu misión será cambiar cómo funcionan las cosas, de manera que se pueda llegar hasta el final de cada nivel y así continuar hasta el siguiente.`,
                    b1: "Descargar&nbsp<i>Esto AÚN no es un Juego</i>",
                    vid: 'Ver Gameplay'
                },
                lmdshow: {
                    tit: "Escape From LMDShow",
                    con: `¡Gracias por jugar <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>!
                        <br><br>
                        Escape from LMDShow es un juego tipo escape room en el que Juan Alberto, un malagueño mu salao, es secuestrado por LMDShow y trata de escapar de la casa donde ha sido encerrado. 
                        <br><br>
                        Para escapar tendrás que resolver diferentes puzles con objetos y códigos que encontrarás tras explorar las habitaciones.`,
                    b1: "Descargar&nbsp<i>Escape From LMDShow</i>",
                    vid: 'IlloJuan Jugando en Stream'
                },
                memory: {
                    tit: "Memory Shift",
                    con: `Memory Shift es un plataformas de acción 2D con un gameplay rápido y un sistema de hackeo.
                        <br><br>
                        Inspirado por juegos como Katana ZERO y Cyberpunk 2077, corre, mata, hackea, deslízate y descubre qué te ocurrió antes de perder tus recuerdos.
                        <br><br>
                        Disfruta de una aventura con narrativa, niveles hechos a mano y mecánicas como lanzar objetos o explotar enemigos desde la lejanía.`,
                    b1: "Descargar&nbsp<i>Memory Shift</i>"
                },
                spirits: {
                    tit: "Twin Spirits",
                    con: `Finalista en la 2º edicion de la <a href="https://itch.io/jam/gamescholars-2nd-edition" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        Twin Spirits es un juego indie cooperativo local en el que dos espíritus se aventuran en busca de un cetro capaz de hacerles revivir.  
                        <br><br>
                        Por el camino os encontrareis una serie de puzzles en los que tendréis que cooperar para poder continuar.`,
                    b1: "Descargar&nbsp<i>Twin Spirits</i>",
                    vid: 'Ver Trailer'
                },
                papa: {
                    tit: "Cooking Papa",
                    con: `Cooking Papa es un juego indie en el que tendras que preparar recetas con ingredientes que no tienes.  
                        <br><br>
                        Las partidas van a contra reloj y tendrás que consultar el libro de recetas para remplazar los ingredientes que faltan.`,
                    b1: "Descargar&nbsp<i>Cooking Papa</i>"
                },
                vaporcade: {
                    tit: "Vaporcade",
                    con: `Vaporcade es un juego de arcade indie con temática de vaporwave en el que controlas una nave y ganas puntos disparando.  
                        <br><br>
                        Vaporcade esta dividido por oleadas. En cada oleada encontraras nuevos enemigos y, por cada dos oleadas, un jefe al que derrotar.`,
                    b1: "Descargar&nbsp<i>Vaporcade</i>"
                },
                otters: {
                    tit: "Otter's Odyssey",
                    con: `Otter's Odyssey fue presentado como juego para la GameJam de 2022 de la URJC con temática medieval y recibió una mención honorífica a la mejor estética 3D. 
                        <br><br>
                        Es un juego isométrico de rol en el que controlas a una nutria que se adentra en una aventura para rescatar a su hermano.`,
                    b1: "Descargar&nbsp<i>Otter's Odyssey</i>"
                },
                assPC: {
                    tit: 'Oriøn Assistant (Windows)',
                    con: `Oriøn Assistant para Windows es un launcher de apps con soporte para temas y apps HTML/JS custom llamadas módulos.
                        <br><br>
                        Suelo llevar mis apps en un USB pero al conectarlo a diferentes ordenadores la letra cambia y los accesos directos se rompen, por lo que tuve que llegar a una solución.
                        La primera iteración del asistente era una app de comandos que reemplaza la letra de las rutas con "?:\\", lo que usaría el disco donde estaba instalado.
                        <br><br>
                        Tras esto quise ir más allá con una UI, por lo que comencé una nueva versión llamada Oriøn Launcher con Electron.js.
                        Algunas actualizaciones después lo renombré a Oriøn Assistant para que coincidiera con la app de Android y añadí compatibilidad entre ellas.`,
                    b1: 'Asistente Oriøn',
                    b2: 'Launcher Batch'
                },
                assAn: {
                    tit: 'Oriøn Assistant (Android)',
                    con: `Oriøn Assistant para Android es una app llena de apps más pequeñas como un reproductor de música o un lector de QR.
                        <br><br>
                        Al principio, la idea comenzó como un buscador web simple que detectába comandos y ayudaba con tareas de juegos.
                        Tras olvidarla por un tiempo, decidí renombrarla y darle un diseño moderno con Android Studio.
                        Actualmente la app tiene reproductores de música y video, un bunquer de fotos, notas, un lector de QR y una app para pasar datos a la versión de Windows de la app.`,
                    b1: 'Descargar APK'
                },
                frame: {
                    tit: 'Framework Oriøn',
                    con: `El framework Oriøn es un framework basado en HTML, CSS & JS hecho con personalización en mente.
                        Este proyecto fue separado de la versión de PC del Asistente Oriøn en un intento de hacerlo disponible para todos.
                        <br><br>
                        Aquí puedes encontrar nuevos elementos HTML simples y fáciles de usar como botones, inputs, interruptores, casillas de verificación, botones de radio y varias animaciones y efectos de carga.`,
                    b1: 'Ver documentación'
                },
                disbots: {
                    tit: 'Bots de Discord',
                    con: `He creado dos bots de discord. El primero, Syrup, es un bot simple capaz de moderar un servidor y proveer juegos simples para que la gente se divierta.
                        <br><br>
                        Después de Syrup llegó Coscu, un bot más avanzado capaz de lo mismo y más. Esta nueva versión podría entrar en llamadas con gente y reproducir sonidos personalizados y música.`,
                    b1: 'Repositorio de Syrup'
                },
                mod: {
                    tit: 'PC Modding',
                    con: `Desde que entré en el mundo del PC comencé a interesarme por el modding, así que decidí hacer mi propio PC modificado.
                        <br><br>
                        Empecé extrayendo modelos 3D de algunos de mis juegos favoritos ya que no los podía encontrar online.
                        Imprimí una figura de deathclaw e hice un modelo de roca larga para colocar dentro del PC.
                        Después continúe diseñando las piezas exteriores, basadas en Cyberpunk 2077, para más tarde modelarlas e imprimirlas.
                        <br><br>
                        Tras imprimirlas las pinté y coloqué en el PC.`
                },
                t45: {
                    tit: 'Casco T45',
                    con: `Fallout es una de mis series de videojuegos favoritas y, en su universo, se usan trajes tecnológicamente avanzados de cuerpo entero llamados armaduras de poder.
                        <br><br>
                        Cómo encontré el modelo 3D de un casco decidí imprimirlo en pequeñas partes para hacerme uno propio. 
                        Tras pegar todas las partes, lo pinté y le añadí un tubo de aspiradora para hacerlo parecer un poco más realista.`
                },
                usb: {
                    tit: 'USB GTX ',
                    con: `Llevar apps y juegos en un USB no es una mala idea, pero la velocidad de la memoria puede causar problemas.
                        Para arreglar esto tuve la idea de añadirle un disipador, así que empecé a diseñar una carcasa que acabó teniendo forma de una tarjeta gráfica Nvidia GTX.
                        <br><br>
                        Después de hacer agujeros para la ventilación, imprimí la carcasa y coloqué un ventilador pequeño alimentado por un conector en el lado.
                        Finalmente, le añadí una almohadilla térmica y una placa de aluminio, la cual pinté más tarde, para disipar el calor de la memoria.`
                },
                hoodie: {
                    tit: 'Sudadera Futurística',
                    con: `Un día me encontré con una sudadera streetwear, un estilo que no había visto antes, y me inspiró para crear la mía.
                        No es exactamente streetwear, pero sí es una sudadera futuristica.
                        Comencé dibujando unos diseños en mi cuaderno que fueron digitalizados más tarde usando Adobe Illustrator.
                        Tras eso, hice una simulación en Photoshop de como se vería la sudadera si fuese real.`
                },
            },
            none: 'No se han encontrado proyectos...<br>Prueba a cambiar los filtros seleccionados.',
            more: '¡Ver más proyectos!',
        },
        //Footer
        footer: {
            contactTitle: 'Contacto',
            mail: 'Email copiado al portapapeles',
        },
    }
}

let lan = locales.es

//Main
const animator = new AppearAnimation()

//Achievements
const Achievements = Object.freeze({
    theme: 'theme',
    artyom: 'artyom',
    project: 'project',
    contact: 'contact',
})

const achievements = {}

//Home
let homeParticles
let homeText

//About images
const about = {
    imgs: [
        'Data/Images/About/me1.webp',
        'Data/Images/About/me2.webp',
        'Data/Images/About/me3.webp',
        'Data/Images/About/me4.webp',
        'Data/Images/About/me5.webp',
        'Data/Images/About/canary.webp',
        'Data/Images/About/cat.webp',
        'Data/Images/About/finisterre.webp',
        'Data/Images/About/mallorca.webp',
        'Data/Images/About/otivar.webp',
        'Data/Images/About/flower.webp',
        'Data/Images/About/lennon.webp',
        'Data/Images/About/artyom.webp',
    ],
    order: [],
    index: -1,
    loading: false,
};

(() => {    
    //shuffle images, add me first & artyom last
    for (let i = 1; i < about.imgs.length - 1; i++) about.order.push(i)
    Util.shuffleArray(about.order)
    about.order.splice(0, 0, 0) //Add 'me1' first
    about.order.push(about.imgs.length - 1) //Add 'artyom' last
})();

//Projects
const Scope = Object.freeze({
    team: 'team',
    solo: 'solo',
    personal: 'personal',
    jam: 'jam'
});

const Category = Object.freeze({
    all: 'all',
    games: 'games',
    apps: 'apps',
    other: 'other',
});

const Tag = Object.freeze({
    //All
    all: 'all',
    //Languages
    cs: 'C#',
    java: 'JAVA',
    cpp: 'C++',
    python: 'Python',
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    ts: 'TypeScript',
    nodejs: 'NodeJS',
    electronjs: 'ElectronJS',
    cmd: 'CMD',
    //Apps
    unity: 'Unity',
    vscode: 'VS Code',
    blender: 'Blender',
    photoshop: 'Photoshop',
    illustrator: 'Illustrator',
    max3ds: '3ds Max',
    substance: 'Substance Painter',
    android: 'Android Studio',
    //Other
    discordapi: 'discordapi',
    uiux: 'uiux',
    print3d: '3dprint',
    model3d: '3dmodel',
    sketching: 'sketching',
    electronics: 'electronics',
    diy: 'diy',
});

const Sort = Object.freeze({
    favs: 'favs',
    date: 'date',
});

const Projects = Object.freeze({
    mapPinner: {
        key: 'mapPinner',
        dateStart: 2025,
        dateEnd: 2025,
        favPoints: 50,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.html, Tag.css, Tag.js, Tag.vscode],
        button: ['http://botpanzer.github.io/Map-Pinner'],
    },
    hardcoreKitty: {
        key: 'hardcoreKitty',
        dateStart: 2025,
        dateEnd: 2025,
        favPoints: 100,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.blender, Tag.photoshop],
        button: ['https://botpa.itch.io/hardcore-kitty'],
        vid: 'S0YSZCOFGlg',
    },
    stealer: {
        key: 'stealer',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: 50,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.python, Tag.vscode],
        button: ['https://github.com/BOTPanzer/Turbo-Stealer'],
    },
    spyw4re: {
        key: 'spyw4re',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: 100,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.js, Tag.nodejs, Tag.unity, Tag.vscode, Tag.blender, Tag.photoshop],
        button: ['https://botpa.itch.io/spyw4re'],
        vid: 'Qc3aWfPAxg0',
    },
    stardewpets: {
        key: 'stardewpets',
        dateStart: 2024,
        dateEnd: 2025,
        favPoints: 100,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.ts, Tag.html, Tag.css, Tag.vscode, Tag.photoshop],
        button: ['https://marketplace.visualstudio.com/items?itemName=botpa.stardew-pets'],
    },
    hackoon: {
        key: 'hackoon',
        dateStart: 2024,
        dateEnd: Infinity,
        favPoints: 0,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.blender, Tag.photoshop],
        button: ['https://www.tiktok.com/@botpanzer'],
    },
    hightime: {
        key: 'hightime',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: 90,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.photoshop],
        button: ['https://botpa.itch.io/high-on-time'],
        vid: 'UGMQDJxov1M',
    },
    fresquita: {
        key: 'fresquita',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: 80,
        scope: [Scope.solo, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.blender, Tag.photoshop],
        button: ['https://botpa.itch.io/the-lost-fresquita'],
        vid: 'SC_3TWWP46k',
    },
    raccoon: {
        key: 'raccoon',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: 80,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.blender, Tag.photoshop],
        button: ['https://botpa.itch.io/esto-aun-no-es-un-juego'],
        vid: 'UGH5wQYlAt4',
    },
    lmdshow: {
        key: 'lmdshow',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: 80,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.blender, Tag.photoshop, Tag.substance],
        button: ['https://botpa.itch.io/escape-from-lmdshow'],
        vid: 'z0Qv5HZyZgU',
    },
    memory: {
        key: 'memory',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: 80,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.photoshop, Tag.illustrator],
        button: ['https://botpa.itch.io/memory-shift'],
    },
    spirits: {
        key: 'spirits',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: 80,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.illustrator, Tag.photoshop],
        button: ['https://botpa.itch.io/twin-spirits'],
        vid: 'SdIGAw2ABeU',
    },
    vaporcade: {
        key: 'vaporcade',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: 80,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.illustrator, Tag.photoshop],
        button: ['https://botpa.itch.io/vaporcade']
    },
    papa: {
        key: 'papa',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: 50,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.illustrator, Tag.photoshop],
        button: ['https://botpa.itch.io/cooking-papa']
    },
    otters: {
        key: 'otters',
        dateStart: 2022,
        dateEnd: 2022,
        favPoints: 20,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.vscode, Tag.max3ds, Tag.substance, Tag.illustrator, Tag.photoshop],
        button: ['https://botpa.itch.io/otters-odyssey']
    },
    assPC: {
        key: 'assPC',
        dateStart: 2021,
        dateEnd: 2025,
        favPoints: 50,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.html, Tag.css, Tag.js, Tag.nodejs, Tag.electronjs, Tag.vscode, Tag.uiux],
        button: ['https://github.com/BOTPanzer/Orion-Assistant', 'https://github.com/BOTPanzer/USB-Launcher']
    },
    assAn: {
        key: 'assAn',
        dateStart: 2021,
        dateEnd: 2025,
        favPoints: 50,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.java, Tag.android, Tag.uiux],
        button: ['Data/Orion Assistant 1.10.4.apk']
    },
    frame: {
        key: 'frame',
        dateStart: 2022,
        //dateEnd: 2024,
        favPoints: 50,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.html, Tag.css, Tag.js, Tag.vscode, Tag.uiux],
        button: ['https://botpanzer.github.io/Orion-Framework']
    },
    //Usually hidden from here
    disbots: {
        key: 'disbots',
        dateStart: 2018,
        dateEnd: 2020,
        favPoints: 0,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.js, Tag.vscode, Tag.discordapi],
        button: ["https://github.com/BOTPanzer/Syrup"]
    },
    mod: {
        key: 'mod',
        dateStart: 2021,
        dateEnd: 2021,
        favPoints: 0,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.model3d, Tag.print3d, Tag.illustrator, Tag.sketching, Tag.diy],
    },
    t45: {
        key: 't45',
        dateStart: 2018,
        dateEnd: 2018,
        favPoints: 0,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.print3d, Tag.diy],
    },
    usb: {
        key: 'usb',
        dateStart: 2018,
        dateEnd: 2018,
        favPoints: 0,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.model3d, Tag.print3d, Tag.electronics, Tag.diy],
    },
    hoodie: {
        key: 'hoodie',
        dateStart: 2021,
        dateEnd: 2021,
        favPoints: 0,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.illustrator, Tag.photoshop, Tag.sketching],
    },
})

const projects = {
    //Created projects
    loaded: false,
    created: 0,
    //Category, filter & sorting
    category: Category.all,
    filter: Tag.all,
    sort: Sort.favs,
    //List (sorted by preferences)
    list: [
        Projects.mapPinner,
        Projects.hardcoreKitty,
        Projects.spyw4re,
        Projects.stardewpets,
        Projects.hightime,
        Projects.stealer,
        //Projects.hackoon,
        Projects.fresquita,
        Projects.raccoon,
        Projects.lmdshow,
        Projects.memory,
        Projects.spirits,
        Projects.vaporcade,
        Projects.papa,
        Projects.otters,
        Projects.assPC,
        Projects.assAn,
        Projects.frame,
        /*
        Projects.disbots,
        Projects.mod,
        Projects.t45,
        Projects.usb,
        Projects.hoodie,
        */
    ],
    filteredList: [],
    //Functions
    getCategoryName: (category) => lan.projects.category[category in Category ? category : Category.all],
    getTagName: (tag) => tag in lan.projects.tags ? lan.projects.tags[tag] : tag,
    getSortName: (sort) => lan.projects.sort[sort in Sort ? sort : Sort.favs],
}



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
        let deviceLanguage = navigator.language || navigator.userLanguage

        //Device is in english
        if (deviceLanguage.startsWith('en')) lan = locales.en

        //Save locale
        DB.set('locale', lan.key)
        break

    //English saved
    case 'en':
        lan = locales.en
        break

    //Default to spanish
    default:
        lan = locales.es
        break
}

//Localization functions
function swapLocale() {
    //Get new locale key
    const newKey = lan.key == 'es' ? 'en' : 'es'

    //Load new locale
    lan = locales[newKey]
    DB.set('locale', lan.key)

    //Localize page & hide sidebar
    localize()
    toggleSidebar(false)
}

function localize() {
    //Loading
    document.getElementById('loadingTitle').innerText = lan.loading.title

    //Sidebar
    document.getElementById('sidebar-home').innerText = lan.sidebar.home
    document.getElementById('sidebar-about').innerText = lan.sidebar.about
    document.getElementById('sidebar-skills').innerText = lan.sidebar.skills
    document.getElementById('sidebar-projects').innerText = lan.sidebar.projects
    document.getElementById('sidebar-contact').innerText = lan.sidebar.contact
    document.getElementById('sidebar-resume').innerText = lan.sidebar.resume
    document.getElementById('sidebar-localization').innerText = lan.sidebar.localization
    document.getElementById('sidebar-theme').innerText = lan.sidebar.theme
    document.getElementById('sidebar-achievements').innerText = lan.sidebar.achievements

    //Resume
    document.getElementById('resumeMenuTitle').innerText = lan.resume.title

    //Achievements
    document.getElementById('achievementsTitle').innerText = lan.achievements.title
    document.getElementById('achievementsDescription').innerText = lan.achievements.description

    //Snake
    document.getElementById('snakeInfoPointsText').innerText = lan.snake.points
    document.getElementById('snakeRestart').innerText = lan.snake.restart
    document.getElementById('snakeAFKText').innerHTML = lan.snake.afk

    //Home
    document.getElementById('homeText1').innerText = lan.home.text1
    document.getElementById('homeText2').innerText = lan.home.text2
    document.getElementById('homeText3').innerText = lan.home.text3
    if (homeText) homeText.reset()

    //About
    document.getElementById('aboutTitle').innerText = lan.about.title
    document.getElementById('aboutDescription1').innerText = lan.about.desc1
    document.getElementById('aboutDescription2').innerText = lan.about.desc2
    document.getElementById('aboutDescription3').innerText = lan.about.desc3
    document.getElementById('aboutContact').innerText = lan.about.contact
    document.getElementById('aboutImgName').innerText = lan.about.names[about.order[Math.max(about.index, 0)]]
    document.getElementById('aboutImgNext').innerText = lan.about.next

    //Skills
    document.getElementById('skillsTitle').innerText = lan.skills.title
    document.getElementById('skillsDescription').innerText = lan.skills.desc
    document.getElementById('skillsWebTitle').innerText = lan.skills.web
    document.getElementById('skillsWebPro').innerText = lan.skills.high
    document.getElementById('skillsUiTitle').innerText = lan.skills.ui
    document.getElementById('skillsUiPro').innerText = lan.skills.high
    document.getElementById('skillsVidTitle').innerText = lan.skills.videogames
    document.getElementById('skillsVidPro').innerText = lan.skills.advanced
    document.getElementById('skillsAppTitle').innerText = lan.skills.apps
    document.getElementById('skillsAppPro').innerText = lan.skills.high
    document.getElementById('skills3dTitle').innerText = lan.skills.d3
    document.getElementById('skills3dPro').innerText = lan.skills.medium
    document.getElementById('skillsArtTitle').innerText = lan.skills.art
    document.getElementById('skillsArtPro').innerText = lan.skills.medium

    //Projects
    document.getElementById('projectsTitle').innerText = lan.projects.title
    document.getElementById('projectsFiltersTitle').innerText = lan.projects.filtersTitle
    document.getElementById('projectsCategory').innerText = lan.projects.category.title + ':'
    document.getElementById('projectsFilter').innerText = lan.projects.tags.title + ':'
    document.getElementById('projectsSort').innerText = lan.projects.sort.title + ':'
    refreshProjects()
    document.getElementById('projectsMore').innerText = lan.projects.more

    //Footer
    document.getElementById('footerContactTitle').innerText = lan.footer.contactTitle
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
    refreshTheme()

    //Hide sidebar
    toggleSidebar()

    //Give chievement
    if (theme.dark) giveAchievement(Achievements.theme)
}

function refreshTheme() {
    //Refresh theme
    if (theme.dark) {
        //Enable light
        DB.set('theme', 'dark', DB.STRING)
        document.documentElement.removeAttribute('light')
    } else {
        //Enable dark
        DB.set('theme', 'light', DB.STRING)
        document.documentElement.setAttribute('light', '')
    }

    //Refresh particle animation color
    if (homeParticles) homeParticles.changeColor(`color-mix(in srgb, transparent 50%, ${window.getComputedStyle(document.body).getPropertyValue('--text')})`)
}

refreshTheme()



 /*$      /$$           /$$          
| $$$    /$$$          |__/          
| $$$$  /$$$$  /$$$$$$  /$$ /$$$$$$$ 
| $$ $$/$$ $$ |____  $$| $$| $$__  $$
| $$  $$$| $$  /$$$$$$$| $$| $$  \ $$
| $$\  $ | $$ /$$__  $$| $$| $$  | $$
| $$ \/  | $$|  $$$$$$$| $$| $$  | $$
|__/     |__/ \_______/|__/|__/  |_*/

//Sidebar
function toggleSidebar(toggle) {
    //Get sidebar element
    const sidebar = document.getElementById('sidebar')

    //Fix toggle
    if (typeof toggle !== 'boolean') toggle = !sidebar.hasAttribute('open')

    //Toggle sidebar
    if (toggle) {
        sidebar.setAttribute('open', '')
        document.body.setAttribute('sidebar', '')
    } else {
        sidebar.removeAttribute('open')
        document.body.removeAttribute('sidebar', '')
    }
}

//Navigation
new CurrentPageIndicator(['home', 'about', 'skills', 'projects', 'contact'])

function goTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    toggleSidebar(false)
}

//Change title
function changeTitle() {
    const emojis = ['🦝', '🦎', '🦖', '🎷🐛', '😸']
    document.title = lan.title + ' ' + emojis[Math.floor(Math.random() * emojis.length)]
}

changeTitle()

addFocusListener(changeTitle)



 /*$$$$$$                                                       
| $$__  $$                                                      
| $$  \ $$  /$$$$$$   /$$$$$$$ /$$   /$$ /$$$$$$/$$$$   /$$$$$$ 
| $$$$$$$/ /$$__  $$ /$$_____/| $$  | $$| $$_  $$_  $$ /$$__  $$
| $$__  $$| $$$$$$$$|  $$$$$$ | $$  | $$| $$ \ $$ \ $$| $$$$$$$$
| $$  \ $$| $$_____/ \____  $$| $$  | $$| $$ | $$ | $$| $$_____/
| $$  | $$|  $$$$$$$ /$$$$$$$/|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
|__/  |__/ \_______/|_______/  \______/ |__/ |__/ |__/ \______*/

//Resume menu
const resumeMenu = document.getElementById('resumeMenu')

function toggleResumeMenu() {
    //Toggle menu
    if (resumeMenu.open) {
        //Close
        resumeMenu.close()
        document.body.removeAttribute('noscroll')
    } else {
        //Open
        resumeMenu.showModal()
        document.body.setAttribute('noscroll', '')
    }
}

Util.onDialogBackdropClick(resumeMenu, toggleResumeMenu)



  /*$$$$$            /$$       /$$                                                                   /$$
 /$$__  $$          | $$      |__/                                                                  | $$
| $$  \ $$  /$$$$$$$| $$$$$$$  /$$  /$$$$$$  /$$    /$$ /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
| $$$$$$$$ /$$_____/| $$__  $$| $$ /$$__  $$|  $$  /$$//$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
| $$__  $$| $$      | $$  \ $$| $$| $$$$$$$$ \  $$/$$/| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$ 
| $$  | $$| $$      | $$  | $$| $$| $$_____/  \  $$$/ | $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
| $$  | $$|  $$$$$$$| $$  | $$| $$|  $$$$$$$   \  $/  |  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
|__/  |__/ \_______/|__/  |__/|__/ \_______/    \_/    \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |______*/

//Load achievements
for (key of Object.keys(Achievements)) {
    if (!DB.get(`achievement-${Achievements[key]}`, false, DB.BOOLEAN)) continue
    addAchievement(key)
}

//Give, reset & show achievements
function giveAchievement(key) {
    //Achievement does not exist
    if (!Achievements[key]) return

    //Already has achievement
    if (achievements[key]) return

    //Show snackbar
    createSnackbar(`🏆 ${lan.achievements[key].title}`, true)
    
    //Add achievement
    addAchievement(key)

    //Show achievement indicator dots
    document.getElementById('achievementsDot1').setAttribute('active', '')
    document.getElementById('achievementsDot2').setAttribute('active', '')
}

function giveAllAchievements() {
    //Give all achievements
    for (key of Object.keys(Achievements)) {
        giveAchievement(Achievements[key])
    }
}

function addAchievement(key) {
    achievements[key] = true
    DB.set(`achievement-${key}`, true)
}

function resetAchievements() {
    //Reset current achievements
    for (key of Object.keys(achievements)) {
        achievements[key] = false
        DB.set(`achievement-${key}`, false)
    }
}

//Achievements menu
const achievementsMenu = document.getElementById('achievementsMenu')

function toggleAchievementsMenu() {
    //Hide achievement indicator dots
    document.getElementById('achievementsDot1').removeAttribute('active')
    document.getElementById('achievementsDot2').removeAttribute('active')

    //Close sidebar
    toggleSidebar(false)

    //Toggle menu
    if (achievementsMenu.open) {
        //Close
        achievementsMenu.close()
        document.body.removeAttribute('noscroll')
    } else {
        //Clear achievements list
        const achievementsList = document.getElementById('achievementsList')
        achievementsList.innerHTML = ''

        //Load achievements in list
        for (key of Object.keys(Achievements)) {
            const element = document.createElement('div')
            element.classList.add('achievement')

            //Lock if user does not have the achievement
            if (!achievements[key]) element.setAttribute('locked', '')
            
            //Fill element content
            element.innerHTML = `
            <img src="Data/Images/Achievements/${key}.webp">
            <div>
                <div>${lan.achievements[key].title}</div>
                <div>${lan.achievements[key].description}</div>
            </div>
            <span>${lan.achievements.locked}</span>
            `
            
            //Add element
            achievementsList.appendChild(element)
        }

        //Open
        achievementsMenu.showModal()
        document.body.setAttribute('noscroll', '')
    }
}

Util.onDialogBackdropClick(achievementsMenu, toggleAchievementsMenu)



  /*$$$$$                      /$$                
 /$$__  $$                    | $$                
| $$  \__/ /$$$$$$$   /$$$$$$ | $$   /$$  /$$$$$$ 
|  $$$$$$ | $$__  $$ |____  $$| $$  /$$/ /$$__  $$
 \____  $$| $$  \ $$  /$$$$$$$| $$$$$$/ | $$$$$$$$
 /$$  \ $$| $$  | $$ /$$__  $$| $$_  $$ | $$_____/
|  $$$$$$/| $$  | $$|  $$$$$$$| $$ \  $$|  $$$$$$$
 \______/ |__/  |__/ \_______/|__/  \__/ \______*/

const snakeMenu = document.getElementById('snakeMenu')
const snakeMessageAFK = document.getElementById('snakeAFK')
const snakeSidebarButton = document.getElementById('goTo-snake')

//Game
class Snake {
    
    //Technical
    animationFrame = undefined
    updateInterval = undefined
    delta = 1000 / 9 //9 fps
    inputQueue = []
    context = undefined

    //Game
    size = new Vec2()
    grid = 15 //Cell size

    dead = true
    points = 0
    best = DB.get('snake.best', 0, DB.NUMBER)
    
    snake = {
        pos: new Vec2(150),
        dir: new Vec2(1, 0),
        cells: [],
        length: 4,
    }
    apple = new Vec2(0)

    //Constructor
    constructor(canvas) {
        //Get context
        this.context = canvas.getContext('2d')

        //Init game info
        this.size = new Vec2(canvas.width, canvas.height)
    }

    //Update & render
    update() {
        //Dead -> Don't update
        if (this.dead) return
        
        //Check keys from input queue
        for (let i = this.inputQueue.length - 1; i >= 0; i--) {
            //Get key & remove it from queue
            const key = this.inputQueue.pop()

            //Check if key is valid
            let valid = false
            switch (key) {
                //Up
                case 'w':
                case 'arrowup':
                    if (this.snake.dir.y !== 0) break
                    this.snake.dir = new Vec2(0, -1)
                    valid = true
                    break
                //Right
                case 'd':
                case 'arrowright':
                    if (this.snake.dir.x !== 0) break
                    this.snake.dir = new Vec2(1, 0)
                    valid = true
                    break
                //Down
                case 's':
                case 'arrowdown':
                    if (this.snake.dir.y !== 0) break
                    this.snake.dir = new Vec2(0, 1)
                    valid = true
                    break
                //Left
                case 'a':
                case 'arrowleft':
                    if (this.snake.dir.x !== 0) break
                    this.snake.dir = new Vec2(-1, 0)
                    valid = true
                    break
            }

            //Check if key was valid
            if (valid) break
        }

        //Move snake
        this.snake.pos.x += this.snake.dir.x * this.grid;
        this.snake.pos.y += this.snake.dir.y * this.grid;

        //Wrap on screen edges
        if (this.snake.pos.x < 0) {
            this.snake.pos.x = this.size.x - this.grid;
        } else if (this.snake.pos.x >= this.size.x) {
            this.snake.pos.x = 0;
        }
        
        if (this.snake.pos.y < 0) {
            this.snake.pos.y = this.size.y - this.grid;
        } else if (this.snake.pos.y >= this.size.y) {
            this.snake.pos.y = 0;
        }

        //Keep track of where snake has been (front of the array is always the head)
        this.snake.cells.unshift(new Vec2(this.snake.pos))

        //Remove cells as we move away from them
        if (this.snake.cells.length > this.snake.length) this.snake.cells.pop()

        //Check snake cells
        this.snake.cells.forEach((cell, index) => {
            //Snake ate apple
            if (cell.x === this.apple.x && cell.y === this.apple.y) {
                this.snake.length++;
                this.points++
                this.apple = this.getRandomPoint()
                
                //UI
                document.getElementById('snakeInfoPoints').innerText = this.points
            }

            // check collision with all cells after this one (modified bubble sort)
            for (var i = index + 1; i < this.snake.cells.length; i++) {
                //Snake occupies same space as a body part -> reset game
                if (cell.x != this.snake.cells[i].x || cell.y !== this.snake.cells[i].y) continue

                //Highscore
                if (this.points > this.best) {
                    this.best = this.points
                    DB.set('snake.best', this.best)

                    //Highscore!
                    createSnackbar('🕹️ Highscore!', true)
                    
                    //UI
                    document.getElementById('snakeInfoBest').innerText = this.best
                }

                //Die
                this.dead = true
                document.getElementById('snakeInfoState').innerText = lan.snake.death
            }
        })
    }

    draw() {
        //Dead -> Don't draw
        if (this.dead) return
        
        //Clear canvas
        this.context.clearRect(0, 0, this.size.x, this.size.y)
        
        //Draw apple
        this.drawBox(this.apple, '#eb3734')

        //Draw snake one cell at a time
        this.snake.cells.forEach(cell => {
            //Drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
            this.drawBox(cell, '#34eb5b')
        })

        //Request next frame
        this.animationFrame = requestAnimationFrame(() => { this.draw() })
    }

    //State
    resume() {
        //Pause just in case
        this.pause()

        //Resume
        this.animationFrame = requestAnimationFrame(() => { this.draw() })
        this.updateInterval = setInterval(() => { this.update() }, this.delta)
    }

    pause() {
        //Pause
        cancelAnimationFrame(this.animationFrame)
        clearInterval(this.updateInterval)
    }

    stop() {
        this.dead = true
        this.pause()
    }

    restart() {
        //Reset game info
        this.inputQueue = []
        this.dead = false
        this.points = 0
        this.snake.pos = new Vec2(150)
        this.snake.dir = new Vec2(1, 0)
        this.snake.cells = []
        this.snake.length = 4
        this.apple = this.getRandomPoint()

        //UI
        document.getElementById('snakeInfoPoints').innerText = this.points
        document.getElementById('snakeInfoBest').innerText = this.best
        document.getElementById('snakeInfoState').innerText = ''

        //Start drawing
        this.resume()
    }

    //Helpers
    drawBox(pos, color) {
        this.context.fillStyle = color
        this.context.fillRect(pos.x, pos.y, this.grid - 1, this.grid - 1)
    }
    
    getRandomPoint() {
        return new Vec2(
            Util.getRandomInt(0, this.size.x / this.grid - 1) * this.grid, 
            Util.getRandomInt(0, this.size.y / this.grid - 1) * this.grid
        )
    }

    keyPress(key) {
        this.inputQueue.unshift(key)
    }

}

const snake = {
    //Easteregg
    enabled: DB.get('snake', false, DB.BOOLEAN), 
    enable() {
        snake.enabled = true
        DB.set('snake', true)
        snakeSidebarButton.removeAttribute('hidden')
    },
    disable() {
        snake.enabled = false
        DB.set('snake', false)
        snakeSidebarButton.setAttribute('hidden', '')
        snake.onInputAFK()
    },

    //Game
    game: new Snake(document.getElementById('snakeCanvas')),

    //Toggle easteregg (code)
    codes: [
        ['s','n','a','k','e'],
        ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'],
    ],
    codesNextIndex: 0,
    onCodeKey(key) {
        //Get next index
        const index = snake.codesNextIndex

        //States of key validity
        const INVALID = 0
        const VALID = 1
        const FINISHED = 2

        //Check if key is valid
        let state = INVALID
        for (const code of snake.codes) {
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
                snake.codesNextIndex = 0
                break
            case VALID:
                //Valid -> Add key to current combination   
                snake.codesNextIndex++
                break
            case FINISHED:
                //Finished -> Reset next index & open snake
                snake.codesNextIndex = 0
                toggleSnakeMenu()
                break
        }
    },

    //Toggle easteregg (AFK timer)
    afkDuration: 25000, //25 seconds
    afkTimer: undefined,
    onAFK() {
        //Already enabled or message/menu is open
        if (snake.enabled || snakeMessageAFK.hasAttribute('open') || snakeMenu.open) return

        //Show popup
        snakeMessageAFK.setAttribute('open', '')
    },
    onInputAFK() {
        //Clear popup timer & start counting again if easteregg not enabled
        clearTimeout(snake.afkTimer)
        if (!snake.enabled) snake.afkTimer = setTimeout(snake.onAFK, snake.afkDuration)
    },
}

//Toggle easteregg
window.addEventListener('blur', () => { clearTimeout(snake.afkTimer) })

window.addEventListener('focus', () => { snake.onInputAFK() })

if (snake.enabled) 
    //Enabled -> Show sidebar button
    snakeSidebarButton.removeAttribute('hidden') 
else 
    //Disabled -> Start counting for AKF message
    snake.onInputAFK()

//Input (game & toggle easteregg)
window.addEventListener('keydown', event => {
    //AFK check
    snake.onInputAFK()

    //Get pressed key
    const key = event.key.toLowerCase()

    //Check if game is open
    if (snakeMenu.open) {
        //Open -> Add key to input queue & check later on game loop
        snake.game.keyPress(key)
    } else {
        //Closed -> Check input to toggle easteregg by code
        snake.onCodeKey(key)
    }
})

window.addEventListener('scroll', event => {
    //AFK check
    snake.onInputAFK()
})

//Snake menu
function toggleSnakeMenu() {
    //Toggle menu
    if (snakeMenu.open) {
        //Close
        snakeMenu.close()
        document.body.removeAttribute('noscroll')
        
        //Stop game
        snake.game.stop()
    } else {
        //Open
        snakeMenu.showModal()
        document.body.setAttribute('noscroll', '')

        //Mark easteregg as enabled
        snake.enable()

        //Start game
        snake.game.restart()
    }

    //Close sidebar
    toggleSidebar(false)
}

Util.onDialogBackdropClick(snakeMenu, toggleSnakeMenu)



 /*$   /$$                                  
| $$  | $$                                  
| $$  | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$ 
| $$$$$$$$ /$$__  $$| $$_  $$_  $$ /$$__  $$
| $$__  $$| $$  \ $$| $$ \ $$ \ $$| $$$$$$$$
| $$  | $$| $$  | $$| $$ | $$ | $$| $$_____/
| $$  | $$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
|__/  |__/ \______/ |__/ |__/ |__/ \______*/

//Background particles
homeParticles = new ParticlesAnimation('homeCanvas')
homeParticles.changeColor(`color-mix(in srgb, transparent 50%, ${window.getComputedStyle(document.body).getPropertyValue('--text')})`)

//Text animation
class HomeText {

    //Variables
    timer
    baseL = ''
    baseR = ''
    role = ''
    text = ''
    censorIds = []
    roleId = -1

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

    reset() {
        //Stop timer
        clearTimeout(this.timer)

        //Get base parts
        const parts = lan.home.text3.split('###')
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

    updateText() {
        document.getElementById('homeText3').innerText = this.baseL + this.text + this.baseR
    }

    selectNextRole() {
        //Get next id
        this.roleId++;
        if (this.roleId >= lan.home.roles.length) this.roleId = 0

        //Update role
        this.role = lan.home.roles[this.roleId]

        //Reset ids list
        this.resetCensorIdx()
    }

    resetCensorIdx() {
        this.censorIds = []
        for (let i = 0; i < this.role.length; i++) this.censorIds.push(i)
    }

    getCharacter() {
        return Util.randomArray(['#', '$', '€', '%', '&', '?', '!', '@', '^', '-', '~', '>', '<'])
    }

    waitNext(duration, newState) {
        if (newState) this.state = newState
        this.timer = setTimeout(() => { this.next() }, duration)
    }

    next() {
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
                    this.resetCensorIdx()
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

homeText = new HomeText()



  /*$$$$$  /$$                             /$$    
 /$$__  $$| $$                            | $$    
| $$  \ $$| $$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$  
| $$$$$$$$| $$__  $$ /$$__  $$| $$  | $$|_  $$_/  
| $$__  $$| $$  \ $$| $$  \ $$| $$  | $$  | $$    
| $$  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$
| $$  | $$| $$$$$$$/|  $$$$$$/|  $$$$$$/  |  $$$$/
|__/  |__/|_______/  \______/  \______/    \__*/  

//Animate
animator.animate(document.getElementById('about'))

//About elements
const aboutImg = document.getElementById('aboutImg')
const aboutImgName = document.getElementById('aboutImgName')

//About image loading
aboutImg.onload = () => {
    //Update text
    aboutImgName.innerText = lan.about.names[about.order[about.index]]

    //Loading
    if (about.loading) {
        //Stop animation
        aboutImg.removeAttribute("loading")

        //Artyom (last image) -> Give achievement
        if (about.index == about.imgs.length - 1) giveAchievement(Achievements.artyom)

        //Finish
        setTimeout(() => { about.loading = false }, 400)
    }
}

about.next = () => {
    //Is loading
    if (about.loading) return
    about.loading = true

    //Hide click me text
    if (about.index >= 0) aboutImg.setAttribute("clicked", "")

    //Get next image index
    let nextIndex = about.index + 1
    if (nextIndex >= about.imgs.length) nextIndex = 0

    //Load animation
    aboutImg.setAttribute("loading", "")
    setTimeout(() => {
        //Update
        about.index = nextIndex
        aboutImg.src = about.imgs[about.order[about.index]]
    }, 400)
}

about.next()



  /*$$$$$  /$$       /$$ /$$ /$$          
 /$$__  $$| $$      |__/| $$| $$          
| $$  \__/| $$   /$$ /$$| $$| $$  /$$$$$$$
|  $$$$$$ | $$  /$$/| $$| $$| $$ /$$_____/
 \____  $$| $$$$$$/ | $$| $$| $$|  $$$$$$ 
 /$$  \ $$| $$_  $$ | $$| $$| $$ \____  $$
|  $$$$$$/| $$ \  $$| $$| $$| $$ /$$$$$$$/
 \______/ |__/  \__/|__/|__/|__/|______*/ 
 
class Skills {

    constructor(skills) {
        //Add observer to update skill bars
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue
                entry.target.style.width = `var(--${entry.target.id})`
                observer.unobserve(entry.target)
            }
        }, {
            threshold: 0
        });

        //Assign observer to skill bars
        for (const id of skills) observer.observe(document.getElementById(id));
    }

}

new Skills(['skills1', 'skills2', 'skills3', 'skills4', 'skills5', 'skills6'])



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

//Manage projects
function addProjects(category, filter, sort) {
    //Fix options
    if (typeof category !== 'string') category = projects.category
    if (typeof filter !== 'string') filter = projects.filter
    if (typeof sort !== 'string') sort = projects.sort

    //Check if is refresh & save filters if not refreshing
    const isRefresh = (projects.category == category) && (projects.filter == filter) && (projects.sort == sort) && (projects.loaded)
    if (!isRefresh) {
        projects.category = category
        projects.filter = filter
        projects.sort = sort
    }

    //Update category, filter & sorting names
    document.getElementById('projectsCategoryBy').innerText = projects.getCategoryName(category)
    document.getElementById('projectsFilterBy').innerText = projects.getTagName(filter)
    document.getElementById('projectsSortBy').innerText = projects.getSortName(sort)

    //Copy projects list
    projects.filteredList = []
    projects.list.forEach(project => projects.filteredList.push(project))

    //Remove projects of different categories
    if (category != Category.all) {
        for (let i = projects.filteredList.length - 1; i >= 0; i--) {
            const project = projects.filteredList[i]
            if (project.category == category) continue
            projects.filteredList.splice(i, 1)
        }
    }

    //Filter projects
    if (filter != Tag.all) {
        for (let i = projects.filteredList.length - 1; i >= 0; i--) {
            const project = projects.filteredList[i]
            if (project.tags.includes(filter)) continue
            projects.filteredList.splice(i, 1)
        }
    }

    //Sort list (by date)
    switch (sort) {
        case Sort.date:
            projects.filteredList.sort((a, b) => Math.max(b.dateStart, b.dateEnd) - Math.max(a.dateStart, a.dateEnd))
            break
        case Sort.favs:
            projects.filteredList.sort((a, b) => b.favPoints - a.favPoints)
            break
    }

    //Scroll to projects if not refresh (changed some filter)
    if (!isRefresh && projects.loaded) goTo('projects')

    //Get options before emptying projects.created
    const animate = (!isRefresh) && (projects.created == 0)
    const length = (isRefresh ? Math.max(projects.created, 4) : 4)

    //Clear
    clearProjects()

    //Add projects
    for (let i = 0; i < length; i++) addProject(animate, filter)

    //No projects -> Show no projects text
    if (projects.created == 0) document.getElementById('projectsList').innerHTML += `<div class="projectsNone"><div>🥲</div><div>${lan.projects.none}</div></div>`

    //Mark as loaded
    projects.loaded = true
}

function addProject(animate) {
    //Fix animate bool
    if (typeof animate != 'boolean') animate = true

    //No more space
    if (projects.created >= projects.filteredList.length) return

    //Get basic info
    const id = `project${projects.created}`
    const project = projects.filteredList[projects.created]
    const locales = lan.projects.projects[project.key]

    //Get scope
    let scope = ''
    if (Array.isArray(project.scope)) {
        for (let i = 0; i < project.scope.length; i++) {
            const element = project.scope[i]
            scope += (i != 0 ? '<br>' : '') + lan.projects.scope[element]
        }
    }

    //Get tags
    let tags = ''
    if (Array.isArray(project.tags)) project.tags.forEach(tag => tags += `<span class="projectTag" onclick="addProjects(null, '${tag}', null)">${projects.getTagName(tag)}</span>`)

    //Get date
    const dateStart = project.dateStart
    const dateEnd = project.dateEnd == Infinity ? lan.projects.date.present : project.dateEnd

    //Get buttons
    let buttons = ''
    const button = project.button
    if (Array.isArray(button)) {
        for (let i = 0; i < button.length; i++) {
            const buttonText = locales['b' + (i + 1)]
            buttons += `<a id="${id}B${i}" class="button" small target="_blank" href="${button[i]}" onmousedown="onProjectOpened()">${buttonText ? buttonText : locales.tit}</a>`
        }
    }

    //Video button (youtube link key)
    const vid = project.vid

    //Create project HTML base
    const element = document.createElement('div')
    element.id = id
    element.classList.add('project')

    //Animation & reverse
    if (animate) element.classList.add('appear')
    if (projects.created % 2 != 0) element.setAttribute('reverse', '')

    //Add project HTML content
    element.innerHTML = `
        <!-- Media (image, video & scope) -->
        <div id="${id}-media" class="projectMedia" ${typeof vid === 'string' ? 'hasvideo' : ''}>
            <!-- Scope -->
            <span class="projectScope glass" ${scope != '' ? '' : 'hidden'}>${scope}</span>
            <!-- Actions -->
            <div class="projectActions">
                <!-- Video button -->
                <div class="glass projectActionButton projectVideoButton" onclick="toggleVideo(${projects.created}, 'https://www.youtube.com/embed/${vid}')">
                    <img src="Data/Images/Icons/play.webp">
                    <span>${locales.vid}</span>
                </div>
                <!-- Fullscreen button -->
                <div class="glass projectActionButton" hidevideo onclick="fullscreenImage('Data/Images/Projects/${project.key}.webp')">
                    <img src="Data/Images/Icons/maximize.webp">
                </div>
            </div>
            <!-- Image -->
            <img src="Data/Images/Projects/${project.key}.webp">
            <!-- Video -->
            <iframe id="${id}-video" allow="fullscreen"></iframe>
        </div>
        <!-- Info (tags, title, description & buttons) -->
        <div class="projectInfo">
            <!-- Tags -->
            <div class="projectTags">${tags}</div>
            <!-- Title & description -->
            <div class="glass projectInfoContent">
                <div>
                    <span>${locales.tit}</span>
                    <span class="projectDate">${dateStart == dateEnd ? dateEnd : dateStart + ' - ' + dateEnd}</span>
                </div>
                <span>${locales.con}</span>
            </div>
            <!-- Buttons -->
            <div class="projectButtons">${buttons}</div>
        </div>`
    document.getElementById('projectsList').appendChild(element)

    //Animate
    if (animate) animator.animate(element)

    //Done
    projects.created++

    //Update load more button
    document.getElementById('projectsMore').style.visibility = projects.created >= projects.filteredList.length ? 'hidden' : 'visible'
}

function clearProjects() {
    //Clear projects
    projects.created = 0
    document.getElementById('projectsList').innerHTML = ''
    document.getElementById('projectsMore').style.display = (projects.created >= projects.filteredList.length) ? 'none' : 'flex'
}

function refreshProjects() {
    //Add projects with current info
    addProjects(projects.category, projects.filter, projects.sort)
}

//Actions (fullscreen pic & toggle video)
function fullscreenImage(url) {
    const popup = document.getElementById('projectsFullscreen')
    const image = document.getElementById('projectsFullscreenImage')

    if (typeof url === 'string') {
        //Show
        document.body.setAttribute('noscroll', '')
        popup.setAttribute('show', '')
        image.src = url;
    } else {
        //Hide
        document.body.removeAttribute('noscroll')
        popup.removeAttribute('show')
    }
}

function toggleVideo(number, url) {
    //Get elements
    const media = document.getElementById(`project${number}-media`)
    const video = document.getElementById(`project${number}-video`)

    //Toggle video
    if (media.getAttribute('video') != null) {
        media.removeAttribute('video')
        video.src = ''
    } else {
        media.setAttribute('video', '')
        video.src = url
    }
}

function onProjectOpened() {
    addFocusListener(() => {
        giveAchievement(Achievements.project)
        return true
    })
}

//Filters menu
const filterMenu = document.getElementById('filterMenu')
const filterMenuTitle = document.getElementById('filterMenuTitle')

function toggleFiltersMenu(type) {
    //Get elements
    const list = document.getElementById('filterMenuTags')

    //Close menu if open
    if (filterMenu.open) {
        filterMenu.close()
        document.body.removeAttribute('noscroll')
        return
    }

    //Clear list
    list.innerHTML = ''

    //Execute menu logic
    switch (type) {
        //Category
        case 'category': {
            //Change menu title
            filterMenuTitle.innerText = lan.projects.category.title

            //Get categories
            const tags = []
            for (const key of Object.keys(Category)) tags.push(Category[key]);

            //Add categories
            tags.forEach(tag => list.innerHTML += `<span class="projectTag" onclick="addProjects('${tag}', null, null); toggleFiltersMenu();">${projects.getCategoryName(tag)}</span>`)
            break
        }

        //Sort
        case 'sort': {
            //Change menu title
            filterMenuTitle.innerText = lan.projects.sort.title

            //Get sort options
            const tags = []
            for (const key of Object.keys(Sort)) tags.push(Sort[key]);
            
            //Add categories
            tags.forEach(tag => list.innerHTML += `<span class="projectTag" onclick="addProjects(null, null, '${tag}'); toggleFiltersMenu();">${projects.getSortName(tag)}</span>`)
            break
        }

        //Tags
        default: {
            //Change menu title
            filterMenuTitle.innerText = lan.projects.tags.title

            //Get tags (only the ones used in projects)
            const usedTags = []
            for (const project of projects.list) {
                for (const tag of project.tags) {
                    if (usedTags.includes(tag)) continue
                    usedTags.push(tag)
                }
            }

            //Get tags (ordered and with all first)
            const tags = [Tag.all]
            for (const key of Object.keys(Tag)) {
                const tag = Tag[key]
                if (!usedTags.includes(tag)) continue
                tags.push(tag)
            }
            

            //Add tags
            tags.forEach(tag => list.innerHTML += `<span class="projectTag" onclick="addProjects(null, '${tag}', null); toggleFiltersMenu();">${projects.getTagName(tag)}</span>`)
            break
        }
    }

    //Open
    filterMenu.showModal()
    document.body.setAttribute('noscroll', '')
}

Util.onDialogBackdropClick(filterMenu, toggleFiltersMenu)

//Toggle sort mode
function toggleSortMode() {
    addProjects(null, null, (projects.sort == '' ? 'date' : ''))
}


 /*$$$$$$$                    /$$                        
| $$_____/                   | $$                        
| $$     /$$$$$$   /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$ 
| $$$$$ /$$__  $$ /$$__  $$|_  $$_/   /$$__  $$ /$$__  $$
| $$__/| $$  \ $$| $$  \ $$  | $$    | $$$$$$$$| $$  \__/
| $$   | $$  | $$| $$  | $$  | $$ /$$| $$_____/| $$      
| $$   |  $$$$$$/|  $$$$$$/  |  $$$$/|  $$$$$$$| $$      
|__/    \______/  \______/    \___/   \_______/|_*/      

//Contact
function copyMail() {
    createSnackbar(lan.footer.mail, false)
    navigator.clipboard.writeText('alex.paniagua.moreno@gmail.com')
}

function onContactOpened() {
    addFocusListener(() => {
        giveAchievement(Achievements.contact)
        return true
    })
}

//Quotes
(() => {
    const quote = [
        'War, war never changes',
        'Truth is, the game was rigged grom the start',
        'OPA! Artyom!',
        'See you in the major leagues, Jack',
        "There's a monster inside all of us",
        "Keep it cool, that's how you survive",
        'Oh my stars she is just so handsome',
        "Oh, it's you. It's been a looong time",
        'Your brother needs you',
        "I can't believe we did that!",
        "It's only been a week, but it feels like a year",
        'No matter what, you keep finding something to fight for',
        'The body is naught but a vessel for the soul',
        "I'm always succeeding, even when I'm not",
        'Link, this is a huge discovery!',
        'Any adventure you can fly away from'
    ]
    const from = [
        'Fallout',
        'Fallout NV',
        'Metro Exodus',
        'Cyberpunk 2077',
        'Arcane',
        'Valorant',
        'The Outer Worlds',
        'Portal 2',
        'Ruiner',
        'Celeste',
        'Katana Zero',
        'The Last of Us',
        'Ghostwire: Tokyo',
        'Deathloop',
        'Zelda: Tears of the Kingdom',
        'Starfield'
    ]
    const q = Math.floor(Math.random() * quote.length)
    document.getElementById('footerQuoteText').innerText = quote[q]
    document.getElementById('footerQuoteFrom').innerText = from[q]
})();



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

//Load animation
(() => {
    document.body.setAttribute('noscroll', '')

    const loading = document.getElementById('loading')
    const loadingBar = document.getElementById('loadingBar')
    const loadingProgress = document.getElementById('loadingProgress')

    let progress = 0

    const waitNext = () => {
        setTimeout(() => { nextProgress() }, 10)
    }

    const nextProgress = () => {
        //Next percent
        progress = Math.min(100, progress + Math.floor(Math.random() * 2) + 1)
        loadingBar.style.setProperty('--fill', `${progress}%`)
        loadingProgress.innerText = `${progress}%`

        //Check if finished
        if (progress >= 100) {
            //Loaded -> Hide loading page, enable scroll & reset home typing animation
            loading.setAttribute('loaded', '')
            document.body.removeAttribute('noscroll')
            homeText.reset()
        } else {
            //Didn't finish -> Next progress
            waitNext()
        }
    }

    nextProgress()
})();
