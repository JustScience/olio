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
const ProcessPage = () => {
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
          headline="Design Process"
          text="Elegant design for complex customer experiences"
        />
        <Section>
          <Contain>
            <Row>
              <Column>
                <StaticImage src="../images/projects/ux/gali-1.png" />
              </Column>
              <Column>
                <h2>Design Thinking</h2>
                <p>Despite the cringe-worthiness of this term, it’s highly beneficial for the business-minded to embody the vision and perspective of the designer’s mind at times. Though we do not attempt to sell “Design Thinking” as others may, it is thoroughly engrained in every procedure and practice we engage in for our clients.</p>
              </Column>
            </Row>
          </Contain>
        </Section>
        <Section>
          <Contain>
            <Row>
              <Column>
                <h2>UX Strategy</h2>
                <p>True experience design begins with an elegantly simple solution to the root of a difficult and complex problem. In a UX Strategy engagement our goal is to uncover and solve for the most critical pain points of the business as well as the customer, and fuse them together into a collectively beneficial brand relationship through thoughtful design strategy.</p>
              </Column>
              <Column>
                <StaticImage src="../images/projects/ux/gali-1.png" />
              </Column>
            </Row>
          </Contain>
        </Section>
        <Section>
          <Contain>
            <Row>
              <Column>
                <StaticImage src="../images/projects/ux/gali-1.png" />
              </Column>
              <Column>
                <h2>Product Design</h2>
                <p>When the dust has settled and the UX Strategy is clearly defined, it’s time to design the product. This can be anything from a website to a mobile app, or even a physical product. The goal here is to utilize the thoughtful experience strategy into a beautiful end product that is just as fun and delightful as it is powerful and simply effective to engage with.</p>
              </Column>
            </Row>
          </Contain>
        </Section>
        <Section>
          <Contain>
            <Row>
              <Column>
                <h2>Design Technology</h2>
                <p>The bridge between design and development is critical in handoff between departments. Design technology is critical in strengthening that connection. With a strategic design system, and a solid UI component library designers can discuss implementation of critical experiences with developers responsible for the functionality, with nothing lost in translation.</p>
              </Column>
              <Column>
                <StaticImage src="../images/projects/ux/gali-1.png" />
              </Column>
            </Row>
          </Contain>
        </Section>
        <Section>
          <Contain>
            <Row>
              <Column>
                <StaticImage src="../images/projects/ux/gali-1.png" />
              </Column>
              <Column>
                <h2>Design Operations</h2>
                <p>When your design production output is already top notch, and it’s time to scale, Design Operations structuring is the next key to success in exponential growth of the design team and project throughput.</p>
              </Column>
            </Row>
          </Contain>
        </Section>
      </Layout>
    </>
  )
}

export default ProcessPage