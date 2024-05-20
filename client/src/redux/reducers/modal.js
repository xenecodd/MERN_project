

export const modalReducer = (state = {modal:false, updateId: null}, action) => {
        switch (action.type) {
          case 'modal':
            return {
              modal: action.payload}
          default:
            return state
        }}