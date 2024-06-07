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
        const token = `Bearer ${localStorage.getItem('access-token')}`
        config.headers.authorization = token;
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
    );
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const a = error.response.status;
        if (a == 401 || a === 403) {
            logOut()
                .then(result => {
                    navigate('/login')
                    console.log('Logout hoise vai', result.user)
                })
        }
        return Promise.reject(error);
    });
    return axiosSecure;
};

export default useAxiosSecure;