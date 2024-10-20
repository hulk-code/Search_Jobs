import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobAplication } from '../Utility/Utility';
import AppliedJobs from './AppliedJobs/AppliedJobs';

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
         
         <div>
            {
                appliedJobs.map(appliedJob => <AppliedJobs key={appliedJob.id} appliedJob={appliedJob}></AppliedJobs>)
            }
         </div>
        </div>
    );
};

export default Jobs;