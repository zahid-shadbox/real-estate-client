import axios from 'axios';
import dayjs from 'dayjs';
import {toast} from 'react-toastify';

export const api = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
})

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allresd",{
            timeout: 10 * 1000,
        })
        if (response.status === 400 || response.status === 500 ){
            throw response.data
        }
        return response.data;
    } catch (err) {
        toast.error(err.message)
        throw err;
        
    }
}