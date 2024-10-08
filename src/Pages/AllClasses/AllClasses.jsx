import { useQuery } from "@tanstack/react-query";
import ClassCard from "../../components/ClassCard";
import Banner from '../../assets/images2/C4.jpg'
import useAxiosGeneral from "../../Hooks/useAxiosGeneral";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {

    // const [currentPage, setCurrentPage] = useState(0);
    const axiosGeneral = useAxiosGeneral()
    const { data: classes = [] } = useQuery({
        queryKey: ['count'],
        queryFn: async () => {
            const { data } = await axiosGeneral.get('/getClasses')
            return data;
        }
    })
    console.log(classes)
    // const itemPerPage = 6;
    // const totalPage = Math.ceil(totalClass / itemPerPage);
    // const pages = [...Array(totalPage).keys()];

    // const handlePrev = () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(currentPage - 1)
    //     }
    // }
    // const handleNext = () => {
    //     if (currentPage < pages.length - 1) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // }
    // console.log(typeof currentPage);

    // const { data: classes = [] } = useQuery({
    //     queryKey: ['class', currentPage],
    //     queryFn: async () => {
    //         const { data } = await axiosCommon.get(`/get-class?page=${currentPage}&size=${6}`)
    //         return data
    //     }
    // })

    return (
        <div className="min-h-screen text-white relative">
            <Helmet>
                <title>GymExpress | Classes</title>
            </Helmet>
            <div className="relative">
                <div className="w-full">
                    <img className="" src={Banner} alt="" />
                </div>
                <div className="absolute top-[100px] md:top-1/2 right-[10px] md:right-[100px]">
                    <h1 className="text-sm md:text-5xl font-bold">Explore Our Classes <br /> Find Your Perfect Fit!</h1>
                </div>
            </div>
            <h1 className="text-white text-center uppercase font-bold md:text-5xl my-10 underline">All Classes</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 pb-10">
                {
                    classes?.map(cc => <ClassCard key={cc?._id} cc={cc}></ClassCard>)
                }
            </div>

            {/* <h1 className="text-3xl font-bold uppercase underline text-center my-10">All Classes</h1>
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
            </div> */}
        </div>
    );
};

export default AllClasses;