import {toast } from 'react-toastify';
import axios from 'axios'; // Don't forget to import axios

export const createPostAction = (postData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/createPost', postData);
        console.log('data2',data)
        dispatch({ type: 'createPost', payload: data});
    } catch (error) {
        toast.warning(error.response, {
            position: 'top-right',
        });
    }
};

export const getPostAction = (search) => async (dispatch) => {
    try {
        console.log('aranan post:', search)
        const { data } = await axios.post('http://localhost:5000/getPost', search);
        dispatch({ type: 'getPost', payload: data });
    } catch (error) {
        toast.warning(error.response.data.msg, {
            position: 'top-right',
        });
    }
};

export const getAllPostAction = () => async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:5000/getAllPosts');
            dispatch({ type: 'getAllPosts', payload: data });
        } catch (error) {
            toast.warning(error.response.data.msg, {
                position: 'top-right',
            });
        }
    };

export const deletePostAction = (id) => async (dispatch) => {
        try {
            console.log('deleted post:', id)
            await axios.delete(`http://localhost:5000/delete/${id}`);
            dispatch({ type: 'delete', payload: id });
            dispatch(getAllPostAction())
        } catch (error) {
            toast.warning(error.response, {
                position: 'top-right',
            });
        }
    };

export const updatePostAction = (id,post) => async (dispatch) => {
        try {
            
            const { data } = await axios.put(`http://localhost:5000/posts/${id}`, post);
            console.log('updated post:', data);
            dispatch({ type: 'update', payload: data });
        } catch (error) {
            toast.warning(error.response, {
                position: 'top-right',
            });
        }
    };