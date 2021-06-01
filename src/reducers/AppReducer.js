const initialState = {
    test: 'test reducer',
    conta: 0,
    image:''
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
        default:
        return state;  
    }
 
   }
   export default AppReducer;