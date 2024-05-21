import React, { useState } from 'react'
import { CgCloseR } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction, getAllPostAction, updatePostAction } from './../redux/actions/modal';
const Modal = () => {

        const [postData, setPostData] = useState({ user: '', title: '', description: '' })

        const onchangeFunc = (e) => {
                setPostData({ ...postData, [e.target.name]: e.target.value })
        }
        const dispatch = useDispatch()
        const closeFunc = () => {
                dispatch({ type: 'modal', payload: {modal:false, updateId:null} })
        }
        const {modal} = useSelector((state)=>(state.modal))
        
        const createPostFunc = () => {
                if (modal?.updateId) {
                        console.log(modal.updateId)
                        dispatch(updatePostAction(modal.updateId, postData))
                        
                } else {
                        dispatch(createPostAction(postData)) 
                }
                closeFunc()
                setTimeout(() => {
                  dispatch(getAllPostAction());
                }, 200);
        }



        return (
                <div className=' w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center '>
                        <div className='bg-white w-1/3 p-2 rounded-md '>
                                <div className='flex items-center justify-between cursor-pointer' >
                                        <h1 className='font-bold text-2xl'>POST PAYLAŞ </h1>
                                        <CgCloseR onClick={closeFunc} size={25} />
                                </div>
                                <div className='my-4 flex flex-col space-y-3'>
                                        <input value={postData.user} name='user' onChange={onchangeFunc} className='input-style' type='text' placeholder='User' />
                                        <input value={postData.title} name='title' onChange={onchangeFunc} className='input-style' type='text' placeholder='Title' />
                                        <input value={postData.description} name='description' onChange={onchangeFunc} className='input-style' type='text' placeholder='Description' />
                                        <div className='flex justify-center w-full p-2 text-center bg-blue-200 cursor-pointer '>
                                                <button onClick={createPostFunc} >Paylas</button>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Modal