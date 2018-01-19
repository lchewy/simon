import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import randColor from "./RandomColor";
import game from "./Game";
import countDisplay from "./CountDisplay";

class Simon extends Component {
  constructor() {
    super();
    this.state = {
      on: false,
      flash: "",
      start: false,
      pattern: [],
      strict: false,
      sound: ""
    };
    this.on = this.on.bind(this);
    this.start = this.start.bind(this);
    this.sequence = this.sequence.bind(this);
    this.isStrict = this.isStrict.bind(this);
    this.flash = this.flash.bind(this);
  }

  on() {
    this.setState({ on: !this.state.on });
    if (this.state.on === false) {
      this.setState({
        start: false,
        strict: false,
        pattern: [],
        flash: "",
        sound: ""
      });
    }
  }

  start() {
    if (this.state.on) {
      // const color = randColor();
      // this.setState({pattern: [...this.state.pattern, color]  })
      this.setState({ start: !this.state.start});
      this.sequence();
    }
  }

  isStrict() {
    const { on, start } = this.state;
    if (on && start) {
      this.setState({ strict: !this.state.strict });
    }
  }

  async flash(evt) {
    const id = evt.target.id;
    const { start, on } = this.state;
    if (id === "blue" && start && on)
      await this.setState({
        flash: "fb",
        sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
      });
    if (id === "yellow" && start && on)
      await this.setState({
        flash: "fy",
        sound: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
      });
    if (id === "red" && start && on)
      await this.setState({
        flash: "fr",
        sound: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
      });
    if (id === "green" && start && on)
      await this.setState({
        flash: "fg",
        sound: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
      });
    const response = await this.refs.audio.play();
    const stopFlash = setTimeout(
      () => this.setState({ flash: "", sound: "" }),
      1000
    );
  }

  sequence() {
    let test = ["blue","green","red","yellow","blue","blue"];
    let count = 0;
    const loop = ()=>{
      if(count<test.length){
        process();
      }
    }
    
    const process = () =>{
      
      console.log(test[count]);
      count++;
      setTimeout(loop, 1000);
    }
    process()
  }

  render() {
    return (
      <div>
        {game(this.state, this.on, this.start, this.isStrict, this.flash)}
      </div>
    );
  }
}

ReactDOM.render(<Simon />, document.getElementById("app"));