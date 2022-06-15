import _ from 'lodash'

const INIT_STATE = {
    characters:null,
    favorites_char:[],
};


export const favoritesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
      case "FETCH_CHARACTERS":
          return {
              ...state,
              characters:action.payload
          }
      case "ADD_FAVORITES":
          
    if (!state.favorites_char.map(item => item).includes(action.payload)) {
        return {
            ...state,
            favorites_char:[...state.favorites_char, action.payload],
        };
    }
    return state


    case "REMOVE_FAVORITES":
          const data = state.favorites_char.filter((el)=>el!== action.payload); 

          return {
              ...state,
              favorites_char:data
          }

      default:
          return state
  }
}
