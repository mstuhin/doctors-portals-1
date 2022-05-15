import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: fluoride

        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: cavity

        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: whitening

        }
    ];

    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-primary font-bold uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div class="hero min-h-screen mx-12  ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />

                    <div className='mx-12'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, On Your Terms</h1>
                        <p class="py-6"> Its a long ster and ye Its a long ster and ye Its a long ster and ye Its a long ster and ye</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;