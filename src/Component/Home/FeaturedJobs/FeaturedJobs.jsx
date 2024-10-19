import { useEffect, useState } from "react";
import Job from "../Job/job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("/public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center font-bold  lg:m-5">
          Featured Jobs
        </h1>
      </div>
      <div className="lg:w-2/3 mx-auto lg:grid grid-cols-2 ">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      {/* <button
        className={jobs.length === dataLength && "hidden"}
        onClick={() => setDataLength(jobs.length)}
      >
        Show All
      </button> */}
      <a
  href="#_"
  className={`relative inline-block px-4 py-2 font-medium group m-5 ${jobs.length === dataLength && "hidden"}`}
  onClick={() => setDataLength(jobs.length)}
>
  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
  <span className="relative text-black group-hover:text-white">
    Button Text
  </span>
</a>

    </div>
  );
};

export default FeaturedJobs;
