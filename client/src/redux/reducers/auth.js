


export const authReducer = (state = {auth : null, login:true}, action) => {
  switch (action.type) {
    case 'register':
        localStorage.setItem('auth', JSON.stringify(action.payload  ))
      return {  
        ...state,
        auth: action.payload,}
    case/* `localStorage.setItem('auth', JSON.stringify(action.payload))` is setting a key-value pair
    in the browser's localStorage. The key is 'auth' and the value is the JSON stringified
    version of the `action.payload` object. This is commonly used to store user authentication
    information or any other data that needs to persist across page reloads. */
     'login':
        localStorage.setItem('auth', JSON.stringify(action.payload))
      return {  
        ...state,
        auth: action.payload, }
    case 'logout':
        localStorage.removeItem('auth')
      return { 
        ...state, 
        auth: null }
    default:
      return state
  }
}

