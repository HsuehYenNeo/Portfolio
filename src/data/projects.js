import punnyImg from '../assets/screenshots/punny.png'
import tabooImg from '../assets/screenshots/taboo.png'
import clickImg from '../assets/screenshots/clickclickprint.png'
import memeImg from '../assets/screenshots/memegenerator.png'

const projects = [
    {
        title: 'Pun-ny Jokes',
        image: punnyImg,
        alt: 'Image of funny jokes',
        url: 'https://punny-jokes.netlify.app/',
        techStack: [
            '< Angular,  ',
            'Typescript >',
        ],
        description:
            'A simple joke app which utilizes public API endpoints of different catergories.'
    },
    {
        title: 'Online Games',
        image: tabooImg,
        alt: 'Image of online games',
        url: 'https://online-games-neo.netlify.app/',
        techStack: [
            '< React,  ',
            'Javascript >',
        ],
        description:
            'An online platform of party games, e.g. Taboo, Guess Who?, etc.'
    },
    {
        title: 'Click-Click-Print',
        image: clickImg,
        alt: 'Image of click-click-print',
        url: 'https://clickclickprint.org',
        techStack: [
            '< React, ',
            'React DnD, ',
            'Javascript >',
        ],
        description:
            'An easy, fast and flexible chemical label maker for laboratory.'
    },
    {
        title: 'Meme Generator',
        image: memeImg,
        alt: 'Image of meme generator',
        url: 'https://laughing-lamarr-1ace5c.netlify.app/',
        techStack: [
            '< React, ',
            'Javascript, ',
            'RESTful API >',
        ],
        description:
            'A fast and simple meme generator app with collection of popular memes.'
    },

]

export default projects;