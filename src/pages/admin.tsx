import { SimpleLayout } from '@/components/Layout/containers/SimpleLayout'
import Head from 'next/head'
import FadeIn from '@/components/Layout/containers/FadeIn'

const Admin = () => {
  return (
    <>
      <Head>
        <title>{`Admin panel - Angelica Moberg Skoglund`}</title>
        <meta name="description" content="" />
      </Head>
      <FadeIn>
        <SimpleLayout
          title={'Admin panel'}
          intro={'Här kommer du kunna ändra allt sen'}
        >
          <h3>Dags att jobba</h3>
        </SimpleLayout>
      </FadeIn>
    </>
  )
}

export default Admin
