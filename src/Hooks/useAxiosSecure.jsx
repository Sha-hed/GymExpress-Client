import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
        console.log('Request Intercept by interceptor');
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
    );
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        console.log('Response InterCeptor', error)
        return Promise.reject(error);
    });
    return axiosSecure;
};

export default useAxiosSecure;