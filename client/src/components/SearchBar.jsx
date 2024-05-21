import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostAction } from '../redux/actions/modal'

const SearchBar = ({post}) => {
  const dispatch = useDispatch()
  const getPostFunc = () => {
    dispatch(getPostAction(post,true))
    dispatch({type: 'searchOpen' , payload :false})
  }
  
  return (
    <div className='relative z-20 bg-white w-33 border p-2 rounded-md shadow-sm mb-0'>
        <div className='cursor-pointer' onClick={getPostFunc}>{post.title}</div>
    </div>
  )
}

export default SearchBar