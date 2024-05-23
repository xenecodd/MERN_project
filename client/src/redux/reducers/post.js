

export const postReducer = (state = { search: [], posts: [] }, action) => {
        switch (action.type) {
                case 'createPost':
                        return {

                                posts: [action.payload]
                        }
                case 'getPost':
                        if (action.payload.bool) {
                                return {
                                        ...state,
                                        posts: action.payload.data,
                                };
                        } else {
                                return {
                                        ...state,
                                        search: action.payload.data,
                                };
                        }
                case 'getAllPosts':
                        return {
                                posts: action.payload
                        }
                case 'delete':
                        return {
                                posts: [...state.posts?.posts?.filter((post) => post._id !== action.payload)]
                        }
                case 'update':
                        return {
                                posts: [...state.posts?.posts?.map(post => post._id === action.payload._id ? action.payload : post)]
                        }
                default:
                        return state
        }

}