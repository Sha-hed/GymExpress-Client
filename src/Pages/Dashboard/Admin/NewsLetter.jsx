import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const NewsLetter = () => {

    // const axiosSecure = useAxiosSecure();
    const { data } = useQuery({
        queryKey: ['subscriber'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/newsLetter')
            return data;
        }
    })


    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl">NewsLetter Subscriber</h1>
            <div className={`w-full overflow-x-auto my-10`}>
                <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200" cellspacing="0">
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">#</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Email</th>
                        </tr>
                        {
                            data?.map((train, idx) => <tr key={train._id}>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{idx + 1}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.name}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewsLetter;