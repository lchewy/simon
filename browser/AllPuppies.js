import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { fetchPuppies} from './action-creators';
import { Link } from 'react-router-dom';

class AllPuppies extends Component {

  componentDidMount(){
    this.props.loadAllPuppies()
  }
    render(){
      return (
        <div>
          <ul className="list-unstyled">
          {

            this.props.puppies.map(puppy => {
              return (
                <li key={puppy.id}><Link to={`/puppies/${puppy.id}`} >{puppy.name}</Link></li>
              )
            })

          }  

          </ul>
        </div>
      )
    }
  
}

const mapStateToProps = (state) =>{
  return {
    puppies: state.allPuppies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllPuppies: function(){
      dispatch(fetchPuppies())
    }
    
  }
}

const AllPuppiesContainer = connect(mapStateToProps, mapDispatchToProps)(AllPuppies); 

export default AllPuppiesContainer;