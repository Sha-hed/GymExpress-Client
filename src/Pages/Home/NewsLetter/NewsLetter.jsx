
import './NewsLetter.css'
const NewsLetter = () => {
    
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email =form.email.value;
        const user = {name,email};
        console.log(user)
    }

    return (
        <div className='news bg-fixed my-5'>
            <div className='p-10 mx-auto text-center flex flex-col space-y-4'>
                <h1 className='block underline font-bold text-3xl text-white'>Join With Us</h1>
                <form onSubmit={handleSubmit}>
                    <label className='mb-3 block font-bold text-3xl text-white'>Your Name</label>
                    <input className='p-3 w-1/2 bg-gray-400 rounded-xl' type="text" name="name" id="" />
                    <label className='my-3 block font-bold text-3xl text-white' htmlFor="">Your Email</label>
                    <input className='p-3 w-1/2 bg-gray-400 rounded-xl' type="email" name="email" id="" />
                    <input className='btn btn-success block mx-auto my-5' type="submit" value="Subscribe Now!" />
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;