import { useState } from "react";
import { useEffect } from "react";
import useAuth from '../../../Hooks/useAuth';
import BookCard from "../../../components/BookCard";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Swal from "sweetalert2";

const BookTrainer = () => {
    const [rating, setRating] = useState(0);
    const { user } = useAuth()
    const [book, setBook] = useState([])
    const [handleReview, setHandleReview] = useState(false)
    useEffect(() => {
        fetch(` http://localhost:5000/byUserEmail/${user?.email}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const review = e.target.review.value;
        const reviews = { review, rating }
        fetch(' http://localhost:5000/add-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Thanks for giving a review.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        setHandleReview(!handleReview)
        console.log(reviews);
    }

    console.log(book);
    return (
        <div>
            <h1 className="text-center font-bold text-3xl underline uppercase my-10">Booked Trainer Information</h1>
            {
                !handleReview && (
                    <div className="max-w-4xl grid grid-cols-2 mx-auto gap-5">
                        {
                            book?.map(b => <BookCard key={b._id} b={b} handleReview={handleReview} setHandleReview={setHandleReview}></BookCard>)
                        }
                    </div>
                )
            }
            {
                handleReview && (
                    <div className="w-[500px] bg-white rounded-xl p-5 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <label className="uppercase font-bold text-2xl text-center underline">Write Review</label>
                            <textarea placeholder="Write Review" rows={8} className="w-full bg-gray-200 my-5 rounded-xl outline-none text-xl p-5" name="review" id=""></textarea>
                            <input type="text" name="name" id="" />
                            <div className="flex justify-center items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    onChange={setRating}
                                />
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <input className="w-1/2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>

                )
            }

        </div>
    );
};

export default BookTrainer;