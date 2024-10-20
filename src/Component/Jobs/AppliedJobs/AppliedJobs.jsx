import React from "react";

const AppliedJobs = ({ appliedJob }) => {
  const {
    job_title,
    logo,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = appliedJob;
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={logo}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{job_title}</h1>
            <p className="py-6">
              {job_description}
            </p>
            <p className="py-6">
              {remote_or_onsite}
            </p>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
