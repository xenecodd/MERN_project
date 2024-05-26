import { toast } from 'react-toastify';
import axios from 'axios';
import { axiosPrivate } from '../../axios/axiosInterceptors';

// localStorage'dan token alma işlemi
const getToken = () => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      return parsedAuthData.token;
    }
    return null;
  };
  
  export const createPostAction = (postData) => async (dispatch) => {
    const token = getToken();
    try {
      const { data } = await axiosPrivate.post('http://localhost:5000/createPost', postData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      dispatch({ type: 'createPost', payload: data });
    } catch (error) {
      toast.warning(error.response?.data?.msg || 'An error occurred', {
        position: 'top-right',
      });
      window.location = '/auth';
    }
  };
  
  export const getPostAction = (search, bool) => async (dispatch) => {
    try {
      const { data } = await axiosPrivate.post('http://localhost:5000/getPost', search);
      dispatch({ type: 'getPost', payload: { data, bool } });
    } catch (error) {
      toast.warning(error.response?.data?.msg || 'An error occurred', {
        position: 'top-right',
      });
    }
  };
  
  export const getAllPostAction = () => async (dispatch) => {
    
    try {
      const { data } = await axiosPrivate.get('http://localhost:5000/getAllPosts');
      console.log('dispatch yapılmadı')
      dispatch({ type: 'getAllPosts', payload: data });
    } catch (error) {
      console.log(error)
    }
  };
  
  export const deletePostAction = (id) => async (dispatch) => {
    const token = getToken();
    try {
      await axiosPrivate.delete(`http://localhost:5000/delete/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      dispatch({ type: 'delete', payload: id });
      dispatch(getAllPostAction());
    } catch (error) {
      toast.warning(error.response?.data?.msg || 'An error occurred', {
        position: 'top-right',
      });
      window.location = '/auth';
    }
  };
  
  export const updatePostAction = (id, post) => async (dispatch) => {
    const token = getToken();
    try {
      const { data } = await axiosPrivate.put(`http://localhost:5000/posts/${id}`, post, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      dispatch({ type: 'update', payload: data });
    } catch (error) {
      toast.warning(error.response?.data?.msg || 'An error occurred', {
        position: 'top-right',
      });
      window.location = '/auth';
    }
  };
