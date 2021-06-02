const initialState = {
    test: 'test reducer',
    conta: 0,
    image:'',
    isFetching: false,
    errorMessage: '',
    users: []
   }
   const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_CONT':
          return {...state, conta: state.conta  + 1};
        case 'DECREMENT_CONT':
          return {...state, conta: state.conta  - 1};
        case 'INCREMENT_BY_NUMBER':
          return {...state, conta: state.conta  + action.num};
        case 'SET_PICTURE':
          return {...state, image: action.image};
        case 'FETCHING_USERS_REQUEST':
          return {...state, isFetching: true};
        case 'FETCHING_USERS_FAILURE':
         return {...state, isFetching: false, errorMessage: action.payload  };
        case 'FETCHING_USERS_SUCCESS':
         return {...state, isFetching: false, users: action.payload };
        default:
        return state;  
    }
 
   }
   export default AppReducer;