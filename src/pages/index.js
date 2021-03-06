import * as React from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

// components
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Contain from "../components/Contain"
import Section from "../components/Section"
// import Row from "../components/Row"
// import Column from "../components/Column"
// import Banner from "../components/Banner"
// import Gallery from "../components/Gallery"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Design Consulting | Branding &amp; UX Strategy | J Galenti</title>
        <link rel="canonical" href="http://galenti.io" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://galenti.io",
              "name": "Galenti Consulting",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "galenticonsulting@gmail.com",
                "contactType": "Project Booking"
              }
            }
          `}
        </script>
      </Helmet>
      <Layout>
        <Hero 
          headline="UX &amp; Brand Design Consulting"
          text="Elegant design for complex customer experiences"
        />
        <Section>
          <Contain>
          <h2>Value Prop</h2>
          <h2>Testimonials</h2>
          <h2>Problem Statement</h2>
          <h2>Process &amp; Services</h2>
          <h2>Past Work</h2>
          <h2>About &amp; History</h2>
          <h2>FAQs (average cost?)</h2>
          <h2>Free Consult CTA</h2>
          </Contain>
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage