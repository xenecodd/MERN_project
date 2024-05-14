import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions/auth';
const Navbar = () => {
  const dispatch = useDispatch()
  const logoutFunc = () =>{
    dispatch(logoutAction(  ))
    console.log('logoutFunc')
  }
  const openModal = ()=>{
    dispatch({type:'modal', payload:true})
  }
  return (
<div className='h-20 bg-blue-500 flex items-center justify-between px-5'>
        <div className='text-white font-bold text-2xl cursor pointer'>Post Paylas</div>
        <div className='flex items-center space-x-5'>
                <input type='text' placeholder='Ara' className='p-2 outline-none rounded-md'/>
                <div onClick={openModal} className='w-44 text-balance h-13 text-white border p-1 text-center cursor-pointer bg-blue-400 rounded-md hover:bg-lime-300'>Post Olustur</div>
                <CiLogout onClick={logoutFunc} size={55} className='h-8 text-white cursor-pointer text-center rounded-md'/>
        </div>
</div>
    

  )
}

export default Navbar