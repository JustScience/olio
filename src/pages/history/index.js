import * as React from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

// components
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import Contain from "../../components/Contain"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
// import Banner from "../../components/Banner"
// import Gallery from "../../components/Gallery"

// markup
const HistoryPage = () => {
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
            <Row>
              <Column>
                <h2>History</h2>
              </Column>
              <Column>
                  <StaticImage src="../images/projects/ux/gali-2.png" />
              </Column>
            </Row>
          </Contain>
        </Section>
      </Layout>
    </>
  )
}

export default HistoryPage