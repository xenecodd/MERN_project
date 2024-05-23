import { toast } from 'react-toastify';
import axios from 'axios';

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
        const { data } = await axios.post('http://localhost:5000/createPost', postData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        console.log('data2', data);
        dispatch({ type: 'createPost', payload: data });
    } catch (error) {
        toast.warning(error.response?.data?.msg || 'An error occurred', {
            position: 'top-right',
        }); 
        window.location = '/auth'
    }
};

export const getPostAction = (search, bool) => async (dispatch) => {
    const token = getToken();
    try {
        const { data } = await axios.post('http://localhost:5000/getPost', search, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        console.log('aranan post:', data);
        dispatch({ type: 'getPost', payload: { data, bool } });
    } catch (error) {
        toast.warning(error.response?.data?.msg || 'An error occurred', {
            position: 'top-right',
        });
        window.location = '/auth'
    }
};

export const getAllPostAction = () => async (dispatch) => {
    const token = getToken();
    try {
        const { data } = await axios.get('http://localhost:5000/getAllPosts', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        dispatch({ type: 'getAllPosts', payload: data });
    } catch (error) {
        toast.warning(error.response?.data?.msg || 'An error occurred', {
            position: 'top-right',
        });
        window.location = '/auth'
    }
};

export const deletePostAction = (id) => async (dispatch) => {
    const token = getToken();
    try {
        console.log('deleted post:', id);
        await axios.delete(`http://localhost:5000/delete/${id}`, {
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
        window.location = '/auth'
    }
};

export const updatePostAction = (id, post) => async (dispatch) => {
    const token = getToken();
    try {
        const { data } = await axios.put(`http://localhost:5000/posts/${id}`, post, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        console.log('updated post:', data);
        dispatch({ type: 'update', payload: data });
    } catch (error) {
        toast.warning(error.response?.data?.msg || 'An error occurred', {
            position: 'top-right',
        });
        window.location = '/auth'
    }
};
