import React, { Component } from "react";
import style from "../assets/style/style.module.css";
import { connect } from "react-redux";

class Burger extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    return Object.entries(burger).map(([name, value], index) => {
      let foodArr = [];
      for (let i = 0; i < value; i++) {
        foodArr.push(<div key={index} className={`${style[name]}`}></div>);
      }
      return foodArr;
    });
  };
  render() {
    return (
      <div className="container">
        <div className={`${style["breadTop"]}`}></div>
        {this.renderBreadMid()}

        <div className={`${style["breadBottom"]}`}></div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    burger: rootReducer.burgerReducer.burger,
  };
};

export default connect(mapStateToProps)(Burger);
