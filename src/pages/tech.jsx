import Head from 'next/head'
import { Card } from '@/components/Card'
import { Section } from '@/components/Layout/containers/Section'
import { SimpleLayout } from '@/components/Layout/containers/SimpleLayout'
import FadeIn from '@/components/Layout/containers/FadeIn'
import { techPage as page } from '@/lib/data'

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

export default function Tech() {
  return (
    <>
      <Head>
        <title>{`${page.title} - Angelica Moberg Skoglund`}</title>
        <meta name="description" content="Tech and stack I use." />
      </Head>
      <FadeIn>
        <SimpleLayout title={page.title} intro={page.intro}>
          <div className="space-y-20">
            {page.categories.map((category) => (
              <ToolsSection title={category.title}>
                {category.tech.map((object) => (
                  <Tool title={object.title}>{object.description}</Tool>
                ))}
              </ToolsSection>
            ))}
          </div>
        </SimpleLayout>
      </FadeIn>
    </>
  )
}
