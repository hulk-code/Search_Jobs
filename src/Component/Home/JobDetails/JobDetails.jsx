import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utility/Utility';
// "job_description": " A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.",
//       "job_responsibility": "Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.",
//       "educational_requirements": "Bachelor degree to complete any reputational university.",
//       "experiences": "2-3 Years in this field.",
//       "contact_information": {
//         "phone": "01750-00 00 00",
//         "email": "info@gmail.com",
//         "address": "Dhanmondi 32, Sukrabad Dhaka, Bangladesh"
//       }

const JobDetails = () => {
    const jobs=useLoaderData()
    const {id}=useParams()
    const idInt=parseInt(id)
    const job=jobs.find(job=> job.id === idInt)
    const {
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        contact_information


      } = job;

      const notify = () =>{
        saveJobApplication(idInt)
        toast("Successfully Applied");
      } 
    return (
        <div className='flex'>
        <div className='lg:w-2/3 p-10'>
            <p>{job_title}</p>
            <p>{company_name}</p>
            <p>{job_description}</p>
            <p>{job_responsibility}</p>
            <p>{educational_requirements}</p>
            <p>{experiences}</p>
            
        </div>
        <div className='border bg-slate-50 p-2 space-y-2 font-serif'>
            <h1>Job Details</h1>
            <hr />
            <p>{salary}</p>
            <p>{job_title}</p>
            <hr />
            <h1>Contact Information</h1>
            <p>{contact_information.phone}</p>
            <p>{contact_information.email}</p>
            <p>{contact_information.address}</p>
            <button  onClick={notify} className='border w-full p-3 text-xl font-bold bg-slate-500 hover:bg-red-400'>Apply Job</button>
        </div>
         <ToastContainer />
        </div>
    );
};

export default JobDetails;