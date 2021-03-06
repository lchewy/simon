import React from 'react';
import countDisplay from "./CountDisplay";

const game = (props, on, start, strict, player) => {
  return (
    <div className="container">
      <audio src={props.sound} type="audio/mpeg" ref="audio" />
      <div className="frame">
        <div
          id="blue"
          className={
            props.flash === "fb" && props.on && props.start ? props.flash : ""
          }
          onClick={player}
        />
        <div
          id="yellow"
          className={
            props.flash === "fy" && props.on && props.start ? props.flash : ""
          }
          onClick={player}
        />
        <div
          id="red"
          className={
            props.flash === "fr" && props.on && props.start ? props.flash : ""
          }
          onClick={player}
        />
        <div
          id="green"
          className={
            props.flash === "fg" && props.on && props.start ? props.flash : ""
          }
          onClick={player}
        />
        <div className="ns" />
        <div className="ew" />
        <div className="face">
          <div className="name">Simon</div>
          <div className="reg">&reg;</div>
          <div className="control">
            <div className="count">
              <p className="num">{props.win? "\xa0!\xa0!" : props.wrong ? "\xa0XX":countDisplay(props)}</p>
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

export default game;