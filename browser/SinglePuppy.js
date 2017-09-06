import React, { Component } from 'react';
import { connect } from 'react-redux';
// import SinglePuppyContainer from './'
import { fetchPuppy } from './action-creators';
import store from './store'

class SinglePuppy extends Component {

  componentDidMount(){
    // this.props.loadPuppy()
    store.dispatch(fetchPuppy(this.props.match.params.id))
    
  }
  
  render () {
    console.log('AFDASDFA ',this.props.match.params.id)
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
//     loadPuppy: () =>{
//       dispatch(fetchPuppy(this.props.match.params.id))
//     }
//   }
// }


const SinglePuppyContainer = connect(mapStateToProps)(SinglePuppy);
export default SinglePuppyContainer;