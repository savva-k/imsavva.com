import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/pageTitle"

const NotFoundPage = () => (
  <Layout showNavigation={true}>
    <SEO title="404: Not found" />
    <Header header="Ooops... 404!" />
    <p>
      Looks like there's no such page. Please use the links on the left to
      navigate the site.
    </p>
    <p>
      If you think it is an error, I would appreciate recieving a message from
      you.
    </p>
    <p>
      You can find my contacts <Link to="/about">here</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
