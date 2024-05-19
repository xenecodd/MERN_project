


export const postReducer = (state = { posts: [] }, action)=>{
        switch (action.type){
          case 'createPost':
                return{
                        
                        posts:[...state.posts,action.payload]
                }
          case 'getPost':
                return{
                        ...state.posts,
                        posts:action.payload
                }
          case 'getAllPosts':
                return{ 
                        posts:action.payload
                }
          case 'delete':
                return{
                        posts:[state.posts.filter((post) =>post._id !== action.payload)]
                }
          case 'update': 
                return{
                        ...state.posts,
                        posts:action.payload
                }
        default:
                return state
        }

}