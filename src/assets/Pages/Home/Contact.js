import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className="hero min-h-screen ">
            <div class="w-[400px] ">
                <div class="text-center lg:text-left">
                    <h1 className="text-primary text-center">Contact Us</h1>
                    <p class=" text-xl font-bold text-center text-white my-3">Stay Connected With Us</p>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div className="form-control">

                            <input type="text" placeholder="email" class="input input-bordered " />
                        </div>

                        <div class="form-control">
                            <input type="text" placeholder="Subject" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <input type="text" placeholder="Your message" class="input input-bordered" />
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;