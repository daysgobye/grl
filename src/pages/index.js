import React, { Component } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
          <div style={{height: "50vh"}} className="bofy">

          </div>
                  </Content>
      </Layout>
    );
  }
}

export default IndexPage;