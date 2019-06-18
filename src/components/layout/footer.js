import React, { Component } from "react";
import "./footer.sass";
import BuiltBy from "./builtby";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = this.props.data;
    return (
      <footer className="footer">
        <h3>game research labs</h3>
        {/* <p>
          game research lab
        </p> */}
        <BuiltBy />
      </footer>
    );
  }
}

export default Footer;
