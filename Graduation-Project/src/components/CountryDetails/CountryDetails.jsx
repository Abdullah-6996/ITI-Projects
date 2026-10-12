import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CountryDetails() {

    const { code } = useParams();
    const [country, setCountry] = useState();

    useEffect(() => {
        getCountry();
    }, [])

    async function getCountry() {
        try {
            let {data} = await axios.get(`https://countries.dev/countries`)
            setCountry(data.find((country) => country.alpha2Code === code))
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    return (
        <>
        <section className="hero position-relative overflow-hidden">
                <video className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover' }} autoPlay muted loop playsInline>
                    <source src="/Globe.mp4" type="video/mp4" />
                </video>
                <div className="position-absolute w-100 h-100 bg-dark opacity-50"></div>
            {country ? (
                    <div className="position-relative rounded-1 w-50 container my-4 p-5 text-center text-light">
                        <img className="img-fluid rounded border mb-3" src={country.flags.svg} alt={country.name} style={{ maxHeight: '250px' }} />
                        <h1>{country.name}</h1>
                        <h5>Capital: {country.capital ?? '____'}</h5>
                        <h5>Region: {country.region}</h5>
                        <h5>Population: {country.population.toLocaleString()}</h5>
                        <h5>Time Zone: {country.timezones}</h5>
                    </div>
                ) : `Loading...`}
        </section>
        </>
    )
}
