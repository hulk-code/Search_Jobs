import logo from "../../../assets/logo/google.png";
import location1 from "../../../assets/icons/Location.png";

import money from "../../../assets/icons/money.png";

const Job = ({ job }) => {
  const {
    id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border m-5 p-5">
      <img src={logo} alt="" />
      <h1 className="text-xl font-serif">{job_title}</h1>
      <h1 className="font-serif">{company_name}</h1>
      <div className="flex justify-around m-2">
        <p className="border py-1 px-3 font-serif shadow-sm">{remote_or_onsite}</p>
        <p className="border py-1 px-3 font-serif shadow-sm">{job_type}</p>
      </div>
      <div className="flex items-center justify-evenly font-serif m-2">
        <div className="flex"><img src={location1} alt="" /> {location}</div>
        <div className="flex"> <img src={money} alt="" /> {salary}</div>
      </div>
      <div className="text-center">
      <a
        href="#_"
        className="rounded relative inline-flex group items-center justify-center
         px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600
          active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500
           border-purple-700 text-white"
           onClick={`/job/${id}`}
      >
        <span
          className="absolute w-0 h-0 transition-all duration-300 ease-out
         bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"
        ></span>
        <span className="relative">View Details</span>
      </a>
      </div>
    </div>
  );
};

export default Job;
