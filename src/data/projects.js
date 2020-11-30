import rateitImg from '../assets/screenshots/rateIT.png'
import punnyImg from '../assets/screenshots/punny.png'
import tabooImg from '../assets/screenshots/taboo.png'
import clickImg from '../assets/screenshots/clickclickprint.png'
import memeImg from '../assets/screenshots/memegenerator.png'

const projects = [
    {
        title: 'RateIT',
        image: rateitImg,
        alt: 'Image of rate it',
        url: 'https://rateit-26776.web.app/',
        techStacks: [
            'Angular',
            'TypeScript ',  
            'Firebase'
        ],
        description:
            'In a nutshell, a better version of Excel sheet for sharing resource links.'
    },
    {
        title: 'Pun-ny Jokes',
        image: punnyImg,
        alt: 'Image of funny jokes',
        url: 'https://punny-jokes.netlify.app/',
        techStacks: [
            'Angular',
            'TypeScript',
            'API'
        ],
        description:
            'A simple joke app which utilizes public API endpoints of different catergories.'
    },
    {
        title: 'Online Games',
        image: tabooImg,
        alt: 'Image of online games',
        url: 'https://online-games-neo.netlify.app/',
        techStacks: [
            'React',
            'React SidePanel',
            'JavaScript',
        ],
        description:
            'An online platform of party games, e.g. Taboo, Guess Who?, etc.'
    },
    {
        title: 'Click-Click-Print',
        image: clickImg,
        alt: 'Image of click-click-print',
        url: 'https://clickclickprint.org',
        techStacks: [
            'React',
            'React DnD',
            'JavaScript',
        ],
        description:
            'An easy, fast and flexible chemical label maker for laboratory.'
    },
    {
        title: 'Meme Generator',
        image: memeImg,
        alt: 'Image of meme generator',
        url: 'https://laughing-lamarr-1ace5c.netlify.app/',
        techStacks: [
            'React',
            'JavaScript',
            'API',
        ],
        description:
            'A fast and simple meme generator app with collection of popular memes.'
    },

]

export default projects;