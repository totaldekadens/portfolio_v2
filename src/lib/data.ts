import logoAtria from '@/images/logos/atria.png'
import logoH5 from '@/images/logos/h5.png'
import logoWallmander from '@/images/logos/wallmander.png'
import logoWallmanderWhite from '@/images/logos/logo-white-transparant.png'
import logoIngram from '@/images/logos/ingram.png'
import logoVGR from '@/images/logos/vglogo.png'
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
        'Angelica and Jacob have not only developed an online makeup store with an innovative concept, but an entire E-commerce platform with an in-house developed backend. Almost 20,000 lines of code in, among other things, Next.js and Mantine.dev resulted in an expandable web production and a very good foundation to stand on. The technologies along with MongoDB have been applied in the best possible way. Angelica and Jacob demonstrate the ability to go from idea to finished product in a short time.',
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
    company: 'Västra Götalandsregionen',
    title: 'System Developer',
    logoDark: logoVGR,
    logoLight: logoVGR,
    start: '2023',
    end: '',
  },
  {
    company: 'Wallmander & Co',
    title: 'Web Developer - Internship',
    logoDark: logoWallmanderWhite,
    logoLight: logoWallmander,
    start: '2023',
    end: '2023',
  },
  {
    company: 'H5 Förnyelsebyrå AB',
    title: 'Web Developer - Internship',
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
  title: 'Hello hello! :)',
  intro:
    'Welcome to my profile! This was previously my portfolio site that I used while searching for my first job as a developer. Please note that this site will no longer be updated.',
  sections: [
    {
      header: 'Teamwork and leadership',
      text: 'I played soccer until I turned 23 so I’m a team player in the root. We do it together and complement each other, that’s my mindset and how I like to work.',
    },
    {
      header: '',
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
