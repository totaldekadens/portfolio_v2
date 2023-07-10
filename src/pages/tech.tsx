import Head from 'next/head'
import { Card } from '@/components/Card'
import { Section } from '@/components/Layout/containers/Section'
import { SimpleLayout } from '@/components/Layout/containers/SimpleLayout'
import FadeIn from '@/components/Layout/containers/FadeIn'
import Tech, { TechCategory, TechDocument } from '@/models/TechModel'
import dbConnect from '@/lib/dbConnect'
import { GetStaticProps } from 'next'

interface ToolSectionProps {
  title: string
  children: React.ReactNode
}

interface ToolProps {
  title: string
  children: React.ReactNode
}

interface Props {
  page: TechDocument
}

function ToolsSection({ children, title }: ToolSectionProps) {
  return (
    <Section title={title}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, children }: ToolProps) {
  return (
    <Card as="li">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function TechPage({ page }: Props) {
  return (
    <>
      <Head>
        <title>{`${
          page.title ? page.title : 'Tech / Stack'
        } - Angelica Moberg Skoglund`}</title>
        <link
          rel="canonical"
          href="https://www.mobergskoglund.se/"
          key="canonical"
        />
        <meta
          property="og:image"
          content="https://mobergskoglund.se/logos/Angelica_MS_dark.webp"
        />
      </Head>
      <FadeIn>
        <SimpleLayout title={page[0].title} intro={page[0].intro}>
          <div className="space-y-20">
            {page
              ? page[0].categories.map((category: TechCategory, i: number) => (
                  <ToolsSection key={i} title={category.title}>
                    {category.tech.map((object, i) => (
                      <Tool key={i} title={object.title}>
                        {object.description}
                      </Tool>
                    ))}
                  </ToolsSection>
                ))
              : null}
          </div>
        </SimpleLayout>
      </FadeIn>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect()

  const page = await Tech.find({})

  return { props: { page: JSON.parse(JSON.stringify(page)) } }
}
