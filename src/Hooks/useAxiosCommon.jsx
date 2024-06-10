import axios from "axios";


const axiosCommon = axios.create({
    baseURL: ' https://assignment-12-mu.vercel.app'
})

const useAxiosCommon = () => {
    return axiosCommon;
};

export default useAxiosCommon;