

export const modalReducer = (state = {modal:false, updateId: null}, action) => {
        switch (action.type) {
          case 'modal':
            return {
              updateId:action.payload.updateId,
              modal: action.payload.modal}
          default:
            return state
        }}