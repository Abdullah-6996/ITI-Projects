import axios from 'axios'
import {useEffect, useState} from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import CountriesCards from '../CountriesCards/CountriesCards';

export default function Home() {

    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    const search = (searchParams.get('search') ?? '').trim().toLowerCase();
    const filtered = data.filter((country) => country.name?.toLowerCase().includes(search) || country.capital?.toLowerCase().includes(search));
    const navigate = useNavigate();

    useEffect(()=>{
        getCountries();
        navigate(`/countries?search=`);
    },[])

        async function getCountries() {
        try {
            let {data} = await axios.get(`https://countries.dev/countries`)
            setData(data)
            console.log(data);
            
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    return (
        <>
            <div className="countries-bg-color container-fluid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                    { filtered.length > 0 ? filtered.map( (country) => <CountriesCards key={country.alpha2Code} country={country} /> ) : `Data Not Found!`}
                </div>
            </div>
        </>
    )
}