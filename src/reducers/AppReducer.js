const initialState = {
    test: 'test reducer',
    conta: 0
   }
   const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_CONT':
          return {...state, conta: state.conta  + 1};
        case 'DECREMENT_CONT':
          return {...state, conta: state.conta  - 1};
        default:
        return state;  
    }
 
   }
   export default AppReducer;