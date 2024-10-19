import logo from "../../../assets/logo/google.png";

const Job = ({ job }) => {
  const {
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
      <h1>{job_title}</h1>
      <h1>{company_name}</h1>
      <div className="flex">
        <p>{remote_or_onsite}</p>
        <p>{job_type}</p>
      </div>
      <div className="flex">
        <div>{location}</div>
        <div>{salary}</div>
      </div>
      <a
        href="#_"
        className="rounded relative inline-flex group items-center justify-center
         px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600
          active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500
           border-purple-700 text-white"
      >
        <span
          className="absolute w-0 h-0 transition-all duration-300 ease-out
         bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"
        ></span>
        <span className="relative">View Details</span>
      </a>
    </div>
  );
};

export default Job;
