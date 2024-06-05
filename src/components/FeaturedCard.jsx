

const FeaturedCard = ({ item }) => {
    const { image, title, description } = item
    return (
        // <div>
        //     <div className="h-[400px] card rounded-none card-compact w-96 bg-base-100 shadow-xl">
        //         <figure><img src={image} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{title}</h2>
        //             <p>{description}</p>
        //         </div>
        //     </div>

        // </div>
        <div className="max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between space-y-8">
                <div className="space-y-2 my-3 px-3">
                    <p className="dark:text-gray-800 text-xl font-bold">{title}</p>
                    <p className="dark:text-gray-800 ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;