import React from 'react'

export default function Contact() {
    return (
            <>
                <section className="hero position-relative overflow-hidden">
                        <video className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover' }} autoPlay muted loop playsInline>
                            <source src="/Globe2.mp4" type="video/mp4" />
                        </video>
                        <div className="position-absolute w-100 h-100 bg-dark opacity-50"></div>
                            <div className="container position-relative text-light my-5" style={{ maxWidth: '600px' }}>
                                <h1 className="fw-bold mb-3">Contact us</h1>
                                <p className="text">Have a question or an idea for Atlas? Send us a message.</p>

                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows="4" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send message</button>
                                </form>
                            </div>
                </section>
            </>
    )
}
