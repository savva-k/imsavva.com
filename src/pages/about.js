import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/pageTitle"
import meJpg from "../images/me.jpg"
import tacoPng from "../images/taco.png"
import { isMobile } from "react-device-detect"

const photoStyle = {
  float: "right",
  width: "230px",
  marginLeft: "10px",
  marginBottom: "10px",
}

const About = () => (
  <Layout showNavigation={true}>
    <SEO title="About me" />
    <Header header="About me" img={tacoPng} />
    <div>
      <img src={meJpg} alt="My pic" style={isMobile ? {} : photoStyle} />
      <p>
        I come from the times when there were no social networks and many
        Internet users would have their own website instead. It was always
        interesting to see different and unique designs, as if you visited
        users' own homes. This website is a tribute to the tradition, a way to
        practice some interesting technologies and a place to keep my more or
        less useless notes.
      </p>
      <p>
        My name is Savva Kodeikin and I am a software developer with 5+ years of
        experience.
      </p>
      <p>
        Apart from being a software developer, I am a human. I like hanging out
        with friends, riding a motorbike, going camping, diving and
        snowboarding.
      </p>
      <p>
        To contact me, send an email:{" "}
        <a href="mailto:mail@imsavva.com">mail@imsavva.com</a>
      </p>
      <p>
        Feel free to encrypt your message with the{" "}
        <a href="https://github.com/FiloSottile/age">age</a> tool. <br />
        Here is my <a href="/public-key.txt">public key</a>.
      </p>
    </div>
  </Layout>
)

export default About
