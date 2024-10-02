import axios from "axios";

const axiosPrivate = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosPrivate = () => {
    axiosPrivate.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        console.log('Error')
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosPrivate.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        console.log('Error')
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return axiosPrivate
};

export default useAxiosPrivate;