import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Jobs from './Component/Jobs/Jobs';
import Blogs from './Component/Blogs/Blogs';
import JobDetails from './Component/Home/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics> ,
      },
      {
        path: "/jobs",
        element:<Jobs></Jobs> ,
        loader: () => fetch('../public/jobs.json')

      },
      {
        path: "/blogs",
        element:<Blogs></Blogs> ,
      },
      {
        path: "/job/:id",
        element:<JobDetails></JobDetails> ,
        loader: () => fetch('../public/jobs.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
