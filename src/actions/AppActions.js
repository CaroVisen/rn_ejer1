export const incrementCont = () => {
    return {
        type: 'INCREMENT_CONT'
    };
 }
 
 export const decrementCont = () => {
    return {
        type: 'DECREMENT_CONT'
    };
 }

 export const incrementByNumber = (number) => {
    return {
        type: 'INCREMENT_BY_NUMBER',
        num: number
    };
  
 }

 export const setPicture = (picture) => {
    return {
        type: 'SET_PICTURE',
        image: picture
    };
  
 }

 export const fetchingUsersRequest = () => {
    return {
        type: 'FETCHING_USERS_REQUEST'
    };
}

export const fetchingUsersSuccess = (json) => {
    return {
        type: 'FETCHING_USERS_SUCCESS',
        payload: json
    };
}
export const fetchingUsersFailure = (error) => {
    return {
        type: 'FETCHING_USERS_FAILURE',
        payload: error
    };
}
export const fetchUsers = () => {
  return async dispatch => {
    dispatch(fetchingUsersRequest());
    try {
        console.log("ejecuta llamada API");
        let response = await fetch("https://randomuser.me/api/?results=3");
        let json = await response.json();
        console.log(json);
        dispatch(fetchingUsersSuccess(json));
     } catch (error){
         dispatch(fetchingUsersFailure(error));
     }
  };
}