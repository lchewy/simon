import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { fetchPuppies} from './action-creators';



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