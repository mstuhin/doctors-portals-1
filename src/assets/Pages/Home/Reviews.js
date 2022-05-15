import React from 'react';
import Review from './Review';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';


const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'jio',
            description: '',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'jio',
            description: '',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'jio',
            description: '',
            location: 'california',
            img: people3
        }
    ];


    return (
        <div className='mx-28 my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary font-bold text-xl'>Testimonial</h4>
                    <h1 className='font-bold text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div >

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;