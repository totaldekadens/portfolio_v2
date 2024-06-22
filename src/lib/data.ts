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
    'Welcome to my old profile! If you got here before you landed at my start page I need to inform you  that this was previously my portfolio site that I used while searching for my first job as a developer. Although it will no longer be updated, I am keeping the site as a cherished memory to look back on. If you got here through my start page,  sorry you needed to read that again :) ',
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
