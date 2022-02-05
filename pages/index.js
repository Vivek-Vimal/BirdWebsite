import Head from 'next/head'
import NavBar from '../Components/NavBar'
import HomePage from './PageContainer/Home/HomePage'
import Banner from './PageContainer/Banner/Banner'
import Slide from './PageContainer/Slide/Slide'
import Roadmap from './PageContainer/Roadmap/Roadmap'
import Team from './PageContainer/Team/Team'
import Contact from './PageContainer/Contact/Contact'
import Footer from './PageContainer/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HomePage />
      <Banner />
      <Slide />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}