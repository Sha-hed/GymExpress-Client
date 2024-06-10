import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Balance = () => {
    const axiosSecure = useAxiosSecure();
    const { data: money = [] } = useQuery({
        queryKey: ['money'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/payment')
            return data;
        }
    })
    const totalMoney = money.reduce((sum, current) => {
        return sum = sum + current.price;
    }, 0)

    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl">Balance</h1>
            <h1 className="text-2xl font-semibold my-5">Total Balance: ${totalMoney}</h1>
            <h1 className="underline text-xl my-5">Recent Transaction: </h1>
            <table className="text-black w-full border border-collapse rounded sm:border-separate border-slate-200 text-center">
                <tbody>
                    <tr>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">#</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">TrainerName</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">UserName</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">SelectedClass</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Price</th>
                    </tr>
                    {
                        money?.slice(money?.length - 6, money?.length).map((m, id) => <tr key={m._id}>
                            <td>{id + 1}</td>
                            <td>{m?.trainerName}</td>
                            <td>{m?.userName}</td>
                            <td>{m?.selectedClass}</td>
                            <td>{m?.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <h1 className="underline text-xl my-5">NewsLetter Subscriber Vs Paid Member</h1>

        </div>
    );
};

export default Balance;