import { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Countries from './components/Countries/Countries'
import CountryDetails from './components/CountryDetails/CountryDetails'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


export default function App() {
  const routes = createBrowserRouter([
    {path: `/`, element: <Layout />, children: [
        {index: true, element: <Home />},
        {path: `countries`, element: <Countries />},
        {path: `countries/:code`, element: <CountryDetails />},
        {path: `contact`, element: <Contact />},
        {path: `about`, element: <About />},
    ]}
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
