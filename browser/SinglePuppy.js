import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPuppy } from './action-creators';
import store from './store'



class SinglePuppy extends Component {

  componentDidMount(){
    store.dispatch(fetchPuppy(this.props.match.params.id))
    
  }
  
  render () {
    const name = this.props.puppy.name
    const msg = new SpeechSynthesisUtterance(name);
    
    return (
      <div>
        <h2>{this.props.puppy.name}</h2>
         {window.speechSynthesis.speak(msg)}
        <div>
          <img src={this.props.puppy.image} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
    return {
        puppy: state.selectedPuppy
    }
}

const SinglePuppyContainer = connect(mapStateToProps)(SinglePuppy);
export default SinglePuppyContainer;