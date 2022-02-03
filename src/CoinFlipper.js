import { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = { heads: 0, tails: 0, face: "head" };
    this.coinFaces = ["head", "tail"];

    this.flip = this.flip.bind(this);
  }

  render() {
    const { heads, tails } = this.state;

    return (
      <div className="CoinFlipper">
        <div className="CoinFlipper-coin">
          <Coin face={this.state.face} />
        </div>
        <button className="CoinFlipper-btn" onClick={this.flip}>
          Flip
        </button>
        <p>
          You had {heads} heads and {tails} tails out of {heads + tails} flips
        </p>
      </div>
    );
  }

  flip() {
    const rand = Math.floor(Math.random() * 2);

    this.setState((curState) => ({
      face: this.coinFaces[rand],
      heads: curState.heads + (rand === 0 ? 1 : 0),
      tails: curState.tails + (rand === 1 ? 1 : 0),
    }));
  }
}

export default CoinFlipper;
