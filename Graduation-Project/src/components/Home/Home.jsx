import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section className="hero position-relative overflow-hidden">
                <video className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover' }} autoPlay muted loop playsInline>
                    <source src="/Globe.mp4" type="video/mp4" />
                </video>
                <div className="position-absolute w-100 h-100 bg-dark opacity-50"></div>
                <section className=" text-center position-relative py-5 text-light">
                    <div className="container py-5">
                        <h1 className="fw-bold">Explore Countries</h1>
                        <p className="fs-5 mx-auto mb-4" style={{ maxWidth: '36rem' }}>
                            Browse flags, capitals, regions and populations from around the world.
                        </p>
                        <Link to="/countries" className="browse-btn">
                            Browse countries
                        </Link>
                    </div>
                </section>
            </section>
        </>
    )
}