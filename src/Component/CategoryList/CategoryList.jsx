import { useEffect } from "react";
import { useState } from "react";
import CategoryJob from "./CategoryJob/CategoryJob";

const CategoryList = () => {
    const [categoryJobs , setCategoryJobs]=useState([])

    useEffect( ()=>{
        fetch('/public/categories.json')
        .then(res => res.json())
        .then(data =>setCategoryJobs(data))
    } , [])
    return (
        <div className="mb-5">
            <div>
                <h1 className="text-3xl text-center font-bold  lg:m-5">Job Category List</h1>
            </div>
           <div className="lg:flex justify-between w-1/2  lg:w-2/3
            mx-auto drop-shadow-2xl">
            {
                categoryJobs.map(categoryJob => <CategoryJob key={categoryJob.id} categoryJob={categoryJob}></CategoryJob>)
            }
           </div>
        </div>
    );
};

export default CategoryList;