import Head from 'next/head'
import Template from '../components/template'

const Home = () => {
  return (
    <Template>
      <Head>
        <title>Crianda aplicação com Next</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet" /> 
      </Head>
    </Template>
  )
}

export default Home;
