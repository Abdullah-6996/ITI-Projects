import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
import Pizza from './components/Pizza/Pizza'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import Parent from './components/Parent/Parent'
import Send from './components/Send/Send'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Register from './components/Register/Register'
import NotFound from './components/NotFound/NotFound'
import Cats from './components/Cats/Cats'
import Dogs from './components/Dogs/Dogs'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const routes = createBrowserRouter([
      {path: `/`, element: <Layout />, children: [
            {index: true, element: <Home />},
            {path: `/gallery`, element: <Gallery />, children: [
              {path: `cats`, element: <Cats />},
              {path: `dogs`, element: <Dogs />},
            ]},
            {path: `/pizza`, element: <Pizza />},
            {path: `/hero`, element: <Hero />},
            {path: `/parent`, element: <Parent />},
            {path: `/send`, element: <Send />},
            {path: `/about`, element: <About />},
            {path: `/contact`, element: <Contact />},
            {path: `/register`, element: <Register />},
            {path: `*`, element: <NotFound />},
      ]}
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
