import React from 'react'
import { Link } from 'react-router-dom'
export default function CountriesCards({country}) {
    return (
        <>
            <div className='col'>
                <div className="card text-center bg-info-subtle mt-3 mx-auto">
                    <img className="card-img-top" src={country.flags.svg} alt={country.name} style={{ height: '150px', objectFit: 'cover' }}/>
                    <div className="card-body">
                        <h5 className="card-title">{country.name}</h5>
                        <div className="d-flex justify-content-between">
                            <span className="card-text">{country.capital ?? '____'}</span>
                            <span className="card-text">{country.flag}</span>
                        </div>
                        <Link to={`/countries/${country.alpha2Code}`} className="btn btn-primary mt-2">Full Details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
