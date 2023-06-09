import logoAtria from '@/images/logos/atria.png'
import logoH5 from '@/images/logos/h5.png'
import logoWallmander from '@/images/logos/wallmander.png'
import logoWallmanderWhite from '@/images/logos/logo-white-transparant.png'
import logoIngram from '@/images/logos/ingram.png'
import { GitHubIcon, LinkedInIcon } from '@/components/Icons'

// Will be moved to MongoDB eventually

export interface Merit {
  date: string
  title: string
  description: string
}

export interface MeritProps {
  slug: string
  title: string
  intro: string
  merits: Merit[]
}

export const meritPage: MeritProps = {
  slug: 'merits',
  title: 'Merits / Resumé',
  intro: '',
  merits: [
    {
      date: '2023-05-17',
      title: 'Best Master Thesis in the class',
      description:
        'Angelica och Jacob har inte bara utvecklat en webbutik för smink med ett innovativt koncept utan en hel E-handelsplattform med ett egenutvecklat backend. Nästan 20 000 kodrader i bland annat Next.js och Mantine.dev resulterade i en utbyggnadsbar webbproduktion och en väldigt bra grund att stå på. Teknologierna tillsammans med MongoDB har tillämpats på bästa möjliga sätt. Angelica och Jacob demonstrerar förmågan att gå från idé till färdig produkt på kort tid.',
    },
    {
      date: '2023-05-17',
      title:
        'Graduated in Web development with focus on E-commerce at Medieinstitutet AB Göteborg',
      description: 'With VG in all courses',
    },
  ],
}

export const resume = [
  {
    company: 'Wallmander & Co',
    title: 'Web developer - Internship',
    logoDark: logoWallmanderWhite,
    logoLight: logoWallmander,
    start: '2023',
    end: '2023',
  },
  {
    company: 'H5 Förnyelsebyrå AB',
    title: 'Web developer - Internship',
    logoDark: logoH5,
    logoLight: logoH5,
    start: '2022',
    end: '2022',
  },
  {
    company: 'Atria Sweden',
    title: 'Production Coordinator',
    logoDark: logoAtria,
    logoLight: logoAtria,
    start: '2021',
    end: '2021',
  },
  {
    company: 'Ingram Micro Logistics AB',
    title: 'Group leader / Specialist ',
    logoDark: logoIngram,
    logoLight: logoIngram,
    start: '2011',
    end: '2021',
  },
]

export const aboutPage = {
  slug: 'about',
  title: 'Hi! I’m Angelica :)',
  intro:
    'Something I´ve always liked since I was a kid is problem solving. Not like how it is with a Rubik´s cube, more like: "Oh crap, this happened and we need to fix it!"  or  ”We want to be able to do that, can you fix it?”. I think I like it because I need to be creative with my mind and that is rewarding for my brain.',
  sections: [
    {
      header: 'My nish?',
      text: 'This one is so hard, because I’m right between frontend and backend at the moment. Meaning I still enjoy being part of the whole process.',
    },
    {
      header: '',
      text: 'I know I like to work with functionality and problem solving (as mentioned), so I’ve been drawn to eg admin pages within projects in school and been the one ending up with creating the API’s. But my interest for UX/UI is growing.',
    },
    {
      header: 'How I work?',
      text: 'When I go back and look at how it was at my previous workplaces, I notice a pattern. I like knowing things! So when I’m new at something I study hard and have no problem trying things out and ask questions. Because I know I’m the only one responsible for my own knowledge, no one else. So as a co-worker I think I am perceived as very driven and ambitious. But I have also heard that I´m comfortable to be around with. :)  If someone wants a hug, I´m always there.',
    },
    {
      header: 'Teamwork?',
      text: 'I played soccer until I turned 23 so I’m a team player in the root. I have no problem helping out if someone is in need of help or brainstorming. Asking for help is neither a problem for me. We do it together and we complement each other, that’s my mindset.',
    },
    {
      header: 'Leadership?',
      text: 'In total I have had a leadership role in almost 7 years. I love being there for people and help them grow. My ambition is not to be a leader again, but I think it’s a good thing to mention about my past.',
    },
  ],
  socialIcons: [
    {
      href: 'https://github.com/totaldekadens',
      title: 'Follow on GitHub',
      icon: GitHubIcon,
    },
    {
      href: 'https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/',
      title: 'Follow on LinkedIn',
      icon: LinkedInIcon,
    },
  ],
  email: 'angelica.moberg@hotmail.com',
}
