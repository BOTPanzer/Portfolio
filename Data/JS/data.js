 /*$                                     /$$ /$$                       /$$     /$$                    
| $$                                    | $$|__/                      | $$    |__/                    
| $$        /$$$$$$   /$$$$$$$  /$$$$$$ | $$ /$$ /$$$$$$$$  /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$ 
| $$       /$$__  $$ /$$_____/ |____  $$| $$| $$|____ /$$/ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
| $$      | $$  \ $$| $$        /$$$$$$$| $$| $$   /$$$$/   /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
| $$      | $$  | $$| $$       /$$__  $$| $$| $$  /$$__/   /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
| $$$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$| $$ /$$$$$$$$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
|________/ \______/  \_______/ \_______/|__/|__/|________/ \_______/   \___/  |__/ \______/ |__/  |_*/

const Locales = Object.freeze({
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
            info: {
                title: 'About Me',
                desc1: "Howdy! My name is Alejandro, but you call me Alex. I'm a ###-year-old Spanish developer who likes spending time playing and creating games.",
                desc2: "I started making games in 2015, at the age of 11, then took a break to learn app & web development in 2019. I've been doing all of them since 2022, but making games is what I enjoy the most.",
                desc3: "I'm a well-organized, independent and perfectionist person who loves giving things his own touch. Some of my interests are playing, programming, graphic design and photography.",
                contact: 'Get in touch!'
            },
            carousel: {
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
                ],
                next: 'Click me to see more photos!'
            },
            career: {
                present: 'Present',
                months: [
                    "Jan.",
                    "Feb.",
                    "Mar.",
                    "Apr.",
                    "May",
                    "Jun.",
                    "Jul.",
                    "Aug.",
                    "Sep.",
                    "Oct.",
                    "Nov.",
                    "Dec."
                ],
                items: {
                    reckless: {
                        title: 'Reckless Monster Studio',
                        content: 'Internship making Unreal Engine 5 games.'
                    },
                    university: {
                        title: 'Rey Juan Carlos University',
                        content: 'Studied a game design and development degree.'
                    }
                }
            }
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
            items: {
                coon_gallery: {
                    tit: 'Coon Gallery',
                    con: `
                    Coon Gallery is a privacy-focused Android gallery and PC manager that brings smart search to your phone without using the cloud.
                    <br><br>
                    By pairing the Android gallery with the PC manager, you can create local backups of your albums and enable smart search by generating descriptions, labels and detecting text in your images.
                    <br><br>
                    Is there a cat in your images? Just search "cat" and you'll find it!
                    `,
                    b1: '<i>Android</i> app',
                    b2: '<i>PC</i> app'
                },
                demo_reel: {
                    tit: 'Demo Reel',
                    con: `
                        A demo reel of some of my top projects, featuring mechanics from 
                        <a href="https://botpa.itch.io/tochimochi" target="_blank">Tochimohi</a>,
                        Hackoon (in development),
                        <a href="https://botpa.itch.io/spyw4re" target="_blank">Spyw4re</a>,
                        <a href="https://botpa.itch.io/hardcore-kitty" target="_blank">Hardcore Kitty</a> and 
                        <a href="https://botpa.itch.io/the-lost-fresquita" target="_blank">The Lost Fresquita</a>.
                    `,
                    vid: 'Watch Demo Reel'
                },
                tochimochi: {
                    tit: 'Tochimochi',
                    con: `
                        Second place in the international edition of the <a href="https://itch.io/jam/game-jam-internacional-cutn-buenos-aires" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Tochimochi, you will help your new virtual friend, Mochi, complete the mission of seeing his granny. 
                        To do that, you will have to merge both the real and virtual world to complete puzzles using your computer and your phone.
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
                        Your goal will be to find pickup points, collect food, and deliver it to the drop-off points, performing tricks and flips on your skateboard along the way.
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
                        Stardew Pets is a VS Code extension with +19K downloads that lets you have Stardew Valley pets accompanying you while you code.
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
                        In Spyw4re, you'll take on the role of a CCTV operator in a collapsing asylum with a trapped patient inside. 
                        You'll have to help him escape by solving puzzles and defeating enemies but, don't think it will be easy, someone doesn't want you to help...
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
                        Survive waves of enemies with different weapons, sliding and slowing time at your will in a building in construction.
                    `,
                    b1: "Download&nbsp<i>High on Time</i>",
                    vid: 'Gameplay Video'
                },
                fresquita: {
                    tit: "The lost Fresquita",
                    con: `
                        One of the awarded games of the <a href="https://itch.io/jam/la-illojam" target="_blank">IlloJam</a>, a gamejam organized for <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>.
                        <br><br>
                        In The lost Fresquita you will play the role of Juan, a scatterbrain who has forgotten several beers in the forest and whose mission is to find them and return home safely.
                        What do I mean by safely?
                        Let's just say some of his friends won't make life easy for you...
                    `,
                    b1: "Download&nbsp<i>The lost Fresquita</i>",
                    vid: 'IlloJuan Playing on Stream'
                },
                raccoon: {
                    tit: "Esto AÚN no es un Juego",
                    con: `
                        Winner of the 3º edition of the <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Esto AÚN no es un juego, you will help a programmer raccoon finish his game before his gamejam ends.
                        To achieve this, you will have to dive inside the game and fix the bugs from the inside, changing how things work so that each level can be completed.
                    `,
                    b1: "Download&nbsp<i>Esto AÚN no es un Juego</i>",
                    vid: 'Gameplay Video'
                },
                lmdshow: {
                    tit: "Escape From LMDShow",
                    con: `
                        Thank you <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a> for playing!
                        <br><br>
                        Escape from LMDShow is a escape room like game in which Juan Alberto, a really cool guy, is kidnapped by LMDShow and, by solving puzzles with objects and codes, attempts to escape the house he was locked in.
                    `,
                    b1: "Download&nbsp<i>Escape From LMDShow</i>",
                    vid: 'IlloJuan Playing on Stream'
                },
                memory_shift: {
                    tit: "Memory Shift",
                    con: `
                        Memory Shift is a 2D action-platformer featuring fast-paced gameplay and a hacking system inspired by games like Katana ZERO and Cyberpunk 2077.
                        <br><br>
                        Run, kill, hack, slide and discover what happened to you before losing your memories in this story driven adventure with handcrafted levels and innovative mechanics.
                    `,
                    b1: "Download&nbsp<i>Memory Shift</i>"
                },
                spirits: {
                    tit: "Twin Spirits",
                    con: `
                        Finalist in the 2º edition of the <a href="https://itch.io/jam/gamescholars-2nd-edition" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        Twin Spirits is a local co-op puzzle adventure game where two spirits must work together to reclaim a scepter capable of bringing them back to life.
                    `,
                    b1: "Download&nbsp<i>Twin Spirits</i>",
                    vid: 'Trailer Video'
                },
                papa: {
                    tit: "Cooking Papa",
                    con: `
                        Cooking Papa is an cooking game where you will have to prepare recipes with ingredients you don't have.
                        Cook against the clock and check the cooking book of the bad chef to replace the ingredients that are missing.
                    `,
                    b1: "Download&nbsp<i>Cooking Papa</i>"
                },
                vaporcade: {
                    tit: "Vaporcade",
                    con: `
                        Vaporcade is a vaporwave themed arcade game in which you control a spaceship and score points by shooting enemies and completing waves. 
                        In each wave, you'll find new enemies and, every other wave, a boss you'll have to defeat.
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
            credits: `This page was made with love by a human (✿◡‿◡)<br>AI must help, not replace (︶^︶)`,
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
            info: {
                title: 'Sobre Mi',
                desc1: "¡Hey! Me llamo Alejandro, pero me puedes llamar Alex. Soy un desarrollador español de ### años al que le gusta pasar el tiempo jugando y creando juegos.",
                desc2: "Comencé a hacer juegos en 2015, con 11 años, y luego tomé un descanso para aprender desarrollo de apps & webs en 2019. He estado haciendo todo ello desde 2022, pero hacer juegos es lo que más me entretiene.",
                desc3: "Soy una persona organizada, independiente y perfeccionista a la que le encanta dar su propio toque. Algunos de mis intereses son jugar, programar, el diseño gráfico y la fotografía.",
                contact: '¡Ponte en contacto!'
            },
            carousel: {
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
                ],
                next: '¡Hazme click para ver más fotos!'
            },
            career: {
                present: 'Presente',
                months: [
                    "Ene.",
                    "Feb.",
                    "Mar.",
                    "Abr.",
                    "May.",
                    "Jun.",
                    "Jul.",
                    "Ago.",
                    "Sep.",
                    "Oct.",
                    "Nov.",
                    "Dic."
                ],
                items: {
                    reckless: {
                        title: 'Reckless Monster Studio',
                        content: 'Practicas realizando juegos en Unreal Engine 5.'
                    },
                    university: {
                        title: 'Universidad Rey Juan Carlos',
                        content: 'Estudiado un grado de diseño y desarrollo de videojuegos.'
                    }
                }
            }
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
            items: {
                coon_gallery: {
                    tit: 'Coon Gallery',
                    con: `
                        Coon Gallery es una galería para Android y manager para PC enfocado en la privacidad que lleva la búsqueda inteligente a tu móvil sin depender de la nube.
                        <br><br>
                        Al vincular la galería de Android con el manager de PC, puedes crear copias de seguridad locales de tus álbumes y habilitar la búsqueda inteligente mediante la generación de descripciones, etiquetas y detección de texto en tus imágenes.
                        <br><br>
                        ¿Hay un gato en tu fotos? ¡Solo busca "cat" y lo encontrarás!
                    `,
                    b1: 'App para <i>Android</i>',
                    b2: 'App para <i>PC</i>'
                },
                demo_reel: {
                    tit: 'Demo Reel',
                    con: `
                        Un demo reel de algunos de mis mejores proyectos, mostrando mecanicas de 
                        <a href="https://botpa.itch.io/tochimochi" target="_blank">Tochimohi</a>,
                        Hackoon (en desarrollo),
                        <a href="https://botpa.itch.io/spyw4re" target="_blank">Spyw4re</a>,
                        <a href="https://botpa.itch.io/hardcore-kitty" target="_blank">Hardcore Kitty</a> y 
                        <a href="https://botpa.itch.io/the-lost-fresquita" target="_blank">The Lost Fresquita</a>.
                    `,
                    vid: 'Ver Demo Reel'
                },
                tochimochi: {
                    tit: 'Tochimochi',
                    con: `
                        Segundo puesto en la edicion international de la <a href="https://itch.io/jam/game-jam-internacional-cutn-buenos-aires" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Tochimochi, ayudarás a tu nuevo amigo virtual, Mochi, a completar la misión de ver a su abuela. Para ello, tendrás que combinar el mundo real con el virtual para resolver puzles usando tu ordenador y tu móvil.
                    `,
                    b1: 'Descargar&nbsp<i>Tochimochi</i>',
                    vid: 'Ver Gameplay'
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
                        En Hardcore Kitty, tomarás el rol de un gato que trabaja en una empresa de reparto. 
                        Tu objetivo será encontrar puntos de recogida, coger la comida y llevarla hasta los puntos de entrega, haciendo trucos y piruetas con el skate por el camino.
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
                        Stardew Pets es una extensión para VS Code con +19K descargas que te permite tener mascotas de Stardew Valley acompañandote mientras programas.
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
                        En Spyw4re, tomarás el rol de operador de CCTV en un asilo que se está derrumbando con un paciente dentro, por lo que tendrás que ayudarlo a salir. 
                        Para lograrlo, tendrás que resolver puzles y derrotar enemigos pero, no creas que será tan fácil, alguien no quiere que lo ayudes...
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
                        Sobrevive a oleadas de enemigos con armas diferentes, deslizandote y realentizando el tiempo a tu antojo en un edificio en construcción.
                    `,
                    b1: "Descargar&nbsp<i>High on Time</i>",
                    vid: 'Ver Gameplay'
                },
                fresquita: {
                    tit: "The lost Fresquita",
                    con: `
                        Uno de los juegos premiados de la <a href="https://itch.io/jam/la-illojam" target="_blank">IlloJam</a>, una gamejam organizada para <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>.
                        <br><br>
                        En The lost Fresquita encarnaras el rol de Juan, un despistado que se ha olvidado varias cervezas en el bosque y tiene como misión encontrarlas y volver a casa a salvo. 
                        ¿Que a qué me refiero con a salvo? 
                        Digamos que algunos de sus amigos no te harán la vida fácil...
                    `,
                    b1: "Descargar&nbsp<i>The lost Fresquita</i>",
                    vid: 'IlloJuan Jugando en Stream'
                },
                raccoon: {
                    tit: "Esto AÚN no es un Juego",
                    con: `
                        Ganador de la 3º edicion de la <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Esto AÚN no es un juego, ayudarás a un mapache programador a terminar su juego antes de que acabe su gamejam. 
                        Para conseguirlo, tendrás que meterte dentro de este y arreglar los bugs desde su interior, cambiando cómo funcionan las cosas de manera que se pueda completar cada nivel.
                    `,
                    b1: "Descargar&nbsp<i>Esto AÚN no es un Juego</i>",
                    vid: 'Ver Gameplay'
                },
                lmdshow: {
                    tit: "Escape From LMDShow",
                    con: `
                        ¡Gracias por jugar <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>!
                        <br><br>
                        Escape from LMDShow es un juego tipo escape room en el que Juan Alberto, un malagueño mu salao, es secuestrado por LMDShow y, resolviendo puzles con objetos y códigos, trata de escapar de la casa donde ha sido encerrado.
                    `,
                    b1: "Descargar&nbsp<i>Escape From LMDShow</i>",
                    vid: 'IlloJuan Jugando en Stream'
                },
                memory_shift: {
                    tit: "Memory Shift",
                    con: `
                        Memory Shift es un plataformas de acción 2D con un gameplay rápido y un sistema de hackeo inspirado por juegos como Katana ZERO y Cyberpunk 2077.
                        <br><br>
                        Corre, mata, hackea, deslízate y descubre qué te ocurrió antes de perder tus recuerdos en esta aventura narrativa con niveles hechos a mano y mecánicas innovadoras.
                    `,
                    b1: "Descargar&nbsp<i>Memory Shift</i>"
                },
                spirits: {
                    tit: "Twin Spirits",
                    con: `
                        Finalista en la 2º edicion de la <a href="https://itch.io/jam/gamescholars-2nd-edition" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        Twin Spirits es un juego cooperativo local de puzles y aventuras en el que dos espíritus deben trabajar juntos para recuperar un cetro capaz de devolverles la vida.
                    `,
                    b1: "Descargar&nbsp<i>Twin Spirits</i>",
                    vid: 'Ver Trailer'
                },
                papa: {
                    tit: "Cooking Papa",
                    con: `
                        Cooking Papa es un juego de cocina en el que tendrás que preparar recetas con ingredientes que no tienes.  
                        Cocina a contra reloj y consulta el libro de recetas del mal cocinero para remplazar los ingredientes que faltan.
                    `,
                    b1: "Descargar&nbsp<i>Cooking Papa</i>"
                },
                vaporcade: {
                    tit: "Vaporcade",
                    con: `
                        Vaporcade es un juego arcade con temática vaporwave en el que controlas una nave y ganas puntos disparando a enemigos y completando oleadas.  
                        En cada oleada, encontraras nuevos enemigos y, por cada dos oleadas, un jefe al que derrotar.
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
            credits: 'Esta pagina fue hecha con cariño por un humano (✿◡‿◡)<br>La IA debe ayudar, no remplazar (︶^︶)',
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
})



  /*$$$$$  /$$                             /$$
 /$$__  $$| $$                            | $$
| $$  \ $$| $$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$
| $$$$$$$$| $$__  $$ /$$__  $$| $$  | $$|_  $$_/
| $$__  $$| $$  \ $$| $$  \ $$| $$  | $$  | $$
| $$  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$
| $$  | $$| $$$$$$$/|  $$$$$$/|  $$$$$$/  |  $$$$/
|__/  |__/|_______/  \______/  \______/    \__*/

const Career = Object.freeze({
    reckless: {
        icon: 'game.webp',
        startMonth: 12,
        startYear: 2025,
        endMonth: 0,
        endYear: 0,
    },
    university: {
        icon: 'university.webp',
        startMonth: 9,
        startYear: 2022,
        endMonth: 1,
        endYear: 2026,
    }
})



  /*$$$$$  /$$       /$$ /$$ /$$
 /$$__  $$| $$      |__/| $$| $$
| $$  \__/| $$   /$$ /$$| $$| $$  /$$$$$$$
|  $$$$$$ | $$  /$$/| $$| $$| $$ /$$_____/
 \____  $$| $$$$$$/ | $$| $$| $$|  $$$$$$
 /$$  \ $$| $$_  $$ | $$| $$| $$ \____  $$
|  $$$$$$/| $$ \  $$| $$| $$| $$ /$$$$$$$/
 \______/ |__/  \__/|__/|__/|__/|______*/

const Skill = Object.freeze({
    game: {
        id: 'skillsGame',
        experience: 4,
    },
    app: {
        id: 'skillsApp',
        experience: 4,
    },
    web: {
        id: 'skillsWeb',
        experience: 2,
    },
    design: {
        id: 'skillsDesign',
        experience: 2,
    },
    ui: {
        id: 'skillsUI',
        experience: 2,
    },
    '3d': {
        id: 'skills3D',
        experience: 1,
    }
})



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

//Properties
const Category = Object.freeze({
    all: 'all',
    games: 'games',
    apps: 'apps',
    design: 'design',
    other: 'other'
})

const Tag = Object.freeze({
    //All
    all: 'all',

    //Languages
    cs: 'C#',
    java: 'Java',
    kotlin: 'Kotlin',
    cpp: 'C++',
    python: 'Python',
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    ts: 'TypeScript',
    nodejs: 'NodeJS',
    electronjs: 'ElectronJS',

    //Apps
    unity: 'Unity',
    vscode: 'VSCode',
    blender: 'Blender',
    photoshop: 'Photoshop',
    illustrator: 'Illustrator',
    max3ds: '3ds Max',
    substance: 'Substance Painter',
    androidstudio: 'Android Studio',

    //Other
    discordapi: 'discordapi',
    uiux: 'uiux',
    print3d: '3dprint',
    model3d: '3dmodel',
    sketching: 'sketching',
    electronics: 'electronics',
    diy: 'diy'
})

const Sort = Object.freeze({
    favs: 'favs',
    date: 'date'
})

const Scope = Object.freeze({
    team: 'team',
    solo: 'solo',
    personal: 'personal',
    jam: 'jam'
})

const FavPoints = Object.freeze({
    top: 125,
    cool: 100,
    fine: 75,
    mid: 50,
    meh: 0
})

//Projects
const Project = Object.freeze({
    coon_gallery: {
        key: 'coon_gallery',
        dateStart: 2025,
        dateEnd: 2026,
        favPoints: FavPoints.cool,
        category: Category.apps,
        tags: [Tag.kotlin, Tag.python, Tag.androidstudio, Tag.uiux],
        buttons: ['https://github.com/BOTPanzer/Coon-Gallery', 'https://github.com/BOTPanzer/Coon-Gallery-PC'],
    },
    demo_reel: {
        key: 'demo_reel',
        dateStart: 2023,
        dateEnd: 2025,
        favPoints: FavPoints.top,
        category: Category.games,
        tags: [Tag.cs, Tag.unity],
        vid: '6CoRTMQBFt4'
    },
    tochimochi: {
        key: 'tochimochi',
        dateStart: 2025,
        dateEnd: 2025,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.html, Tag.css, Tag.js, Tag.unity, Tag.blender, Tag.photoshop],
        buttons: ['https://botpa.itch.io/tochimochi'],
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
        buttons: ['https://www.artstation.com/artwork/lGQ84V']
    },
    map_pinner: {
        key: 'map_pinner',
        dateStart: 2025,
        dateEnd: 2025,
        favPoints: FavPoints.mid,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.html, Tag.css, Tag.js],
        buttons: ['http://botpanzer.github.io/Map-Pinner']
    },
    hardcore_kitty: {
        key: 'hardcore_kitty',
        dateStart: 2025,
        dateEnd: 2025,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.blender, Tag.photoshop],
        buttons: ['https://botpa.itch.io/hardcore-kitty'],
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
        buttons: ['https://github.com/BOTPanzer/Turbo-Stealer']
    },
    spyw4re: {
        key: 'spyw4re',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.js, Tag.nodejs, Tag.unity, Tag.blender, Tag.photoshop],
        buttons: ['https://botpa.itch.io/spyw4re'],
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
        buttons: ["https://www.artstation.com/bot_panzer/albums/14597252"]
    },
    stardew_pets: {
        key: 'stardew_pets',
        dateStart: 2024,
        dateEnd: 2025,
        favPoints: FavPoints.cool,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.ts, Tag.html, Tag.css, Tag.photoshop],
        buttons: ['https://marketplace.visualstudio.com/items?itemName=botpa.stardew-pets']
    },
    hackoon: {
        key: 'hackoon',
        dateStart: 2024,
        dateEnd: Infinity,
        favPoints: FavPoints.cool,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.blender, Tag.photoshop],
        buttons: ['https://www.tiktok.com/@botpanzer']
    },
    hightime: {
        key: 'hightime',
        dateStart: 2024,
        dateEnd: 2024,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.photoshop],
        buttons: ['https://botpa.itch.io/high-on-time'],
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
        buttons: ['https://botpa.itch.io/the-lost-fresquita'],
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
        buttons: ['https://botpa.itch.io/esto-aun-no-es-un-juego'],
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
        buttons: ['https://botpa.itch.io/escape-from-lmdshow'],
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
        buttons: ['https://botpa.itch.io/memory-shift']
    },
    spirits: {
        key: 'spirits',
        dateStart: 2023,
        dateEnd: 2023,
        favPoints: FavPoints.cool,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.illustrator, Tag.photoshop],
        buttons: ['https://botpa.itch.io/twin-spirits'],
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
        buttons: ['https://botpa.itch.io/cooking-papa']
    },
    vaporcade: {
        key: 'vaporcade',
        dateStart: 2022,
        dateEnd: 2022,
        favPoints: FavPoints.fine,
        scope: [Scope.solo, Scope.personal],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.illustrator, Tag.photoshop],
        buttons: ['https://botpa.itch.io/vaporcade']
    },
    otters: {
        key: 'otters',
        dateStart: 2022,
        dateEnd: 2022,
        favPoints: FavPoints.meh,
        scope: [Scope.team, Scope.jam],
        category: Category.games,
        tags: [Tag.cs, Tag.unity, Tag.max3ds, Tag.substance, Tag.illustrator, Tag.photoshop],
        buttons: ['https://botpa.itch.io/otters-odyssey']
    },
    assistant_pc: {
        key: 'assistant_pc',
        dateStart: 2021,
        dateEnd: 2025,
        favPoints: FavPoints.mid,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.html, Tag.css, Tag.js, Tag.nodejs, Tag.electronjs, Tag.uiux],
        buttons: ['https://github.com/BOTPanzer/Orion-Assistant', 'https://github.com/BOTPanzer/USB-Launcher']
    },
    assistant_android: {
        key: 'assistant_android',
        dateStart: 2021,
        dateEnd: 2025,
        favPoints: FavPoints.mid,
        scope: [Scope.solo, Scope.personal],
        category: Category.apps,
        tags: [Tag.java, Tag.androidstudio, Tag.uiux],
        buttons: ['Data/Orion Assistant 1.10.4.apk']
    },
    //Usually hidden from here
    framework: {
        key: 'framework',
        dateStart: 2022,
        dateEnd: 2024,
        favPoints: FavPoints.mid,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.html, Tag.css, Tag.js, Tag.uiux],
        buttons: ['https://botpanzer.github.io/Orion-Framework']
    },
    discord_bots: {
        key: 'discord_bots',
        dateStart: 2018,
        dateEnd: 2020,
        favPoints: FavPoints.meh,
        scope: [Scope.solo, Scope.personal],
        category: Category.other,
        tags: [Tag.js, Tag.discordapi],
        buttons: ["https://github.com/BOTPanzer/Syrup"]
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

const SelectedProjects = Object.freeze([
    Project.demo_reel,
    Project.spyw4re,
    Project.tochimochi,
    Project.stardew_pets,
    Project.coon_gallery,
    Project.hardcore_kitty,
    Project.akira_posters,
    Project.artist_posters,
    Project.map_pinner,
    Project.hightime,
    Project.stealer,
    //Projects.hackoon,
    Project.fresquita,
    Project.raccoon,
    Project.lmdshow,
    Project.memory_shift,
    Project.spirits,
    Project.vaporcade,
    //Project.papa,
    //Project.otters,
    Project.assistant_pc,
    Project.assistant_android,
    //Project.framework,
    //Projects.discord_bots,
    //Projects.modding,
    //Projects.t45,
    //Projects.usb,
    //Projects.hoodie,
])



  /*$$$$$            /$$       /$$                                                                   /$$
 /$$__  $$          | $$      |__/                                                                  | $$
| $$  \ $$  /$$$$$$$| $$$$$$$  /$$  /$$$$$$  /$$    /$$ /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
| $$$$$$$$ /$$_____/| $$__  $$| $$ /$$__  $$|  $$  /$$//$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
| $$__  $$| $$      | $$  \ $$| $$| $$$$$$$$ \  $$/$$/| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
| $$  | $$| $$      | $$  | $$| $$| $$_____/  \  $$$/ | $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
| $$  | $$|  $$$$$$$| $$  | $$| $$|  $$$$$$$   \  $/  |  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
|__/  |__/ \_______/|__/  |__/|__/ \_______/    \_/    \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |______*/

const Achievement = Object.freeze({
    theme: 'theme',
    artyom: 'artyom',
    project: 'project',
    contact: 'contact',
})
