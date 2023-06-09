import Head from 'next/head'
import { Card } from '@/components/Card'
import { Section } from '@/components/Layout/containers/Section'
import { SimpleLayout } from '@/components/Layout/containers/SimpleLayout'
import FadeIn from '@/components/Layout/containers/FadeIn'
import Tech from '@/models/TechModel'
import dbConnect from '@/lib/dbConnect'

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

export default function TechPage({page}) {
  return (
    <>
      <Head>
        <title>{`${page.title} - Angelica Moberg Skoglund`}</title>
        <meta name="description" content="Tech and stack I use." />
      </Head>
      <FadeIn>
        <SimpleLayout title={page[0].title} intro={page[0].intro}>
          <div className="space-y-20">
            {page ? page[0].categories.map((category) => (
              <ToolsSection title={category.title}>
                {category.tech.map((object) => (
                  <Tool title={object.title}>{object.description}</Tool>
                ))}
              </ToolsSection>
            )) : null}
          </div>
        </SimpleLayout>
      </FadeIn>
    </>
  )
}

export const getStaticProps = async () => {
  await dbConnect()

  const page = await Tech.find({})

  return { props: { page : JSON.parse(JSON.stringify(page))}}

}