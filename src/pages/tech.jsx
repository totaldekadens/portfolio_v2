import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Tech - Angelica Moberg Skoglund</title>
        <meta name="description" content="Tech and stack I use." />
      </Head>
      <SimpleLayout
        title="Tech / Stack"
        // intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Frontend">
            <Tool title="Next.js">
              My first choice of framework to work with. My Master Thesis is
              built in Next.js. It was also the main tech I worked with at both
              my LIA´s.
            </Tool>
            <Tool title="React.js">
              The Javascript framework I learned in school and am very
              comfortable with.
            </Tool>
            <Tool title="Typescript">
              Most of my React.js/Next.js projects are built with Typescript. It
              was also a "standard" at both my LIA's.
            </Tool>

            <Tool title="Wordpress">
              I learned how to create a child theme and how to build a simple
              WooCommerce site.
            </Tool>
            <Tool title="WooCommerce" />
          </ToolsSection>
          <ToolsSection title="CSS-Libraries">
            <Tool title="Tailwind" />
            <Tool title="Mantine.dev" />
            <Tool title="Material UI" />
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma" />
          </ToolsSection>
          <ToolsSection title="Backend/Database">
            <Tool title="Node.js (Express.js)">
              Node.js is my preferred language in backend and is also the one
              I'm most comfortable with together with Next.js.{' '}
            </Tool>
            <Tool title="Next.js" />
            <Tool title="PHP">
              Learned PHP at my Worpress course and also at my system
              development course. This is the language I have least work
              experience in (LIA).{' '}
            </Tool>
            <Tool title="MongoDB (Mongoose.js)">
              I used MongoDB at my Master Thesis and a few other projects before
              that. This is the database I'm most comfortable with.
            </Tool>
            <Tool title="MySQL">
              Learned MySQL in the beginning of my education. Did one E-commerce
              project with it together with PHP.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Other good things!">
            <Tool title="Stripe.js">
              Used Stripe.js at my Master Thesis and also another project before
              that. The parts I touched was "create customer", "create order",
              "payment" and "verification of payment"{' '}
            </Tool>
            <Tool title="Cypress.io">
              I learned Cypress at my LIA 1 very briefly. I can do simple tests
            </Tool>
            <Tool title="BigCommerce">
              At my second LIA I learned how to integrate BigCommerce with a
              Next.js project.{' '}
            </Tool>
            <Tool title="Git" />
            <Tool title="Agile Methods" />
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
