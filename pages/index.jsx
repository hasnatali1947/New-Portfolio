import styled from "styled-components"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import { colors } from "../utilities/common"
import Menu from "../layout/menu.jsx"
import Footer from "../layout/footer"
import Navigation from "../layout/navigation"
import { useRef } from "react"
import Head from 'next/head'
// import logo from '../assets/images/logoWhite.png'

const Main = styled.div`
  background-color: ${colors.background};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  margin: 0;
`

export default function Home() {

  const hero = useRef(null)
  const projects = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)

  return (
    <Main>
      <Head>
        <title>Hasnat Portfolio</title>
        {/* <link rel="icon" href={logo.src} /> */}
        <title>Hasnat Ali</title>
        <meta name="description" content="Hasnat Ali portfolio website. A web developer full of skills" key="desc" />
        <meta property="og:title" content="Hasnat Ali portfolio" />
        <meta
          property="og:description"
          content="Hasnat Ali portfolio website. A web developer full of skills"
        />
      </Head>
      <h1 style={{display: "none"}} >Hasnat Ali Portfolio</h1>
      <Menu about={about} projects={projects} contact={contact} />
      <Navigation hero={hero} />
      <Hero hero={hero} contact={contact} />
      <Projects projects={projects} />
      <About about={about} />
      <Contact contact={contact} />
      <Footer />
    </Main>
  )
}
