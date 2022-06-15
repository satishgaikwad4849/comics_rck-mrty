export const ADD_FAVORITES = (item) => {
  return {
      type: "ADD_FAVORITES",
      payload: item
  }
}

// remove iteams
export const REMOVE_FAVORITES = (id) => {
  return {
      type: "REMOVE_FAVORITES",
      payload: id
  }
}

// remove individual iteam

export const FETCH_CHARACTERS = (character) => {
  return {
      type: "FETCH_CHARACTERS",
      payload: character
  }
}
