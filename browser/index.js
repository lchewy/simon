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

  async start() {
    if (this.state.on) {
      // const color = randColor();
      // this.setState({pattern: [...this.state.pattern, color]  })
      this.setState({ start: !this.state.start});
     await this.sequence();
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
    const stopFlash = await setTimeout(
      () => this.setState({ flash: "", sound: "" }),
      1000
    );
  }

  async sequence() {
    let test = ["blue","blue","blue", "blue", "green","red","yellow","blue","blue", "blue"];
    let count = 0;
// "green","red","yellow","blue","blue", "blue"
     const loop = () =>{ 
      if(count<test.length){
        process();  
      }
    }

    const reset = () =>{
      // console.log("wtf where are you??? ",this.state.flash)
      this.setState({flash:"", sound:""});
    }
    
     const process = () =>{

      this.setState({flash:""})
      console.log('in process', this.state.flash)
      if(test[count] === "blue"){
         this.setState({
          flash: "fb",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
        })
      }

      if(test[count] === "yellow"){
        this.setState({
          flash: "fy",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
        })
      }

      if(test[count] === "red"){
        this.setState({
          flash: "fr",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
        })
      }

      if(test[count] === "green"){
        this.setState({
          flash: "fg",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
        })
      }   
      this.refs.audio.play();
      count++;
      setTimeout(loop, 1000);
    }

    // await reset();
    // await process();
    await setTimeout(reset, 1000);

    await process();
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