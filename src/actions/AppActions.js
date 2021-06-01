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
