

const BlogCard = ({ blog }) => {
    const { category, title, photoURL } = blog
    return (
        <div className="flex flex-col text-white cursor-pointer mx-auto">
            <div className="w-72">
                <img src={photoURL} alt="" />
            </div>
            <h1 className="mt-3 text-gray-200">{category}</h1>
            <h1 className="text-lg font-medium mt-1">{title}</h1>
        </div>
    );
};

export default BlogCard;