import * as React from 'react'
import { Layout } from '../components';
import { Hero, About, Works, Featured, Projects, Contact, } from '../components/sections';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <About />
      <Works />
      <Featured />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage