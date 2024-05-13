import {toast } from 'react-toastify';
import axios from 'axios'; // Don't forget to import axios

export const registerAction = (formData) => async (dispatch) => {
    try {
        console.log('register:', formData)
        const { data } = await axios.post('http://localhost:5000/register', formData);
        dispatch({ type: 'register', payload: data});
        window.location = '/auth';
    } catch (error) {
        toast.warning(error.response.data.msg, {
            position: 'top-right',
        });
    }
};

export const loginAction = (formData) => async (dispatch) => {
    try {
        console.log('login:', formData)
        const { data } = await axios.post('http://localhost:5000/login', formData);
        dispatch({ type: 'login', payload: data });
        window.location = '/';
    } catch (error) {
        toast.warning(error.response.data.msg, {
            position: 'top-right',
        });
    }
};