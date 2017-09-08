import axios from 'axios';

export const RECEIVE_PUPPIES = "RECEIVE_PUPPIES";
export const SELECT_PUPPY = "SELECT_PUPPY";
export const DELETE_PUPPY = "DELETE_PUPPY";

export const deletePuppy = puppy => {
    return {
        type: DELETE_PUPPY,
    }
}


export const receivePuppies = function (puppies){
    return {
        type: RECEIVE_PUPPIES,
        receivedPuppies: puppies
    }
}

export const selectPuppy = puppy =>{
    return {
        type: SELECT_PUPPY,
        selectedPuppy: puppy
    }
}

export const fetchPuppies = () => dispatch =>{
    axios.get('/api/puppies')
    .then(res => res.data)
    .then(puppies =>{
        const action = receivePuppies(puppies)
        dispatch(action);
    })
    .catch(console.error)
}

export const fetchPuppy = (id) => dispatch => {
    axios.get(`/api/puppies/${id}`)
    .then(res => res.data)
    .then( puppy => {
        const action = selectPuppy(puppy);
        dispatch(action);
    })
}