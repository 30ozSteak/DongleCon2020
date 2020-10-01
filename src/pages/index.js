import React from "react"
import { Link } from "gatsby"
import "../utils/styles.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="header">
      <h1>Dongle-Con</h1>
      <p>
        December 1, 2020 | <span>Online</span>
      </p>
      <div>
        <form>
          <input placeholder="Enter email to register" type="text" />
          <button>Register</button>
        </form>
      </div>
      <p>
        This was a silly joke and I don't want it to die | Code of Conduct |
        Privacy Policy | Proposal Guidelines | info@donglecon.dev
      </p>
    </div>
  </Layout>
)

export default IndexPage
