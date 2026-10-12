import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-3 mt-0">
            <div className="container">
                <p className="mb-1">Atlas © 2026</p>
                <small>Data from countries.dev and GeoNames (CC BY 4.0)</small>
                <div className=' mt-3'>
                    <a href="https://www.facebook.com/abdullah.mohsen.363562" target='_blank'><img src="/facebook-logo.svg" alt="facebook-logo" width={50} /></a>
                    <a href="https://www.instagram.com/abdullah_mohse.n_0" target='_blank'><img src="/instagram-logo.svg" alt="instagram-logo" width={50} /></a>
                    <a href="https://www.linkedin.com/in/abdullah-mohsen-679b06388" target='_blank'><img src="/linkedin-logo.svg" alt="linkedin-logo" width={50} /></a>
                </div>
                
            </div>
        </footer>
    )
}
