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
      sound: "",
      wrong: false,
    };
    this.on = this.on.bind(this);
    this.start = this.start.bind(this);
    this.startPattern = this.startPattern.bind(this);
    this.sequence = this.sequence.bind(this);
    this.isStrict = this.isStrict.bind(this);
    this.flash = this.flash.bind(this);
    this.clear = this.clear.bind(this);
    this.playerMove = this.playerMove.bind(this);
    this.checkMove = this.checkMove.bind(this);
  }

  on() {
    this.setState({ on: !this.state.on });
    if (this.state.on === false) {
      this.setState({
        start: false,
        strict: false,
        pattern: [],
        flash: "",
        sound: "",
        player: [],
        wrong: false,
        win: false,
      });
    }
  }

  clear(){
    this.setState({
        start: false,
        strict: false,
        pattern: [],
        flash: "",
        sound: "",
        player: [],
        wrong: false,
        win: false,
    })
  }

   async start() {
    if (this.state.on) {
      await this.setState({start: !this.state.start})
      console.log('start ', this.state.start)
      if(this.state.start) this.startPattern();
      else this.clear();
    }
    // else if(this.state.on && !this.state.start) this.clear();

  }

  isStrict() {
    const { on, start } = this.state;
    if (on && start) {
      this.setState({ strict: !this.state.strict });
    }
  }

  async flash(color) {

    const { start, on } = this.state;
    if (color === "blue" && start && on)
      await this.setState({
        flash: "fb",
        sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
      });
    if (color === "yellow" && start && on)
      await this.setState({
        flash: "fy",
        sound: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
      });
    if (color === "red" && start && on)
      await this.setState({
        flash: "fr",
        sound: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
      });
    if (color === "green" && start && on)
      await this.setState({
        flash: "fg",
        sound: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
      });
    const response = await this.refs.audio.play();
    const stopFlash = await setTimeout(
      () => this.setState({ flash: "", sound: "" }),
      400
    );
  }

  async sequence() {
    const self = this;
    let i = 0;
    let pattern = await setInterval(()=>{
        if(self.state.start){
          self.flash(self.state.pattern[i]);
          i++;
          if(i>=self.state.pattern.length){
            clearInterval(pattern);
          }
      }
    }, 1000)
    this.setState({player:[]});  
  }

  startPattern(){
    let color = randColor();
    this.setState({pattern:[...this.state.pattern, color]});
    // console.log(this.state.pattern)
    this.sequence();
  }

  async playerMove(evt){
    // console.log(evt.target.id)
    const move = evt.target.id;
    this.flash(move);
    await this.setState({player: [...this.state.player, move]});
    await this.checkMove(move);
    // console.log('player move', this.state.player)
    // console.log('pattern ', this.state.pattern)
  }

  checkMove(move){
    const {player, pattern, strict, wrong, win} = this.state;
    const self = this;
    if(player[player.length-1] !== pattern[player.length-1]){
      if(strict && !wrong){
        this.setState({wrong: true});
        let restart = setTimeout(()=>{self.clear()},1000)
      }else{
        this.sequence();
      }
    }else{
      if(pattern.length === player.length){
        if(pattern.length === 19){
          this.setState({win: true});
          let restart = setTimeout(()=>self.clear(), 1000);
        }else{
          this.startPattern();
          
        }
      }
    }
  }

  render() {
    return (
      <div>
        {game(this.state, this.on, this.start, this.isStrict, this.playerMove)}
      </div>
    );
  }
}

ReactDOM.render(<Simon />, document.getElementById("app"));