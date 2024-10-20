import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobAplication } from "../Utility/Utility";
import AppliedJobs from "./AppliedJobs/AppliedJobs";

const Jobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobFilter=filter =>{
    if(filter =="all"){
        setDisplayJobs(appliedJobs)
    }
    else if (filter ==="remote"){
        const remoteJobs=appliedJobs.filter(job => job.remote_or_onsite ==="Remote")
        setDisplayJobs(remoteJobs)

    }
    else if (filter ==="onsite"){
        const onsiteJobs=appliedJobs.filter(job => job.remote_or_onsite ==="Onsite")
        setDisplayJobs(onsiteJobs)

    }

  }
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobAplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, []);
  return (
    <div>
      <div className="dropdown dropdown-hover flex justify-center">
  <div tabIndex={0} role="button" className="btn m-1">
    Job Filter
  </div>
  <ul
    tabIndex={0}
    className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
  >
    <li onClick={() => handleJobFilter("all")}>
      <a>ALL Jobs</a>
    </li>
    <li onClick={() => handleJobFilter("remote")}>
      <a>Remote</a>
    </li>
    <li>
      <a onClick={() => handleJobFilter("onsite")}>Onsite</a>
    </li>
  </ul>
</div>

      <div>
        {displayJobs.map((appliedJob) => (
          <AppliedJobs
            key={appliedJob.id}
            appliedJob={appliedJob}
          ></AppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
