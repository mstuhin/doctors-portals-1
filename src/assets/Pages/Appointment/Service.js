import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div class="card w-96 shadow-xl ">

            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">

                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-secondary text-white uppercase">BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;