import { useEffect, useState } from "react";
import FeaturedCard from "../../../components/FeaturedCard";


const Featured = () => {
    const [feature, setFeature] = useState([])
    useEffect(() => {
        fetch('/Featured.json')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    console.log(feature)
    return (
        <div className="my-5">
            <h1 className="font-bold text-3xl text-center my-5">Our Featured</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
                {
                    feature?.map(item => <FeaturedCard key={item.id} item={item}></FeaturedCard>)
                }
            </div>
        </div>

    );
};

export default Featured;