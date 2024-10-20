import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobAplication } from '../Utility/Utility';

const Jobs = () => {
    const [appliedJobs , setAppliedJobs]=useState([])
    const jobs=useLoaderData()
    useEffect(()  =>{
        const storedJobIds=getStoredJobAplication()
        if (jobs.length >0){
            const jobsApplied=[];
            for(const id of storedJobIds ){
                const job =jobs.find (job => job.id === id );
                if (job) {
                    jobsApplied.push(job)
                }
               
            }
            setAppliedJobs(jobsApplied)
           
        }
    }
    
    ,[])
    return (
        <div>
          <h1>{appliedJobs.length}</h1>
        </div>
    );
};

export default Jobs;