import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from '../../Hooks/useAxiosCommon';
import ForumCard from "../../components/ForumCard";
import { BsListNested } from "react-icons/bs";
import { useState } from "react";
const Community = () => {

    const axiosCommon = useAxiosCommon();
    const [cp, setCP] = useState(0);

    const { data: forums = [] } = useQuery({
        queryKey: ['forum', cp],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/get-forum?page=${cp}&skip=6`)
            return data;
        }
    })

    const { data: counts = 1 } = useQuery({
        queryKey: ['count'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/forumCount')
            return data.result
        }
    })

    const totalPage = Math.ceil(counts / 6);
    const pages = [...Array(totalPage).keys()];
    console.log(pages);

    const handlePrev = () => {
        if (cp > 0) {
            setCP(cp - 1)
        }
    }

    const handleNext = () => {
        if (cp < pages.length - 1) {
            setCP(cp + 1)
        }
    }

    return (
        <div className="min-h-screen">
            <h1 className="text-3xl font-bold uppercase underline text-center my-10">All Forums</h1>
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-5 my-10">
                {
                    forums?.map(forum => <ForumCard key={forum._id} forum={forum}></ForumCard>)
                }
            </div>
            <div className="text-center my-5">
                <button onClick={handlePrev} className="p-3 bg-gray-300 rounded-xl">Prev</button>
                {
                    pages?.map((page, id) => <button
                        onClick={() => setCP(page)}
                        className={`p-3 bg-gray-200 ml-5 rounded-xl
                            ${page === cp ? 'bg-red-400' : ''}
                            `}
                        key={id}>{page}</button>)
                }
                <button onClick={handleNext} className="p-3 bg-gray-300 ml-5 rounded-xl">Next</button>
            </div>
        </div>

    );
};

export default Community;