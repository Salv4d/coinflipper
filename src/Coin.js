import { Component } from "react";
import heads from "./assets/coin_head.jpg";

class Coin extends Component {
  static defaultProps = {
    face: heads,
  };

  render() {
    return (
      <div className="Coin">
        <img src={this.props.face} />
      </div>
    );
  }
}

export default Coin;
