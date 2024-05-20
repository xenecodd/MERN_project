import React from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deletePostAction, getAllPostAction } from '../redux/actions/modal';
import { updatePostAction } from './../redux/actions/modal';

const HomeCard = ({ post }) => {

  const dispatch = useDispatch();
  
  const updatePostFunc = ()=> {
    dispatch({type:'modal', payload: {modal:true, updateId:post._id}})
    setTimeout(() => {
      dispatch(getAllPostAction());
    }, 200);
  }

  const deletePostFunc = (id) => {
    dispatch(deletePostAction(id));
    setTimeout(() => {
      dispatch(getAllPostAction());
    }, 200);
  };

  return (
    <div className='relative border p-3 rounded-md shadow-sm mt-7 m-2 mb-0'>
      <div className='text-gray-700 text-base mb-1 font-bold'> 
        {post.title}
      </div>
      <div className='text-gray-700 text-base mb-5'>
        {post.description}
      </div>
      <div className='mt-auto text-gray-700 text-xs flex items-center justify-between'>
        <span> {post.user}</span>
        <span> {(post.date || post.posts.date).substring(0,10)}</span>
      </div>
      <div className='absolute -top-3 -right-3 flex items-center space-x-2'>
        <RiDeleteBin5Fill onClick={() => deletePostFunc(post._id)} className='size-7 text-red-600 cursor-pointer' />
        <FaRegEdit onClick={updatePostFunc} className='size-7 text--500 cursor-pointer' />
      </div>
    </div>
  );
};

export default HomeCard;
