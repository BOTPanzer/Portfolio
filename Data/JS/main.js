 /*$      /$$           /$$
| $$$    /$$$          |__/
| $$$$  /$$$$  /$$$$$$  /$$ /$$$$$$$
| $$ $$/$$ $$ |____  $$| $$| $$__  $$
| $$  $$$| $$  /$$$$$$$| $$| $$  \ $$
| $$\  $ | $$ /$$__  $$| $$| $$  | $$
| $$ \/  | $$|  $$$$$$$| $$| $$  | $$
|__/     |__/ \_______/|__/|__/  |_*/

//Localization keys
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
            curriculum: 'Resume',
            localization: 'English',
            theme: 'Theme',
            achievements: 'Achievements',
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
            desc1: "Howdy! My name is Alejandro, but you call me Alex. I'm a ###-year-old Spanish developer who likes spending time playing and developing games.",
            desc2: "I started making games in 2015, at the age of 11, and took a break to learn app & web development in 2019. I've been doing all of them since 2022, but making games is what I enjoy the most.",
            desc3: "I'm a well-organized, independent and really perfectionist person who loves giving things his own touch. Some of my interests are playing, programming, graphic design and photography.",
            contact: 'Get in touch!',
            next: 'Click me to see my photos!',
            names: [
                'Me',
                'Me',
                'Me & Judy',
                'Almuñécar',
                'Amsterdam',
                'Canary Islands',
                'Sleeping Cat',
                'River Flower',
                'Mallorca',
                'Otivar',
                'Artyom'
            ]
        },
        //Skills
        skills: {
            title: 'My Skills',
            desc: "I've been interested in the world of technology since I was little and, thanks to that, I've learnt a large number of skills related to different topics.",
            years: '+ years',
            game: 'Game Development',
            app: 'App Development',
            web: 'Web Development',
            design: 'Graphic Design',
            ui: 'UI/UX Design',
            '3d': '3D Modeling/Printing &  CAD',
            note: {
                title: 'Note:',
                text: '2+ skills can be learnt at the same time.',
            }
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
                design: 'Graphic Design',
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
                tochimochi: {
                    tit: 'Tochimochi',
                    con: `
                        Second place in the international edition of the <a href="https://itch.io/jam/game-jam-internacional-cutn-buenos-aires" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Tochimochi you will help your new virtual friend, Mochi, complete the mission of seeing his granny. To do that, you will have to merge both the real and virtual world to complete puzzles using your computer and your phone.
                    `,
                    b1: 'Download&nbsp<i>Tochimochi</i>',
                    vid: 'Gameplay Video'
                },
                akira_posters: {
                    tit: "Akira Posters",
                    con: `Some posters I made after watching Akira, one of the most influential pieces of art in the cyberpunk genre. Left poster is of Kaneda, right one is of Kei.`,
                    b1: "See posters"
                },
                artist_posters: {
                    tit: "Artist Posters",
                    con: "Some posters I made from artists I listen to. There is a total of 13 posters, some of them of repeated artists.",
                    b1: "See posters"
                },
                map_pinner: {
                    tit: "Map Pinner",
                    con: `
                        Map Pinner is a free web tool designed to help you plan and organize your trips.
                        <br><br>
                        With Map Pinner you can easily select a map image, place pins on your map & customize each one with custom colors, categories, names, links, and descriptions.
                    `,
                    b1: "Try&nbsp<i>Map Pinner</i>",
                },
                hardcore_kitty: {
                    tit: "Hardcore Kitty",
                    con: `
                        Third place in the 6º edition of the <a href="https://itch.io/jam/6-edicin-game-jam-game-scholars" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Hardcore Kitty, you play as a cat working for a delivery company.
                        <br><br>
                        Your goal is to find pickup points, collect food, and deliver it to the drop-off points, performing tricks and flips on your skateboard along the way.
                    `,
                    b1: "Download&nbsp<i>Hardcore Kitty</i>",
                    vid: 'Gameplay Video'
                },
                stealer: {
                    tit: "Turbo Stealer",
                    con: `
                        For educational purposes only, Turbo Stealer is a command line application programmed in python that is able to steal information from the computer running it.
                        <br><br>
                        Currently, it is capable of stealing emails, usernames and passwords from saved credentials in browsers.
                    `,
                    b1: "Download&nbsp<i>Turbo Stealer</i>",
                },
                stardew_pets: {
                    tit: "Stardew Pets",
                    con: `
                        Stardew Pets is a VS Code extension with +16K downloads that lets you have Stardew Valley pets accompanying you while you code.
                        <br><br>
                        Aditionaly, you can decorate your pets place with money obtained by protecting them from enemies that may appear.
                    `,
                    b1: "Install&nbsp<i>Stardew Pets</i>",
                },
                spyw4re: {
                    tit: "Spyw4re",
                    con: `
                        Second place out of 25 in the 5º edition of the <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Spyw4re, you are a CCTV operator in an asylum. The building is falling down and a patient is still inside, so you'll need to help him get out.
                        <br><br>
                        In order to leave, you'll need to solve some puzzles and defeat some enemies, but don't think it will be that easy, someone doesn't want you to help him...
                    `,
                    b1: "Download&nbsp<i>Spyw4re</i>",
                    vid: 'Gameplay Video'
                },
                hackoon: {
                    tit: "Hackoon",
                    con: `
                        Hackoon is an in development puzzle game about a game developer raccoon that needs to fix his game before release.
                        <br><br>
                        In order to achieve this, he will go inside of his own game. There, with the help of a little robot, you will be able to modify the code that controls the objects of each level to complete ingenious puzzles.
                    `,
                    b1: "Follow the development!"
                },
                hightime: {
                    tit: "High on Time",
                    con: `
                        Developed for the 4º edition of the <a href="https://itch.io/jam/gamescholars-4-edition" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        High on Time is a frenetic shooter in which, thanks to a drug, you are capable of controlling time at the cost of your life.
                        <br><br>
                        You will have to survive 3 waves of enemies with different weapons to complete the game, sliding and slowing time at your will in a building in construction.
                        <br><br>
                        Optionaly, an endless mode with infinite waves is also available.
                    `,
                    b1: "Download&nbsp<i>High on Time</i>",
                    vid: 'Gameplay Video'
                },
                fresquita: {
                    tit: "The lost Fresquita",
                    con: `
                        One of the awarded games of the <a href="https://itch.io/jam/la-illojam" target="_blank">IlloJam</a>, a gamejam organized for <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>.
                        <br><br>
                        In The lost Fresquita you will play the role of Juan in a day at night. 
                        You celebrated a party in the forest the previous day and forgot some beers there but, since that's irresponsible, you came back for them. 
                        <br><br>
                        Your mission will be to find the 3 forgotten beers and take them back home safe and sound. 
                        What do I mean by safe? 
                        Lets say some of your friends wont make it easy...
                    `,
                    b1: "Download&nbsp<i>The lost Fresquita</i>",
                    vid: 'IlloJuan Playing on Stream'
                },
                raccoon: {
                    tit: "Esto AÚN no es un Juego",
                    con: `
                        Winner of the 3º edition of the <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Esto AÚN no es un juego you will help a programer raccoon finish his game before his gamejam ends.
                        <br><br>
                        Due to the little time he has left, to achieve this you will have to go inside the game and fix bugs from there.
                        <br><br>
                        Your mission will be to change how things work, so that you are able to get to each level's ending and continue to the next.
                    `,
                    b1: "Download&nbsp<i>Esto AÚN no es un Juego</i>",
                    vid: 'Gameplay Video'
                },
                lmdshow: {
                    tit: "Escape From LMDShow",
                    con: `
                        Thank you <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a> for playing!
                        <br><br>
                        Escape from LMDShow is a escape room like game in which Juan Alberto, a really cool guy, is kidnapped by LMDShow and attempts to escape the house he was locked in.
                        <br><br>
                        To escape you will have to solve different puzzles with objects and codes that you will find exploring the rooms.
                    `,
                    b1: "Download&nbsp<i>Escape From LMDShow</i>",
                    vid: 'IlloJuan Playing on Stream'
                },
                memory_shift: {
                    tit: "Memory Shift",
                    con: `
                        Memory Shift is a 2D action-platformer featuring fast-paced gameplay and a hacking system.
                        <br><br>
                        Inspired by games like Katana ZERO and Cyberpunk 2077, run, kill, hack, slide and discover what happened to you before losing your memories.
                        <br><br>
                        Enjoy a story driven adventure with handcrafted levels and mechanics such as throwing items or exploding enemies from afar.
                    `,
                    b1: "Download&nbsp<i>Memory Shift</i>"
                },
                spirits: {
                    tit: "Twin Spirits",
                    con: `
                        Finalist in the 2º edition of the <a href="https://itch.io/jam/gamescholars-2nd-edition" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        Twin Spirits is an indie local coop game in which two spirits go on an adventure in search of a scepter capable of bringing them back to life.  
                        <br><br>
                        On the way you will find puzzles in which you will have to cooperate in order to continue.
                    `,
                    b1: "Download&nbsp<i>Twin Spirits</i>",
                    vid: 'Trailer Video'
                },
                papa: {
                    tit: "Cooking Papa",
                    con: `
                        Cooking Papa is an indie game where you will have to prepare recipes with ingredients you don't have.
                        <br><br>
                        The game goes against the clock and you will have to check the cooking book to replace the ingredients that are missing.
                    `,
                    b1: "Download&nbsp<i>Cooking Papa</i>"
                },
                vaporcade: {
                    tit: "Vaporcade",
                    con: `
                        Vaporcade is a vaporwave themed arcade indie game in which you control a spaceship and score points by shooting. 
                        <br><br>
                        Vaporcade is divided by waves. In each wave you'll find new enemies and, every two waves, a boss you will have to defeat.
                    `,
                    b1: "Download&nbsp<i>Vaporcade</i>"
                },
                otters: {
                    tit: "Otter's Odyssey",
                    con: `
                        Otter's Odyssey was presented to the 2022 URJC GameJam with a medieval theme and received an honorific mention to the best 3D esthetic.
                        <br><br>
                        It is an isometric role playing game in which you control an otter that goes into an adventure to save its brother.
                    `,
                    b1: "Download&nbsp<i>Otter's Odyssey</i>"
                },
                assistant_pc: {
                    tit: 'Oriøn Assistant (Windows)',
                    con: `
                        Oriøn Assistant for Windows is an app launcher with support for custom themes and HTML/JS apps called modules.
                        <br><br>
                        I like to carry my apps on a USB but plugging drives in different computers changes their letter and shortcuts break, so I had to come up with a solution.
                        The first iteration of the assistant was a command line app that replaced path letters with "?:\\", which would use the drive it was installed on.
                        <br><br>
                        After that I wanted to go further with a UI, so I started a new version called Oriøn Launcher using Electron.js. 
                        Some updates later I renamed it to Oriøn Assistant to match the Android app and added compatibility between them.
                    `,
                    b1: 'Oriøn Assistant',
                    b2: 'Batch Launcher'
                },
                assistant_android: {
                    tit: 'Oriøn Assistant (Android)',
                    con: `
                        Oriøn Assistant for Android is an app full of useful smaller apps such as a music player or a QR scanner.
                        <br><br>
                        At first, the idea started as a simple web browser that detected commands and helped with gaming tasks.
                        After forgetting it for some time, I decided to rename it and give it a modern design with Android Studio. 
                        At the moment it has music and video players, a photo vault, notes, a QR scanner and an app to send data to the Windows version of the app.
                    `,
                    b1: 'Download APK'
                },
                framework: {
                    tit: 'Oriøn Framework',
                    con: `
                        Oriøn Framework is an HTML, CSS & JS based framework made with personalization in mind. 
                        This project got separated from the PC version of Oriøn Assistant in an attempt to make it available for everyone.
                        <br><br>
                        Here you can find new simple and easy to use HTML elements like buttons, inputs, switches, checkboxes, radio buttons and various loading animations and effects.
                    `,
                    b1: 'See documentation'
                },
                discord_bots: {
                    tit: 'Discord Bots',
                    con: `
                        I've created two discord bots. The first one, Syrup, is a simple bot capable of moderating a server and providing simple games for people to enjoy.
                        <br><br>
                        After Syrup came Coscu, a more advanced bot capable of the same and more. This new version could jump into a call with people and play custom sounds and music.
                    `,
                    b1: 'Syrup Repository'
                },
                modding: {
                    tit: 'PC Modding',
                    con: `
                        Ever since I got into the PC world I started to get interested in modding, so I decided to make my own modded PC.
                        <br><br>
                        I began by extracting 3D models from some of my favorite games since I couldn't find them online.
                        I printed a deathclaw figure and made a large rock model to place inside the case.
                        Then I continued sketching the exterior pieces, which are Cyberpunk 2077 inspired, to later 3D model and print them.
                        <br><br>
                        After printing them, I painted and placed them on my PC.
                    `
                },
                t45: {
                    tit: 'T45 Helmet',
                    con: `
                        Fallout is one of my favorite videogame series and, in its universe, people use technologically advanced full-body suits called power armors.
                        <br><br>
                        As I found a helmet 3D model I decided to print it in small pieces to make my own. 
                        After gluing all the parts, I painted it and added a vacuum cleaner tube in order to make it look a bit more realistic.
                    `
                },
                usb: {
                    tit: 'GTX USB',
                    con: `
                        Carrying apps and games on a USB isn't a bad idea, but the memory's speed can cause problems.
                        To fix this I had the idea of adding a cooler, so I started designing a case which ended up having the shape of an Nvidia GTX graphics card.
                        <br><br>
                        After adding the holes for the ventilation, I printed the case and placed a small fan that gets powered from a little connector on the side.
                        Finally, I put a thermal pad and an aluminium plate, which was later painted, to dissipate heat from the memory.
                    `
                },
                hoodie: {
                    tit: 'Futuristic Hoodie',
                    con: `
                        One day I came across a streetwear hoodie, a new style of clothing I had never seen, and I got inspired to create my own.
                        It isn't exactly streetwear but it's indeed a futuristic hoodie design.
                        I started by sketching some designs in my notebook which were then digitalized using Adobe Illustrator.
                        Then I made a preview in Photoshop of how the hoodie would look like if it was real.
                    `
                },
            },
            none: 'No projects where found...<br>Try changing the selected filters.',
            more: 'Show more projects!',
        },
        //Footer
        footer: {
            contact: {
                title: 'Contact',
                mail: 'Email copied to clipboard',
            },
            credits: `This page was handmade with love by a human (✿◡‿◡)<br>AI must help, not replace (︶^︶)`,
        },
        //Curriculum
        curriculum: {
            title: 'Resume',
        },
        //Snake
        snake: {
            points: 'Points: ',
            restart: 'Restart',
            death: 'You died!',
            afk: 'Seems a bit quiet here...<br>Wanna play a game?',
        },
        //Achievements
        achievements: {
            title: 'Achievements',
            description: 'Find new achievements by interacting with things around the page',
            hidden: 'Hidden',
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
        }
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
            curriculum: 'Curriculum',
            localization: 'Español',
            theme: 'Tema',
            achievements: 'Logros',
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
            desc1: "¡Hey! Me llamo Alejandro, pero me puedes llamar Alex. Soy un desarrollador español de ### años al que le gusta pasar el tiempo jugando y creando juegos.",
            desc2: "Comencé a hacer juegos en 2015, con 11 años, y tomé un descanso para aprender desarrollo de apps & webs en 2019. He estado haciendo todo ello desde 2022, pero hacer juegos es lo que más me entretiene.",
            desc3: "Soy una persona organizada, independiente y muy perfeccionista a la que le encanta dar su propio toque. Algunos de mis intereses son jugar, programar, el diseño gráfico y la fotografia.",
            contact: '¡Ponte en contacto!',
            next: '¡Hazme click para ver mis fotos!',
            names: [
                'Yo',
                'Yo',
                'Yo & Judy',
                'Almuñécar',
                'Amsterdam',
                'Islas Canarias',
                'Gato Durmiendo',
                'Flor en Rio',
                'Mallorca',
                'Otivar',
                'Artyom'
            ]
        },
        //Skills
        skills: {
            title: 'Mis Habilidades',
            desc: "He estado interesado en el mundo de la tecnología desde pequeño y, gracias a eso, he aprendido una gran cantidad de habilidades relacionadas con diferentes temas.",
            years: '+ años',
            game: 'Desarrollo de Videojuegos',
            app: 'Desarrollo de Aplicaciones',
            web: 'Desarrollo Web',
            design: 'Diseño Gráfico',
            ui: 'Diseño de UI/UX',
            '3d': 'Modelado/Impresión 3D & CAD',
            note: {
                title: 'Nota:',
                text: '2+ habilidades se pueden aprender a la vez.',
            }
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
                design: 'Diseño Gráfico',
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
                tochimochi: {
                    tit: 'Tochimochi',
                    con: `
                        Segundo puesto en la edicion international de la <a href="https://itch.io/jam/game-jam-internacional-cutn-buenos-aires" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Tochimochi ayudarás a tu nuevo amigo virtual, Mochi, a completar la misión de ver a su abuela. Para ello, tendrás que combinar el mundo real con el virtual para resolver puzles usando tu ordenador y tu móvil.
                    `,
                    b1: 'Descargar&nbsp<i>Tochimochi</i>',
                    vid: 'Gameplay Video'
                },
                akira_posters: {
                    tit: "Posters de Akira",
                    con: `Algunos posters que hice despues de ver Akira, una de las piezas de arte más influyentes en el genero cyberpunk. El poster izquierdo es de Kaneda, el derecho de Kei.`,
                    b1: "Ver posters"
                },
                artist_posters: {
                    tit: "Posters de Artistas",
                    con: "Algunos posters que hice de artistas que escucho. Hay un total de 13 posters, algunos de ellos de artistas repetidos.",
                    b1: "Ver posters"
                },
                map_pinner: {
                    tit: "Map Pinner",
                    con: `
                        Map Pinner es una herramienta web gratuita diseñada para ayudarte a planificar y organizar tus viajes.
                        <br><br>
                        Con Map Pinner puedes seleccionar una imagen como mapa, colocar pins y personalizar cada una con colores, categorías, nombres, links y descripciones personalizadas.
                    `,
                    b1: "Probar&nbsp<i>Map Pinner</i>"
                },
                hardcore_kitty: {
                    tit: "Hardcore Kitty",
                    con: `
                        Tercer puesto en la 6º edicion de la <a href="https://itch.io/jam/6-edicin-game-jam-game-scholars" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Hardcore Kitty tomarás el rol de un gato que trabaja en una empresa de reparto.
                        <br><br>
                        Tu objetivo es encontrar puntos de recogida, coger la comida y llevarla hasta los puntos de entrega haciendo trucos y piruetas con el skate por el camino.
                    `,
                    b1: "Descargar&nbsp<i>Hardcore Kitty</i>",
                    vid: 'Ver Gameplay'
                },
                stealer: {
                    tit: "Turbo Stealer",
                    con: `
                        Solo por motivos educacionales, Turbo Stealer es una aplicación de línea de comandos programada en Python capaz de robar información del ordenador en que se ejecuta.
                        <br><br>
                        Actualmente, es capaz de robar correos electrónicos, nombres de usuario y contraseñas de credenciales guardadas en los navegadores.
                    `,
                    b1: "Descargar&nbsp<i>Turbo Stealer</i>"
                },
                stardew_pets: {
                    tit: "Stardew Pets",
                    con: `
                        Stardew Pets es una extensión para VS Code con +16K descargas que te permite tener mascotas de Stardew Valley acompañandote mientras programas.
                        <br><br>
                        Además, podrás decorar el lugar de tus mascotas con dinero obtenido al protegerlas de enemigos que aparezcan.
                    `,
                    b1: "Instalar&nbsp<i>Stardew Pets</i>"
                },
                spyw4re: {
                    tit: "Spyw4re",
                    con: `
                        Segundo puesto de 25 en la 5º edicion de la <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Spyw4re, eres un operador de CCTV en un asilo. El edificio se está derrumbando y un paciente todavía está dentro, por lo que tendrás que ayudarlo a salir.
                        <br><br>
                        Para lograrlo, tendrás que resolver algunos acertijos y derrotar a algunos enemigos, pero no creas que será tan fácil, alguien no quiere que lo ayudes...
                    `,
                    b1: "Descargar&nbsp<i>Spyw4re</i>",
                    vid: 'Ver Gameplay'
                },
                hackoon: {
                    tit: "Hackoon",
                    con: `
                        Hackoon es un juego de puzles en desarrollo sobre un mapache desarrollador de videojuegos que necesita arreglar su juego antes de publicarlo.
                        <br><br>
                        Para conseguirlo, tendrá que meterse dentro de su propio juego. Ahí, con la ayuda de un pequeño robot, podrás modificar el codigo que controla los objetos de cada nivel para completar ingeniosos puzles.
                    `,
                    b1: "¡Sigue el desarrollo!"
                },
                hightime: {
                    tit: "High on Time",
                    con: `
                        Desarrollado para la 4º edicion de la <a href="https://itch.io/jam/gamescholars-4-edition" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        High on Time es un shooter frenetico en el que, debido a una droga, eres capaz de controlar el tiempo a costo de tu vida.
                        <br><br>
                        Tendras que sobrevivir a 3 oleadas de enemigos con armas diferentes para completar el juego, deslizandote y realentizando el tiempo a tu antojo en un edificio en construcción.
                        <br><br>
                        Opcionalmente, un modo endless con oleadas infinitas tambien está disponible.
                    `,
                    b1: "Descargar&nbsp<i>High on Time</i>",
                    vid: 'Ver Gameplay'
                },
                fresquita: {
                    tit: "The lost Fresquita",
                    con: `
                        Uno de los juegos premiados de la <a href="https://itch.io/jam/la-illojam" target="_blank">IlloJam</a>, una gamejam organizada para <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>.
                        <br><br>
                        En The lost Fresquita encarnaras el rol de Juan en un día por la noche. 
                        El día anterior celebrasteis una fiesta en el bosque y se te olvidó recoger unas cervezas pero, como eso es irresponsable, has vuelto a por ellas. 
                        <br><br>
                        Tu misión será encontrar las 3 cervezas olvidadas y volver a casa a salvo. 
                        ¿Que a qué me refiero con a salvo? 
                        Digamos que algunos de tus amigos no te harán la vida facil...
                    `,
                    b1: "Descargar&nbsp<i>The lost Fresquita</i>",
                    vid: 'IlloJuan Jugando en Stream'
                },
                raccoon: {
                    tit: "Esto AÚN no es un Juego",
                    con: `
                        Ganador de la 3º edicion de la <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Esto AÚN no es un juego ayudarás a un mapache programador a terminar su juego antes de que acabe su gamejam.
                        <br><br>
                        Debido al poco tiempo que le queda, para conseguirlo tendrás que meterte dentro de este y arreglar los bugs desde su interior.
                        <br><br>
                        Desde allí tu misión será cambiar cómo funcionan las cosas, de manera que se pueda llegar hasta el final de cada nivel y así continuar hasta el siguiente.
                    `,
                    b1: "Descargar&nbsp<i>Esto AÚN no es un Juego</i>",
                    vid: 'Ver Gameplay'
                },
                lmdshow: {
                    tit: "Escape From LMDShow",
                    con: `
                        ¡Gracias por jugar <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>!
                        <br><br>
                        Escape from LMDShow es un juego tipo escape room en el que Juan Alberto, un malagueño mu salao, es secuestrado por LMDShow y trata de escapar de la casa donde ha sido encerrado. 
                        <br><br>
                        Para escapar tendrás que resolver diferentes puzles con objetos y códigos que encontrarás tras explorar las habitaciones.
                    `,
                    b1: "Descargar&nbsp<i>Escape From LMDShow</i>",
                    vid: 'IlloJuan Jugando en Stream'
                },
                memory_shift: {
                    tit: "Memory Shift",
                    con: `
                        Memory Shift es un plataformas de acción 2D con un gameplay rápido y un sistema de hackeo.
                        <br><br>
                        Inspirado por juegos como Katana ZERO y Cyberpunk 2077, corre, mata, hackea, deslízate y descubre qué te ocurrió antes de perder tus recuerdos.
                        <br><br>
                        Disfruta de una aventura con narrativa, niveles hechos a mano y mecánicas como lanzar objetos o explotar enemigos desde la lejanía.
                    `,
                    b1: "Descargar&nbsp<i>Memory Shift</i>"
                },
                spirits: {
                    tit: "Twin Spirits",
                    con: `
                        Finalista en la 2º edicion de la <a href="https://itch.io/jam/gamescholars-2nd-edition" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        Twin Spirits es un juego indie cooperativo local en el que dos espíritus se aventuran en busca de un cetro capaz de hacerles revivir.  
                        <br><br>
                        Por el camino os encontrareis una serie de puzzles en los que tendréis que cooperar para poder continuar.
                    `,
                    b1: "Descargar&nbsp<i>Twin Spirits</i>",
                    vid: 'Ver Trailer'
                },
                papa: {
                    tit: "Cooking Papa",
                    con: `
                        Cooking Papa es un juego indie en el que tendras que preparar recetas con ingredientes que no tienes.  
                        <br><br>
                        Las partidas van a contra reloj y tendrás que consultar el libro de recetas para remplazar los ingredientes que faltan.
                    `,
                    b1: "Descargar&nbsp<i>Cooking Papa</i>"
                },
                vaporcade: {
                    tit: "Vaporcade",
                    con: `
                        Vaporcade es un juego de arcade indie con temática de vaporwave en el que controlas una nave y ganas puntos disparando.  
                        <br><br>
                        Vaporcade esta dividido por oleadas. En cada oleada encontraras nuevos enemigos y, por cada dos oleadas, un jefe al que derrotar.
                    `,
                    b1: "Descargar&nbsp<i>Vaporcade</i>"
                },
                otters: {
                    tit: "Otter's Odyssey",
                    con: `
                        Otter's Odyssey fue presentado como juego para la GameJam de 2022 de la URJC con temática medieval y recibió una mención honorífica a la mejor estética 3D. 
                        <br><br>
                        Es un juego isométrico de rol en el que controlas a una nutria que se adentra en una aventura para rescatar a su hermano.
                    `,
                    b1: "Descargar&nbsp<i>Otter's Odyssey</i>"
                },
                assistant_pc: {
                    tit: 'Oriøn Assistant (Windows)',
                    con: `
                        Oriøn Assistant para Windows es un launcher de apps con soporte para temas y apps HTML/JS custom llamadas módulos.
                        <br><br>
                        Suelo llevar mis apps en un USB pero al conectarlo a diferentes ordenadores la letra cambia y los accesos directos se rompen, por lo que tuve que llegar a una solución.
                        La primera iteración del asistente era una app de comandos que reemplaza la letra de las rutas con "?:\\", lo que usaría el disco donde estaba instalado.
                        <br><br>
                        Tras esto quise ir más allá con una UI, por lo que comencé una nueva versión llamada Oriøn Launcher con Electron.js.
                        Algunas actualizaciones después lo renombré a Oriøn Assistant para que coincidiera con la app de Android y añadí compatibilidad entre ellas.
                    `,
                    b1: 'Asistente Oriøn',
                    b2: 'Launcher Batch'
                },
                assistant_android: {
                    tit: 'Oriøn Assistant (Android)',
                    con: `
                        Oriøn Assistant para Android es una app llena de apps más pequeñas como un reproductor de música o un lector de QR.
                        <br><br>
                        Al principio, la idea comenzó como un buscador web simple que detectába comandos y ayudaba con tareas de juegos.
                        Tras olvidarla por un tiempo, decidí renombrarla y darle un diseño moderno con Android Studio.
                        Actualmente la app tiene reproductores de música y video, un bunquer de fotos, notas, un lector de QR y una app para pasar datos a la versión de Windows de la app.
                    `,
                    b1: 'Descargar APK'
                },
                framework: {
                    tit: 'Framework Oriøn',
                    con: `
                        El framework Oriøn es un framework basado en HTML, CSS & JS hecho con personalización en mente.
                        Este proyecto fue separado de la versión de PC del Asistente Oriøn en un intento de hacerlo disponible para todos.
                        <br><br>
                        Aquí puedes encontrar nuevos elementos HTML simples y fáciles de usar como botones, inputs, interruptores, casillas de verificación, botones de radio y varias animaciones y efectos de carga.
                    `,
                    b1: 'Ver documentación'
                },
                discord_bots: {
                    tit: 'Bots de Discord',
                    con: `
                        He creado dos bots de discord. El primero, Syrup, es un bot simple capaz de moderar un servidor y proveer juegos simples para que la gente se divierta.
                        <br><br>
                        Después de Syrup llegó Coscu, un bot más avanzado capaz de lo mismo y más. Esta nueva versión podría entrar en llamadas con gente y reproducir sonidos personalizados y música.
                    `,
                    b1: 'Repositorio de Syrup'
                },
                modding: {
                    tit: 'PC Modding',
                    con: `
                        Desde que entré en el mundo del PC comencé a interesarme por el modding, así que decidí hacer mi propio PC modificado.
                        <br><br>
                        Empecé extrayendo modelos 3D de algunos de mis juegos favoritos ya que no los podía encontrar online.
                        Imprimí una figura de deathclaw e hice un modelo de roca larga para colocar dentro del PC.
                        Después continúe diseñando las piezas exteriores, basadas en Cyberpunk 2077, para más tarde modelarlas e imprimirlas.
                        <br><br>
                        Tras imprimirlas las pinté y coloqué en el PC.
                    `
                },
                t45: {
                    tit: 'Casco T45',
                    con: `
                        Fallout es una de mis series de videojuegos favoritas y, en su universo, se usan trajes tecnológicamente avanzados de cuerpo entero llamados armaduras de poder.
                        <br><br>
                        Cómo encontré el modelo 3D de un casco decidí imprimirlo en pequeñas partes para hacerme uno propio. 
                        Tras pegar todas las partes, lo pinté y le añadí un tubo de aspiradora para hacerlo parecer un poco más realista.
                    `
                },
                usb: {
                    tit: 'USB GTX ',
                    con: `
                        Llevar apps y juegos en un USB no es una mala idea, pero la velocidad de la memoria puede causar problemas.
                        Para arreglar esto tuve la idea de añadirle un disipador, así que empecé a diseñar una carcasa que acabó teniendo forma de una tarjeta gráfica Nvidia GTX.
                        <br><br>
                        Después de hacer agujeros para la ventilación, imprimí la carcasa y coloqué un ventilador pequeño alimentado por un conector en el lado.
                        Finalmente, le añadí una almohadilla térmica y una placa de aluminio, la cual pinté más tarde, para disipar el calor de la memoria.
                    `
                },
                hoodie: {
                    tit: 'Sudadera Futurística',
                    con: `
                        Un día me encontré con una sudadera streetwear, un estilo que no había visto antes, y me inspiró para crear la mía.
                        No es exactamente streetwear, pero sí es una sudadera futuristica.
                        Comencé dibujando unos diseños en mi cuaderno que fueron digitalizados más tarde usando Adobe Illustrator.
                        Tras eso, hice una simulación en Photoshop de como se vería la sudadera si fuese real.
                    `
                },
            },
            none: 'No se han encontrado proyectos...<br>Prueba a cambiar los filtros seleccionados.',
            more: '¡Ver más proyectos!',
        },
        //Footer
        footer: {
            contact: {
                title: 'Contacto',
                mail: 'Email copiado al portapapeles',
            },
            credits: 'Esta pagina fue hecha a mano con cariño por un humano (✿◡‿◡)<br>La IA debe ayudar, no remplazar (︶^︶)',
        },
        //Curriculum
        curriculum: {
            title: 'Curriculum',
        },
        //Snake
        snake: {
            points: 'Puntos: ',
            restart: 'Reiniciar',
            death: '¡Has muerto!',
            afk: 'Hay un poco de silencio...<br>¿Quieres jugar un juego?',
        },
        //Achievements
        achievements: {
            title: 'Logros',
            description: 'Encuentra nuevos logros interactuando con cosas por la página',
            hidden: 'Escondido',
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
        }
    }
}

let loc = locales.en;

//Appear animation manager
const animator = new AppearAnimation();

//Sidebar
class Sidebar {

    //Sidebar
    #sidebar = document.getElementById('sidebar');

    toggle = (toggle) => {
        //Fix toggle
        if (typeof toggle !== 'boolean') toggle = !this.#sidebar.hasAttribute('open');

        //Toggle sidebar
        if (toggle) {
            this.#sidebar.setAttribute('open', '');
            document.body.setAttribute('sidebar', '');
        } else {
            this.#sidebar.removeAttribute('open');
            document.body.removeAttribute('sidebar', '');
        }
    }

    //Buttons
    #home = document.getElementById('sidebar-home');
    #about = document.getElementById('sidebar-about');
    #skills = document.getElementById('sidebar-skills');
    #projects = document.getElementById('sidebar-projects');
    #contact = document.getElementById('sidebar-contact');
    #curriculum = document.getElementById('sidebar-curriculum');
    #localization = document.getElementById('sidebar-localization');
    #theme = document.getElementById('sidebar-theme');
    #achievements = document.getElementById('sidebar-achievements');

    localize = () => {
        this.#home.innerText = loc.sidebar.home;
        this.#about.innerText = loc.sidebar.about;
        this.#skills.innerText = loc.sidebar.skills;
        this.#projects.innerText = loc.sidebar.projects;
        this.#contact.innerText = loc.sidebar.contact;
        this.#curriculum.innerText = loc.sidebar.curriculum;
        this.#localization.innerText = loc.sidebar.localization;
        this.#theme.innerText = loc.sidebar.theme;
        this.#achievements.innerText = loc.sidebar.achievements;
    }

}

const sidebar = new Sidebar();

//Navigation
new CurrentPageIndicator(['home', 'about', 'skills', 'projects', 'contact']);

function goTo(id) {
    //Scroll to element
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });

    //Close sidebar
    sidebar.toggle(false);
}

//Page title
function changeTitle() {
    const emojis = ['🦝', '🦎', '🦖', '🎷🐛', '😸'];
    document.title = `${loc.title} ${Util.randomArray(emojis)}`;
}

addFocusListener(changeTitle);

changeTitle();



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
    timer
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

    reset() {
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

    updateText() {
        this.textElement.innerText = this.baseL + this.text + this.baseR
    }

    selectNextRole() {
        //Get next id
        this.roleId++;
        if (this.roleId >= loc.home.roles.length) this.roleId = 0

        //Update role
        this.role = loc.home.roles[this.roleId]

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

//Page
class HomePage {

    //Elements
    #text1 = document.getElementById('homeText1');
    #text2 = document.getElementById('homeText2');

    //Animations
    #particlesAnimation = new ParticlesAnimation('homeCanvas');
    #textAnimation = new HomeText();

    get particlesAnimation() { return this.#particlesAnimation }
    get textAnimation() { return this.#textAnimation }

    //Page
    localize = () => {
        this.#text1.innerText = loc.home.text1;
        this.#text2.innerText = loc.home.text2;
        this.textAnimation.reset();
    }

    constructor() {
        //Update particles color
        this.particlesAnimation.changeColor(`color-mix(in srgb, transparent 50%, ${window.getComputedStyle(document.body).getPropertyValue('--text')})`);
    }

}

const home = new HomePage();



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
    #page = document.getElementById('about');
    #title = document.getElementById('aboutTitle');
    #description1 = document.getElementById('aboutDescription1');
    #description2 = document.getElementById('aboutDescription2');
    #description3 = document.getElementById('aboutDescription3');
    #contact = document.getElementById('aboutContact');
    #img = document.getElementById('aboutImg');
    #imgName = document.getElementById('aboutImgName');
    #imgNext = document.getElementById('aboutImgNext');

    //Carousel
    #imgs = [
        'Data/Images/About/me1.webp',
        'Data/Images/About/me2.webp',
        'Data/Images/About/me3.webp',
        'Data/Images/About/almuñécar.webp',
        'Data/Images/About/amsterdam.webp',
        'Data/Images/About/canary.webp',
        'Data/Images/About/cat.webp',
        'Data/Images/About/flower.webp',
        'Data/Images/About/mallorca.webp',
        'Data/Images/About/otivar.webp',
        'Data/Images/About/artyom.webp'
    ];
    #order = [];
    #index = -1;
    #loading = false;

    next = () => {
        //Is loading
        if (this.#loading) return;
        this.#loading = true;

        //Hide click me text
        if (this.#index >= 0) this.#img.setAttribute("clicked", "");

        //Get next image index
        let nextIndex = this.#index + 1;
        if (nextIndex >= this.#imgs.length) nextIndex = 0;

        //Load animation
        this.#img.setAttribute("loading", "");
        setTimeout(() => {
            //Update
            this.#index = nextIndex;
            this.#img.src = this.#imgs[this.#order[this.#index]];
        }, 400);
    }

    //Page
    localize = () => {
        //Info
        this.#title.innerText = loc.about.title;
        this.#description1.innerText = loc.about.desc1.replace('###', Math.abs(new Date(Date.now() - new Date("2004-01-23")).getUTCFullYear() - 1970)); //Replace ### with age
        this.#description2.innerText = loc.about.desc2;
        this.#description3.innerText = loc.about.desc3;
        this.#contact.innerText = loc.about.contact;

        //Carousel
        this.#imgName.innerText = loc.about.names[this.#order[Math.max(this.#index, 0)]];
        this.#imgNext.innerText = loc.about.next;
    }

    constructor() {
        //Animate
        animator.animate(this.#page);

        //Image load listener
        this.#img.onload = () => {
            //Update text
            this.#imgName.innerText = loc.about.names[this.#order[this.#index]];

            //Loading
            if (this.#loading) {
                //Stop animation
                this.#img.removeAttribute("loading");

                //Artyom (last image) -> Give achievement
                if (this.#index == this.#imgs.length - 1) achievements.give(Achievement.artyom);

                //Finish
                setTimeout(() => { this.#loading = false }, 400);
            }
        }
        
        //Add images (excluding 'me1' and 'artyom') % shuffle them
        for (let i = 1; i < this.#imgs.length - 1; i++) this.#order.push(i);
        Util.shuffleArray(this.#order);

        //Add 'me1' first & 'artyom' last
        this.#order.splice(0, 0, 0);                //Add 'me1' first
        this.#order.push(this.#imgs.length - 1);    //Add 'artyom' last

        //Select first image (index starts at -1)
        this.next();
    }

}

const about = new AboutPage();



  /*$$$$$  /$$       /$$ /$$ /$$
 /$$__  $$| $$      |__/| $$| $$
| $$  \__/| $$   /$$ /$$| $$| $$  /$$$$$$$
|  $$$$$$ | $$  /$$/| $$| $$| $$ /$$_____/
 \____  $$| $$$$$$/ | $$| $$| $$|  $$$$$$
 /$$  \ $$| $$_  $$ | $$| $$| $$ \____  $$
|  $$$$$$/| $$ \  $$| $$| $$| $$ /$$$$$$$/
 \______/ |__/  \__/|__/|__/|__/|______*/

//Enum
const Skill = Object.freeze({
    game: {
        id: 'skillsGame',
        locale: 'game',
        experience: 4,
    },
    app: {
        id: 'skillsApp',
        locale: 'app',
        experience: 4,
    },
    web: {
        id: 'skillsWeb',
        locale: 'web',
        experience: 2,
    },
    design: {
        id: 'skillsDesign',
        locale: 'design',
        experience: 2,
    },
    ui: {
        id: 'skillsUI',
        locale: 'ui',
        experience: 2,
    },
    '3d': {
        id: 'skills3D',
        locale: '3d',
        experience: 1,
    }
});

//Page
class SkillsPage {

    //Elements
    #title = document.getElementById('skillsTitle');
    #description = document.getElementById('skillsDescription');
    #noteTitle = document.getElementById('skillsNoteTitle');
    #noteText = document.getElementById('skillsNoteText');

    //Page
    localize = () => {
        //Title & description
        this.#title.innerText = loc.skills.title;
        this.#description.innerText = loc.skills.desc;

        //Skills
        for (const key of Object.keys(Skill)) {
            const skill = Skill[key];
            document.getElementById(`${skill.id}Title`).innerText = loc.skills[skill.locale];
            document.getElementById(`${skill.id}Pro`).innerText = skill.experience + loc.skills.years;
        }

        //Note
        this.#noteTitle.innerText = loc.skills.note.title;
        this.#noteText.innerText = loc.skills.note.text;
    }

    constructor() {
        //Create observer to update skills visibility
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                //Not intersecting
                if (!entry.isIntersecting) continue;

                //Show experience
                entry.target.setAttribute('visible', '');
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0
        });

        //Create max experience var
        let maxExperience = 0;

        //Assign experience & observer to skills
        for (const key of Object.keys(Skill)) {
            const skill = Skill[key];
            const element = document.getElementById(skill.id);
            element.style.setProperty('--skillExperience', skill.experience);
            observer.observe(element);

            //Compare max experience
            maxExperience = Math.max(maxExperience, skill.experience);
        }

        //Update max experience
        document.getElementById('skills').style.setProperty('--skillsMax', maxExperience);
    }

}

const skills = new SkillsPage();



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

//Enums
const Category = Object.freeze({
    all: 'all',
    games: 'games',
    apps: 'apps',
    design: 'design',
    other: 'other'
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
    vscode: 'VSCode',
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
    diy: 'diy'
});

const Sort = Object.freeze({
    favs: 'favs',
    date: 'date'
});

const Scope = Object.freeze({
    team: 'team',
    solo: 'solo',
    personal: 'personal',
    jam: 'jam'
});

const FavPoints = Object.freeze({
    cool: 100,
    fine: 75,
    mid: 50,
    meh: 0
});

const Project = Object.freeze({
    tochimochi: {
        key: 'tochimochi',
        dateStart: 2025,
        dateEnd: 2025,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.html, Tag.css, Tag.js, Tag.unity, Tag.blender, Tag.photoshop],
        button: ['https://botpa.itch.io/tochimochi'],
        vid: 'DEsmoGcLBzs'
    },
    akira_posters: {
        key: 'akira_posters',
        dateStart: 2025,
        dateEnd: 2025,
        favPoints: FavPoints.fine,
        scope: [Scope.solo, Scope.personal],
        category: Category.design,
        tags: [Tag.photoshop],
        button: ['https://www.artstation.com/artwork/lGQ84V']
    },
    map_pinner: {
        key: 'map_pinner',
        dateStart: 2025,
        dateEnd: 2025,
        favPoints: FavPoints.mid,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.html, Tag.css, Tag.js],
        button: ['http://botpanzer.github.io/Map-Pinner']
    },
    hardcore_kitty: {
        key: 'hardcore_kitty',
        dateStart: 2025,
        dateEnd: 2025,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.blender, Tag.photoshop],
        button: ['https://botpa.itch.io/hardcore-kitty'],
        vid: 'S0YSZCOFGlg'
    },
    stealer: {
        key: 'stealer',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: FavPoints.mid,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.python],
        button: ['https://github.com/BOTPanzer/Turbo-Stealer']
    },
    spyw4re: {
        key: 'spyw4re',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.js, Tag.nodejs, Tag.unity, Tag.blender, Tag.photoshop],
        button: ['https://botpa.itch.io/spyw4re'],
        vid: 'Qc3aWfPAxg0'
    },
    artist_posters: {
        key: 'artist_posters',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: FavPoints.fine,
        scope: [Scope.solo, Scope.personal],
        category: Category.design,
        tags: [Tag.photoshop],
        button: ["https://www.artstation.com/bot_panzer/albums/14597252"]
    },
    stardew_pets: {
        key: 'stardew_pets',
        dateStart: 2024,
        dateEnd: 2025,
        favPoints: FavPoints.cool,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.ts, Tag.html, Tag.css, Tag.photoshop],
        button: ['https://marketplace.visualstudio.com/items?itemName=botpa.stardew-pets']
    },
    hackoon: {
        key: 'hackoon',
        dateStart: 2024,
        dateEnd: Infinity,
        favPoints: FavPoints.cool,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.blender, Tag.photoshop],
        button: ['https://www.tiktok.com/@botpanzer']
    },
    hightime: {
        key: 'hightime',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.photoshop],
        button: ['https://botpa.itch.io/high-on-time'],
        vid: 'UGMQDJxov1M',
    },
    fresquita: {
        key: 'fresquita',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: FavPoints.cool,
        scope: [Scope.solo, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.blender, Tag.photoshop],
        button: ['https://botpa.itch.io/the-lost-fresquita'],
        vid: 'SC_3TWWP46k'
    },
    raccoon: {
        key: 'raccoon',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.blender, Tag.photoshop],
        button: ['https://botpa.itch.io/esto-aun-no-es-un-juego'],
        vid: 'UGH5wQYlAt4'
    },
    lmdshow: {
        key: 'lmdshow',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: FavPoints.cool,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.blender, Tag.photoshop, Tag.substance],
        button: ['https://botpa.itch.io/escape-from-lmdshow'],
        vid: 'z0Qv5HZyZgU'
    },
    memory_shift: {
        key: 'memory_shift',
        dateStart: 2022,
        dateEnd: 2023,
        favPoints: FavPoints.cool,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.photoshop, Tag.illustrator],
        button: ['https://botpa.itch.io/memory-shift']
    },
    spirits: {
        key: 'spirits',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.illustrator, Tag.photoshop],
        button: ['https://botpa.itch.io/twin-spirits'],
        vid: 'SdIGAw2ABeU'
    },
    papa: {
        key: 'papa',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: FavPoints.mid,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.illustrator, Tag.photoshop],
        button: ['https://botpa.itch.io/cooking-papa']
    },
    vaporcade: {
        key: 'vaporcade',
        dateStart: 2022,
        dateEnd: 2022,
        favPoints: FavPoints.fine,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.illustrator, Tag.photoshop],
        button: ['https://botpa.itch.io/vaporcade']
    },
    otters: {
        key: 'otters',
        dateStart: 2022,
        dateEnd: 2022,
        favPoints: FavPoints.meh,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.max3ds, Tag.substance, Tag.illustrator, Tag.photoshop],
        button: ['https://botpa.itch.io/otters-odyssey']
    },
    assistant_pc: {
        key: 'assistant_pc',
        dateStart: 2021,
        dateEnd: 2025,
        favPoints: FavPoints.mid,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.html, Tag.css, Tag.js, Tag.nodejs, Tag.electronjs, Tag.uiux],
        button: ['https://github.com/BOTPanzer/Orion-Assistant', 'https://github.com/BOTPanzer/USB-Launcher']
    },
    assistant_android: {
        key: 'assistant_android',
        dateStart: 2021,
        dateEnd: 2025,
        favPoints: FavPoints.mid,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.java, Tag.android, Tag.uiux],
        button: ['Data/Orion Assistant 1.10.4.apk']
    },
    framework: {
        key: 'framework',
        dateStart: 2022,
        dateEnd: 2024,
        favPoints: FavPoints.mid,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.html, Tag.css, Tag.js, Tag.uiux],
        button: ['https://botpanzer.github.io/Orion-Framework']
    },
    //Usually hidden from here
    discord_bots: {
        key: 'discord_bots',
        dateStart: 2018,
        dateEnd: 2020,
        favPoints: FavPoints.meh,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.js, Tag.discordapi],
        button: ["https://github.com/BOTPanzer/Syrup"]
    },
    modding: {
        key: 'modding',
        dateStart: 2021,
        dateEnd: 2021,
        favPoints: FavPoints.meh,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.model3d, Tag.print3d, Tag.illustrator, Tag.sketching, Tag.diy]
    },
    t45: {
        key: 't45',
        dateStart: 2018,
        dateEnd: 2018,
        favPoints: FavPoints.meh,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.print3d, Tag.diy]
    },
    usb: {
        key: 'usb',
        dateStart: 2018,
        dateEnd: 2018,
        favPoints: FavPoints.meh,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.model3d, Tag.print3d, Tag.electronics, Tag.diy]
    },
    hoodie: {
        key: 'hoodie',
        dateStart: 2021,
        dateEnd: 2021,
        favPoints: FavPoints.meh,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.illustrator, Tag.photoshop, Tag.sketching]
    }
})

//Page
class ProjectsPage {

    //Elements
    #title = document.getElementById('projectsTitle');
    #list = document.getElementById('projectsList');
    #more = document.getElementById('projectsMore');

    //Projects info
    #info = {
        //Created projects
        loaded: false,
        created: 0,

        //Category, filter & sorting
        category: Category.all,
        tag: Tag.all,
        sort: Sort.favs,

        //List (sorted by preferences)
        unfilteredList: [
            Project.tochimochi,
            Project.akira_posters,
            Project.map_pinner,
            Project.hardcore_kitty,
            Project.spyw4re,
            Project.artist_posters,
            Project.stardew_pets,
            Project.hightime,
            Project.stealer,
            //Projects.hackoon,
            Project.fresquita,
            Project.raccoon,
            Project.lmdshow,
            Project.memory_shift,
            Project.spirits,
            Project.vaporcade,
            Project.papa,
            Project.otters,
            Project.assistant_pc,
            Project.assistant_android,
            Project.framework,
            /*
            Projects.discord_bots,
            Projects.modding,
            Projects.t45,
            Projects.usb,
            Projects.hoodie,
            */
        ],
        list: [],
    }

    getCategoryName = (category) => { return loc.projects.category[category in Category ? category : Category.all]; }

    getTagName = (tag) => { return tag in loc.projects.tags ? loc.projects.tags[tag] : tag; }
    
    getSortName = (sort) => { return loc.projects.sort[sort in Sort ? sort : Sort.favs]; }

    //Manage projects
    addProjects = (category, filter, sort) => {
        //Fix options
        if (typeof category !== 'string') category = this.#info.category;
        if (typeof filter !== 'string') filter = this.#info.tag;
        if (typeof sort !== 'string') sort = this.#info.sort;

        //Check if is refresh & save filters if not refreshing
        const isRefresh = (this.#info.category == category) && (this.#info.tag == filter) && (this.#info.sort == sort) && (this.#info.loaded);
        if (!isRefresh) {
            this.#info.category = category;
            this.#info.tag = filter;
            this.#info.sort = sort;
        }

        //Update category, filter & sorting names
        this.#filtersCategoryBy.innerText = this.getCategoryName(category);
        this.#filtersTagsBy.innerText = this.getTagName(filter);
        this.#filtersSortBy.innerText = this.getSortName(sort);

        //Copy projects list
        this.#info.list = [];
        for (const project of this.#info.unfilteredList) this.#info.list.push(project);

        //Remove projects of different categories
        if (category != Category.all) {
            for (let i = this.#info.list.length - 1; i >= 0; i--) {
                const project = this.#info.list[i];
                if (project.category == category) continue;
                this.#info.list.splice(i, 1);
            }
        }

        //Filter projects
        if (filter != Tag.all) {
            for (let i = this.#info.list.length - 1; i >= 0; i--) {
                const project = this.#info.list[i];
                if (project.tags.includes(filter)) continue;
                this.#info.list.splice(i, 1);
            }
        }

        //Sort list (by date)
        switch (sort) {
            case Sort.date:
                this.#info.list.sort((a, b) => Math.max(b.dateStart, b.dateEnd) - Math.max(a.dateStart, a.dateEnd));
                break;
            case Sort.favs:
                this.#info.list.sort((a, b) => b.favPoints - a.favPoints);
                break;
        }

        //Scroll to projects if not refresh (changed some filter)
        if (!isRefresh && this.#info.loaded) goTo('projects');

        //Get options before emptying this.#info.created
        const animate = (!isRefresh) && (this.#info.created == 0);
        const length = (isRefresh ? Math.max(this.#info.created, 4) : 4);

        //Clear
        this.clearProjects();

        //Add projects
        for (let i = 0; i < length; i++) this.addProject(animate, filter);

        //No projects -> Show no projects text
        if (this.#info.created == 0) this.#list.innerHTML += `<div class="projectsNone"><div>🥲</div><div>${loc.projects.none}</div></div>`;

        //Mark as loaded
        this.#info.loaded = true;
    }

    addProject = (animate) => {
        //Fix animate bool
        if (typeof animate != 'boolean') animate = true;

        //No more space
        if (this.#info.created >= this.#info.list.length) return;

        //Get basic info
        const id = `project${this.#info.created}`;
        const project = this.#info.list[this.#info.created];
        const locales = loc.projects.list[project.key];

        //Get scope
        let scope = '';
        if (Array.isArray(project.scope)) {
            for (let i = 0; i < project.scope.length; i++) {
                const element = project.scope[i];
                scope += (i != 0 ? '<br>' : '') + loc.projects.scope[element];
            }
        }

        //Get tags
        let tags = '';
        if (Array.isArray(project.tags)) {
            for (const tag of project.tags) {
                tags += `<span class="projectTag" onclick="projects.addProjects(null, '${tag}', null)">${this.getTagName(tag)}</span>`;
            }
        }

        //Get date
        const dateStart = project.dateStart;
        const dateEnd = project.dateEnd == Infinity ? loc.projects.date.present : project.dateEnd;

        //Get buttons
        let buttons = '';
        const button = project.button;
        if (Array.isArray(button)) {
            for (let i = 0; i < button.length; i++) {
                const buttonText = locales['b' + (i + 1)];
                buttons += `<a id="${id}B${i}" class="button" small target="_blank" href="${button[i]}" onmousedown="projects.onProjectOpened()">${buttonText ? buttonText : locales.tit}</a>`;
            }
        }

        //Video button (youtube link key)
        const vid = project.vid;

        //Create project HTML base
        const element = document.createElement('div');
        element.id = id;
        element.classList.add('project');

        //Animation & reverse
        if (animate) element.classList.add('appear');
        if (this.#info.created % 2 != 0) element.setAttribute('reverse', '');

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
                <span class="projectScope glass" ${scope != '' ? '' : 'hidden'}>${scope}</span>
                <!-- Actions -->
                <div class="projectActions">
                    <!-- Video button -->
                    <div class="glass projectActionButton projectVideoButton" onclick="projects.toggleVideo(${this.#info.created}, 'https://www.youtube.com/embed/${vid}')">
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
            </div>
        `;
        this.#list.appendChild(element);

        //Animate
        if (animate) animator.animate(element);

        //Done
        this.#info.created++;

        //Update load more button
        document.getElementById('projectsMore').style.visibility = this.#info.created >= this.#info.list.length ? 'hidden' : 'visible';
    }

    clearProjects = () => {
        //Clear projects
        this.#info.created = 0;
        this.#list.innerHTML = '';
        this.#more.style.display = (this.#info.created >= this.#info.list.length) ? 'none' : 'flex';
    }

    refreshProjects = () => {
        //Add projects with current info
        this.addProjects(this.#info.category, this.#info.tag, this.#info.sort)
    }

    //Actions (fullscreen pic & toggle video)
    #fullscreen = document.getElementById('projectsFullscreen');
    #fullscreenImage = document.getElementById('projectsFullscreenImage');

    fullscreenImage = (url) => {
        if (typeof url === 'string') {
            //Show
            this.#fullscreenImage.src = url;
            this.#fullscreen.setAttribute('show', '');
            Util.toggleScroll(false);
        } else {
            //Hide
            this.#fullscreen.removeAttribute('show');
            Util.toggleScroll(true);
        }
    }

    toggleVideo = (index, url) => {
        //Get project elements
        const media = document.getElementById(`project${index}-media`);
        const video = document.getElementById(`project${index}-video`);

        //Toggle video
        if (media.hasAttribute('video')) {
            //Close
            media.removeAttribute('video');
            video.src = '';
        } else {
            //Open
            media.setAttribute('video', '');
            video.src = url;
        }
    }

    onProjectOpened = () => {
        //Add achievement on resume
        addFocusListener(() => {
            achievements.give(Achievement.project);
            return true;
        })
    }

    //Filters
    #filtersTitle = document.getElementById('projectsFiltersTitle');
    #filtersCategory = document.getElementById('projectsCategory');
    #filtersCategoryBy = document.getElementById('projectsCategoryBy');
    #filtersTags = document.getElementById('projectsTags');
    #filtersTagsBy = document.getElementById('projectsTagsBy');
    #filtersSort = document.getElementById('projectsSort');
    #filtersSortBy = document.getElementById('projectsSortBy');

    #filterMenu = document.getElementById('filterMenu');
    #filterMenuTitle = document.getElementById('filterMenuTitle');
    #filterMenuList = document.getElementById('filterMenuTags');

    toggleFilterMenu = (type) => {
        //Close menu if open
        if (this.#filterMenu.open) {
            this.#filterMenu.close();
            Util.toggleScroll(true);
            return
        }

        //Clear list
        this.#filterMenuList.innerHTML = ''

        //Execute menu logic
        switch (type) {
            //Category
            case 'category': {
                //Change menu title
                this.#filterMenuTitle.innerText = loc.projects.category.title;

                //Get categories
                const tags = [];
                for (const key of Object.keys(Category)) tags.push(Category[key]);

                //Add categories
                for (const tag of tags) this.#filterMenuList.innerHTML += `<span class="projectTag" onclick="projects.addProjects('${tag}', null, null); projects.toggleFilterMenu();">${this.getCategoryName(tag)}</span>`;
                break;
            }

            //Sort
            case 'sort': {
                //Change menu title
                this.#filterMenuTitle.innerText = loc.projects.sort.title;

                //Get sort options
                const tags = [];
                for (const key of Object.keys(Sort)) tags.push(Sort[key]);
                
                //Add categories
                for (const tag of tags) this.#filterMenuList.innerHTML += `<span class="projectTag" onclick="projects.addProjects(null, null, '${tag}'); projects.toggleFilterMenu();">${this.getSortName(tag)}</span>`;
                break;
            }

            //Tags
            default: {
                //Change menu title
                this.#filterMenuTitle.innerText = loc.projects.tags.title;

                //Get tags (only the ones used in projects)
                const usedTags = [];
                for (const project of this.#info.unfilteredList) {
                    for (const tag of project.tags) {
                        if (usedTags.includes(tag)) continue;
                        usedTags.push(tag);
                    }
                }

                //Get tags (ordered and with all first)
                const tags = [Tag.all];
                for (const key of Object.keys(Tag)) {
                    const tag = Tag[key];
                    if (!usedTags.includes(tag)) continue;
                    tags.push(tag);
                }
                
                //Add tags
                for (const tag of tags) this.#filterMenuList.innerHTML += `<span class="projectTag" onclick="projects.addProjects(null, '${tag}', null); projects.toggleFilterMenu();">${this.getTagName(tag)}</span>`;
                break;
            }
        }

        //Open
        this.#filterMenu.showModal();
        Util.toggleScroll(false);
    }

    //Page
    localize = () => {
        //Title
        this.#title.innerText = loc.projects.title;

        //Filters
        this.#filtersTitle.innerText = loc.projects.filtersTitle;
        this.#filtersCategory.innerText = `${loc.projects.category.title}:`;
        this.#filtersTags.innerText = `${loc.projects.tags.title}:`;
        this.#filtersSort.innerText = `${loc.projects.sort.title}:`;

        //Projects
        this.refreshProjects();
        this.#more.innerText = loc.projects.more;
    }

    constructor() {
        //Close menu listener
        Util.onDialogBackdropClick(this.#filterMenu, this.toggleFilterMenu);
    }
    
}

const projects = new ProjectsPage();



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

    //Contact
    copyMail = () => {
        createSnackbar(loc.footer.contact.mail, false);
        navigator.clipboard.writeText('alex.paniagua.moreno@gmail.com');
    }

    onContactOpened = () => {
        //Add achievement on resume
        addFocusListener(() => {
            achievements.give(Achievement.contact);
            return true;
        })
    }

    //Quotes
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
    ];
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
    ];
    #quoteText = document.getElementById('footerQuoteText');
    #quoteAuthor = document.getElementById('footerQuoteAuthor');
    #quoteIndex = 0;

    updateQuote = () => {
        this.#quoteText.innerText = `"${this.#quotes[this.#quoteIndex]}"`;
        this.#quoteAuthor.innerText = this.#authors[this.#quoteIndex];
    }

    prevQuote = () => {
        this.#quoteIndex--;
        if (this.#quoteIndex < 0) this.#quoteIndex = this.#quotes.length - 1;
        this.updateQuote();
    }

    nextQuote = () => {
        this.#quoteIndex++;
        if (this.#quoteIndex >= this.#quotes.length) this.#quoteIndex = 0;
        this.updateQuote();
    }

    //Page
    localize = () => {
        document.getElementById('footerContactTitle').innerText = loc.footer.contact.title;
        document.getElementById('footerCredits').innerHTML = loc.footer.credits;
    }

    constructor() {
        //Select random quote
        this.#quoteIndex = Math.floor(Math.random() * this.#quotes.length);
        this.updateQuote();
    }

}

const footer = new FooterPage();



  /*$$$$$                                /$$                     /$$
 /$$__  $$                              |__/                    | $$
| $$  \__/ /$$   /$$  /$$$$$$   /$$$$$$  /$$  /$$$$$$$ /$$   /$$| $$ /$$   /$$ /$$$$$$/$$$$
| $$      | $$  | $$ /$$__  $$ /$$__  $$| $$ /$$_____/| $$  | $$| $$| $$  | $$| $$_  $$_  $$
| $$      | $$  | $$| $$  \__/| $$  \__/| $$| $$      | $$  | $$| $$| $$  | $$| $$ \ $$ \ $$
| $$    $$| $$  | $$| $$      | $$      | $$| $$      | $$  | $$| $$| $$  | $$| $$ | $$ | $$
|  $$$$$$/|  $$$$$$/| $$      | $$      | $$|  $$$$$$$|  $$$$$$/| $$|  $$$$$$/| $$ | $$ | $$
 \______/  \______/ |__/      |__/      |__/ \_______/ \______/ |__/ \______/ |__/ |__/ |_*/

class CurriculumMenu {

    //Menu
    #menu = document.getElementById('curriculumMenu');
    #title = document.getElementById('curriculumMenuTitle');

    toggleMenu = () => {
        //Toggle menu
        if (this.#menu.open) {
            //Close
            this.#menu.close();
            Util.toggleScroll(true);
        } else {
            //Open
            this.#menu.showModal();
            Util.toggleScroll(false);
        }
    }

    localize = () => {
        this.#title.innerText = loc.curriculum.title;
    }

    constructor() {
        //Close menu listener
        Util.onDialogBackdropClick(this.#menu, this.toggleMenu);
    }

}

const curriculum = new CurriculumMenu();



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
    #animationFrame = undefined;
    #updateInterval = undefined;
    #context = undefined;
    #inputQueue = [];
    #delta = 1000 / 9;  //9 fps

    //Game
    #size = new Vec2();
    #grid = 15; //Cell size

    #dead = true;
    #points = 0;
    #best = DB.get('snake.best', 0, DB.NUMBER);
    
    #snake = {
        pos: new Vec2(150),
        dir: new Vec2(1, 0),
        cells: [],
        length: 4,
    };
    #apple = new Vec2(0);

    //UI
    #infoPoints = document.getElementById('snakeInfoPoints');
    #infoBest = document.getElementById('snakeInfoBest');
    #infoState = document.getElementById('snakeInfoState');


    //Constructor
    constructor(canvas) {
        //Get context
        this.#context = canvas.getContext('2d');

        //Init game info
        this.#size = new Vec2(canvas.width, canvas.height);
    }

    //Update & render
    update = () => {
        //Dead -> Don't update
        if (this.#dead) return;
        
        //Check keys from input queue
        for (let i = this.#inputQueue.length - 1; i >= 0; i--) {
            //Get key & remove it from queue
            const key = this.#inputQueue.pop();

            //Check if key is valid
            let valid = false;
            switch (key) {
                //Up
                case 'w':
                case 'arrowup':
                    if (this.#snake.dir.y !== 0) break;
                    this.#snake.dir = new Vec2(0, -1);
                    valid = true;
                    break;
                //Right
                case 'd':
                case 'arrowright':
                    if (this.#snake.dir.x !== 0) break;
                    this.#snake.dir = new Vec2(1, 0);
                    valid = true;
                    break;
                //Down
                case 's':
                case 'arrowdown':
                    if (this.#snake.dir.y !== 0) break;
                    this.#snake.dir = new Vec2(0, 1);
                    valid = true;
                    break;
                //Left
                case 'a':
                case 'arrowleft':
                    if (this.#snake.dir.x !== 0) break;
                    this.#snake.dir = new Vec2(-1, 0);
                    valid = true;
                    break;
            }

            //Check if key was valid
            if (valid) break;
        }

        //Move snake
        this.#snake.pos.x += this.#snake.dir.x * this.#grid;
        this.#snake.pos.y += this.#snake.dir.y * this.#grid;

        //Wrap on screen edges
        if (this.#snake.pos.x < 0) {
            this.#snake.pos.x = this.#size.x - this.#grid;
        } else if (this.#snake.pos.x >= this.#size.x) {
            this.#snake.pos.x = 0;
        }
        
        if (this.#snake.pos.y < 0) {
            this.#snake.pos.y = this.#size.y - this.#grid;
        } else if (this.#snake.pos.y >= this.#size.y) {
            this.#snake.pos.y = 0;
        }

        //Keep track of where snake has been (front of the array is always the head)
        this.#snake.cells.unshift(new Vec2(this.#snake.pos));

        //Remove cells as we move away from them
        if (this.#snake.cells.length > this.#snake.length) this.#snake.cells.pop();

        //Check snake cells
        this.#snake.cells.forEach((cell, index) => {
            //Snake ate apple
            if (cell.x === this.#apple.x && cell.y === this.#apple.y) {
                this.#snake.length++;
                this.#points++;
                this.#apple = this.getRandomPoint();
                
                //UI
                document.getElementById('snakeInfoPoints').innerText = this.#points;
            }

            // check collision with all cells after this one (modified bubble sort)
            for (var i = index + 1; i < this.#snake.cells.length; i++) {
                //Snake occupies same space as a body part -> reset game
                if (cell.x != this.#snake.cells[i].x || cell.y !== this.#snake.cells[i].y) continue;

                //Highscore
                if (this.#points > this.#best) {
                    this.#best = this.#points;
                    DB.set('snake.best', this.#best);

                    //Highscore!
                    createSnackbar('🕹️ Highscore!', true);
                    
                    //UI
                    document.getElementById('snakeInfoBest').innerText = this.#best;
                }

                //Die
                this.#dead = true;
                document.getElementById('snakeInfoState').innerText = loc.snake.death;
            }
        })
    }

    draw = () => {
        //Dead -> Don't draw
        if (this.#dead) return;
        
        //Clear canvas
        this.#context.clearRect(0, 0, this.#size.x, this.#size.y);
        
        //Draw apple
        this.drawBox(this.#apple, '#eb3734');

        //Draw snake one cell at a time
        for (const cell of this.#snake.cells) {
            //Drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
            this.drawBox(cell, '#34eb5b');
        } 

        //Request next frame
        this.#animationFrame = requestAnimationFrame(this.draw);
    }

    //State
    resume = () =>{
        //Pause just in case
        this.pause();

        //Resume
        this.#animationFrame = requestAnimationFrame(this.draw);
        this.#updateInterval = setInterval(this.update, this.#delta);
    }

    pause = () =>{
        //Pause
        cancelAnimationFrame(this.#animationFrame);
        clearInterval(this.#updateInterval);
    }

    stop = () =>{
        this.#dead = true;
        this.pause();
    }

    restart = () =>{
        //Reset game info
        this.#inputQueue = [];
        this.#dead = false;
        this.#points = 0;
        this.#snake.pos = new Vec2(150);
        this.#snake.dir = new Vec2(1, 0);
        this.#snake.cells = [];
        this.#snake.length = 4;
        this.#apple = this.getRandomPoint();

        //UI
        this.#infoPoints.innerText = this.#points;
        this.#infoBest.innerText = this.#best;
        this.#infoState.innerText = '';

        //Start drawing
        this.resume()
    }

    //Helpers
    drawBox = (pos, color) => {
        this.#context.fillStyle = color;
        this.#context.fillRect(pos.x, pos.y, this.#grid - 1, this.#grid - 1);
    }
    
    getRandomPoint = () => {
        return new Vec2(
            Util.getRandomInt(0, this.#size.x / this.#grid - 1) * this.#grid, 
            Util.getRandomInt(0, this.#size.y / this.#grid - 1) * this.#grid
        );
    }

    keyPress = (key) => {
        this.#inputQueue.unshift(key);
    }

}

//Easteregg & menu
class SnakeEasteregg {

    //Game
    #game = new SnakeGame(document.getElementById('snakeCanvas'));

    get game() { return this.#game }

    //Easteregg
    #sidebarButton = document.getElementById('goTo-snake');

    #enabled = DB.get('snake', false, DB.BOOLEAN);

    enable() {
        DB.set('snake', true);
        this.#enabled = true;
        this.#sidebarButton.removeAttribute('hidden');
    }

    disable() {
        DB.set('snake', false);
        this.#enabled = false;
        this.#sidebarButton.setAttribute('hidden', '');
        this.onInputAFK();
    }

    //Toggle easteregg (code)
    #codes = [
        ['s','n','a','k','e'],
        ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'],
    ];
    #codesNextIndex = 0;

    onCodeKey = (key) => {
        //Get next index
        const index = this.#codesNextIndex;

        //States of key validity
        const INVALID = 0;
        const VALID = 1;
        const FINISHED = 2;

        //Check if key is valid
        let state = INVALID;
        for (const code of this.#codes) {
            //Code is smaller than next position
            if (code.length <= index) continue;

            //Key does not match in code
            if (code[index] != key) continue;

            //Valid key -> Check if finished code
            if (code.length == index + 1) {
                //Finished -> Mark as finished & stop looking
                state = FINISHED;
                break;
            }
            
            //Not finished -> Mark as valid key
            state = VALID;
        }

        //Check state
        switch (state) {
            case INVALID:
                //Invalid -> Reset next index
                this.#codesNextIndex = 0;
                break;
            case VALID:
                //Valid -> Add key to current combination
                this.#codesNextIndex++;
                break;
            case FINISHED:
                //Finished -> Reset next index & open snake
                this.#codesNextIndex = 0;
                this.toggleMenu();
                break;
        }
    }

    //Toggle easteregg (AFK timer)
    #messageAFK = document.getElementById('snakeAFK');

    #afkTimer = undefined;
    #afkDuration = 25000;   //25 seconds
    
    onAFK = () => {
        //Already enabled or message/menu is open
        if (this.#enabled || this.#messageAFK.hasAttribute('show') || this.#menu.open) return;

        //Show popup
        this.#messageAFK.setAttribute('show', '');
    }

    onInputAFK = () => {
        //Clear popup timer & start counting again if easteregg not enabled
        clearTimeout(this.#afkTimer);
        if (!this.#enabled) this.#afkTimer = setTimeout(this.onAFK, this.#afkDuration);
    }

    //Menu
    #menu = document.getElementById('snakeMenu');
    #points = document.getElementById('snakeInfoPointsText');
    #restart = document.getElementById('snakeRestart');
    #afk = document.getElementById('snakeAFKText');

    toggleMenu = () => {
        //Toggle menu
        if (snakeMenu.open) {
            //Close
            this.#menu.close();
            Util.toggleScroll(true);
            
            //Stop game
            this.#game.stop();
        } else {
            //Open
            this.#menu.showModal();
            Util.toggleScroll(false);

            //Mark easteregg as enabled
            this.enable();

            //Start game
            this.#game.restart();
        }

        //Close sidebar
        sidebar.toggle(false);
    }

    //Easteregg
    localize = () => {
        this.#points.innerText = loc.snake.points;
        this.#restart.innerText = loc.snake.restart;
        this.#afk.innerHTML = loc.snake.afk;
    }

    constructor() {
        //Toggle easteregg
        window.addEventListener('blur', () => clearTimeout(this.#afkTimer));

        window.addEventListener('focus', this.onInputAFK);

        if (this.#enabled) {
            //Enabled -> Show sidebar button
            this.#sidebarButton.removeAttribute('hidden');
        } else {
            //Disabled -> Start counting for AKF message
            this.onInputAFK();
        }
        
        //Input (game & toggle easteregg)
        window.addEventListener('keydown', event => {
            //AFK check
            this.onInputAFK();

            //Get pressed key
            const key = event.key.toLowerCase();

            //Check if game is open
            if (this.#menu.open) {
                //Open -> Add key to input queue & check later on game loop
                this.#game.keyPress(key);
            } else {
                //Closed -> Check input to toggle easteregg by code
                this.onCodeKey(key);
            }
        });

        window.addEventListener('scroll', this.onInputAFK);

        window.addEventListener('click', this.onInputAFK);

        //Close menu listener
        Util.onDialogBackdropClick(this.#menu, this.toggleMenu);
    }

}

const snake = new SnakeEasteregg();



  /*$$$$$            /$$       /$$                                                                   /$$
 /$$__  $$          | $$      |__/                                                                  | $$
| $$  \ $$  /$$$$$$$| $$$$$$$  /$$  /$$$$$$  /$$    /$$ /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
| $$$$$$$$ /$$_____/| $$__  $$| $$ /$$__  $$|  $$  /$$//$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
| $$__  $$| $$      | $$  \ $$| $$| $$$$$$$$ \  $$/$$/| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
| $$  | $$| $$      | $$  | $$| $$| $$_____/  \  $$$/ | $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
| $$  | $$|  $$$$$$$| $$  | $$| $$|  $$$$$$$   \  $/  |  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
|__/  |__/ \_______/|__/  |__/|__/ \_______/    \_/    \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |______*/

//Enum
const Achievement = Object.freeze({
    theme: 'theme',
    artyom: 'artyom',
    project: 'project',
    contact: 'contact',
})

//System & menu
class AchievementsSystem {

    //Current achievements
    #current = {}

    //Give, reset & show achievements
    #dot1 = document.getElementById('achievementsDot1');
    #dot2 = document.getElementById('achievementsDot2');

    #addAchievement = (key) => {
        DB.set(`achievement-${key}`, true);
        this.#current[key] = true;
    }

    #resetAchievement = (key) => {
        DB.set(`achievement-${key}`, false);
        this.#current[key] = false;
    }

    give = (key) => {
        //Achievement does not exist
        if (!Achievement[key]) return;

        //Already has achievement
        if (this.#current[key]) return;

        //Show snackbar
        createSnackbar(`🏆 ${loc.achievements[key].title}`, true);
        
        //Add achievement
        this.#addAchievement(key);

        //Show achievement indicator dots
        this.#dot1.setAttribute('active', '');
        this.#dot2.setAttribute('active', '');
    }

    giveAll = () => {
        //Give all achievements
        for (const key of Object.keys(Achievement)) achievements.give(Achievement[key]);
    }

    resetAll = () => {
        //Reset all achievements
        for (const key of Object.keys(this.#current)) this.#resetAchievement(key);
    }

    //Menu
    #menu = document.getElementById('achievementsMenu');
    #title = document.getElementById('achievementsTitle');
    #description = document.getElementById('achievementsDescription');
    #list = document.getElementById('achievementsList');

    toggleMenu = () => {
        //Hide achievement indicator dots
        this.#dot1.removeAttribute('active');
        this.#dot2.removeAttribute('active');

        //Close sidebar
        sidebar.toggle(false);

        //Toggle menu
        if (this.#menu.open) {
            //Close
            this.#menu.close();
            Util.toggleScroll(true);
        } else {
            //Clear achievements list
            this.#list.innerHTML = ''

            //Load achievements in list
            for (const key of Object.keys(Achievement)) {
                //Create achievement element
                const element = document.createElement('div');
                element.classList.add('achievement');

                //Hide element if user does not have the achievement
                if (!this.#current[key]) element.setAttribute('hidden', '');
                
                //Fill element content
                element.innerHTML = `
                    <img src="Data/Images/Achievements/${key}.webp">
                    <div>
                        <div>${loc.achievements[key].title}</div>
                        <div>${loc.achievements[key].description}</div>
                    </div>
                    <span>${loc.achievements.hidden}</span>
                `;
                
                //Add element to list
                this.#list.appendChild(element);
            }

            //Open
            this.#menu.showModal();
            Util.toggleScroll(false);
        }
    }

    //System
    localize = () => {
        this.#title.innerText = loc.achievements.title
        this.#description.innerText = loc.achievements.description
    }

    constructor() {
        //Load achievements
        for (const key of Object.keys(Achievement)) {
            //Check if user has achievement
            if (!DB.get(`achievement-${Achievement[key]}`, false, DB.BOOLEAN)) continue;

            //User has achievement -> Add it
            this.#addAchievement(key);
        }

        //Close menu listener
        Util.onDialogBackdropClick(this.#menu, this.toggleMenu);
    }

}

const achievements = new AchievementsSystem();



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

class LoadingAnimation {

    //Progress
    #loading = document.getElementById('loading');
    #loadingBar = document.getElementById('loadingBar');
    #loadingProgress = document.getElementById('loadingProgress');

    #progress = 0;

    nextProgress = () => {
        //Next percent
        this.#progress = Math.min(100, this.#progress + Math.floor(Math.random() * 2) + 1);
        this.#loadingBar.style.setProperty('--fill', `${this.#progress}%`);
        this.#loadingProgress.innerText = `${this.#progress}%`;

        //Check if finished
        if (this.#progress >= 100) {
            //Loaded -> Hide loading page, reset home typing animation & enable scrolling
            this.#loading.setAttribute('loaded', '');
            home.textAnimation.reset();
            Util.toggleScroll(true);
        } else {
            //Didn't finish -> Next progress
            setTimeout(this.nextProgress, 10);
        }
    }

    //Loading
    #title = document.getElementById('loadingTitle');
    
    localize = () => {
        this.#title.innerText = loc.loading.title;
    }

    constructor() {
        //Disable scrolling
        Util.toggleScroll(false);

        //Start counting progress
        this.nextProgress();
    }

}

const loading = new LoadingAnimation();



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
        const deviceLanguage = navigator.language;

        //Device is not in spanish
        if (deviceLanguage.startsWith('es')) loc = locales.es;

        //Save locale
        DB.set('locale', loc.key);
        break;

    //English saved
    case 'en':
        loc = locales.en;
        break;

    //Spanish saved
    case 'es':
        loc = locales.es;
        break;
}

//Localization functions
function swapLocale() {
    //Get new locale key
    const newKey = loc.key == 'es' ? 'en' : 'es';

    //Load new locale
    DB.set('locale', newKey);
    loc = locales[newKey];

    //Hide sidebar & localize page
    sidebar.toggle(false);
    localize();
}

function localize() {
    //General (loading animation & sidebar)
    loading.localize();
    sidebar.localize();

    //Menus (curriculum, snake & achievements)
    curriculum.localize();
    snake.localize();
    achievements.localize();

    //Pages (home, about, skills, projects & footer)
    home.localize();
    about.localize();
    skills.localize();
    projects.localize();
    footer.localize();
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
    theme.dark = !theme.dark;
    loadTheme();

    //Close sidebar
    sidebar.toggle();

    //Give chievement
    if (theme.dark) achievements.give(Achievement.theme);
}

function loadTheme() {
    //Load theme
    if (theme.dark) {
        //Enable light
        DB.set('theme', 'dark', DB.STRING);
        document.documentElement.removeAttribute('light');
    } else {
        //Enable dark
        DB.set('theme', 'light', DB.STRING);
        document.documentElement.setAttribute('light', '');
    }

    //Refresh particle animation color
    home.particlesAnimation.changeColor(`color-mix(in srgb, transparent 50%, ${window.getComputedStyle(document.body).getPropertyValue('--text')})`);
}

loadTheme()