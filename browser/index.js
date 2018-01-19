// const { Component } = React;
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

const countDisplay = props => {
  if (props.on) {
    if (props.start) {
      if (props.pattern.length < 10) {
        return "0" + props.pattern.length;
      } else {
        return props.pattern.length;
      }
    } else {
      return "\xa0-\xa0-";
    }
  } else {
    return "";
  }
};

const game = (props, on, start, strict, flash) => {
  return (
    <div className="container">
      <audio src={props.sound} type="audio/mpeg" ref="audio" />
      <div className="frame">
        <div
          id="blue"
          className={
            props.flash === "fb" && props.on && props.start ? props.flash : ""
          }
          onClick={flash}
        />
        <div
          id="yellow"
          className={
            props.flash === "fy" && props.on && props.start ? props.flash : ""
          }
          onClick={flash}
        />
        <div
          id="red"
          className={
            props.flash === "fr" && props.on && props.start ? props.flash : ""
          }
          onClick={flash}
        />
        <div
          id="green"
          className={
            props.flash === "fg" && props.on && props.start ? props.flash : ""
          }
          onClick={flash}
        />
        <div className="ns" />
        <div className="ew" />
        <div className="face">
          <div className="name">Simon</div>
          <div className="reg">&reg;</div>
          <div className="control">
            <div className="count">
              <p className="num">{countDisplay(props)}</p>
            </div>
            <p className="fline one">COUNT</p>
            <div className="start" onClick={start} />
            <p className="fline two">START</p>
            <div className="strict" onClick={strict} />
            <div
              className={
                props.on && props.start && props.strict
                  ? "strict-light"
                  : "strict-btn"
              }
            />
            <p className="fline three">STRICT</p>
          </div>
          <p className="four">OFF</p>
          <div className="power">
            <div className={props.on ? "switch-on" : "switch"} onClick={on} />
          </div>
          <p className="five">ON</p>
        </div>
      </div>
    </div>
  );
};

const randColor = () => {
  const color = ["blue", "yellow", "green", "red"];
  const rand = Math.floor(Math.random() * color.length);
  return color[rand];
};

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