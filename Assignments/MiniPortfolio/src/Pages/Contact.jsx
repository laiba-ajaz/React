import React from 'react';
import { useState } from 'react';

export default function Contact() {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name === "" || formData.email === "" || formData.message === "") {
            alert("Please fill all fields!");
        }
        else {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="bg-black text-white min-vh-100 d-flex align-items-center justify-content-center py-5">
            <div className="container" style={{ maxWidth: '520px' }}>
                <form onSubmit={handleSubmit} className="bg-dark p-4 p-md-5 rounded-3 border border-secondary shadow-lg" >
                    <h2 className="h3 fw-bold mb-4 text-center text-white">Contact Me</h2>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-white-50">Name</label>
                        <input type="text" className="form-control bg-black text-white border-secondary" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-white-50">Email</label>
                        <input type="email" className="form-control bg-black text-white border-secondary" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label text-white-50">Message</label>
                        <textarea className="form-control bg-black text-white border-secondary" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Enter your message" 
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-light w-100 fw-semibold mt-3"> Send Message</button>
                </form>
            </div>
        </div>
    );
}