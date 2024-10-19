import { useEffect, useState } from "react";
import Job from "../Job/job";


const FeaturedJobs = () => {
    const [jobs , setJobs]=useState([])
    useEffect(() =>{
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
           <div>
                <h1 className="text-3xl text-center font-bold  lg:m-5">Featured Jobs</h1>
            </div>
           <div className="lg:w-1/2 mx-auto lg:grid grid-cols-2 ">
            {
                jobs.map(job =><Job key={job.id} job={job}></Job>)
            }
           </div>
        </div>
    );
};

export default FeaturedJobs;