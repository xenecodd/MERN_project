import React, { useState } from 'react'
import { CiLogout } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions/auth';
import { getAllPostAction, getPostAction } from '../redux/actions/modal';


const Navbar = () => {

  const [searchData, setSearchData] = useState({ user: '', title: '', description: '' })

  const onchangeFunc = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value })
  }

  const getPostFunc = ()=>{
    dispatch(getPostAction(searchData))
  }
  console.log(searchData)
  const dispatch = useDispatch()
  const logoutFunc = () => {
    dispatch(logoutAction())
  }
  const openModal = () => {
    dispatch({ type: 'modal', payload: {modal:true, updateId:null} })
  }

  const getAllPostfunc = () => {
    dispatch(getAllPostAction())
  }
  return (
    <div className='h-20 bg-blue-500 flex items-center justify-between px-5'>
      <div onClick={()=>{window.location ='/'}} className='cursor-pointer text-white font-bold text-2xl'>Post Paylas</div>
      <div className='flex items-center space-x-5'>
        <input onChange={onchangeFunc} type='text' name='title' value={searchData.title} placeholder='Ara' className='p-2 outline-none rounded-md' />
        <div onClick={getPostFunc} className='w-44 text-balance h-13 text-white border p-1 text-center cursor-pointer bg-blue-400 rounded-md hover:bg-lime-300 '
        >Ara</div>
        <div onClick={getAllPostfunc} className='w-44 text-balance h-13 text-white border p-1 text-center cursor-pointer bg-blue-400 rounded-md hover:bg-lime-300' 
        >Postlar</div>
        <div onClick={openModal} className='w-44 text-balance h-13 text-white border p-1 text-center cursor-pointer bg-blue-400 rounded-md hover:bg-lime-300'
        >Post Olustur</div>
        <CiLogout onClick={logoutFunc} size={55} className='h-8 text-white cursor-pointer text-center rounded-md' />
      </div>
    </div>



  )
}

export default Navbar