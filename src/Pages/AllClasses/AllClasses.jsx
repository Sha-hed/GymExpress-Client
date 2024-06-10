import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from '../../Hooks/useAxiosCommon';
import ClassCard from "../../components/ClassCard";
import { useState } from "react";

const AllClasses = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const axiosCommon = useAxiosCommon();
    const { data: totalClass = 0 } = useQuery({
        queryKey: ['count'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/dad')
            return data.result;
        }
    })
    const itemPerPage = 6;
    const totalPage = Math.ceil(totalClass / itemPerPage);
    const pages = [...Array(totalPage).keys()];

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    console.log(typeof currentPage);

    const { data: classes = [] } = useQuery({
        queryKey: ['class', currentPage],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/get-class?page=${currentPage}&size=${6}`)
            return data
        }
    })

    return (
        <>
            <h1 className="text-3xl font-bold uppercase underline text-center my-10">All Classes</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    classes?.map(cc => <ClassCard key={cc?._id} cc={cc}></ClassCard>)
                }
            </div>
            <div>
                <div className="text-center my-10">
                    <button onClick={handlePrev} className="mr-5 bg-gray-200 p-2 rounded">Prev</button>
                    {
                        pages?.map(page =>
                            <button onClick={() => setCurrentPage(page)}
                                className={`mr-10 p-3 border rounded-full ${page === currentPage ? 'bg-red-400' : ''}`} key={page}>
                                {page}</button>)
                    }
                    <button onClick={handleNext} className="bg-gray-200 p-2 rounded">Next</button>
                </div>
            </div>
        </>
    );
};

export default AllClasses;