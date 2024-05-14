import React, { useState } from 'react'
import { CgCloseR } from "react-icons/cg";
import { useDispatch } from 'react-redux';
const Modal = () => {

        const[data,setData] = useState({user:'', title:'', Description:''})

        const onchangeFunc = (e)=>{
                setData({...data, [e.target.name]:e.target.value })
                console.log(data)
        }
        const dispatch = useDispatch()
        const closeFunc = ()=>{
                dispatch({type:'modal', payload:false})
        }


  return (
        <div className=' w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center '>
                <div className='bg-white w-1/3 p-2 rounded-md '>
                        <div className='flex items-center justify-between cursor-pointer' >
                        <h1 className='font-bold text-2xl'>POST PAYLAŞ </h1>
                        <CgCloseR onClick={closeFunc} size={25} />
                        </div>
                        <div className='my-4 flex flex-col space-y-3'>
                                <input value={data.user} name='user' onChange={onchangeFunc} className='input-style' type='text' placeholder='User'/>
                                <input value={data.title} name='title' onChange={onchangeFunc} className='input-style' type='text' placeholder='Title'/>
                                <input value={data.description} name='description' onChange={onchangeFunc} className='input-style'type='text' placeholder='Description'/>
                        <div className='w-full p-2 text-center bg-blue-200 cursor-pointer '>
                                Paylaş
                        </div>
                        </div>
                </div>
        </div>
  )
}

export default Modal