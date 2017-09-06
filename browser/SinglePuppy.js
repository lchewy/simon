import React, { Component } from 'react';
import { connect } from 'react-redux';


class SinglePuppy extends Component {
  
  render () {
    console.log('AFDASDFA ',this.props.puppy)
    return (
      <div>
        <h2>{this.props.puppy.name}</h2>
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

// const mapDispatchToProps = dispatch => {
//   return {

//   }
// }

const SinglePuppyContainer = connect(mapStateToProps)(SinglePuppy);
export default SinglePuppyContainer;