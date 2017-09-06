import React from 'react';
import { connect } from 'react-redux';
import { fetchPuppies} from './action-creators';
import { Link } from 'react-router-dom';

// class AllPuppies extends React.Component {
const AllPuppies = (props) =>{
  // componentDidMount(){
  //   this.props.loadAllPuppies()
  // }

  
      return (
        <div>
          <ul className="list-unstyled">
          {

            props.puppies.map(puppy => {
              return (
                <li key={puppy.id}><Link to={`/puppies/${puppy.id}`} >{puppy.name}</Link></li>
              )
            })

          }  

          </ul>
        </div>
      )
  
  
}

// const hardCodedData = [
//   { id: 1, name: 'Cody' },
//   { id: 2, name: 'Ben' },
//   { id: 3, name: 'Bubba' }
// ];

const mapStateToProps = (state) =>{
  return {
    puppies: state.allPuppies
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadAllPuppies: function(){
//       dispatch(fetchPuppies())
//     }
    
//   }
// }

// export default connect(mapStateToProps)(AllPuppies)

const AllPuppiesContainer = connect(mapStateToProps)(AllPuppies); 

export default AllPuppiesContainer;



// function(){
//       dispatch(receivePuppies(hardCodedData))
//     }


// export default class AllPuppies extends React.Component {

//   render () {
//     return (
//       <div>
//         <ul className="list-unstyled">
//           <li><a href="#">PUPPY NAME GOES HERE</a></li>
//           <li><a href="#">PUPPY NAME GOES HERE</a></li>
//           <li><a href="#">PUPPY NAME GOES HERE</a></li>
//         </ul>
//       </div>
//     )
//   }
// }

          // <li><a href="#">PUPPY NAME GOES HERE</a></li>
          // <li><a href="#">PUPPY NAME GOES HERE</a></li>