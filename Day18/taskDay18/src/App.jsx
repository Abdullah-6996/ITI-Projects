import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const routes = createBrowserRouter([
      {path: `/`, element: <Layout />, children: [
        {index: true, element: <Home />},
        {path: `/about`, element: <About />},
        {path: `/contact`, element: <Contact />},
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
