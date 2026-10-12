import React from 'react'

export default function About() {
    return (
        <>
            <section className="hero position-relative overflow-hidden">
                <video className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover' }} autoPlay muted loop playsInline>
                    <source src="/Globe3.mp4" type="video/mp4" />
                </video>
                <div className="position-absolute w-100 h-100 bg-dark opacity-50"></div>
                <div className="container position-relative text-light my-5" style={{ maxWidth: '760px' }}>
                    <h1 className="fw-bold mb-3">About Atlas</h1>
                    <p className="fs-5">
                        Atlas is a simple website for exploring the countries of the world.
                    </p>

                    <h2 className="h4 mt-5">What you can do</h2>
                    <ul>
                        <li>Browse every country with its flag, capital, and region.</li>
                        <li>Search by country name or capital from the search bar at the top.</li>
                        <li>Open Full Details to see a country's flag, capital, region, and population.</li>
                    </ul>

                    <h2 className="h4 mt-5">Where the data comes from</h2>
                    <p>
                        Country information is provided by <a href="https://countries.dev" target="_blank" rel="noreferrer">countries.dev</a>,
                        a free country data API. Its geographic data comes
                        from <a href="https://www.geonames.org" target="_blank" rel="noreferrer">GeoNames</a>,
                        which is shared under the CC BY 4.0 license.
                    </p>

                    <h2 className="h4 mt-5">Built with</h2>
                    <p>React, React Router, Axios, and Bootstrap.</p>
                </div>
            </section>
            </>
    )
}
