

const FeaturedCard = ({item}) => {
    const {image, title, description} = item
    return (
        <div>
            <div className="h-[400px] card rounded-none card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default FeaturedCard;