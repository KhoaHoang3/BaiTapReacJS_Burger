import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  renderMenu = () => {
    let { menu } = this.props;
    let { burger } = this.props;
    return Object.entries(menu).map(([name, price], index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>
            <button
              onClick={() => {
                this.props.updateAmount(name, -1);
              }}
              className="btn btn-outline-primary mr-2"
            >
              -
            </button>
            {burger[name]}
            <button
              onClick={() => {
                this.props.updateAmount(name, +1);
              }}
              className="btn btn-outline-primary ml-2"
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[name] * price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Chọn thức ăn</h3>
        <div className="table">
          <table className="table">
            <thead>
              <tr>
                <th>Thức ăn</th>
                <th>Thao tác</th>
                <th>Giá</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>{this.renderMenu()}</tbody>
            <tfoot>
              <tr>
                <td>Tổng tiền</td>
                <td></td>
                <td> </td>
                <td>{this.props.total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    menu: rootReducer.burgerReducer.menu,
    burger: rootReducer.burgerReducer.burger,
    total: rootReducer.burgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAmount: (name, amount) => {
      const action = {
        type: "UPDATE_AMOUNT",
        name,
        amount,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
