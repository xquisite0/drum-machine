import React, { Component } from "react";

export default class DrumPart extends Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }
  onKeyDown(e) {
    let key = this.props.sound.keyTrigger;
    if (e.keyCode === key.charCodeAt(0)) {
      this.props.onKeyClick(
        String.fromCharCode(e.keyCode),
        this.props.sound.id
      );
    }
  }
  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.sound.id}
        onClick={this.props.onClick}
      >
        {this.props.sound.keyTrigger}
        <audio
          src={this.props.sound.url}
          className="clip"
          id={this.props.sound.keyTrigger}
        ></audio>
      </button>
    );
  }
}
