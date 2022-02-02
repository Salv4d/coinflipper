import { Component } from "react";
import Coin from "./Coin";
import head from "./assets/coin_head.jpg";
import tail from "./assets/coin_tail.jpg";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = { heads: 0, tails: 0, face: head };
    this.coinFaces = [head, tail];
    this.flip = this.flip.bind(this);
  }

  render() {
    return (
      <div className="CoinFlipper">
        <Coin face={this.state.face} />
      </div>
    );
  }

  flip() {
    const rand = Math.floor(Math.random() * 2);
    this.setState((curState) => ({ face: this.coinFaces[rand] }));
  }

  componentDidMount() {
    this.flip();
  }
}

export default CoinFlipper;