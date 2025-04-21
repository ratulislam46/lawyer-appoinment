import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import App from '../App';
import Home from '../Pages/Home/Home'
import Booking from '../Pages/Booking/Booking';
import Blogs from '../Pages/Blogs/Blogs'
import Contact from '../Pages/Contact/Contact';
import Error from '../Pages/Error/Error'
import ViewDetails from '../Pages/Lawyers/ViewDetails';
import ViewDError from '../Pages/Lawyers/viewDError';


export const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: <Error></Error>,
      children : [
        {
          index: true,
          Path: '/',
          loader: ()=> fetch('../data.json'),
          hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
          Component : Home 
        },
        {
          path:'/viewDetails/:id',
          loader: ()=> fetch('../data.json'),
          hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
          Component: ViewDetails,
          errorElement: <ViewDError></ViewDError>
        },
        {
          path: '/booking',
          Component: Booking
        },
        {
          path: '/blogs',
          loader: ()=> fetch('../blog.json'),
          hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
          Component: Blogs
        },
        {
          path: '/contact',
          Component: Contact
        }
      ]
    },
    {
      path: '/app',
      Component : App
    }
  ])