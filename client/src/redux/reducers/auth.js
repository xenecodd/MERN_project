


export const authReducer = (state = { auth: null, login: true }, action) => {
  switch (action.type) {
    case 'register':
      localStorage.setItem('auth', JSON.stringify(action.payload))
      localStorage.setItem('refreshToken', JSON.stringify(action.payload.refreshToken))
      return {
        ...state,
        auth: action.payload,
      }
    case 'login':
      localStorage.setItem('auth', JSON.stringify(action.payload))
      localStorage.setItem('refreshToken', JSON.stringify(action.payload.refreshToken))
      return {
        ...state,
        auth: action.payload,
      }
    case 'logout':
      localStorage.removeItem('auth')
      return {
        ...state,
        auth: null
      }
    default:
      return state
  }
}

