import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA(){
    
    return (
        <>

            <section className="container pb-5 my-4">
                <div className="p-5 rounded bg-dark border border-secondary text-center">
                    <h3 className="fw-bold mb-3 text-white">Let's Build Something Great Together</h3>
                    <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                        Have a web application idea or looking for a custom developer? Feel free to reach out.
                    </p>
                    <Link to="/Contact" className="btn btn-light px-4 py-2 fw-semibold">
                        Get In Touch 
                    </Link>
                </div>
            </section>
        </>
    )
}