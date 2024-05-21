

export const modalReducer = (state = {modal:false, updateId: null}, action) => {
        switch (action.type) {
          case 'modal':
            return {
              modal: action.payload}
          default:
            return state
        }}
export const searchBarReducer = (state = {searchOpen:true}, action) => {
  switch (action.type) {
    case 'searchOpen':
      return {
        searchOpen: action.payload}
    default:
      return state
  }}