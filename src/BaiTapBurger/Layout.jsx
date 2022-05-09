import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "./Burger";
import Menu from "./Menu";

class Layout extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Burger />
          </div>
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}


export default connect()(Layout);
