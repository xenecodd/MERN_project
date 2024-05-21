import React, { useState } from 'react'
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions/auth';
import { getAllPostAction, getPostAction } from '../redux/actions/modal';
import SearchBar from './SearchBar';


const Navbar = () => {

  const [searchData, setSearchData] = useState({ user: '', title: '', description: '' })

  const onchangeFunc = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value })
    getPostFunc()
  }
  
  const getPostFunc = () => {
    dispatch({type: 'searchOpen' , payload :true})
    dispatch(getPostAction(searchData))
  }
  const {searchOpen} = useSelector((state)=>state.searchOpen)
  console.log(searchData)
  const dispatch = useDispatch()
  const logoutFunc = () => {
    dispatch(logoutAction())
  }
  const openModal = () => {
    dispatch({ type: 'modal', payload: { modal: true, updateId: null } })
  }

  const getAllPostfunc = () => {
    dispatch(getAllPostAction())
  }
  
  const { search } = useSelector(state => state.posts);
  console.log('SEARCH', useSelector(state => state.posts))
  return (
    <div className="h-20 bg-blue-500 flex items-center justify-between px-5">
      <div onClick={() => { window.location = '/' }} className="cursor-pointer text-white font-bold text-2xl">
        Post Paylas
      </div>
      
      <div className="flex items-center space-x-5">
      <div className="relative">
        <input
          onChange={onchangeFunc}
          type="text"
          name="title"
          value={searchData.title}
          placeholder="Ara"
          className="p-2 outline-none rounded-md"
        />
        {
           searchOpen&&(
            <div className="absolute bg-white shadow-lg rounded-md w-auto">
              {search &&(search.posts || search).map((post, i) => (
                <SearchBar key={i} post={post} />
              ))}
            </div>
          )
        }
      </div>
        <div
          onClick={getPostFunc}
          className="w-44 text-balance h-13 text-white border p-1 text-center cursor-pointer bg-blue-400 rounded-md hover:bg-lime-300"
        >
          Ara
        </div>
        <div
          onClick={getAllPostfunc}
          className="w-44 text-balance h-13 text-white border p-1 text-center cursor-pointer bg-blue-400 rounded-md hover:bg-lime-300"
        >
          Postlar
        </div>
        <div
          onClick={openModal}
          className="w-44 text-balance h-13 text-white border p-1 text-center cursor-pointer bg-blue-400 rounded-md hover:bg-lime-300"
        >
          Post Olustur
        </div>
        <CiLogout
          onClick={logoutFunc}
          size={55}
          className="h-8 text-white cursor-pointer text-center rounded-md"
        />
      </div>
    </div>
  );
};


export default Navbar